import MyReservationStyles from "../styles/myReservation.module.css";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import Data from "../data.json";
import SweetALert from "sweetalert";

function MyReservation() {


    function rezervSil(date, time) {
        SweetALert({
            title: "Rezervasyonu Silmeyi Onaylıyor Musunuz?",
            text: "Tarih: " + date + " " + "Saat: " + time,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    SweetALert("Rezervasyonunuz Silindi!", {
                        icon: "success",
                    });
                } else {
                    SweetALert("Rezervasyon İşlemi Yapılmadı!");
                }
            });
    }

    const [cityValue, setCityValue] = useState('');
    const [codeValue, setCodeValue] = useState('');
    const [cityData, setCityData] = useState([]);
    const chooseData = Data.filter(city => city.name.includes(cityValue) || city.alpha_2_code.includes(codeValue));

    const reservations = [

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

    ]

    var timeArray = [];

    reservations.map(res => {
        timeArray.push(res.time.substring(0, 2))

    });
    var timeEnd = reservations.map(res => {
        return res.time.substring(9, 11)
    });


    const changeTable = () => {
        console.log(chooseData);
        setCityData(chooseData);
    }


    function scrollToTop() {
        var myDiv = document.getElementById('containerDiv');
        myDiv.scrollTo({top: 0})
    }


    const sehirListele = () => cityData.map(city =>
        <div className={MyReservationStyles.reservDiv}>


            <h7 className={MyReservationStyles.paragStyle}>Halısaha Adı:</h7>
            <label className={MyReservationStyles.infoStyle}>Deniz Halısaha</label>
            <h7 className={MyReservationStyles.paragStyle}>Adres:</h7>
            <label className={MyReservationStyles.infoStyle}>Vişnelik Mah. Çolpan Sok. No:20</label>
            <h7 className={MyReservationStyles.paragStyle}>Tarih:</h7>
            <label className={MyReservationStyles.infoStyle}>23.05.2023</label>
            <h7 className={MyReservationStyles.paragStyle}>Saat:</h7>
            <label className={MyReservationStyles.infoStyle}>19:00-20:00</label>
            <button className={MyReservationStyles.rezervButton} onClick={() => {
                rezervSil("23.05.2023", "19:00-20:00")
            }}>İptal Et
            </button>
            <Link href={{
                pathname: "/rezervYap",
                query: {
                    cityName: city.name,
                    postaNo: city.alpha_2_code,
                    saat: timeArray
                }
            }}
                  className={MyReservationStyles.rezervLinkStyle}>
                <button className={MyReservationStyles.rezervButton2}>Saat Güncelle</button>
            </Link>


        </div>
    );

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
                        <h1 className={MyReservationStyles.labelStyle}>Şehir Seçin:</h1>
                        <select className={MyReservationStyles.selectStyle} onChange={e => {
                            setCityValue(e.currentTarget.value)
                        }}>
                            <option>-</option>
                            <option>Ankara</option>
                            <option>Eskişehir</option>
                            <option>Konya</option>
                            <option>İstanbul</option>
                        </select>
                        <h1 className={MyReservationStyles.labelStyle}>İlçe Seçin:</h1>
                        <select className={MyReservationStyles.selectStyle} onChange={e => {
                            setCodeValue(e.currentTarget.value)
                        }}>
                            <option>-</option>
                            <option>TR-06</option>
                            <option>TR-26</option>
                            <option>TR-34</option>
                            <option>TR-42</option>
                        </select>
                        <h1 className={MyReservationStyles.labelStyle}>Fiyat Aralığı Seçin:</h1>
                        <select className={MyReservationStyles.selectStyle}>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                        </select>
                        <button onClick={changeTable} className={MyReservationStyles.listeleStyle}>Listele</button>


                    </div>
                    <div className={MyReservationStyles.tableDiv}>

                        <table className={MyReservationStyles.tableStyle}>


                            <tbody>
                            {sehirListele()}
                            </tbody>

                        </table>


                    </div>


                </div>

            </div>


        </div>


    </div>

}


export default MyReservation