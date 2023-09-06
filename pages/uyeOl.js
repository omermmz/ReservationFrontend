import React, {useState} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import UyeOlStyles from '../styles/uyeOl.module.css'
import Link from "next/link";
import SweetALert from "sweetalert";
import {addCompanyUser, addReservationUser} from "../components/authLoading/AuthLoading";
import {useRouter} from "next/router";


function UyeOl() {

    const Router = useRouter()

    const [valueRadio, setValueRadio] = useState('');
    const [valueType, setValueType] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordAgain, setPasswordAgain] = useState(null)


    const show = () => {
        setValueRadio('True');
        setValueType("Company Employee");
        // console.log(valueRadio);
    }
    const show2 = () => {
        setValueRadio('False');
        setValueType("Reservation User");
        // console.log(valueRadio);
    }

    const addCoUser = async () => {
        const resp = await addCompanyUser(companyName, userName, userSurname, birthDate, phoneNumber, email, password);

        if (resp === 'networkError') {
            console.log(resp.status)
            SweetALert({
                title: "Kullanıcı eklenemedi!",
                icon: "warning",
                dangerMode: true,
            })
        } else {
            SweetALert("Kullanıcı başarıyla eklendi.", {
                icon: "success",
            }).then((willDelete) => {
                if (willDelete) {
                    Router.push({pathname: "/girisYap"})
                }

            })
        }

    }

    const addResUser = async () => {
        const resp = await addReservationUser(userName, userSurname, birthDate, phoneNumber, email, password);

        if (resp === 'networkError') {
            console.log(resp.status)
            SweetALert({
                title: "Kullanıcı eklenemedi!",
                icon: "warning",
                dangerMode: true,
            })
        } else {
            SweetALert("Kullanıcı başarıyla eklendi.", {
                icon: "success",
            }).then((willDelete) => {
                if (willDelete) {
                    Router.push({pathname: "/girisYap"})
                }

            })

        }
    }

    const checkValueType = () => {
        SweetALert({
            title: "Lütfen Kullanıcı Tipi seçin",
            icon: "warning",
            dangerMode: true,
        })
    }

    const checkFillInput = () => {
        SweetALert({
            title: "Lütfen Bütün Boşlukları Doldurun",
            icon: "warning",
            dangerMode: true,
        })
    }

    return <div className={UyeOlStyles.body}>
        <div className={UyeOlStyles.navpage}>
            <Link href={"/"}>
                <div className={UyeOlStyles.navparag}>halisaham.com</div>
            </Link>
            <div className={UyeOlStyles.navButton}>
            </div>
        </div>

        <div className={UyeOlStyles.giris}>
            <div className={UyeOlStyles.ingiris}>
                <Image src={resim} className={UyeOlStyles.imageStyle}/>
                <div className={UyeOlStyles.divBlurWindow}>
                    <div className={UyeOlStyles.inDivLeft}>
                        <div className={UyeOlStyles.userChooseLabel}>
                            <h1>Kullanıcı Tipinizi Seçin:</h1>
                        </div>
                        <div className={UyeOlStyles.userChooseInputDiv}>
                            <label for={"html"} className={UyeOlStyles.coUserStyle}>Şirket Kullanıcısı</label>
                            <input onClick={show} type={"radio"} value={"HTML"}
                                   id={"html"} name={"fav-language"}/>
                        </div>
                        <div className={UyeOlStyles.userChooseInputDiv}>
                            <label for={"html2"} className={UyeOlStyles.coUserStyle}>Normal Kullanıcı</label>
                            <input onClick={show2} type={"radio"} value={"HTML"} id={"html2"}
                                   name={"fav-language"}/>
                        </div>
                        <div
                            className={`${(valueRadio === 'True') ? UyeOlStyles.companyNameVisible : UyeOlStyles.companyNameHidden}`}>
                            <h1 className={UyeOlStyles.companyName}>Şirket Adı:</h1>
                        </div>
                        <div
                            className={`${(valueRadio === 'True') ? UyeOlStyles.companyNameVisible : UyeOlStyles.companyNameHidden}`}>
                            <input type={"text"} className={UyeOlStyles.userNameInput} placeholder={"Company Name"}
                                   onChange={e => {
                                       setCompanyName(e.currentTarget.value)
                                   }}/>
                        </div>
                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Kullanıcı Adı:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"text"} className={UyeOlStyles.userNameInput} placeholder={"Username"}
                                   onChange={e => {
                                       setUserName(e.currentTarget.value)
                                   }}/>
                        </div>
                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Kullanıcı Soyadı:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"text"} className={UyeOlStyles.userNameInput} placeholder={"UserSurname"}
                                   onChange={e => {
                                       setUserSurname(e.currentTarget.value)
                                   }}/>
                        </div>

                        <div className={UyeOlStyles.buttonStyle}>
                            <div className={UyeOlStyles.btn1}
                                 onClick={(valueType === null) ? checkValueType : (valueType === "Reservation User") ? (userName !== null && userName !== '' && userSurname !== null && userSurname !== '' && birthDate !== null && birthDate !== '' && phoneNumber !== null && phoneNumber !== '' && email !== null && email !== '' && password !== null && password !== '' && passwordAgain !== null && passwordAgain !== '') ? addResUser : checkFillInput : (companyName !== null && companyName !== '' && userName !== null && userName !== '' && userSurname !== null && userSurname !== '' && birthDate !== null && birthDate !== '' && phoneNumber !== null && phoneNumber !== '' && email !== null && email !== '' && password !== null && password !== '' && passwordAgain !== null && passwordAgain !== '') ? addCoUser : checkFillInput}>Üye
                                Ol
                            </div>
                            <p className={UyeOlStyles.buttonPara}>Zaten Üyeliğin Varsa</p>
                            <Link href="/girisYap" className={UyeOlStyles.linkStyle}>
                                <div className={UyeOlStyles.btn2}>Giriş Yap</div>
                            </Link>
                        </div>
                    </div>

                    <div className={UyeOlStyles.inDivRight}>
                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Doğum Tarihi:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"date"} className={UyeOlStyles.userNameInput} placeholder={"Birthday"}
                                   onChange={e => {
                                       setBirthDate(e.currentTarget.value)
                                   }}/>
                        </div>

                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Telefon Numarası:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"tel"} pattern={"([0-9]{3})-[0-9]{3}-[0-9]{4}"}
                                   className={UyeOlStyles.userNameInput} placeholder={"Phone Number"} onChange={e => {
                                setPhoneNumber(e.currentTarget.value)
                            }}/>
                        </div>

                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>E-mail:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"text"} className={UyeOlStyles.userNameInput} placeholder={"Email"}
                                   onChange={e => {
                                       setEmail(e.currentTarget.value)
                                   }}/>
                        </div>

                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Şifre:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"password"} className={UyeOlStyles.userNameInput} placeholder={"Password"}
                                   onChange={e => {
                                       setPassword(e.currentTarget.value)
                                   }}/>
                        </div>

                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Şifre(Tekrar):</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"password"} className={UyeOlStyles.userNameInput}
                                   placeholder={"Password(Again)"} onChange={e => {
                                setPasswordAgain(e.currentTarget.value)
                            }}/>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    </div>
}


export default UyeOl


/*<div className={`${(valueRadio==='True')? "bg-gray-100 w-64 p-2 items-center mb-3":"hidden"}`}>
    <input type="text" value={valueCName} onChange={e => { setValueCName(e.currentTarget.value); }} name="companyName" placeholder="Company Name" className="bg-gray-100 outline-none text-sm flex-1"/>
</div>*/


