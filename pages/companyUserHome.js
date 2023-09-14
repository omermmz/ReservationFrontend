import logGirisStyle from '../styles/logInGiris.module.css'
import resim from '../img/FT_08_06_2017_16_46_58__197.jpg'
import TopIcon from '../img/icon-256x256.png'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {whoAmICoUserWithToken} from "../components/authLoading/AuthLoading";
import {UserButton} from "../components/userButton";
import Grr from "../styles/giris.module.css";
import {useRouter} from "next/router";

export const getServerSideProps = async ({req, res}) => {

    const user = await whoAmICoUserWithToken(req.headers.cookie)

    return {
        props: {
            userName: user.userName,
            userSurname: user.userSurname,
            token: req.headers.cookie
        }
    }
}

function companyUserHome(props) {

    const Router = useRouter()

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',

        })
        Router.push("/companyUserHome", undefined, {scroll: false})
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


        <div className={logGirisStyle.denemediv}>
            <div className={logGirisStyle.secondButton}>
                <Link href={"/companyUserHalisahaListele"} style={{color: "black"}}>
                    <p className={logGirisStyle.secondPara}>Halısahaları Gör</p>
                </Link>
            </div>
            <div className={logGirisStyle.secondButton}>
                <Link href={"/companyUserMyPlaces"} style={{color: "black"}}>
                    <p className={logGirisStyle.secondPara}>Halısahalarım</p>
                </Link>
            </div>
            <div className={logGirisStyle.secondButton}>
                <Link href={"/halisahaEkle"} style={{color: "black"}}>
                    <p className={logGirisStyle.secondPara}>Halısaha Ekle</p>
                </Link>
            </div>
            <div className={logGirisStyle.secondButton}>
                <Link href={"/companyUserMyPlaces"} style={{color: "black"}}>
                    <p className={logGirisStyle.secondPara}>Halısaha Düzenle</p>
                </Link>
            </div>
        </div>
        <div className={logGirisStyle.navEnd} id="second">
            <p className={logGirisStyle.navEndPara}> © 2022 Formation, Inc. All rights reserved.</p>
            <div className={logGirisStyle.navEndButtons} onClick={scrollToTop}>
                <p className={logGirisStyle.navEndTop}>TOP</p>
                <Image src={TopIcon} className={logGirisStyle.iconStyle}></Image>
            </div>
        </div>
    </div>
}

export default companyUserHome