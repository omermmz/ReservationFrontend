import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import SweetALert from "sweetalert";
import {deleteReservation, getMyReservations, whoAmIWithToken} from "../components/authLoading/AuthLoading";
import {useRouter} from "next/router";
import ReservationUserMyReservation from "../styles/reservationUserMyReservation.module.css";


export const getServerSideProps = async (context) => {
    const {req, res} = context
    const user = await whoAmIWithToken(req.headers.cookie)
    if (user == 'networkError') {
        return {
            redirect: {
                destination: '/girisYap',
                permanent: false,
            },
        };

    }
    const reservations = await getMyReservations(user.userId)

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

function MyReservation({reservations, token, userName, userSurname}) {

    const router = useRouter();

    const reservationDelete = async (reservationId) => {
        const resp = await deleteReservation(reservationId);
        if (resp == null || (resp.status != null && resp.status != 200) || resp == 'networkError') {
            return false;
        } else {
            return true;
        }
    }

    function rezervSil(date, time, reservationId) {
        SweetALert({
            title: "Rezervasyonu Silmeyi Onaylıyor Musunuz?",
            text: "Tarih: " + date + " " + "Saat: " + time,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete && reservationDelete(reservationId)) {
                    SweetALert("Rezervasyonunuz Silindi!", {
                        icon: "success",
                    });
                    router.reload(window.location.pathname);
                } else {
                    SweetALert("Herhangi Bir Rezervasyon İşlemi Yapılmadı!");
                }
            });
    }

    //   const [cityValue, setCityValue] = useState('');
    //   const [codeValue, setCodeValue] = useState('');
    //  const [cityData, setCityData] = useState([]);
    // const chooseData = Data.filter(city => city.name.includes(cityValue) || city.alpha_2_code.includes(codeValue));

    /* const reservations = [

         {
             "time": "01:00:00-02:00:00"
         },
         {
             "time": "04:00:00-05:00:00"
         },

         {
             "time": "09:00:00-10:00:00"
         },
         {
             "time": "11:00:00-12:00:00"
         },

         {
             "time": "12:00:00-13:00:00"
         },
         {
             "time": "13:00:00-14:00:00"
         },
         {
             "time": "14:00:00-15:00:00"
         },
         {
             "time": "15:00:00-16:00:00"
         },
         {
             "time": "16:00:00-17:00:00"
         },
         {
             "time": "17:00:00-18:00:00"
         },
         {
             "time": "18:00:00-19:00:00"
         },
         {
             "time": "19:00:00-20:00:00"
         },

     ]*/

    /*   var timeArray = [];

       reservations.map(res => {
           timeArray.push(res.time.substring(0, 2))

       });
       var timeEnd = reservations.map(res => {
           return res.time.substring(9, 11)
       });*/


    //  const changeTable = () => {
    //      console.log(chooseData);
    //      setCityData(reservations);
    //  }


    //  function scrollToTop() {
    //      var myDiv = document.getElementById('containerDiv');
    //      myDiv.scrollTo({top: 0})
    //  }

    //  const sehirListele = () => ;


    /*     TODO: içerik butonu seçiminde blur özelliği içe sinmedi*/
    return <div className={ReservationUserMyReservation.body}>
        <div className={ReservationUserMyReservation.navpage}>
            <Link href={"/reservationUserHome"}>
                <div className={ReservationUserMyReservation.navparag}>halisaham.com</div>
            </Link>
            <div className={ReservationUserMyReservation.navButton}>
                <div className={ReservationUserMyReservation.navP}>Hoşgeldiniz <br/>{userName} {userSurname}</div>
                <div className={ReservationUserMyReservation.navIcon}>{userName.toString().substring(0, 1)}</div>
            </div>
        </div>

        <div className={ReservationUserMyReservation.giris}>
            <div className={ReservationUserMyReservation.ingiris}>
                <Image src={resim} className={ReservationUserMyReservation.imageStyle}/>
                <div className={ReservationUserMyReservation.blurWindowStyle} id={"containerDiv"}>
                    <div className={ReservationUserMyReservation.optionsDiv}>
                    </div>
                    <div className={ReservationUserMyReservation.tableDiv}>

                        <div className={ReservationUserMyReservation.tableStyle}>

                            {reservations.map(reservation =>
                                <div className={ReservationUserMyReservation.reservDiv}>
                                    <h7 className={ReservationUserMyReservation.paragStyle}>Halısaha Adı:</h7>
                                    <label
                                        className={ReservationUserMyReservation.infoStyle}>{reservation.placeName}</label>
                                    <h7 className={ReservationUserMyReservation.paragStyle}>Adres:</h7>
                                    <label
                                        className={ReservationUserMyReservation.infoStyle}>{reservation.placeAddress}</label>
                                    <h7 className={ReservationUserMyReservation.paragStyle}>Tarih:</h7>
                                    <label
                                        className={ReservationUserMyReservation.infoStyle}>{reservation.date.substring(8, 10) + "." + reservation.date.substring(5, 7) + "." + reservation.date.substring(0, 4)}</label>
                                    <h7 className={ReservationUserMyReservation.paragStyle}>Saat:</h7>
                                    <label className={ReservationUserMyReservation.infoStyle}>{reservation.time}</label>
                                    <button className={ReservationUserMyReservation.rezervButton} onClick={() => {
                                        rezervSil(reservation.date.substring(8, 10) + "." + reservation.date.substring(5, 7) + "." + reservation.date.substring(0, 4), reservation.time, reservation.id)
                                    }}>İptal Et
                                    </button>
                                    <Link href={{
                                        pathname: "/reservationUserRezervGuncelle",
                                        query: {
                                            reservationId: reservation.id,
                                            reservationDate: reservation.date,
                                            reservationTime: reservation.time,
                                            placeName: reservation.placeName, //pass it to the page props
                                            placeId: reservation.placeId,
                                            reservationUserId: reservation.userId
                                        }
                                    }}
                                          className={ReservationUserMyReservation.rezervLinkStyle}>
                                        <button className={ReservationUserMyReservation.rezervButton2}>Rezervasyon
                                            Güncelle
                                        </button>
                                    </Link>


                                </div>
                            )}


                        </div>


                    </div>


                </div>

            </div>


        </div>


    </div>

}


export default MyReservation