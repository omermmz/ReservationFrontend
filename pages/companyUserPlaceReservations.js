import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import SweetALert from "sweetalert";
import {
    deleteReservation,
    getMyReservations, getPlaceReservations,
    whoAmICoUserWithToken,
    whoAmIWithToken
} from "../components/authLoading/AuthLoading";
import {useRouter} from "next/router";
import CompanyUserPlaceReservationsStyle from "../styles/companyUserPlaceReservations.module.css";
import {UserButton} from "../components/userButton";
import UserNavBar from "../components/userNavBar";


export const getServerSideProps = async (context) => {
    const placeFieldIdTemp = context.query.placeFieldId;

    const {req, res} = context
    const user = await whoAmICoUserWithToken(req.headers.cookie)
    if (user == 'networkError') {
        return {
            redirect: {
                destination: '/girisYap',
                permanent: false,
            },
        };

    }
    const reservations = await getPlaceReservations(placeFieldIdTemp, req.headers.cookie)


    const token = req.headers.cookie
    const userName = user.userName
    const userSurname = user.userSurname

    return {
        props: {
            reservations,
            token,
            userName,
            userSurname
        }
    }

}

function PlaceReservations({reservations, token, userName, userSurname}) {

    const router = useRouter();


    /*     TODO: içerik butonu seçiminde blur özelliği içe sinmedi*/
    return <div className={CompanyUserPlaceReservationsStyle.body}>
        <UserNavBar navigator={"/companyUserHome"} userSurname={userSurname} userName={userName} token={token}/>

        <div className={CompanyUserPlaceReservationsStyle.giris}>
            <div className={CompanyUserPlaceReservationsStyle.ingiris}>
                <Image src={resim} className={CompanyUserPlaceReservationsStyle.imageStyle}/>
                <div className={CompanyUserPlaceReservationsStyle.blurWindowStyle} id={"containerDiv"}>
                    <div className={CompanyUserPlaceReservationsStyle.optionsDiv}>
                    </div>
                    <div className={CompanyUserPlaceReservationsStyle.tableDiv}>

                        <div className={CompanyUserPlaceReservationsStyle.tableStyle}>

                            {reservations.map(reservation =>
                                <div className={CompanyUserPlaceReservationsStyle.reservDiv}>
                                    <h7 className={CompanyUserPlaceReservationsStyle.paragStyle}>Halısaha Adı:</h7>
                                    <label
                                        className={CompanyUserPlaceReservationsStyle.infoStyle}>{reservation.placeName}</label>
                                    <h7 className={CompanyUserPlaceReservationsStyle.paragStyle}>Adres:</h7>
                                    <label
                                        className={CompanyUserPlaceReservationsStyle.infoStyle}>{reservation.placeAddress}</label>
                                    <h7 className={CompanyUserPlaceReservationsStyle.paragStyle}>Tarih:</h7>
                                    <label
                                        className={CompanyUserPlaceReservationsStyle.infoStyle}>{reservation.date.substring(8, 10) + "." + reservation.date.substring(5, 7) + "." + reservation.date.substring(0, 4)}</label>
                                    <h7 className={CompanyUserPlaceReservationsStyle.paragStyle}>Saat:</h7>
                                    <label
                                        className={CompanyUserPlaceReservationsStyle.infoStyle}>{reservation.time}</label>


                                </div>
                            )}


                        </div>


                    </div>


                </div>

            </div>


        </div>


    </div>

}


export default PlaceReservations