import Grr from '../styles/giris.module.css'
import resim from '../img/FT_08_06_2017_16_46_58__197.jpg'
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import logGirisStyle from "../styles/logInGiris.module.css";
import TopIcon from "../img/icon-256x256.png";
import {getAllCity} from "../components/authLoading/AuthLoading";
import Head from "next/head";
import {useRouter} from "next/router";

function HomePage() {

    const Router = useRouter()

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',

        })
        Router.push("/", undefined, {scroll: false})

    }


    return <div className={Grr.body}>
        <div className={Grr.navpage}>
            <Link href={"/"} className={Grr.navparag}>
                halisaham.com
            </Link>
            <div className={Grr.navButton}>
                <Link href="/girisYap" className={Grr.girisButton}>
                    <div className={Grr.navB}>Giriş Yap</div>
                </Link>
                <Link href="/uyeOl" className={Grr.girisButton}>
                    <div className={Grr.navB2}>Üye Ol</div>
                </Link>
            </div>
        </div>
        <Link href="#second" scroll={false}>
            <div className={Grr.giris}>
                <div className={Grr.ingiris}>
                    <p className={Grr.parag}>Gollerini atmak için <br/> arenaya çıkmaya hazır mısın?</p>
                    <Image src={resim} className={Grr.imageStyle}/>
                </div>
            </div>
        </Link>


        <div className={Grr.denemediv} id="second">
            <Link href={"/halisahaListele"} className={Grr.secondButton}>
                <p className={Grr.secondPara}>Halısahalar</p>
            </Link>
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

        <div className={Grr.navEnd}>
            <p className={Grr.navEndPara}> © 2022 Formation, Inc. All rights reserved.</p>
            <div className={Grr.navEndButtons} onClick={scrollToTop}>
                <p className={Grr.navEndTop}>TOP</p>
                <Image src={TopIcon} className={Grr.iconStyle}></Image>
            </div>
        </div>

    </div>
}

export default HomePage