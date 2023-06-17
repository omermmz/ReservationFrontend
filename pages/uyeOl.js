import React, {useState} from "react";
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import UyeOlStyles from '../styles/uyeOl.module.css'


function UyeOl() {

    const [valueRadio, setValueRadio] = useState('');
    const [valueType, setValueType] = useState('');
    const show = () => {
        setValueRadio('True');
        setValueType("Company Employee");
        console.log(valueRadio);
    }
    const show2 = () => {
        setValueRadio('False');
        setValueType("Reservation User");
        console.log(valueRadio);
    }


    return <div className={UyeOlStyles.body}>
        <div className={UyeOlStyles.navpage}>
            <div className={UyeOlStyles.navparag}>halisaham.com</div>
            <div className={UyeOlStyles.navButton}>
            </div>
        </div>

        <div className={UyeOlStyles.giris}>
            <div className={UyeOlStyles.ingiris}>
                <Image src={resim} className={UyeOlStyles.imageStyle}/>
                <div className={UyeOlStyles.divBlurWindow}>
                    <div className={UyeOlStyles.divLabels}>
                        <div className={UyeOlStyles.userChooseLabel}>
                            <h1>Kullanıcı Tipinizi Seçin:</h1>
                        </div>
                        <div className={UyeOlStyles.userChooseInputDiv}>
                            <label for={"html"} className={UyeOlStyles.coUserStyle}>Company User</label>
                            <input onClick={show} type={"radio"} value={"HTML"}
                                   id={"html"} name={"fav-language"}/>
                        </div>
                        <div className={UyeOlStyles.userChooseInputDiv}>
                            <label for={"html2"} className={UyeOlStyles.coUserStyle}>Reservation User</label>
                            <input onClick={show2} type={"radio"} value={"HTML"} id={"html2"}
                                   name={"fav-language"}/>
                        </div>
                        <div
                            className={`${(valueRadio === 'True') ? UyeOlStyles.companyNameVisible : UyeOlStyles.companyNameHidden}`}>
                            <h1 className={UyeOlStyles.companyName}>Company Name:</h1>
                        </div>
                        <div
                            className={`${(valueRadio === 'True') ? UyeOlStyles.companyNameVisible : UyeOlStyles.companyNameHidden}`}>
                            <input type={"text"} className={UyeOlStyles.userNameInput} placeholder={"Username"}/>
                        </div>
                        <div className={UyeOlStyles.userNameLabel2}>
                            <h1>Şifre:</h1>
                        </div>
                        <div className={UyeOlStyles.userNameInputDiv2}>
                            <input type={"password"} className={UyeOlStyles.userNameInput} placeholder={"Password"}/>
                        </div>

                        <div className={UyeOlStyles.buttonStyle}>
                            <div className={UyeOlStyles.btn1}>Giriş Yap</div>
                            <p className={UyeOlStyles.buttonPara}>Henüz üye olmadıysan</p>
                            <div className={UyeOlStyles.btn2}>Üye Ol</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}


export default UyeOl


/*<div className={`${(valueRadio==='True')? "bg-gray-100 w-64 p-2 items-center mb-3":"hidden"}`}>
    <input type="text" value={valueCName} onChange={e => { setValueCName(e.currentTarget.value); }} name="companyName" placeholder="Company Name" className="bg-gray-100 outline-none text-sm flex-1"/>
</div>*/