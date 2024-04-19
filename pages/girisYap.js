import React, {useState} from "react";
import GirisYapCss from "../styles/girisYap.module.css"
import Image from "next/image";
import resim from "../img/FT_08_06_2017_16_46_58__197.jpg";
import Link from "next/link";
import {whoAmI} from "../components/authLoading/AuthLoading";
import {useRouter} from 'next/router';
import {UserButton} from "../components/userButton";

export async function getServerSideProps({req, res}) {
    // res.setHeader('Set-Cookie', 'some-cookie=someValue; Max-Age=0');
    //window.history.replaceState(null,null,"")


    return {
        props: {}, // will be passed to the page component as props

    }
}


function GirisYap() {


    const Router = useRouter();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [path, setPath] = useState('');


    const login = async () => {
        var path1;
        const resp = await whoAmI(mail, password);

        if (resp == null || (resp.status != null && resp.status != 200) || resp == 'networkError') {
            alert(resp.status);
            alert("Başarısız")
        } else {
            (resp.role === "USER") ? path1 = "/reservationUserHome" : path1 = "/companyUserHome";
            setUserName(resp.userName)
            setUserSurname(resp.userSurname)
            setIsLogin(true);


            Router.push({
                pathname: path1,
                query: {
                    userName: resp.userName,
                    userSurname: resp.userSurname
                }
            })
        }
    }

    return <div className={GirisYapCss.body}>
        <div className={GirisYapCss.navpage}>
            <Link href={"/"}>
                <div className={GirisYapCss.navparag}>halisaham.org</div>
            </Link>
        </div>

        <div className={GirisYapCss.giris}>
            <div className={GirisYapCss.ingiris}>
                <Image src={resim} className={GirisYapCss.imageStyle}/>
                <div className={GirisYapCss.divLabels}>

                    <h1 className={GirisYapCss.userNameLabel}>E-Posta:</h1>


                    <input type={"text"} className={GirisYapCss.userNameInput} placeholder={"Email"}
                           onChange={e => {
                               setMail(e.currentTarget.value)
                           }}/>


                    <h1 className={GirisYapCss.userNameLabel2}>Şifre:</h1>


                    <input type={"password"} className={GirisYapCss.userNameInput} placeholder={"Password"}
                           onChange={e => {
                               setPassword(e.currentTarget.value)
                           }}/>

                    <div className={GirisYapCss.buttonStyle}>
                        <div className={GirisYapCss.btn1} onClick={login}>Giriş Yap</div>
                        <p className={GirisYapCss.buttonPara}>Üyeliğin yok mu?</p>
                        <Link href={"/uyeOl"} className={GirisYapCss.linkStyle}>
                            <div className={GirisYapCss.btn2}>Üye Ol</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    </div>
}


export default GirisYap