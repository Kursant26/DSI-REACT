import React from 'react';
import LOGO from "../img/header-logo.svg";
import {AiOutlineHome} from "react-icons/all"
import {AiOutlineMail} from "react-icons/all"
import {TbArrowsCross} from "react-icons/all"

function Header() {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <img src={LOGO} alt=""/>
                    <div className="header-nav">
                        <a href="#">Services</a>
                        <a href="#">Product</a>
                        <a href="#">Technology</a>
                        <select>
                            <option>About</option>
                            <option>About2</option>
                            <option>About3</option>
                        </select>
                        <select>
                            <option>Client</option>
                            <option>Client2</option>
                            <option>Client3</option>
                        </select>
                        <a href="#">Partner</a>
                    </div>
                    <div className="header-icons">
                        <a href="#">
                            <AiOutlineHome/>
                        </a>
                        <a href="#">
                            <AiOutlineMail/>
                        </a>
                        <a href="#">
                            <TbArrowsCross/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header