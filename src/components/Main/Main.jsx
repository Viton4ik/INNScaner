
import React from "react";

import Header from "../Header/Header.jsx";
import MainPic from '../media/MainPic.jsx';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Main.css";

import {Link} from "react-router-dom";

// import { Routes, Route, Link } from "react-router-dom";

function Main() {

    // $(document).ready(function() {
    //     $('.single-item').slick();
    // });

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

    return(
        <main>

            <div className={"main-page"}>
                <Header className={"main-page-header"}/>
                <div className={"main-page-greetings"}>
                    <div className={"main-page-greetings-left"}>
                        <div className={"main-page-greetings-left-text"}>
                            <span>СЕРВИС ПО ПОИСКУ</span>
                            <span>ПУБЛИКАЦИЙ </span>
                            <span>О КОМПАНИИ </span>
                            <span>ПО ЕГО ИНН</span>
                        </div>
                        <div className={"main-page-greetings-left-textSmall"}>
                            <span>Комплексный анализ публикаций, получение данных</span>
                            <span>в формате PDF на электронную почту.</span>
                        </div>
                        <Link className={"request-button-link-effect"} to='#'>
                            <div className={"request-button"}>
                                <div className={"request-button-text"}>Запросить данные</div>
                            </div>
                        </Link>
                    </div>
                    <div className={"main-page-greetings-right"}>
                        <div>
                            <MainPic className={"main-page-pic"}/>
                        </div>
                    </div>
                </div>
                <div className={"main-page-whyWeAre"}>
                    <div className={"main-page-whyWeAre-text"}>
                        <span>ПОЧЕМУ ИМЕННО МЫ</span>
                    </div>

                    {/*<Slider {...settings}>*/}
                    {/*    <div>*/}
                    {/*        <h3>Slide 1</h3>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <h3>Slide 2</h3>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <h3>Slide 3</h3>*/}
                    {/*    </div>*/}
                    {/*</Slider>*/}
                    <div className={"main-page-whyWeAre-carousel"}>

                    </div>
                </div>

                <div className={"main-page-pic-middle"}>

                </div>
                <div className={"main-page-prices"}>
                    <div className={"main-page-prices-details"}>

                    </div>
                </div>
                <div className={"footer"}>

                </div>

            </div>

        </main>
    );
}

export default Main;