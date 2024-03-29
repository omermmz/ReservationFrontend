import MyReservationStyles from "../styles/myReservation.module.css";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import SweetALert from "sweetalert";
import {deleteReservation, getMyReservations} from "../components/authLoading/AuthLoading";
import {useRouter} from "next/router";

function MyReservation({reservations}) {

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
    return <div className={MyReservationStyles.body}>
        <div className={MyReservationStyles.navpage}>
            <Link href={"/"}>
                <div className={MyReservationStyles.navparag}>halisaham.com</div>
            </Link>
            <div className={MyReservationStyles.navButton}>
            </div>
        </div>

        <div className={MyReservationStyles.giris}>
            <div className={MyReservationStyles.ingiris}>
                <Image src={resim} className={MyReservationStyles.imageStyle}/>
                <div className={MyReservationStyles.blurWindowStyle} id={"containerDiv"}>
                    <div className={MyReservationStyles.optionsDiv}>
                    </div>
                    <div className={MyReservationStyles.tableDiv}>

                        <div className={MyReservationStyles.tableStyle}>

                            {reservations.map(reservation =>
                                <div className={MyReservationStyles.reservDiv}>
                                    <h7 className={MyReservationStyles.paragStyle}>Halısaha Adı:</h7>
                                    <label className={MyReservationStyles.infoStyle}>{reservation.placeName}</label>
                                    <h7 className={MyReservationStyles.paragStyle}>Adres:</h7>
                                    <label className={MyReservationStyles.infoStyle}>{reservation.placeAddress}</label>
                                    <h7 className={MyReservationStyles.paragStyle}>Tarih:</h7>
                                    <label
                                        className={MyReservationStyles.infoStyle}>{reservation.date.substring(8, 10) + "." + reservation.date.substring(5, 7) + "." + reservation.date.substring(0, 4)}</label>
                                    <h7 className={MyReservationStyles.paragStyle}>Saat:</h7>
                                    <label className={MyReservationStyles.infoStyle}>{reservation.time}</label>
                                    <button className={MyReservationStyles.rezervButton} onClick={() => {
                                        rezervSil(reservation.date.substring(8, 10) + "." + reservation.date.substring(5, 7) + "." + reservation.date.substring(0, 4), reservation.time, reservation.id)
                                    }}>İptal Et
                                    </button>
                                    <Link href={{
                                        pathname: "/rezervGuncelle",
                                        query: {
                                            reservationId: reservation.id,
                                            reservationDate: reservation.date,
                                            reservationTime: reservation.time,
                                            placeName: reservation.placeName, //pass it to the page props
                                            placeId: reservation.placeId,
                                            reservationUserId: reservation.userId
                                        }
                                    }}
                                          className={MyReservationStyles.rezervLinkStyle}>
                                        <button className={MyReservationStyles.rezervButton2}>Rezervasyon Güncelle
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

export async function getStaticProps() {
    const reservations = await getMyReservations(2)

    return {
        props: {
            reservations,
        }
    }
}


export default MyReservation