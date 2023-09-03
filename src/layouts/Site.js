import React from "react";
import { Route } from "react-router-dom";
import '../css/style.css';
import HomePage from "../pages/HomePage";
import Glossary from "../pages/Glossary";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Online from "../components/Online";
import HomeLearning from "../components/HomeLearning";
import Finances from "../components/Finances";
import Certificate from "../components/Certificate";

function Site() {
    return (
        <>
            <Route path="/English-Language-School" component={HomePage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/glossary" component={Glossary} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/online" component={Online} />
            <Route path="/home-learning" component={HomeLearning} />
            <Route path="/finances" component={Finances} />
            <Route path="/certificate" component={Certificate} />
        </>
    )
}

export default Site;