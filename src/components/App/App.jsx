
import React from "react";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import RequestPage from "../RequestPage/RequestPage.jsx";
import ResultPage from "../ResultPage/ResultPage.jsx";

import "./App.css";

import {Route, Routes, Link } from "react-router-dom";


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/request" element={<RequestPage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
            {/*<Footer />*/}
        </>
    );
}

export default App;