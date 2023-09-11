import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import SweetALert from "sweetalert";
import {
    deleteReservation, getAllCompanyPlace,
    getMyReservations,
    whoAmICoUserWithToken,
    whoAmIWithToken
} from "../components/authLoading/AuthLoading";
import {useRouter} from "next/router";
import CompanyUserMyPlaceStyle from "../styles/companyUSerMyPlaces.module.css";
import {UserButton} from "../components/userButton";


export const getServerSideProps = async (context) => {
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

    const places = await getAllCompanyPlace(user.companyId, req.headers.cookie)


    const token = req.headers.cookie
    const userName = user.userName
    const userSurname = user.userSurname


    return {
        props: {
            places,
            token,
            userName,
            userSurname

        }
    }

}

function MyPlaces({places, token, userName, userSurname}) {

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
    return <div className={CompanyUserMyPlaceStyle.body}>
        <div className={CompanyUserMyPlaceStyle.navpage}>
            <Link href={"/companyUserHome"}>
                <div className={CompanyUserMyPlaceStyle.navparag}>halisaham.com</div>
            </Link>
            <UserButton userSurname={userSurname} userName={userName} token={token}/>
        </div>

        <div className={CompanyUserMyPlaceStyle.giris}>
            <div className={CompanyUserMyPlaceStyle.ingiris}>
                <Image src={resim} className={CompanyUserMyPlaceStyle.imageStyle}/>
                <div className={CompanyUserMyPlaceStyle.blurWindowStyle} id={"containerDiv"}>
                    <div className={CompanyUserMyPlaceStyle.optionsDiv}>
                    </div>
                    <div className={CompanyUserMyPlaceStyle.tableDiv}>

                        <div className={CompanyUserMyPlaceStyle.tableStyle}>

                            {places.map(place =>
                                <div className={CompanyUserMyPlaceStyle.reservDiv}>
                                    <h7 className={CompanyUserMyPlaceStyle.paragStyle}>Halısaha Adı:</h7>
                                    <label
                                        className={CompanyUserMyPlaceStyle.infoStyle}>{place.name}</label>
                                    <h7 className={CompanyUserMyPlaceStyle.paragStyle}>Fiyat:</h7>
                                    <label
                                        className={CompanyUserMyPlaceStyle.infoStyle}>{place.price}</label>
                                    <h7 className={CompanyUserMyPlaceStyle.paragStyle}>Adres:</h7>
                                    <label
                                        className={CompanyUserMyPlaceStyle.infoStyle}>{place.address}</label>
                                    <h7 className={CompanyUserMyPlaceStyle.paragStyle}>Telefon:</h7>
                                    <label className={CompanyUserMyPlaceStyle.infoStyle}>{place.phoneNumber}</label>
                                    <button className={CompanyUserMyPlaceStyle.rezervButton}>Düzenle</button>
                                    <Link href={{
                                        pathname: "/companyUserPlaceReservations",
                                        query: {
                                            placeFieldId: place.placeFieldId,
                                            //     reservationDate: place.date,
                                            //     reservationTime: place.time,
                                            //     placeName: place.placeName, //pass it to the page props
                                            //     placeId: place.placeId,
                                            //     reservationUserId: place.userId
                                        }
                                    }}
                                          className={CompanyUserMyPlaceStyle.rezervLinkStyle}>
                                        <button className={CompanyUserMyPlaceStyle.rezervButton2}>Rezervasyonları Gör
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


export default MyPlaces