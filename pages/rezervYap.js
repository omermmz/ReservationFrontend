import React, {useState} from "react";
import RezervYapStyles from "../styles/rezervYap.module.css";
import Link from "next/link";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";

export const getServerSideProps = (context) => {
    // console.log(context.query)
    return {
        props: {
            cityName: context.query.cityName, //pass it to the page props
            postaNo: context.query.postaNo
        }
    }
}

function RezervazyonYap(props) {

    const array = [...Array(6)]

    const [cityValue, setCityValue] = useState('');

    var item = -1;

    const rezListe = () => array.map((value, i) => {
        i = item;
        const add = () => {
            i += 1;
            const string = ((i < 9) && '0' + i + ':00' + '-' + '0' + (i + 1) + ':00' || (i === 9) && '0' + i + ':00' + '-' + (i + 1) + ':00' || (i < 23) && i + ':00' + '-' + (i + 1) + ':00' || (i === 23) && i + ':00' + '-00:00');
            item = i;
            return string;
        }

        return (
            <tr>
                <td className={RezervYapStyles.buttonStyle}>{add()}</td>
                <td className={RezervYapStyles.buttonStyle}>{add()}</td>
                <td className={RezervYapStyles.buttonStyle}>{add()}</td>
                <td className={RezervYapStyles.buttonStyleSelected}>{add()}</td>
            </tr>
        );
    });


    return <div className={RezervYapStyles.body}>
        <div className={RezervYapStyles.navpage}>
            <Link href={"/"}>
                <div className={RezervYapStyles.navparag}>halisaham.com</div>
            </Link>
            <div className={RezervYapStyles.navButton}>
            </div>
        </div>

        <div className={RezervYapStyles.giris}>
            <div className={RezervYapStyles.ingiris}>
                <Image src={resim} className={RezervYapStyles.imageStyle}/>
                <div className={RezervYapStyles.blurWindowStyle} id={"containerDiv"}>
                    <div>{props.cityName}</div>
                    <div>{props.postaNo}</div>
                    <div className={RezervYapStyles.optionsDiv}>
                        <h1 className={RezervYapStyles.labelStyle}>Tarih Seçin:</h1>
                        <input type={"date"} className={RezervYapStyles.selectStyle} onChange={e => {
                            setCityValue(e.currentTarget.value)
                        }}></input>
                        <button className={RezervYapStyles.listeleStyle}>Listele</button>


                    </div>
                    <div className={RezervYapStyles.tableDiv}>

                        <table className={RezervYapStyles.tableStyle}>
                            <thead>
                            {rezListe()}
                            </thead>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default RezervazyonYap