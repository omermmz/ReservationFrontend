import logGirisStyle from '../styles/logInGiris.module.css'
import resim from '../img/FT_08_06_2017_16_46_58__197.jpg'
import TopIcon from '../img/icon-256x256.png'
import Image from "next/image";
import Link from "next/link";
import React, {useRef} from "react";
import {getAllEmptyTime, logout, whoAmIWithToken} from "../components/authLoading/AuthLoading";
import {cookies} from "next/headers";
import {useRouter} from "next/router";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {SelectNavBar} from "../components/selectNavBar";
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


function ReservationUserHome(props) {

    const Router = useRouter();

    function scrollToTop() {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',

        })
        Router.push("/reservationUserHome", undefined, {scroll: false})

    }

    return <div className={logGirisStyle.body}>
        <div className={logGirisStyle.navpage}>
            <Link href={"/reservationUserHome"}>
                <div className={logGirisStyle.navparag}>halisaham.com</div>
            </Link>
            <UserButton userSurname={props.userSurname} userName={props.userName} token={props.token}/>
        </div>

        <Link href="#second" scroll={false}><div className={logGirisStyle.giris}>
            <div className={logGirisStyle.ingiris} >
                <p className={logGirisStyle.parag}>Gollerini atmak için <br /> arenaya çıkmaya hazır mısın?</p>
                <Image src={resim} className={logGirisStyle.imageStyle}/>
            </div>
        </div></Link>


        <div className={logGirisStyle.denemediv}>
            <div className={logGirisStyle.secondButton}>
                <Link href={"/reservationUserHalisahaListele"} style={{color: "black"}}>
                    <p className={logGirisStyle.secondPara}>Halısahalar</p>
                </Link>
            </div>
            <div className={logGirisStyle.secondButton}>
                <Link href={"/reservationUserMyReservation"} style={{color: "black"}}>
                    <p className={logGirisStyle.secondPara}>Rezervasyonlarım</p>
                </Link>
            </div>
            <div className={logGirisStyle.secondButton}>
                <Link href={"/reservationUserHalisahaListele"} style={{color: "black"}}>
                    <p className={logGirisStyle.secondPara}>Rezervasyon Yap</p>
                </Link>
            </div>
            <div className={logGirisStyle.secondButton}>
                <p className={logGirisStyle.secondPara}>Favoriler {props.token}</p>
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


export default ReservationUserHome