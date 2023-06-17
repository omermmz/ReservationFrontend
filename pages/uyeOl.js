import React, {useState} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import UyeOlStyles from '../styles/uyeOl.module.css'

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
            <div className={UyeOlStyles.navparag}>halisaham.com</div>
            <div className={UyeOlStyles.navButton}>
            </div>
        </div>

        <div className={UyeOlStyles.giris}>
            <div className={UyeOlStyles.ingiris}>
                <Image src={resim} className={UyeOlStyles.imageStyle}/>
                <div className={UyeOlStyles.divBlurWindow}>
                    <div className={UyeOlStyles.divLabels}>
                        <div className={UyeOlStyles.userChooseLabel}>
                            <h1>Kullanıcı Tipinizi Seçin:</h1>
                        </div>
                        <div className={UyeOlStyles.userChooseInputDiv}>
                            <label className={UyeOlStyles.coUserStyle}>Company User</label>
                            <input onClick={show} type={"radio"} className={UyeOlStyles.userNameInput} value={"HTML"}
                                   id={"html"} name={"fav-language"}/>
                        </div>
                        <div className={UyeOlStyles.userChooseInputDiv}>
                            <label className={UyeOlStyles.coUserStyle}>Reservation User</label>
                            <input type={"radio"} className={UyeOlStyles.userNameInput} value={"HTML"} id={"html"}
                                   name={"fav-language"}/>
                        </div>
                        <div className={UyeOlStyles.userNameLabel2}>
                            <h1>Şifre:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"password"} className={UyeOlStyles.userNameInput} placeholder={"Password"}/>
                        </div>
                        <div className={UyeOlStyles.buttonStyle}>
                            <div className={UyeOlStyles.btn1}>Giriş Yap</div>
                            <p className={UyeOlStyles.buttonPara}>Henüz üye olmadıysan</p>
                            <div className={UyeOlStyles.btn2}>Üye Ol</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}


export default UyeOl