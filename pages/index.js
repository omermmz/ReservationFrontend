import Grr from '../styles/giris.module.css'
import resim from '../img/FT_08_06_2017_16_46_58__197.jpg'
import Image from "next/image";
import Link from "next/link";
import Second from "../pages/girisSecond"
import React from "react";
function HomePage() {


    return  <div className={Grr.body}>
            <div className={Grr.navpage}>
                <div className={Grr.navparag}>halisaham.com</div>
                <div className={Grr.navButton}>
                    <div className={Grr.navB}>Giriş Yap</div>
                    <div className={Grr.navB2}>Üye Ol</div>
                </div>
            </div>

        <Link href="#second" scroll={false}><div className={Grr.giris}>
                <div className={Grr.ingiris} >
                    <p className={Grr.parag}>Gollerini atmak için <br /> arenaya çıkmaya hazır mısın?</p>
                   <Image src={resim} className={Grr.imageStyle}/>
                </div>
            </div></Link>


        <div className={Grr.denemediv} id="second">
            <div className={Grr.secondButton}>
                <p className={Grr.secondPara}>Halısahalar</p>
            </div>
            <div className={Grr.secondButton}>
                <p className={Grr.secondPara}>Halısaha Ekle</p>
            </div>
            <div className={Grr.secondButton}>
                <p className={Grr.secondPara}>Rezervasyon Yap</p>
            </div>
            <div className={Grr.secondButton}>
                <p className={Grr.secondPara}>Şeçimine Göre Boş Saha Bul</p>
            </div>
        </div>

    </div>
}

export default HomePage