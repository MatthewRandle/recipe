import React from "react";
import Link from "next/link";
import Router from "next/router";

const Footer = () => {
    return(
        <footer className="footer_container">
            <div className="footer">
                <h2>recipe<span>randle</span></h2>

                <div className="footer_legal">
                    <Link href="/"><a>Privacy Policy</a></Link>
                    <Link href="/"><a>Terms and conditions</a></Link>
                    <Link href="/"><a>Cookie Policy</a></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;