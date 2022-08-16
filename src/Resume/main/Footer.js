import React from "react";

const Footer = () => (
    <div className="footer">
        <p>
            {" "}
            🇹🇭 former professional player Dota2 become full-time coding for 5 months
            🇹🇭{" "}
            <br/>
            Click Home Navigate to start
        </p>
        <div className={"social-icon"}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href={"#"}>
                <i className={"fa fa-facebook-square"}></i>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {"           "}
            <a href={"https://www.linkedin.com/in/nonthachai-plo♕dthong-0882271a4/"}>
                <i className={"fa fa-linkedin-square"}></i>
            </a>
        </div>
    </div>
);

export default Footer;
