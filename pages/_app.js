import React from "react";
import '../styles/app.css'
import '../styles/giris.module.css'
import HomePage from "./index";
import ReservationUserHome from "./reservationUserHome";
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps}>
        <HomePage/>
        <ReservationUserHome {...pageProps} />
    </Component>



}