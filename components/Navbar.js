import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [revealMobileNavbar, setRevealMobileNavbar] = useState(false);
    const [revealFeaturesModal, setRevealFeaturesModal] = useState(false);

    useEffect(() => {
        document.body.style.overflow = revealMobileNavbar ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [revealMobileNavbar]);

    return(
        <div style={{ width: "100%" }}>
            <nav style={{ width: "100%", backgroundColor:  "white" }}>
                <ReusableNavbar 
                    setRevealMobileNavbar={setRevealMobileNavbar} 
                    revealFeaturesModal={revealFeaturesModal}
                    setRevealFeaturesModal={setRevealFeaturesModal}  
                />
            </nav>

            {revealMobileNavbar ? 
                <MobileNavbar 
                    setRevealMobileNavbar={setRevealMobileNavbar} 
                    revealFeaturesModal={revealFeaturesModal}
                    setRevealFeaturesModal={setRevealFeaturesModal} 
                /> 
                : null
            }
        </div>
    );
};

export default Navbar;

const ReusableNavbar = ({ setRevealMobileNavbar }) => (
    <nav className="navbar_container">
        <div className="navbar">
            <Link href="/">
                <a>
                    <h2>recipe<span>randle</span></h2>
                </a>
            </Link>

            <img src="/hamburger.svg" alt="Menu button" onClick={() => setRevealMobileNavbar(true)} />
        </div>
    </nav>
);

const MobileNavbar = ({ setRevealMobileNavbar }) => {
    return(
        <nav className="navbarMobile_container">            
            <div className="navbarMobile">
                <div className="navbarMobile_close" onClick={() => setRevealMobileNavbar(false)}>✕</div>
                <Link href="/">
                    <a>
                        <h2>recipe<span>randle</span></h2>
                    </a>
                </Link>
            </div>                
        </nav>
    );
};