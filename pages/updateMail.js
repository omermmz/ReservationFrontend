import React, {useState} from "react";
import UserSettingsStyles from "../styles/userSettings.module.css"
import Link from "next/link";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import {getUserInfo, logout, updateMail} from "../components/authLoading/AuthLoading";
import {SelectNavBar} from "../components/selectNavBar";
import EditIcon from "../img/pngwing.com.png"
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
            userType: user.type,
            token: req.headers.cookie

        }
    }
}

function UpdateMail(props) {

    const [mail, setMail] = useState(null);

    const Router = useRouter()


    const guncelle = async () => {
        if (mail === null) {
            SweetALert("Lütfen tüm alanları doldurun!", {
                icon: "warning"
            })
            return;
        }
        const resp = await updateMail(props.token, mail);
        if (resp.status === 500 && resp.message === "email taken") {
            SweetALert("Email Alınmış, Uygun Değil!", {
                icon: "warning"
            })
            return;
        } else if (resp == null || (resp.status != null && resp.status != 200) || resp == 'networkError') {
            alert(resp.status);
            alert(resp.message)
            console.log(resp)
            alert("Başarısız");
        } else {
            SweetALert("E-Postanız Güncellendi!", {
                icon: "success",
            }).then(async () => {
                const resp = await logout(props.token);
                Router.push("/girisYap");
            });

        }
    }


    return <div className={UserSettingsStyles.body}>
        <div className={UserSettingsStyles.navpage}>
            <Link href={(props.userType === "Reservation User") ? "/reservationUserHome" : "/companyUserHome"}>
                <div className={UserSettingsStyles.navparag}>halisaham.com</div>
            </Link>
            <UserButton userSurname={props.userSurname} userName={props.userName}/>
        </div>

        <div className={UserSettingsStyles.giris}>
            <div className={UserSettingsStyles.ingiris}>
                <Image src={resim} className={UserSettingsStyles.imageStyle}/>
                <div className={UserSettingsStyles.blurWindowStyle} id={"containerDiv"}>
                    <div className={UserSettingsStyles.optionsDiv}>


                        <SelectNavBar userInfo={false} mail={true} password={false}/>

                        <div className={UserSettingsStyles.inputsDiv}>
                            <div className={UserSettingsStyles.inputDiv}>
                                <div className={UserSettingsStyles.labelStyleOpenEdit}>Yeni E-Mail:</div>
                                <input type={"text"} className={UserSettingsStyles.selectStyleOpenEdit}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setMail(e.currentTarget.value)
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className={UserSettingsStyles.guncelleButtonOpenEdit} onClick={guncelle}>E-Mail Güncelle</div>
                </div>
            </div>
        </div>
    </div>
}

export default UpdateMail