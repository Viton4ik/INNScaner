
import React from "react";

import Header from "../Header/Header.jsx";
import MainPic from '../media/MainPic.jsx';
import MiddlePic from '../media/MiddlePic.jsx';
import Footer from "../Footer/Footer.jsx";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import rightIcon from '../media/right-icon.png';
import leftIcon from '../media/left-icon.png';
import clockIcon from '../media/icons-clock.png';
import lensIcon from '../media/lens.png';
import lockIcon from '../media/lock-icon.png';
import lampIcon from '../media/lamp.png';
import aimIcon from '../media/aim.png';
import laptopIcon from '../media/laptop.png';
import tickIcon from '../media/tick.png';


import "./Main.css";

import {Link} from "react-router-dom";
import logo from "../media/SGN_141_141.png";

// import { Routes, Route, Link } from "react-router-dom";

function Main() {

    // $(document).ready(function() {
    //     $('.single-item').slick();
    // });

        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //
        // }

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
                    <div>
                        <div className={"main-page-whyWeAre-text"}>ПОЧЕМУ ИМЕННО МЫ</div>
                    </div>
                    <div className={"main-page-whyWeAre-carousel-container"}>
                        <div>
                            <img src={leftIcon} alt="leftIcon"/>
                            {/*<button type="button" className="slick-prev">Previous</button>*/}
                        </div>
                        <div className={"main-page-whyWeAre-carousel-container-slider"}>

                            <div className={"slide"}>
                                <div>
                                    <img src={clockIcon} alt="clockIcon"/>
                                </div>
                                <div className={"slide-text"}>Высокая и оперативная скорость обработки заявки</div>
                            </div>

                            <div className={"slide"}>
                                <div>
                                    <img src={lensIcon} alt="lensIcon"/>
                                </div>
                                <div className={"slide-text"}>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
                            </div>

                            <div className={"slide"}>
                                <div>
                                    <img src={lockIcon} alt="lockIcon"/>
                                </div>
                                <div className={"slide-text"}>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
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
                            {/*    <div>*/}
                            {/*        <h3>Slide 4</h3>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <h3>Slide 5</h3>*/}
                            {/*    </div>*/}
                            {/*</Slider>*/}
                        </div>
                        <div>
                            {/*<button type="button" className="slick-next">Next</button>*/}
                            <img src={rightIcon} alt="rightIcon"/>
                        </div>

                    </div>
                </div>

                <div className={"main-page-pic-middle-container"}>
                    <MiddlePic className={"main-page-pic-middle"}/>
                </div>

                <div className={"main-page-prices"}>
                    <div>
                        <div className={"main-page-prices-details-text"}>НАШИ ТАРИФЫ</div>
                    </div>
                    <div className={"main-page-prices-details"}>

                        <div style={{border: "2px solid #FFB64F"}} className={"main-page-tariff"}>
                            <div className={"main-page-tariff-head-left"}>
                                <div className={"main-page-tariff-text"}>
                                    <div className={"main-page-tariff-text-topic"}>
                                        Beginner
                                    </div>
                                    <div className={"main-page-tariff-text-info"}>
                                        Для небольшого исследования
                                    </div>
                                </div>
                                <div className={"main-page-tariff-icon"} >
                                    <img src={lampIcon} alt="lampIcon"/>
                                </div>
                            </div>

                            <div className={"main-page-tariff-body"}>
                               <div className={"main-page-tariff-body-tariff"}>
                                   <span>Текущий тариф</span>
                               </div>
                                <div className={"main-page-tariff-body-price"}>
                                    <div className={"main-page-tariff-body-price-left"}>
                                        799 ₽
                                    </div>
                                    <div className={"main-page-tariff-body-price-right"}>
                                        1 200 ₽
                                    </div>
                                </div>
                                <div className={"main-page-tariff-body-price-details"}>
                                    или 150 ₽/мес. при рассрочке на 24 мес.
                                </div>
                                <div className={"main-page-tariff-body-tariff-details"}>
                                    <span>В тариф входит:</span>
                                </div>
                                <div className={"main-page-tariff-body-tariff-details-explanations"}>
                                    <img src={tickIcon} alt="tickIcon"/>
                                    <span> Безлимитная история запросов</span>
                                </div>
                                <div className={"main-page-tariff-body-tariff-details-explanations"}>
                                    <img src={tickIcon} alt="tickIcon"/>
                                    <span> Безопасная сделка</span>
                                </div>
                                <div className={"main-page-tariff-body-tariff-details-explanations"}>
                                    <img src={tickIcon} alt="tickIcon"/>
                                    <span> Поддержка 24/7</span>
                                </div>
                                <Link className={"tariff-button-link-effect"} to='#'>
                                    <div className={"tariff-button"}>
                                        <div className={"tariff-button-text"}>Перейти в личный кабинет</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className={"main-page-tariff"}>
                            <div className={"main-page-tariff-head-middle"}>
                                <div className={"main-page-tariff-text"}>
                                    <div className={"main-page-tariff-text-topic"}>
                                        Pro
                                    </div>
                                    <div className={"main-page-tariff-text-info"}>
                                        Для HR и фрилансеров
                                    </div>
                                </div>
                                <div className={"main-page-tariff-icon"} >
                                    <img src={aimIcon} alt="aimIcon"/>
                                </div>
                            </div>

                            <div className={"main-page-tariff-body"}>
                                <div className={"main-page-tariff-body-tariff"}>
                                    <span>Текущий тариф</span>
                                </div>
                                <div className={"main-page-tariff-body-price"}>
                                    <div className={"main-page-tariff-body-price-left"}>
                                        1 299 ₽
                                    </div>
                                    <div className={"main-page-tariff-body-price-right"}>
                                        2 600 ₽
                                    </div>
                                </div>
                                <div className={"main-page-tariff-body-price-details"}>
                                    или 279 ₽/мес. при рассрочке на 24 мес.
                                </div>
                                <div className={"main-page-tariff-body-tariff-details"}>
                                    <span>В тариф входит:</span>
                                </div>
                                <div className={"main-page-tariff-body-tariff-details-explanations"}>
                                    <img src={tickIcon} alt="tickIcon"/>
                                    <span> Все пункты тарифа Beginner</span>
                                </div>
                                <div className={"main-page-tariff-body-tariff-details-explanations"}>
                                    <img src={tickIcon} alt="tickIcon"/>
                                    <span> Экспорт истории</span>
                                </div>
                                <div className={"main-page-tariff-body-tariff-details-explanations"}>
                                    <img src={tickIcon} alt="tickIcon"/>
                                    <span> Рекомендации по приоритетам</span>
                                </div>
                                <Link className={"tariff-button-link-effect"} to='#'>
                                    <div className={"tariff-button-new"}>
                                        <div className={"tariff-button-text-new"}>Подробнее</div>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <div className={"main-page-tariff"}>
                            <div className={"main-page-tariff-head-right"}>
                                <div className={"main-page-tariff-text"}>
                                    <div style={{color: "#FFF"}} className={"main-page-tariff-text-topic"}>
                                        Business
                                    </div>
                                    <div style={{color: "#FFF"}}  className={"main-page-tariff-text-info"}>
                                        Для корпоративных клиентов
                                    </div>
                                </div>
                                <div className={"main-page-tariff-icon"} >
                                    <img src={laptopIcon} alt="laptopIcon"/>
                                </div>
                            </div>

                            <div className={"main-page-tariff-body"}>
                                <div className={"main-page-tariff-body-tariff"}>
                                    <span>Текущий тариф</span>
                                </div>
                                <div className={"main-page-tariff-body-price"}>
                                    <div className={"main-page-tariff-body-price-left"}>
                                        2 379 ₽
                                    </div>
                                    <div className={"main-page-tariff-body-price-right"}>
                                        3 700 ₽
                                    </div>
                                </div>
                                <div className={"main-page-tariff-body-price-details"}>

                                </div>
                                <div className={"main-page-tariff-body-tariff-details"}>
                                    <span>В тариф входит:</span>
                                </div>
                                <div className={"main-page-tariff-body-tariff-details-explanations"}>
                                    <img src={tickIcon} alt="tickIcon"/>
                                    <span> Все пункты тарифа Pro</span>
                                </div>
                                <div className={"main-page-tariff-body-tariff-details-explanations"}>
                                    <img src={tickIcon} alt="tickIcon"/>
                                    <span> Безлимитное количество запросов</span>
                                </div>
                                <div className={"main-page-tariff-body-tariff-details-explanations"}>
                                    <img src={tickIcon} alt="tickIcon"/>
                                    <span> Приоритетная поддержка</span>
                                </div>
                                <Link className={"tariff-button-link-effect"} to='#'>
                                    <div className={"tariff-button-new"}>
                                        <div className={"tariff-button-text-new"}>Подробнее</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"main-page-footer"}>
                    <Footer />
                </div>

            </div>

        </main>
    );
}

export default Main;