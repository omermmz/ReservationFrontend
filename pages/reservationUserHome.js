import logGirisStyle from '../styles/logInGiris.module.css'
import resim from '../img/FT_08_06_2017_16_46_58__197.jpg'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavEnd from "./navEnd";
function reservationUserHome() {


    return  <div className={logGirisStyle.body}>
        <div className={logGirisStyle.navpage}>
            <div className={logGirisStyle.navparag}>halisaham.com</div>
            <div className={logGirisStyle.navButton}>
                <div className={logGirisStyle.navP}>Hoşgeldiniz <br />Ömer MAMAZ</div>
                <div className={logGirisStyle.navIcon}>O</div>
            </div>
        </div>

        <Link href="#second" scroll={false}><div className={logGirisStyle.giris}>
            <div className={logGirisStyle.ingiris} >
                <p className={logGirisStyle.parag}>Gollerini atmak için <br /> arenaya çıkmaya hazır mısın?</p>
                <Image src={resim} className={logGirisStyle.imageStyle}/>
            </div>
        </div></Link>


        <div className={logGirisStyle.denemediv} id="second">
            <div className={logGirisStyle.secondButton}>
                <p className={logGirisStyle.secondPara}>Halısahalar</p>
            </div>
            <div className={logGirisStyle.secondButton}>
                <p className={logGirisStyle.secondPara}>Rezervasyonlarım</p>
            </div>
            <div className={logGirisStyle.secondButton}>
                <p className={logGirisStyle.secondPara}>Rezervasyon Yap</p>
            </div>
            <div className={logGirisStyle.secondButton}>
                <p className={logGirisStyle.secondPara}>Favoriler</p>
            </div>
        </div>
        <div className={logGirisStyle.navEnd}></div>
    </div>
}

export default reservationUserHome