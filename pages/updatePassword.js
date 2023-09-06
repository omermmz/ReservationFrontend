import React, {useState} from "react";
import UserSettingsStyles from "../styles/userSettings.module.css"
import Link from "next/link";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import {getUserInfo, logout, updatePassword} from "../components/authLoading/AuthLoading";
import {SelectNavBar} from "../components/selectNavBar";
import {UserButton} from "../components/userButton";
import SweetALert from "sweetalert";
import {useRouter} from "next/router";


export const getServerSideProps = async ({req, res}) => {

    const user = await getUserInfo(req.headers.cookie)

    return {
        props: {
            userName: user.name,
            userSurname: user.surname,
            birthdate: user.birthdate,
            phoneNumber: user.phoneNumber,
            token: req.headers.cookie

        }
    }
}

function UpdatePassword(props) {


    const [lastPass, setLastPass] = useState(null);
    const [newPass, setNewPass] = useState(null);
    const [newPassAgain, setNewPassAgain] = useState(null);
    const [isEqual, setIsEqual] = useState('');

    const Router = useRouter()
    const guncelle = async () => {
        if (lastPass === null || newPass === null || newPassAgain === null) {
            SweetALert("Lütfen tüm alanları doldurun!", {
                icon: "warning"
            })
            return;
        } else if (isEqual === false) {
            SweetALert("Şifreler Aynı Değil!", {
                icon: "warning"
            })
            return;
        }
        const resp = await updatePassword(props.token, lastPass, newPass);
        if (resp.status === 405) {
            SweetALert("Girdiğiniz Şifre Doğru Değil!", {
                icon: "warning"
            })
            return;
        } else if (resp == null || (resp.status != null && resp.status != 200) || resp == 'networkError') {
            alert(resp.status);
            console.log(resp)
            alert("Başarısız");
        } else {
            SweetALert("Şifreniz Güncellendi!", {
                icon: "success",
            }).then(async () => {
                const resp = await logout(props.token);
                Router.push("/girisYap");
            });

        }
    }


    return <div className={UserSettingsStyles.body}>
        <div className={UserSettingsStyles.navpage}>
            <Link href={"/"}>
                <div className={UserSettingsStyles.navparag}>halisaham.com</div>
            </Link>
            <UserButton userSurname={props.userSurname} userName={props.userName}/>
        </div>

        <div className={UserSettingsStyles.giris}>
            <div className={UserSettingsStyles.ingiris}>
                <Image src={resim} className={UserSettingsStyles.imageStyle}/>
                <div className={UserSettingsStyles.blurWindowStyle} id={"containerDiv"}>
                    <div className={UserSettingsStyles.optionsDiv}>


                        <SelectNavBar userInfo={false} mail={false} password={true}/>

                        <div className={UserSettingsStyles.inputsDiv}>

                            <div className={UserSettingsStyles.inputDiv}>
                                <div className={UserSettingsStyles.labelStyleOpenEdit}>Eski Şifre:</div>
                                <input type={"password"} className={UserSettingsStyles.selectStyleOpenEdit}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setLastPass(e.currentTarget.value)
                                }}/>
                            </div>
                            <div className={UserSettingsStyles.inputDiv}>
                                <div className={UserSettingsStyles.labelStyleOpenEdit}>Yeni Şifre:</div>
                                <input type={"password"} className={UserSettingsStyles.selectStyleOpenEdit}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setNewPass(e.currentTarget.value)
                                }}/>
                            </div>
                            <div className={UserSettingsStyles.inputDiv}>
                                <div className={UserSettingsStyles.labelStyleOpenEdit}>Yeni Şifre (Tekrar):</div>
                                <input type={"password"} className={UserSettingsStyles.selectStyleOpenEdit}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setNewPassAgain(e.currentTarget.value);
                                    (newPass === e.currentTarget.value) ? setIsEqual(true) : setIsEqual(false);
                                }}/>
                            </div>
                            <div style={(isEqual === false) ? {
                                color: "red",
                                fontSize: "20px",
                                paddingLeft: "50%"
                            } : {visibility: "hidden"}}>Şifreler Aynı Değil!
                            </div>
                        </div>
                    </div>
                    <div className={UserSettingsStyles.guncelleButtonOpenEdit} onClick={guncelle}>Şifreyi Güncelle</div>
                </div>
            </div>
        </div>
    </div>
}

export default UpdatePassword