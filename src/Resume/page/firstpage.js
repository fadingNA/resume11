import React from "react";
import "./firstpage.css";

import {useRef} from "react";

export default function start() {
    const navRef = useRef();
    return (
        <nav ref={navRef}>
            <div className="start-page">
                <div className="detail-page">
                    <a href="/indexmain">
                        {" "}
                        Welcome to my porfolio
                        <br/>
                        FINAL ASSESSMENT
                        <br/>
                        WEB222
                    </a>
                </div>
            </div>
        </nav>
    );
}
