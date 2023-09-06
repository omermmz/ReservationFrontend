import React, {useState} from "react";
import HalisahaEkleStyles from "../styles/halisahaEkle.module.css"
import Link from "next/link";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import Data from '../data.json';
import {addCity, addPlace, whoAmIWithToken} from "../components/authLoading/AuthLoading";
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


function HalisahaEkle(props) {

    const [cityChange, setCityChange] = useState('');
    const [provinceValue, setProvinceValue] = useState('');
    const [districtValue, setDistrictValue] = useState('');
    const [mahalleValue, setMahalleValue] = useState('');
    const [placeName, setPlaceName] = useState('');
    const [addressNo, setAddressNo] = useState('');
    const [telNo, setTelNo] = useState('');
    const [price, setPrice] = useState('');
    const [kapora, setKapora] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    var times = [];
    for (let i = 0; i < 24; i++) {
        if (i <= 9) {
            var string = "0" + (i) + ":00"
            times.push(string)
        } else {
            var string = (i) + ":00";
            times.push(string)
        }

    }

    const timeListele = () => times.map(string => {
            return <option>{string}</option>
        }
    )


    const addCi = async () => {
        const resp = await addCity(cityChange, provinceValue);
        console.log(resp);

        if (resp === null || (resp.status !== null && resp.status !== 200) || resp === 'networkError') {
            alert(resp.status);
            alert("Başarısız")
        } else {
            /*Router.push({
              pathname: '/cuser'
          })*/
            alert("Its okay");
        }
        const resp2 = await addPlace(placeName, price, cityChange, provinceValue, districtValue, mahalleValue, resp.id, resp.provinceId, addressNo, telNo, kapora, startTime, endTime);
        console.log(resp2);
        if (resp2 === null || (resp2.status !== null && resp2.status !== 200) || resp2 === 'networkError') {
            alert(resp2.status);
            alert("Başarısız")
        } else {
            /*Router.push({
              pathname: '/cuser'
          })*/
            alert("Its okay");
        }
    }


    const listele = () => Data.map(city => <option key={city.alpha_2_code}>{city.name}</option>);
    const townListele = () => Data.map(city => (city.name === cityChange) && (city.towns.map(towns => <option
        key={towns.name}>{towns.name}</option>)));
    const districtsListele = () => Data.map(city => (city.name === cityChange) && (city.towns.map(towns => (towns.name === provinceValue) && (towns.districts.map(districts =>
        <option key={districts.name}>{districts.name}</option>)))));
    const quartersListele = () => Data.map(city => (city.name === cityChange) && (city.towns.map(towns => (towns.name === provinceValue) && (towns.districts.map(districts => (districts.name === districtValue) && (districts.quarters.map(quarters =>
        <option key={quarters.name}>{quarters.name}</option>)))))));

    return <div className={HalisahaEkleStyles.body}>
        <div className={HalisahaEkleStyles.navpage}>
            <Link href={"/companyUserHome"}>
                <div className={HalisahaEkleStyles.navparag}>halisaham.com</div>
            </Link>
            <UserButton userSurname={props.userSurname} userName={props.userName} token={props.token}/>
        </div>

        <div className={HalisahaEkleStyles.giris}>
            <div className={HalisahaEkleStyles.ingiris}>
                <Image src={resim} className={HalisahaEkleStyles.imageStyle}/>
                <div className={HalisahaEkleStyles.blurWindowStyle} id={"containerDiv"}>
                    <div className={HalisahaEkleStyles.optionsDiv}>

                        <div className={HalisahaEkleStyles.inputsDiv}>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Halısaha Adı:</div>
                                <input type={"text"} className={HalisahaEkleStyles.selectStyle}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setPlaceName(e.currentTarget.value)
                                }}/>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Şehir Seçin:</div>
                                <select className={HalisahaEkleStyles.selectStyle} name='types' onChange={e => {
                                    setCityChange(e.currentTarget.value);
                                }}>
                                    <option>-</option>
                                    {listele()}
                                </select>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>İlçe Seçin:</div>
                                <select className={HalisahaEkleStyles.selectStyle} name='types' onChange={e => {
                                    setProvinceValue(e.currentTarget.value);
                                }}>
                                    <option>-</option>
                                    {townListele()}
                                </select>

                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Semt Seçin:</div>
                                <select className={HalisahaEkleStyles.selectStyle} name='types' onChange={e => {
                                    setDistrictValue(e.currentTarget.value);
                                }}>
                                    <option>-</option>
                                    {districtsListele()}
                                </select>

                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Mahalle Seçin:</div>
                                <select className={HalisahaEkleStyles.selectStyle} name='types' onChange={e => {
                                    setMahalleValue(e.currentTarget.value)
                                }}>
                                    <option>-</option>
                                    {quartersListele()}
                                </select>

                            </div>
                        </div>
                        <div className={HalisahaEkleStyles.inputsDiv}>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Adres No:</div>
                                <input type={"text"} className={HalisahaEkleStyles.selectStyle}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setAddressNo(e.currentTarget.value)
                                }}/>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Telefon Numarası:</div>
                                <input className={HalisahaEkleStyles.selectStyle} type={"text"}
                                       placeholder={"Giriniz:"} onChange={e => {
                                    setTelNo(e.currentTarget.value)
                                }}/>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Halısaha Ücreti:</div>
                                <input className={HalisahaEkleStyles.selectStyle} type={"text"} onChange={e => {
                                    setPrice(e.currentTarget.value)
                                }}
                                       placeholder={"Giriniz:"}/>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Kapora Ücreti:</div>
                                <input className={HalisahaEkleStyles.selectStyle} type={"text"} onChange={e => {
                                    setKapora(e.currentTarget.value)
                                }}
                                       placeholder={"Giriniz:"}/>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <h1 className={HalisahaEkleStyles.labelStyle}>Saha Açılış Saati:</h1>
                                <div className={HalisahaEkleStyles.divForInput}>
                                    <select className={HalisahaEkleStyles.selectStyle} onChange={e => {
                                        setStartTime(e.currentTarget.value)
                                    }}>
                                        <option>-</option>
                                        {timeListele()}
                                    </select>
                                </div>
                            </div>
                            <div className={HalisahaEkleStyles.inputDiv}>
                                <h1 className={HalisahaEkleStyles.labelStyle}>Saha Kapanış Saati:</h1>
                                <div className={HalisahaEkleStyles.divForInput}>
                                    <select className={HalisahaEkleStyles.selectStyle} onChange={e => {
                                        setEndTime(e.currentTarget.value)
                                    }}>
                                        <option>-</option>
                                        {timeListele()}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={HalisahaEkleStyles.ekleButton} onClick={addCi}>Halısaha Ekle</div>
                </div>
            </div>
        </div>
    </div>
}

export default HalisahaEkle