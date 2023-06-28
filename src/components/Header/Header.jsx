import React from "react";

import logo from '../media/SGN_141_141.png';
import logo_mob from '../media/SGN_111_111.png';

import { Link } from "react-router-dom";

// import ResultPage from "../ResultPage/ResultPage.jsx";
// import {Route, Routes, Link } from "react-router-dom";

import "./Header.css";


function Header() {


    return(
        <header>

            <div >
                <img className={"logo"} src={logo} alt="logo"/>
            </div>
            <div className={"middle-block"}>
                <div className={"middle-block-main"}>
                    <Link className={"middle-block-link-effect"} to='/'>Главная</Link>
                </div>
                <div className={"middle-block-prices"}>
                    <Link className={"middle-block-link-effect"} to='/404'>Тарифы</Link>
                </div>
                <div className={"middle-block-faq"}>
                    <Link className={"middle-block-link-effect"} to='/404'>FAQ</Link>
                </div>
            </div>

            <div className={"right-block"}>

                <div className={"registration-link"}>
                    <Link className={"registration-link-effect"} to='/404'>Зарегистрироваться</Link>
                </div>
                <div className={"line"} />
                <Link className={"enter-button-link-effect"} to='/login'>
                    <div className={"enter-button"}>
                        <div className={"enter-button-text"}>Войти</div>
                    </div>
                </Link>

                <div className={"right-block-mobile"}>
                    <Link className={"right-block-mobile-effect"} to='/login'>
                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 6">
                            <rect id="Rectangle 8" width="30" height="5" fill="#029491"/>
                            <rect id="Rectangle 9" y="10" width="30" height="5" fill="#029491"/>
                            <rect id="Rectangle 10" y="20" width="30" height="5" fill="#029491"/>
                        </g>
                    </svg>
                    </Link>
                </div>

            </div>

        </header>



        // <>
        //     <div className="box">
        //         <div className="view-wrapper">
        //             <div className="view">
        //                 <img className="SGN" src={logo} alt="logo" />
        //                 <img className="SGN_small" src={logo_mob} alt="logo_mob" />
        //                 <div className="group">
        //                     <div className="text-wrapper">Главная</div>
        //                     <div className="div">Тарифы</div>
        //                     <div className="text-wrapper-2">FAQ</div>
        //                 </div>
        //                 <div className="group-2">
        //                     <div className="text-wrapper-3">Зарегистрироваться</div>
        //                     <div className="overlap-group-wrapper">
        //                         <div className="overlap-group">
        //                             <div className="text-wrapper-4">Войти</div>
        //                         </div>
        //                     </div>
        //                     <div className="rectangle" />
        //                 </div>
        //                 <div className="group_small">
        //                     <div className="rectangle_small" />
        //                     <div className="div_small" />
        //                     <div className="rectangle-2_small" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //
        //     {/*<div className="box_small">*/}
        //     {/*    <div className="view-wrapper_small">*/}
        //     {/*        <div className="view_small">*/}
        //     {/*            <img className="SGN_small" src={logo} alt="logo" />*/}
        //     {/*            <div className="group_small">*/}
        //     {/*                <div className="rectangle_small" />*/}
        //     {/*                <div className="div_small" />*/}
        //     {/*                <div className="rectangle-2_small" />*/}
        //     {/*            </div>*/}
        //     {/*        </div>*/}
        //     {/*    </div>*/}
        //     {/*</div>*/}
        // </>

    );
}

export default Header;