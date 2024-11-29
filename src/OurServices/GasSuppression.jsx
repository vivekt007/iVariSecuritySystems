import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

import ArrowRight from "../assets/Icons/arrow-right.svg";
import Arrow from "../assets/Icons/top-arrow-right-up.svg";

// components
import Footer from "../components/Footer.jsx";

function GasSuppression() {
    const navigate = useNavigate();

    const handleFireExtiunguisher = () => {
        navigate("/services");
    };

    return (
        <div className="gas-suppression">
            <h1>Gas Suppression System</h1>
            <Footer />
        </div>
    );
}

export default GasSuppression;
