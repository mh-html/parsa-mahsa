import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Cookes from "./pages/cookes";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contact";

function App() {
  return (
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cookes" element={<Cookes />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
