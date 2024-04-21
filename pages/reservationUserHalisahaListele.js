import ReservationUserHalisahaListeleStyle from "../styles/reservationUserHalisahaListele.module.css";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import Data from "../data.json";
import {InfoBox} from "../components/infoBox";
import {
    getAllCity,
    getAllPlaces, getAllPlacesWithBetweenPrice,
    getPlacesByCityAndProvince, getPlacesByCityAndProvinceWithBetweenPrice, getPlacesByCityBetweenPrice,
    getPlacesByCityName, whoAmIWithToken
} from "../components/authLoading/AuthLoading";
import logGirisStyle from "../styles/logInGiris.module.css";
import UserNavBar from "../components/userNavBar";

export const getServerSideProps = async ({req, res}) => {

    const user = await whoAmIWithToken(req.headers.cookie)
    const cities = await getAllCity();
    const places = await getAllPlaces();
    const userName = user.userName
    const userSurname = user.userSurname
    const token = req.headers.cookie
    return {
        props: {
            userName,
            userSurname,
            token,
            cities,
            places
        }
    }
}

function HalisahaListele({cities, places, userName, userSurname, token}) {

    const [cityValue, setCityValue] = useState('-');
    const [provinceValue, setProvinceValue] = useState('-');
    const [priceValue, setPriceValue] = useState('-');
    const [placeData, setPlaceData] = useState([]);

    const getAllPlace = async () => {
        const resp = await getAllPlaces();


    }


    const changeTable = async () => {
        if (cityValue !== "-" && provinceValue === "-" && priceValue === "-") {
            const placesByCity = await getPlacesByCityName(cityValue);
            if (placesByCity == null || (placesByCity.status != null && placesByCity.status != 200) || placesByCity == 'networkError') {
                alert(placesByCity.status);
                alert("Başarısız")
            } else {
                setPlaceData(placesByCity);
                console.log(placesByCity)
            }
        } else if (cityValue !== "-" && provinceValue === "-" && priceValue !== "-") {
            const placesByCityBetweenPrice = await getPlacesByCityBetweenPrice(cityValue, priceValue);
            if (placesByCityBetweenPrice == null || (placesByCityBetweenPrice.status != null && placesByCityBetweenPrice.status != 200) || placesByCityBetweenPrice == 'networkError') {
                alert(placesByCityBetweenPrice.status);
                alert("Başarısız")
            } else {
                setPlaceData(placesByCityBetweenPrice);
                console.log(placesByCityBetweenPrice)
            }

        } else if (cityValue !== "-" && provinceValue !== "-" && priceValue === "-") {
            const placesByCityAndProvince = await getPlacesByCityAndProvince(cityValue, provinceValue);
            console.log(provinceValue)
            if (placesByCityAndProvince == null || (placesByCityAndProvince.status != null && placesByCityAndProvince.status != 200) || placesByCityAndProvince == 'networkError') {
                alert(placesByCityAndProvince.status);
                alert("Başarısız")
            } else {
                setPlaceData(placesByCityAndProvince);
            }
        } else if (cityValue !== "-" && provinceValue !== "-" && priceValue !== "-") {
            const placesByCityAndProvinceBetweenPrice = await getPlacesByCityAndProvinceWithBetweenPrice(cityValue, provinceValue, priceValue);
            console.log(placesByCityAndProvinceBetweenPrice)
            if (placesByCityAndProvinceBetweenPrice == null || (placesByCityAndProvinceBetweenPrice.status != null && placesByCityAndProvinceBetweenPrice.status != 200) || placesByCityAndProvinceBetweenPrice == 'networkError') {
                alert(placesByCityAndProvinceBetweenPrice.status);
                alert("Başarısız")
            } else {
                setPlaceData(placesByCityAndProvinceBetweenPrice);
            }
        } else if (cityValue === "-" && provinceValue === "-" && priceValue !== "-") {
            const placesBetweenPrice = await getAllPlacesWithBetweenPrice(priceValue);
            console.log(placesBetweenPrice)
            if (placesBetweenPrice == null || (placesBetweenPrice.status != null && placesBetweenPrice.status != 200) || placesBetweenPrice == 'networkError') {
                alert(placesBetweenPrice.status);
                alert("Başarısız")
            } else {
                setPlaceData(placesBetweenPrice);
            }
        } else {
            //      const placesData = places.filter(place => place.name.includes("Deniz Halisaha"));
            console.log(places);
            if (places == null || (places.status != null && places.status != 200) || places == 'networkError') {
                alert(places.status);
                alert("Başarısız")
            } else {
                setPlaceData(places);
            }
        }
    }
    let [showInfo1, setShowInfo1] = useState(false);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [kapora, setKapora] = useState('');
    const [phone, setPhone] = useState('');


    function scrollToTop() {
        var myDiv = document.getElementById('containerDiv');
        myDiv.scrollTo({top: 0})
    }


    const sehirListele = () => placeData.map(place =>
        <tr>
            <td key={1}>{place.name}</td>
            <td key={2}>{place.phoneNumber}</td>
            <td key={3}>{place.price}</td>
            <td key={4}>{place.kapora}</td>
            <div className={ReservationUserHalisahaListeleStyle.rezervButtonDiv}>
                <td key={5} className={ReservationUserHalisahaListeleStyle.rezervButton} onClick={() => {
                    setShowInfo1(true);
                    setName(place.name);
                    setAddress(place.address);
                    setPrice(place.price);
                    setKapora(place.kapora);
                    setPhone(place.phoneNumber);
                    scrollToTop()
                }}>
                    İncele
                </td>
                <Link key={7} href={{
                    pathname: "/reservationUserRezervYap",
                    query: {
                        placeName: place.name,
                        placeId: place.id
                    }
                }}
                      className={ReservationUserHalisahaListeleStyle.rezervLinkStyle}>
                    <td key={6} className={ReservationUserHalisahaListeleStyle.rezervButton2}>Rezervasyon Yap</td>
                </Link>
            </div>
        </tr>
    );

    /*     TODO: içerik butonu seçiminde blur özelliği içe sinmedi
    *       incele infoboxundaki rezervasyon yap kısmına link eklenmedi*/
    return <div className={ReservationUserHalisahaListeleStyle.body}>
        <UserNavBar navigator={"/reservationUserHome"} userSurname={userSurname} userName={userName} token={token}/>

        <div className={ReservationUserHalisahaListeleStyle.giris}>
            <div className={ReservationUserHalisahaListeleStyle.ingiris}>
                <Image src={resim} className={ReservationUserHalisahaListeleStyle.imageStyle}/>
                <div className={ReservationUserHalisahaListeleStyle.blurWindowStyle} id={"containerDiv"}>
                    <div className={ReservationUserHalisahaListeleStyle.optionsDiv}>
                        <h1 className={ReservationUserHalisahaListeleStyle.labelStyle}>Şehir Seçin:</h1>
                        <select className={ReservationUserHalisahaListeleStyle.selectStyle} onChange={e => {
                            setCityValue(e.currentTarget.value)
                            setProvinceValue('-')
                            setPriceValue('-')
                        }}>
                            <option>-</option>
                            {cities.map(city =>
                                (<option>{city.name}</option>)
                            )}
                        </select>
                        <h1 className={ReservationUserHalisahaListeleStyle.labelStyle}>İlçe Seçin:</h1>
                        <select className={ReservationUserHalisahaListeleStyle.selectStyle} onChange={e => {
                            setProvinceValue(e.currentTarget.value)
                            setPriceValue('-')
                        }}>
                            <option>-</option>
                            {cities.map(city =>
                                    (city.name === cityValue) && city.provinces.map(provinces =>
                                        (<option value={provinces.name}>{provinces.name}</option>)
                                    )
                            )}
                        </select>
                        <h1 className={ReservationUserHalisahaListeleStyle.labelStyle}>Fiyat Aralığı Seçin:</h1>
                        <select value={priceValue} className={ReservationUserHalisahaListeleStyle.selectStyle}
                                onChange={e => {
                                    setPriceValue(e.currentTarget.value)
                                }}>
                            {() => {
                                if (priceValue === "-") {
                                    console.log(priceValue)
                                    return <option>-</option>
                                }
                            }}
                            <option>-</option>
                            <option>100/200</option>
                            <option>200/300</option>
                            <option>300/400</option>
                            <option>400/500</option>
                        </select>
                        <button onClick={changeTable}
                                className={ReservationUserHalisahaListeleStyle.listeleStyle}>Listele
                        </button>


                    </div>
                    <div className={ReservationUserHalisahaListeleStyle.tableDiv}>

                        <table className={ReservationUserHalisahaListeleStyle.tableStyle}>
                            <thead>
                            <tr>
                                <th scope="col">Halısaha Adı</th>
                                <th scope="col">Telefon No</th>
                                <th scope="col">Fiyat</th>
                                <th scope="col">Kapora</th>


                            </tr>
                            </thead>
                            <tbody>
                            {sehirListele()}
                            </tbody>

                        </table>

                        <div
                            className={(showInfo1 === true) ? ReservationUserHalisahaListeleStyle.girisForBlur : ReservationUserHalisahaListeleStyle.girisForBlur2}>
                            <div className={ReservationUserHalisahaListeleStyle.inForBlur}>
                                <div className={ReservationUserHalisahaListeleStyle.optionsDiv}>
                                    <h1 className={ReservationUserHalisahaListeleStyle.labelStyle}>Şehir Seçin:</h1>
                                    <select className={ReservationUserHalisahaListeleStyle.selectStyle} onChange={e => {
                                        setCityValue(e.currentTarget.value)
                                    }}>
                                        <option>-</option>
                                        <option>Ankara</option>
                                        <option>Eskişehir</option>
                                        <option>Konya</option>
                                        <option>İstanbul</option>
                                    </select>
                                    <h1 className={ReservationUserHalisahaListeleStyle.labelStyle}>İlçe Seçin:</h1>
                                    <select className={ReservationUserHalisahaListeleStyle.selectStyle} onChange={e => {
                                        setCodeValue(e.currentTarget.value)
                                    }}>
                                        <option>-</option>
                                        <option>TR-06</option>
                                        <option>TR-26</option>
                                        <option>TR-34</option>
                                        <option>TR-42</option>
                                    </select>
                                    <h1 className={ReservationUserHalisahaListeleStyle.labelStyle}>Fiyat Aralığı
                                        Seçin:</h1>
                                    <select className={ReservationUserHalisahaListeleStyle.selectStyle}>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                    <button onClick={changeTable}
                                            className={ReservationUserHalisahaListeleStyle.listeleStyle}>Listele
                                    </button>


                                </div>
                                <table className={ReservationUserHalisahaListeleStyle.tableStyle}>
                                    <thead>
                                    <tr>
                                        <th scope="col">Halısaha Adı</th>
                                        <th scope="col">Telefon No</th>
                                        <th scope="col">Fiyat</th>
                                        <th scope="col">Kapora</th>


                                    </tr>
                                    </thead>
                                    <tbody>
                                    {sehirListele()}
                                    </tbody>

                                </table>
                            </div>
                        </div>


                        <div className={ReservationUserHalisahaListeleStyle.container}>
                            <div className={ReservationUserHalisahaListeleStyle.infoBoxWrapper}>

                            </div>
                        </div>
                        <InfoBox show={showInfo1} onClickOutside={() => {
                            setShowInfo1(false)
                        }} message={"resim"} name={name} address={address} price={price} kapora={kapora}
                                 phoneNumbers={phone}>
                        </InfoBox>


                    </div>


                </div>

            </div>


        </div>


    </div>

}


export default HalisahaListele