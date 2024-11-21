import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./webpages/Home.jsx";
import Services from "./webpages/Services.jsx";
import About from "./webpages/About.jsx";
import GroupCompanies from "./webpages/GroupCompanies.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/groupCompanies" element={<GroupCompanies />} />
            </Routes>
        </Router>
    );
}

export default App;
