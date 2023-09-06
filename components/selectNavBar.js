import React, {useState} from "react";
import SelectNavBarStyles from "../styles/selectNavBar.module.css"
import Link from "next/link";
import {useRouter} from "next/router";


//export const getServerSideProps = async (context) => {
//
//    return {
//        props: {
//            userInfo: context.userInfo,
//            password: context.password,
//            mail: context.mail
//        }
//    }
//}


export function SelectNavBar({userInfo, password, mail}) {
//  const [userInfo,setUserInfo] = useState(false);
//  const [password,setPassword] = useState(false);
//  const [mail,setMail] = useState(false);

    const Router = useRouter();

    const change = (choose) => {
        if (choose === 1) {
            Router.push("/userSettings")
        } else if (choose === 2) {
            Router.push(
                "/updatePassword")


        } else if (choose === 3) {
            Router.push("/updateMail")
        }
    }

    return (<div className={SelectNavBarStyles.selectBarDiv}>
        <div onClick={() => change(1)}
             className={(userInfo === true) ? SelectNavBarStyles.barButtonActive : SelectNavBarStyles.barButtonPassive}>Kullanıcı
            Bilgileri Güncelle
        </div>
        <div onClick={() => change(2)}
             className={(password === true) ? SelectNavBarStyles.barButtonActive : SelectNavBarStyles.barButtonPassive}>Şifre
            Güncelle
        </div>
        <div onClick={() => change(3)}
             className={(mail === true) ? SelectNavBarStyles.barButtonActive : SelectNavBarStyles.barButtonPassive}>E-Posta
            Güncelle
        </div>
    </div>);
}
