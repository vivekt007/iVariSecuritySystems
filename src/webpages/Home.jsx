import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import "../styles/Home.css";
import Arrow from "../assets/Icons/top-arrow-right-up.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import Logo3D from "../assets/BackgroundImg/iVariLogo3d.png";
import Zudio from "../assets/Logo/Zudio.png";
import NammaYatri from "../assets/Logo/NammaYatri.png";
import Aurigene from "../assets/Logo/Aurigene.png";
import CareersImg from "../assets/BackgroundImg/CareersImage.png";
import Footer from "../components/Footer.jsx";

function Home() {
    const navigate = useNavigate();

    const handleServicesNav = () => {
        navigate("/services");
    };

    const handleAboutNav = () => {
        navigate("/about");
    };

    const handleCareerNav = () => {
        window.location.href =
            "https://www.linkedin.com/company/ivari-security-systems-pvt-ltd/";
    };

    return (
        <div className="home">
            <section className="hero-section">
                <div className="hero-col1">
                    <h1>SAFEGUARDING WHAT MATTERS</h1>
                    <p>
                        Protecting lives, assets, and peace of mind with
                        customized solutions in fire safety, surveillance, and
                        security management. iVari delivers industry-leading
                        expertise and service, ensuring comprehensive protection
                        for homes and businesses alike.
                    </p>
                    <button className="hero-cta" onClick={handleServicesNav}>
                        Explore Our Services <img src={ArrowRight} alt="->" />
                    </button>
                </div>
                <div className="hero-col2">
                    <img src={Logo3D} alt="3d logo" />
                </div>
            </section>

            <section className="services-section">
                <h1>Services</h1>
            </section>
            <section className="about-section">
                <div className="about-sec-col1">
                    <div className="about-c1-container">
                        <span>
                            <h1>WHO WE ARE -</h1>
                            <h1>YOUR PARTNERS IN SAFETY</h1>
                        </span>
                        <p>
                            At iVari, we believe safety is more than just a
                            service—it’s a promise. From fire protection to
                            advanced surveillance, our solutions are crafted to
                            protect and empower. Driven by innovation and
                            integrity, we’re here to make safety accessible,
                            reliable, and tailored to your world.
                        </p>
                    </div>
                </div>
                <div className="about-sec-col2">
                    <div className="graphic-element9 graphic-element">
                        <div className="graphic-element8 graphic-element">
                            <div className="graphic-element7 graphic-element">
                                <div className="graphic-element6 graphic-element">
                                    <div className="graphic-element5 graphic-element">
                                        <div className="graphic-element4 graphic-element">
                                            <div className="graphic-element3 graphic-element">
                                                <div className="graphic-element2 graphic-element">
                                                    <div className="graphic-element1 graphic-element">
                                                        <button
                                                            className="about-cta"
                                                            onClick={
                                                                handleAboutNav
                                                            }
                                                        >
                                                            More About Us
                                                            <img
                                                                src={ArrowRight}
                                                                alt="->"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-clients-section">
                <div className="clients-col1">
                    <div className="clients-c1-container">
                        <span>
                            <h1>OUR CLIENTS</h1>
                        </span>
                        <p>
                            Our clients rely on iVari for safety and security
                            solutions they can count on. From residential to
                            commercial sectors, we’re proud to protect those who
                            value quality, innovation, and peace of mind.
                        </p>
                    </div>
                </div>
                <div className="clients-col2">
                    <div className="clients-c2-row1">
                        <div className="clients-c2-card">
                            <div className="clients-card-row1">
                                <img src={Zudio} alt="Client1" />
                                <h2>Zudio</h2>
                            </div>
                            <div className="clients-card-row2">
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div className="clients-c2-card">
                            <div className="clients-card-row1">
                                <img src={NammaYatri} alt="Client1" />
                                <h2>Namma Yatri</h2>
                            </div>
                            <div className="clients-card-row2">
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="clients-c2-row2">
                        <div className="clients-c2-card">
                            <div className="clients-card-row1">
                                <img src={Aurigene} alt="Client1" />
                                <h2>Aurigene</h2>
                            </div>
                            <div className="clients-card-row2">
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div className="clients-c2-card other-clients">
                            <h2>59 Others</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="career-section">
                <div className="careers-section-col1">
                    <div className="careers-c1-container">
                        <span>
                            <h1>CAREERS</h1>
                        </span>
                        <p>
                            Every day at iVari brings new challenges and
                            opportunities to learn. As a young, ambitious team,
                            we’re driven by the shared goal of creating safer
                            spaces for all. If you’re ready to grow, adapt, and
                            make an impact, join us on this exciting journey.
                        </p>
                        <button
                            className="career-cta"
                            onClick={handleCareerNav}
                        >
                            Start Your Journey with iVari
                            <img src={ArrowRight} alt="->" />
                        </button>
                    </div>
                </div>
                <div className="careers-section-col2">
                    <img src={CareersImg} alt="Careers image" />
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-row1">
                    <h1>LET'S WORK TOGETHER</h1>
                    <p>
                        “Whether you’re curious about our services, need
                        assistance, or want to discuss safety solutions, we’d
                        love to hear from you. Let’s start the conversation!”
                    </p>
                </div>
                <form className="contact-row2">
                    <div className="contact-form-row1">
                        <input
                            type="text"
                            placeholder="NAME"
                            name="contactName"
                            id="contactId"
                            required
                        />
                        <input
                            type="email"
                            name="emailId"
                            id="emailId"
                            placeholder="EMAIL"
                            required
                        />
                    </div>
                    <div className="contact-form-row2">
                        <textarea
                            name="contactMessage"
                            id="contactMessage"
                            placeholder="MESSAGE"
                            required
                        ></textarea>
                    </div>
                    <div className="contact-form-row3">
                        <div className="contact-graphic-element9 contact-graphic-element">
                            <div className="contact-graphic-element8 contact-graphic-element">
                                <div className="contact-graphic-element7 contact-graphic-element">
                                    <div className="contact-graphic-element6 contact-graphic-element">
                                        <div className="contact-graphic-element5 contact-graphic-element">
                                            <div className="contact-graphic-element4 contact-graphic-element">
                                                <div className="contact-graphic-element3 contact-graphic-element">
                                                    <div className="contact-graphic-element2 contact-graphic-element">
                                                        <div className="contact-graphic-element1 contact-graphic-element">
                                                            <button
                                                                type="submit"
                                                                className="contact-cta"
                                                            >
                                                                SEND MESSAGE
                                                                <img
                                                                    src={
                                                                        ArrowRight
                                                                    }
                                                                    alt="->"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="follow-us-links">
                            <h4>FOLLOW US</h4>
                            <a href="https://www.linkedin.com/company/ivari-security-systems-pvt-ltd/">
                                <p>LinkedIn</p>
                                <img src={Arrow} alt="->" />
                            </a>
                            <a href="https://www.instagram.com/ivari.in/">
                                <p>Instagram</p>
                                <img src={Arrow} alt="->" />
                            </a>
                            <a href="https://x.com/ivari_in">
                                <p>Twitter</p>
                                <img src={Arrow} alt="->" />
                            </a>
                            <a href="https://www.facebook.com/ivari.in/">
                                <p>Facebook</p>
                                <img src={Arrow} alt="->" />
                            </a>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
