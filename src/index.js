import React from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App"
import "./css/style.css";
import Logo from './images/Asset.png';
ReactDOM.render(
    <>
        <img src={Logo}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </img>
    </>, document.getElementById("root")
)