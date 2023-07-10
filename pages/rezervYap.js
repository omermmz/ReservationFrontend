import React, {useState} from "react";
import RezervYapStyles from "../styles/rezervYap.module.css";
import Link from "next/link";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import SweetALert from 'sweetalert'


export const getServerSideProps = (context) => {
    // console.log(context.query)
    return {
        props: {
            cityName: context.query.cityName, //pass it to the page props
            postaNo: context.query.postaNo,
            saat: context.query.saat
        }
    }
}

function RezervazyonYap(props) {

    const array = [...Array(6)]
    const [date, setDate] = useState();

    function banabas(e) {
        SweetALert({
            title: "Rezervasyonu Onaylıyor Musunuz?",
            text: "Tarih: " + date + " " + "Saat: " + e.target.innerHTML,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    SweetALert("Rezervasyonunuz Alındı!", {
                        icon: "success",
                    });
                } else {
                    SweetALert("Rezervasyon Yapmadınız!");
                }
            });
    }

    const dateCheck = () => {
        SweetALert({
            title: "Lütfen önce tarih seçin!"
        })
    }

    var item = -1;
    var flag;
    var inString = "";

    (props.saat[0].localeCompare("00")) ? flag = 1 : flag = 0;
    const rezListe = () => array.map((value, i) => {
        i = item;
        const add = () => {
            i += 1;
            const string = ((i < 9) && '0' + i + ':00' + '-' + '0' + (i + 1) + ':00' || (i === 9) && '0' + i + ':00' + '-' + (i + 1) + ':00' || (i < 23) && i + ':00' + '-' + (i + 1) + ':00' || (i === 23) && i + ':00' + '-00:00');
            for (var j = 0; j < props.saat.length; j++) {
                var a = 10; //9 ve aşağısı kontrolüne takılmaması için 10dan başlattım
                if (props.saat[j][0] === "0") {
                    console.log("girdim" + j);
                    a = parseInt(props.saat[j].substring(1, 2));
                }

                const times1 = ((a < 9) && '0' + (parseInt(props.saat[j]) - 1) + ':00' + '-' + '0' + (parseInt(props.saat[j])) + ':00' || (a === 9) && '0' + (a - 1) + ':00' + '-' + '0' + (a) + ':00' || ((parseInt(props.saat[j])) < 23 && (parseInt(props.saat[j])) > 9) && (props.saat[j] - 1) + ':00' + '-' + (parseInt(props.saat[j])) + ':00' || ((parseInt(props.saat[j])) === 23) && (parseInt(props.saat[j])) + ':00' + '-00:00');
                item = i;
                console.log(times1);
                (string.localeCompare(times1)) ? flag = 1 : flag = 0;
                if (flag === 0) {
                    break;
                }
            }
            inString = string
            return string;
        }
        const check = (index) => {
            index += 1;
            if ((index == 23) && ((props.saat[props.saat.length - 1] == 23))) {
                flag = 0;
                return flag;
            }

            return flag;
        }

        return (
            <div className={RezervYapStyles.buttonsStyle}>
                <button className={(flag === 0) ? RezervYapStyles.buttonStyle : RezervYapStyles.buttonStyleSelected}
                        disabled={(flag === 0) ? false : true} onClick={(e) => {
                    (date === undefined) ? dateCheck() : banabas(e)
                }}>{add()}</button>
                <button className={(flag === 0) ? RezervYapStyles.buttonStyle : RezervYapStyles.buttonStyleSelected}
                        disabled={(flag === 0) ? false : true}
                        onClick={(date === undefined) ? dateCheck : banabas}>{add()}</button>
                <button className={(flag === 0) ? RezervYapStyles.buttonStyle : RezervYapStyles.buttonStyleSelected}
                        disabled={(flag === 0) ? false : true}
                        onClick={(date === undefined) ? dateCheck : banabas}>{add()}</button>
                <button className={(check(i) === 0) ? RezervYapStyles.buttonStyle : RezervYapStyles.buttonStyleSelected}
                        disabled={(flag === 0) ? false : true}
                        onClick={(date === undefined) ? dateCheck : banabas}>{add()}</button>
            </div>
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
                <div className={RezervYapStyles.blurWindowStyle}>
                    <div className={RezervYapStyles.labelStyle} style={{color: "lightgoldenrodyellow"}}>Deniz Halısaha
                        Rezarvasyon Saatleri:
                    </div>
                    <div className={RezervYapStyles.optionsDiv}>
                        <h1 className={RezervYapStyles.labelStyle}>Tarih Seçin:</h1>
                        <input type={"date"} className={RezervYapStyles.selectStyle} onChange={e => {
                            setDate(e.currentTarget.value)
                        }}></input>
                        <button className={RezervYapStyles.listeleStyle}>Listele</button>
                    </div>
                    <div className={RezervYapStyles.tableDiv}>
                        {rezListe()}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default RezervazyonYap
// <div>{props.cityName}</div>