import React from "react";
import Head from "next/head";

import "../stylesheets/css/Footer.css";
import "../stylesheets/css/Home.css";
import "../stylesheets/css/Navbar.css";
import "../stylesheets/css/Preview.css";
import "../stylesheets/css/Reset.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@800&display=swap" rel="stylesheet"></link>
            </Head>

            <Component {...pageProps} />
        </div>
    )
}