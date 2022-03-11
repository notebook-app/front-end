import React from "react";
import App from "./App";
import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./styles/index.css";

import Nav from "./components/layout/Nav";
import StickyNotes from "./views/StickyNotes";

render(
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path={"/"} element={<App/>}/>
            <Route path={"/sticky-notes"} element={<StickyNotes/>}/>
        </Routes>
    </BrowserRouter>

    , document.querySelector('#root'));
