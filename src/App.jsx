import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./webpages/Home.jsx";
import Services from "./webpages/Services.jsx";
import About from "./webpages/About.jsx";
import GroupCompanies from "./webpages/GroupCompanies.jsx";
import FireExtinguisher from "./OurServices/FireExtinguisher.jsx";
import FireAlarm from "./OurServices/FireAlarm.jsx";
import GasSuppression from "./OurServices/GasSuppression.jsx";
import FireHydrant from "./OurServices/FireHydrant.jsx";
import Cctv from "./OurServices/Cctv.jsx";
import Biometrics from "./OurServices/Biometrics.jsx";
import Signage from "./OurServices/Signage.jsx";
import SafetyTraning from "./OurServices/SafetyTraning.jsx";
import RiskAssessment from "./OurServices/RiskAssessment.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-screen">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/groupCompanies" element={<GroupCompanies />} />
                <Route
                    path="/fireExtinguisher"
                    element={<FireExtinguisher />}
                />
                <Route path="/fireHydrant" element={<FireHydrant />} />
                <Route path="/cctv" element={<Cctv />} />
                <Route path="/fireAlarm" element={<FireAlarm />} />
                <Route path="/biometrics" element={<Biometrics />} />
                <Route path="/gasSuppression" element={<GasSuppression />} />
                <Route path="/signage" element={<Signage />} />
                <Route path="/safetyTraning" element={<SafetyTraning />} />
                <Route path="/riskAssessment" element={<RiskAssessment />} />
            </Routes>
        </Router>
    );
}

export default App;
