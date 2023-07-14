import React, {useState} from "react";
import HalisahaEkleStyles from "../styles/halisahaEkle.module.css"
import Link from "next/link";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import Data from '../data.json';


function HalisahaEkle() {

    const [cityChange, setCityChange] = useState('');
    const [townValue, setTownValue] = useState('');
    const [districtValue, setDistrictValue] = useState('');

    const listele = () => Data.map(city => <option key={city.alpha_2_code}>{city.name}</option>);
    const townListele = () => Data.map(city => (city.name === cityChange) && (city.towns.map(towns => <option
        key={towns.name}>{towns.name}</option>)));
    const districtsListele = () => Data.map(city => (city.name === cityChange) && (city.towns.map(towns => (towns.name === townValue) && (towns.districts.map(districts =>
        <option key={districts.name}>{districts.name}</option>)))));
    const quartersListele = () => Data.map(city => (city.name === cityChange) && (city.towns.map(towns => (towns.name === townValue) && (towns.districts.map(districts => (districts.name === districtValue) && (districts.quarters.map(quarters =>
        <option key={quarters.name}>{quarters.name}</option>)))))));

    return <div className={HalisahaEkleStyles.body}>
        <div className={HalisahaEkleStyles.navpage}>
            <Link href={"/"}>
                <div className={HalisahaEkleStyles.navparag}>halisaham.com</div>
            </Link>
            <div className={HalisahaEkleStyles.navButton}>
            </div>
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
                                       placeholder={"Giriniz:"}/>
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
                                    setTownValue(e.currentTarget.value);
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
                                <select className={HalisahaEkleStyles.selectStyle} name='types'>
                                    <option>-</option>
                                    {quartersListele()}
                                </select>

                            </div>
                        </div>
                        <div className={HalisahaEkleStyles.inputsDiv}>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Adres No:</div>
                                <input type={"text"} className={HalisahaEkleStyles.selectStyle}
                                       placeholder={"Giriniz:"}/>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Telefon Numarası:</div>
                                <input className={HalisahaEkleStyles.selectStyle} type={"text"}
                                       placeholder={"Giriniz:"}/>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Halısaha Ücreti:</div>
                                <input className={HalisahaEkleStyles.selectStyle} type={"text"}
                                       placeholder={"Giriniz:"}/>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <div className={HalisahaEkleStyles.labelStyle}>Kapora Ücreti:</div>
                                <input className={HalisahaEkleStyles.selectStyle} type={"text"}
                                       placeholder={"Giriniz:"}/>
                            </div>

                            <div className={HalisahaEkleStyles.inputDiv}>
                                <h1 className={HalisahaEkleStyles.labelStyle}>Saha Açılış-Kapanış Saatleri:</h1>
                                <div className={HalisahaEkleStyles.divForInput}>
                                    <input className={HalisahaEkleStyles.selectStyle} type={"text"}
                                           placeholder={"Örnek Format:(09:00-04:00)"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={HalisahaEkleStyles.ekleButton}>Halısaha Ekle</div>
                </div>
            </div>
        </div>
    </div>
}

export default HalisahaEkle