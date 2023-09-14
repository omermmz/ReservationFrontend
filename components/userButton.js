import UserButtonStyle from "../styles/userButton.module.css";
import Popup from "reactjs-popup";
import Link from "next/link";
import React from "react";
import {logout} from "./authLoading/AuthLoading";
import {useRouter} from "next/router";


export function UserButton({userName, userSurname, token}) {

    const contentStyle = {background: 'white', width: '12vw'};
    const arrowStyle = {color: 'white'};
    const Router = useRouter()
    const deneme = async () => {
        //  window.history.replaceState(null,null, "/girisYap")
        //  Router.reload(window.location.pathname);
        //Router.push({pathname: "/girisYap"})
        const resp = await logout(token);
        console.log(resp)
        if (resp == 'networkError') {
            alert("olmadı")
        } else {
            Router.push("/girisYap")
        }


    }
    return <div className={UserButtonStyle.navButton}>
        <div className={UserButtonStyle.navP}>{userName} {userSurname}</div>
        <Popup {...{contentStyle, arrowStyle}} trigger=
            {<div className={UserButtonStyle.navIcon}>{userName.toString().substring(0, 1)}</div>}
               position="bottom center">
            <Link href={"/userSettings"}> <a>
                <div className={UserButtonStyle.popupButtonStyle}>Kullanıcı Ayarları</div>
            </a></Link>
            <div className={UserButtonStyle.popupButtonStyle} onClick={deneme}>Çıkış Yap</div>
        </Popup>

    </div>
}