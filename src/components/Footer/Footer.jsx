import React from "react";

import logoFooter from '../media/logoFooter.png';

import { Link } from "react-router-dom";

// import ResultPage from "../ResultPage/ResultPage.jsx";
// import {Route, Routes, Link } from "react-router-dom";

import "./Footer.css";


function Footer() {


    return(
        <footer>

            <div >
                <img className={"logoFooter"} src={logoFooter} alt="logoFooter"/>
            </div>

            <div className={"footer-info"}>
                <span>г. Москва, Цветной б-р, 40</span><br/>
                <span>+7 495 771 21 11</span><br/>
                <span>info@skan.ru</span><br/><br/>
                <span>Copyright. 2022</span>


            </div>

        </footer>


    );
}

export default Footer;