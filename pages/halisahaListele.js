import HalisahaListeleStyles from "../styles/halisahaListele.module.css";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import Data from "../data.json";


function HalisahaListele() {

    const [cityValue, setCityValue] = useState('');
    const [codeValue, setCodeValue] = useState('');
    const [cityData, setCityData] = useState([]);
    const chooseData = Data.filter(city => city.name.includes(cityValue) || city.alpha_2_code.includes(codeValue));

    const changeTable = () => {
        console.log(chooseData);
        setCityData(chooseData);
    }


    const sehirListele = () => cityData.map(city =>
        <tr>
            <td key={city.alpha_2_code}>{city.alpha_2_code}</td>
            <td key={city.name}>{city.name}</td>
            <td key={city.towns.name}>{city.towns.name}</td>
            <td key={city.towns.districts}> {city.towns.districts}</td>
            <td key={city.towns.districts}>{city.towns.districts}</td>
        </tr>
    );
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
                <div className={HalisahaListeleStyles.blurWindowStyle}>
                    <div className={HalisahaListeleStyles.optionsDiv}>
                        <select className={HalisahaListeleStyles.selectStyle} onChange={e => {
                            setCityValue(e.currentTarget.value)
                        }}>
                            <option>Ankara</option>
                            <option>Eskişehir</option>
                            <option>Konya</option>
                            <option>İstanbul</option>
                        </select>
                        <select className={HalisahaListeleStyles.selectStyle} onChange={e => {
                            setCodeValue(e.currentTarget.value)
                        }}>
                            <option>TR-06</option>
                            <option>TR-26</option>
                            <option>TR-34</option>
                            <option>TR-42</option>
                        </select>
                        <select className={HalisahaListeleStyles.selectStyle}>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                        </select>
                        <button onClick={changeTable}>Bana bas</button>


                    </div>
                    <div className={HalisahaListeleStyles.tableDiv}>

                        <table className={HalisahaListeleStyles.tableStyle}>
                            <thead>
                            <tr>
                                <th scope="col" style={{border: "1px solid black"}}>Sr. NO</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                            </tr>
                            </thead>
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


export default HalisahaListele