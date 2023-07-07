import HalisahaListeleStyles from "../styles/halisahaListele.module.css";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import Data from "../data.json";
import {InfoBox} from "../components/infoBox";

function HalisahaListele() {


    const [cityValue, setCityValue] = useState('');
    const [codeValue, setCodeValue] = useState('');
    const [cityData, setCityData] = useState([]);
    const chooseData = Data.filter(city => city.name.includes(cityValue) || city.alpha_2_code.includes(codeValue));

    const changeTable = () => {
        console.log(chooseData);
        setCityData(chooseData);
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

    const pushPage = () => {

    }

    const sehirListele = () => cityData.map(city =>
        <tr>
            <td key={city.alpha_2_code}>{city.alpha_2_code}</td>
            <td key={city.name}>{city.name}</td>
            <td key={city.towns.name}>420₺</td>
            <td key={city.towns.districts}>100₺</td>
            <td className={HalisahaListeleStyles.rezervButton} onClick={() => {
                setShowInfo1(true);
                setName(city.name);
                setAddress("Vişnelik Mah. Çolpan Sok. Sami Ramazanoğlu Camii yanı, Odunpazarı/ESKİŞEHİR");
                setPrice("420₺");
                setKapora(city.alpha_2_code);
                setPhone("05071074264");
                scrollToTop()
            }}>
                İncele
            </td>
            <Link href={{
                pathname: "/rezervYap",
                query: {
                    cityName: city.name,
                    postaNo: city.alpha_2_code
                }
            }}
                  className={HalisahaListeleStyles.rezervLinkStyle}>
                <td key={city.towns.districts} className={HalisahaListeleStyles.rezervButton2}>Rezervasyon Yap</td>
            </Link>
        </tr>
    );

    /*     TODO: sayfa boyutunu aşan listelemelerde infobox tepede çıkıyor ekrana gelmiyor
    *       içerik butonu seçiminde blur özelliği içe sinmedi*/
    return <div className={HalisahaListeleStyles.body}>
        <div className={HalisahaListeleStyles.navpage}>
            <Link href={"/"}>
                <div className={HalisahaListeleStyles.navparag}>halisaham.com</div>
            </Link>
            <div className={HalisahaListeleStyles.navButton}>
            </div>
        </div>

        <div className={HalisahaListeleStyles.giris}>
            <div className={HalisahaListeleStyles.ingiris}>
                <Image src={resim} className={HalisahaListeleStyles.imageStyle}/>
                <div className={HalisahaListeleStyles.blurWindowStyle} id={"containerDiv"}>
                    <div className={HalisahaListeleStyles.optionsDiv}>
                        <h1 className={HalisahaListeleStyles.labelStyle}>Şehir Seçin:</h1>
                        <select className={HalisahaListeleStyles.selectStyle} onChange={e => {
                            setCityValue(e.currentTarget.value)
                        }}>
                            <option>-</option>
                            <option>Ankara</option>
                            <option>Eskişehir</option>
                            <option>Konya</option>
                            <option>İstanbul</option>
                        </select>
                        <h1 className={HalisahaListeleStyles.labelStyle}>İlçe Seçin:</h1>
                        <select className={HalisahaListeleStyles.selectStyle} onChange={e => {
                            setCodeValue(e.currentTarget.value)
                        }}>
                            <option>-</option>
                            <option>TR-06</option>
                            <option>TR-26</option>
                            <option>TR-34</option>
                            <option>TR-42</option>
                        </select>
                        <h1 className={HalisahaListeleStyles.labelStyle}>Fiyat Aralığı Seçin:</h1>
                        <select className={HalisahaListeleStyles.selectStyle}>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                        </select>
                        <button onClick={changeTable} className={HalisahaListeleStyles.listeleStyle}>Listele</button>


                    </div>
                    <div className={HalisahaListeleStyles.tableDiv}>

                        <table className={HalisahaListeleStyles.tableStyle}>
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
                            className={(showInfo1 === true) ? HalisahaListeleStyles.girisForBlur : HalisahaListeleStyles.girisForBlur2}>
                            <div className={HalisahaListeleStyles.inForBlur}>
                                <div className={HalisahaListeleStyles.optionsDiv}>
                                    <h1 className={HalisahaListeleStyles.labelStyle}>Şehir Seçin:</h1>
                                    <select className={HalisahaListeleStyles.selectStyle} onChange={e => {
                                        setCityValue(e.currentTarget.value)
                                    }}>
                                        <option>-</option>
                                        <option>Ankara</option>
                                        <option>Eskişehir</option>
                                        <option>Konya</option>
                                        <option>İstanbul</option>
                                    </select>
                                    <h1 className={HalisahaListeleStyles.labelStyle}>İlçe Seçin:</h1>
                                    <select className={HalisahaListeleStyles.selectStyle} onChange={e => {
                                        setCodeValue(e.currentTarget.value)
                                    }}>
                                        <option>-</option>
                                        <option>TR-06</option>
                                        <option>TR-26</option>
                                        <option>TR-34</option>
                                        <option>TR-42</option>
                                    </select>
                                    <h1 className={HalisahaListeleStyles.labelStyle}>Fiyat Aralığı Seçin:</h1>
                                    <select className={HalisahaListeleStyles.selectStyle}>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                    <button onClick={changeTable}
                                            className={HalisahaListeleStyles.listeleStyle}>Listele
                                    </button>


                                </div>
                                <table className={HalisahaListeleStyles.tableStyle}>
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


                        <div className={HalisahaListeleStyles.container}>
                            <div className={HalisahaListeleStyles.infoBoxWrapper}>

                            </div>
                        </div>
                        <InfoBox show={showInfo1} onClickOutside={() => {
                            setShowInfo1(false)
                        }} message={"selamlar"} name={name} address={address} price={price} kapora={kapora}
                                 phoneNumbers={phone}>
                        </InfoBox>


                    </div>


                </div>

                </div>


        </div>


    </div>

}


export default HalisahaListele