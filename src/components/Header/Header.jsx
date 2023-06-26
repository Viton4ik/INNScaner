import React from "react";

import logo from '../media/SGN_09_24_2022_1663968217400 1.png';

// import ResultPage from "../ResultPage/ResultPage.jsx";

import {Route, Routes, Link } from "react-router-dom";

import "./Header.css";


function Header() {


    return(
        <div className={"header"}>
            <div >
                <img className={"logo"} src={logo} alt="logo"/>
            </div>
            <div>
                <div>Главная</div>
                <div>Тарифы</div>
                <div>FAQ</div>
            </div>
            <div>
                <div>Зарегистрироваться</div>
                <div>Войти</div>
            </div>

        </div>
    );
}

export default Header;