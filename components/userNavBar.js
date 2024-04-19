import NavBarStyles from "../styles/userNavBar.module.css";
import Link from "next/link";
import {UserButton} from "./userButton";
import React from "react";


function UserNavBar({navigator, userName, userSurname, token}) {
    return <div className={NavBarStyles.navpage}>
        <Link href={navigator}>
            <div className={NavBarStyles.navparag}>halisaham.org</div>
        </Link>
        <UserButton userSurname={userSurname} userName={userName} token={token}/>
    </div>
}

export default UserNavBar