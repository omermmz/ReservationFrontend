import React from "react";
import GirisYapCss from "../styles/girisYap.module.css"
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";

function UyeOl() {

    return <div className={GirisYapCss.body}>
        <div className={GirisYapCss.navpage}>
            <div className={GirisYapCss.navparag}>halisaham.com</div>
            <div className={GirisYapCss.navButton}>
            </div>
        </div>

        <div className={GirisYapCss.giris}>
            <div className={GirisYapCss.ingiris}>
                <Image src={resim} className={GirisYapCss.imageStyle}/>
                <div className={GirisYapCss.divLabels}>
                    <div className={GirisYapCss.userNameLabel}>
                        <h1>Kullanıcı Adı:</h1>
                    </div>
                    <div className={GirisYapCss.userNameInputDiv}>
                        <input type={"text"} className={GirisYapCss.userNameInput} placeholder={"User Name"}/>
                    </div>
                    <div className={GirisYapCss.userNameLabel2}>
                        <h1>Şifre:</h1>
                    </div>
                    <div className={GirisYapCss.userNameInputDiv2}>
                        <input type={"password"} className={GirisYapCss.userNameInput} placeholder={"Password"}/>
                    </div>
                    <div className={GirisYapCss.buttonStyle}>
                        <div className={GirisYapCss.btn1}>Giriş Yap</div>
                        <p className={GirisYapCss.buttonPara}>Henüz üye olmadıysan</p>
                        <div className={GirisYapCss.btn2}>Üye Ol</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}


export default UyeOl