import React from "react";
import {cookies} from "next/headers";
import {NextResponse} from 'next/server'
import {deleteCookies} from "../components/authLoading/AuthLoading";
import {useRouter} from "next/router";

export async function getServerSideProps({req, res}) {
    res.setHeader('Set-Cookie', 'some-cookie=someValue; Max-Age=0');
    const Router = useRouter()

    return {
        props: {}, // will be passed to the page component as props

    }
}

function Logout(props) {

    return <div></div>
}

export default Logout