import logGirisStyle from '../styles/logInGiris.module.css'
import resim from '../img/FT_08_06_2017_16_46_58__197.jpg'
import TopIcon from '../img/icon-256x256.png'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {whoAmIWithToken} from "../components/authLoading/AuthLoading";
import {UserButton} from "../components/userButton";

export const getServerSideProps = async ({req, res}) => {

    const user = await whoAmIWithToken(req.headers.cookie)

    return {
        props: {
            userName: user.userName,
            userSurname: user.userSurname,
            token: req.headers.cookie
        }
    }
}

function companyUserHome(props) {


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return <div className={logGirisStyle.body}>
        <div className={logGirisStyle.navpage}>
            <Link href={"/companyUserHome"}>
                <div className={logGirisStyle.navparag}>halisaham.com</div>
            </Link>
            <UserButton userSurname={props.userSurname} userName={props.userName} token={props.token}/>
        </div>

        <Link href="#second" scroll={false}>
            <div className={logGirisStyle.giris}>
                <div className={logGirisStyle.ingiris}>
                    <p className={logGirisStyle.parag}>Gollerini atmak için <br/> arenaya çıkmaya hazır mısın?</p>
                    <Image src={resim} className={logGirisStyle.imageStyle}/>
                </div>
            </div>
        </Link>


        <div className={logGirisStyle.denemediv} id="second">
            <div className={logGirisStyle.secondButton}>
                <Link href={"/companyUserHalisahaListele"} style={{color: "black"}}>
                    <p className={logGirisStyle.secondPara}>Halısahaları Gör</p>
                </Link>
            </div>
            <div className={logGirisStyle.secondButton}>
                <p className={logGirisStyle.secondPara}>Halısahalarım</p>
            </div>
            <div className={logGirisStyle.secondButton}>
                <Link href={"/halisahaEkle"} style={{color: "black"}}>
                    <p className={logGirisStyle.secondPara}>Halısaha Ekle</p>
                </Link>
            </div>
            <div className={logGirisStyle.secondButton}>
                <p className={logGirisStyle.secondPara}>Halısaha Düzenle</p>
            </div>
        </div>
        <div className={logGirisStyle.navEnd}>
            <p className={logGirisStyle.navEndPara}>TOP</p>
            <Image src={TopIcon} className={logGirisStyle.iconStyle} onClick={scrollToTop}></Image>
            <p> © 2022 Formation, Inc. All rights reserved.</p>
        </div>
    </div>
}

export default companyUserHome