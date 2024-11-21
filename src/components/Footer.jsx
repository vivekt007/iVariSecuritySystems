import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo/whiteLogo.svg";
import menuIcon from "../assets/Icons/hamburgerMenu.svg";
import closeIcon from "../assets/Icons/close.svg";
import Arrow from "../assets/Icons/top-arrow-right-up.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import Phone from "../assets/Icons/Phone.svg";
import Mail from "../assets/Icons/Mail.svg";
import Location from "../assets/Icons/Location.svg";

import "../styles/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-row1">
                <div className="footer-r1-col1">
                    <img src={Logo} alt="Logo" className="footer-logo" />
                    <h3>iVari Security Systems Pvt Ltd</h3>
                    <p>
                        Innovative security solutions with a commitment to
                        safety, sustainability, and client satisfaction.
                        Discover how we’re redefining safety.
                    </p>
                </div>
                <div className="footer-r1-col2">
                    <div className="footer-r1-c1-col1">
                        <h3>Connect</h3>
                        <ul>
                            <a href="https://www.linkedin.com/company/ivari-security-systems-pvt-ltd/">
                                <p>LinkedIn</p>
                            </a>
                            <a href="https://www.instagram.com/ivari.in/">
                                <p>Instagram</p>
                            </a>
                            <a href="https://x.com/ivari_in">
                                <p>Twitter</p>
                            </a>
                            <a href="https://www.facebook.com/ivari.in/">
                                <p>Facebook</p>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-r1-c1-col2">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <NavLink to="/about">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services">Services</NavLink>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/ivari-security-systems-pvt-ltd/">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-r1-c1-col3">
                        <h3>
                            <img src={Location} alt="" /> Our Address
                        </h3>
                        <ul>
                            <li>
                                <a href="/">KA Registered Office</a>
                                <img src={Arrow} alt="->" />
                            </li>
                            <li>
                                <a href="/">KA Corporate Office</a>
                                <img src={Arrow} alt="->" />
                            </li>
                            <li>
                                <a href="/">KA Regional Office</a>
                                <img src={Arrow} alt="->" />
                            </li>
                            <li>
                                <a href="/">TN Head Office</a>
                                <img src={Arrow} alt="->" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-row2">
                <div className="footer-r2-col1">
                    <span>
                        <img src={Phone} alt="Phone No" />
                        <a href="/">+91 9606850350</a>
                    </span>
                    <span>
                        <img src={Mail} alt="Mail" />
                        <a href="/">iamsafe@ivari.in</a>
                    </span>
                </div>
                <div className="footer-r2-col2">
                    <p>
                        Copyright © {currentYear} iVari Security Systems  Pvt
                        Ltd - All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
