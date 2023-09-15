import React, {useState} from "react";
import RezervYapStyles from "../styles/rezervYap.module.css";
import Link from "next/link";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import SweetALert from 'sweetalert'
import {addReservation, getAllEmptyTime} from "../components/authLoading/AuthLoading";


export const getServerSideProps = (context) => {
    // console.log(context.query)    min={new Date().toJSON().slice(0, 10)}
    return {
        props: {
            placeName: context.query.placeName, //pass it to the page props
            placeId: context.query.placeId,
            //  timeArray: context.query.timeArray
        }
    }
}

function RezervazyonYap(props) {

    const array = [...Array(6)]
    const [date, setDate] = useState();
    const [times, setTimes] = useState(["0-1"]);

    const addRes = async (e) => {
        const resp = addReservation(date, (e.target.innerHTML.toString().substring(0, 5) + ":00"), props.placeId, 2);
        if (resp == null || (resp.status != null && resp.status != 200) || resp == 'networkError') {
            alert(resp.status);
            console.log(resp)
            alert("Başarısız");
            return false;
        } else {
            return true;
        }
    }

    function banabas(e) {
        SweetALert({
            title: "Rezervasyonu Onaylıyor Musunuz?",
            text: "Tarih: " + date + " " + "Saat: " + e.target.innerHTML,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete && addRes(e)) {
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

    const getEmptyTime = async () => {
        console.log(date)
        console.log(props.placeId)
        const resp = await getAllEmptyTime(date, props.placeId);
        if (resp == null || (resp.status != null && resp.status != 200) || resp == 'networkError') {
            alert(resp.status);
            alert("Başarısız")
        } else {

            var timeArray = [];

            resp.map(res => {
                if (res === "00:00:00-01:00:00") {

                } else {
                    timeArray.push(res.time.substring(0, 2))
                }
            });
            setTimes(timeArray);
            console.log("times:" + times);

        }
    }


    //  (times[0].localeCompare("00")) ? flag = 1 : flag = 0;
    const rezListe = (item, flag, inString) => array.map((value, i) => {
        i = item;
        const add = () => {
            i += 1;
            const string = ((i < 9) && '0' + i + ':00' + '-' + '0' + (i + 1) + ':00' || (i === 9) && '0' + i + ':00' + '-' + (i + 1) + ':00' || (i < 23) && i + ':00' + '-' + (i + 1) + ':00' || (i === 23) && i + ':00' + '-00:00');
            for (var j = 0; j < times.length; j++) {
                var a = 10; //9 ve aşağısı kontrolüne takılmaması için 10dan başlattım
                if (times[j][0] === "0") {
                    console.log("girdim" + j);
                    a = parseInt(times[j].substring(1, 2));
                    console.log(a);
                }

                var times1 = []
                times1 = ((a < 9) && '0' + (parseInt(times[j]) - 1) + ':00' + '-' + '0' + (parseInt(times[j])) + ':00' || (a === 9) && '0' + (a - 1) + ':00' + '-' + '0' + (a) + ':00' || ((parseInt(times[j])) < 23 && (parseInt(times[j])) > 9) && (times[j] - 1) + ':00' + '-' + (parseInt(times[j])) + ':00' || ((parseInt(times[j])) === 23) && (parseInt(times[j])) + ':00' + '-00:00');
                item = i;
                if (times1.toString().substring(0, 1) === "9") {
                    times1 = '0' + times1;
                }
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
            if ((index == 23) && ((times[times.length - 1] == 23))) {
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
                    <div className={RezervYapStyles.labelStyle}
                         style={{color: "lightgoldenrodyellow", fontSize: "2vh"}}>{props.placeName} Rezarvasyon
                        Saatleri: {props.placeId}</div>
                    <div className={RezervYapStyles.optionsDiv}>
                        <h1 className={RezervYapStyles.labelStyle}>Tarih Seçin:</h1>
                        <input type={"date"}
                               max={+(new Date().toJSON().slice(0, 4)) + 1 + new Date().toJSON().slice(4, 10)}
                               placeholder={"YYYY-MM-DD"} className={RezervYapStyles.selectStyle} onChange={e => {
                            setDate(e.currentTarget.value)
                        }}></input>
                        <button className={RezervYapStyles.listeleStyle} onClick={getEmptyTime}>Listele</button>
                    </div>
                    <div className={RezervYapStyles.tableDiv}>
                        {
                            rezListe(-1, ((times[0].localeCompare("00")) ? 1 : 0), "")}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default RezervazyonYap
