
import React from "react";

import Header from "../Header/Header.jsx";

import MainPic from '../media/MainPic.jsx';

import "./Main.css";

// import { Routes, Route, Link } from "react-router-dom";

function Main() {

    return(
        <main>
            <Header />

            <div className={"main-page-greetings"}>
                <div className={"main-page-greetings-left"}>
                    <div>1111</div>
                    <div>2222</div>
                    <div>3333</div>
                </div>
                <div className={"main-page-greetings-right"}>
                    <div className={"main-page-pic"}>
                        <MainPic />
                    </div>
                </div>

            </div>

        </main>
    );
}

export default Main;