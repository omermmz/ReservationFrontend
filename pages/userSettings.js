import React, {useState} from "react";
import UserSettingsStyles from "../styles/userSettings.module.css"
import Link from "next/link";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import {getUserInfo, updateUserInfo} from "../components/authLoading/AuthLoading";
import {SelectNavBar} from "../components/selectNavBar";
import EditIcon from "../img/pngwing.com.png"
import {UserButton} from "../components/userButton";
import SweetALert from "sweetalert";
import {useRouter} from "next/router";


export const getServerSideProps = async ({req, res}) => {
    var isCompanyUser = false;
    const user = await getUserInfo(req.headers.cookie)

    if (user.companyName !== null) {
        isCompanyUser = true;
    }

    return {
        props: {
            userName: user.name,
            userSurname: user.surname,
            birthdate: user.birthdate,
            phoneNumber: user.phoneNumber,
            userType: user.type,
            isCompanyUser: isCompanyUser,
            companyName: user.companyName,
            token: req.headers.cookie

        }
    }
}

function UserSettings(props) {

    const [edit, setEdit] = useState(false);

    const [name, setName] = useState(props.userName);
    const [surname, setSurname] = useState(props.userSurname);
    const [date, setDate] = useState(props.birthdate);
    const [phone, setPhone] = useState(props.phoneNumber);
    const [companyName, setCompanyName] = useState(props.companyName);

    const Router = useRouter();

    const guncelle = async () => {
        const resp = await updateUserInfo(props.token, companyName, name, surname, date, phone);
        if (resp == null || (resp.status != null && resp.status != 200) || resp == 'networkError') {
            alert(resp.status);
            console.log(resp)
            alert("Başarısız");
        } else {
            SweetALert("Bilgileriniz Güncellendi!", {
                icon: "success",
            }).then(() => {
                Router.reload(window.location.pathname);
            });

        }
    }

    const a = () => {
        console.log(name)
        console.log(surname)
        console.log(date)
        console.log(phone)
        console.log(companyName)
    }


    return <div className={UserSettingsStyles.body}>
        <div className={UserSettingsStyles.navpage}>
            <Link href={(props.userType === "Reservation User") ? "/reservationUserHome" : "/companyUserHome"}>
                <div className={UserSettingsStyles.navparag}>halisaham.com</div>
            </Link>
            <UserButton userSurname={props.userSurname} userName={props.userName} token={props.token}/>
        </div>

        <div className={UserSettingsStyles.giris}>
            <div className={UserSettingsStyles.ingiris}>
                <Image src={resim} className={UserSettingsStyles.imageStyle}/>
                <div className={UserSettingsStyles.blurWindowStyle} id={"containerDiv"}>
                    <div className={UserSettingsStyles.optionsDiv}>


                        <SelectNavBar userInfo={true} password={false} mail={false}/>

                        <div className={UserSettingsStyles.inputsDiv}>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <h7 style={{color: 'crimson', fontWeight: 'bolder', fontSize: '30px'}}>Kullanıcı
                                    Bilgileri:
                                </h7>
                                <Image src={EditIcon} className={UserSettingsStyles.iconStyle} onClick={() => {
                                    if (edit === false) {
                                        setEdit(true);
                                    } else {
                                        setEdit(false);
                                    }
                                }}/>
                            </div>
                            <div
                                className={(props.isCompanyUser === true) ? UserSettingsStyles.inputDivCompanyName : UserSettingsStyles.visibleStyle}>
                                <div
                                    className={(edit === false) ? UserSettingsStyles.labelStyle : UserSettingsStyles.labelStyleOpenEdit}>Kurum
                                    Adı:
                                </div>
                                <input defaultValue={props.companyName} type={"text"}
                                       disabled={(edit === true) ? false : true}
                                       className={(edit === false) ? UserSettingsStyles.selectStyle : UserSettingsStyles.selectStyleOpenEdit}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setCompanyName(e.currentTarget.value)
                                }}/>
                            </div>
                            <div className={UserSettingsStyles.inputDiv}>
                                <div
                                    className={(edit === false) ? UserSettingsStyles.labelStyle : UserSettingsStyles.labelStyleOpenEdit}>Ad:
                                </div>
                                <input defaultValue={props.userName} disabled={(edit === true) ? false : true}
                                       type={"text"}
                                       className={(edit === false) ? UserSettingsStyles.selectStyle : UserSettingsStyles.selectStyleOpenEdit}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setName(e.currentTarget.value)
                                }}/>
                            </div>

                            <div className={UserSettingsStyles.inputDiv}>
                                <div
                                    className={(edit === false) ? UserSettingsStyles.labelStyle : UserSettingsStyles.labelStyleOpenEdit}>Soyad:
                                </div>
                                <input defaultValue={props.userSurname} disabled={(edit === true) ? false : true}
                                       className={(edit === false) ? UserSettingsStyles.selectStyle : UserSettingsStyles.selectStyleOpenEdit}
                                       type={"text"}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setSurname(e.currentTarget.value)
                                }}/>
                            </div>

                            <div className={UserSettingsStyles.inputDiv}>
                                <div
                                    className={(edit === false) ? UserSettingsStyles.labelStyle : UserSettingsStyles.labelStyleOpenEdit}>Doğum
                                    Tarihi:
                                </div>
                                <input defaultValue={props.birthdate} disabled={(edit === true) ? false : true}
                                       className={(edit === false) ? UserSettingsStyles.selectStyle : UserSettingsStyles.selectStyleOpenEdit}
                                       type={"date"} onChange={e => {
                                    setDate(e.currentTarget.value)
                                }}
                                       placeholder={"Giriniz:"}/>
                            </div>

                            <div className={UserSettingsStyles.inputDiv}>
                                <div
                                    className={(edit === false) ? UserSettingsStyles.labelStyle : UserSettingsStyles.labelStyleOpenEdit}>Telefon
                                    Numarası:
                                </div>
                                <input defaultValue={props.phoneNumber} disabled={(edit === true) ? false : true}
                                       className={(edit === false) ? UserSettingsStyles.selectStyle : UserSettingsStyles.selectStyleOpenEdit}
                                       type={"text"} onChange={e => {
                                    setPhone(e.currentTarget.value)
                                }}
                                       placeholder={"Giriniz:"}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={(edit === false) ? UserSettingsStyles.guncelleButton : UserSettingsStyles.guncelleButtonOpenEdit}
                        onClick={(edit === true) ? guncelle : a}>Bilgileri Güncelle
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default UserSettings