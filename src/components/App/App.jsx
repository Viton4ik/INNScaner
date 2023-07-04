
import React from "react";

// import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import RequestPage from "../RequestPage/RequestPage.jsx";
import ResultPage from "../ResultPage/ResultPage.jsx";
import Page404 from "../404/Page404.jsx";

import "./App.css";

import {Route, Routes, Link } from "react-router-dom";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/request" element={<RequestPage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/404" element={<Page404 />} />
            </Routes>

        </>
    );
}

export default App;