import React, {useState} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import UyeOlStyles from '../styles/uyeOl.module.css'
import Link from "next/link";


function UyeOl() {

    const [valueRadio, setValueRadio] = useState('');
    const [valueType, setValueType] = useState('');
    const show = () => {
        setValueRadio('True');
        setValueType("Company Employee");
        console.log(valueRadio);
    }
    const show2 = () => {
        setValueRadio('False');
        setValueType("Reservation User");
        console.log(valueRadio);
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
                            <label for={"html"} className={UyeOlStyles.coUserStyle}>Company User</label>
                            <input onClick={show} type={"radio"} value={"HTML"}
                                   id={"html"} name={"fav-language"}/>
                        </div>
                        <div className={UyeOlStyles.userChooseInputDiv}>
                            <label for={"html2"} className={UyeOlStyles.coUserStyle}>Reservation User</label>
                            <input onClick={show2} type={"radio"} value={"HTML"} id={"html2"}
                                   name={"fav-language"}/>
                        </div>
                        <div
                            className={`${(valueRadio === 'True') ? UyeOlStyles.companyNameVisible : UyeOlStyles.companyNameHidden}`}>
                            <h1 className={UyeOlStyles.companyName}>Şirket Adı:</h1>
                        </div>
                        <div
                            className={`${(valueRadio === 'True') ? UyeOlStyles.companyNameVisible : UyeOlStyles.companyNameHidden}`}>
                            <input type={"text"} className={UyeOlStyles.userNameInput} placeholder={"Company Name"}/>
                        </div>
                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Kullanıcı Adı:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"text"} className={UyeOlStyles.userNameInput} placeholder={"Username"}/>
                        </div>
                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Kullanıcı Soyadı:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"text"} className={UyeOlStyles.userNameInput} placeholder={"UserSurname"}/>
                        </div>

                        <div className={UyeOlStyles.buttonStyle}>
                            <div className={UyeOlStyles.btn1}>Üye Ol</div>
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
                            <input type={"date"} className={UyeOlStyles.userNameInput} placeholder={"Birthday"}/>
                        </div>

                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Telefon Numarası:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"tel"} pattern={"([0-9]{3})-[0-9]{3}-[0-9]{4}"}
                                   className={UyeOlStyles.userNameInput} placeholder={"Phone Number"}/>
                        </div>

                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>E-mail:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"text"} className={UyeOlStyles.userNameInput} placeholder={"Email"}/>
                        </div>

                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Şifre:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"password"} className={UyeOlStyles.userNameInput} placeholder={"Password"}/>
                        </div>

                        <div>
                            <h1 className={UyeOlStyles.passwordLabel}>Şifre(Tekrar):</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"password"} className={UyeOlStyles.userNameInput}
                                   placeholder={"Password(Again)"}/>
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


