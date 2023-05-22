import React from "react";
import '../styles/app.css'
import '../styles/giris.module.css'
import HomePage from "./index";

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps}>
        <HomePage />
    </Component>

}