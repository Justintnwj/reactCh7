import { useState } from "react";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/landingpage/Home";
import OurService from "./components/pages/landingpage/OurService";
import WhyUs from "./components/pages/landingpage/WhyUs";
import Testimony from "./components/pages/landingpage/Testimony";
import RentNow from "./components/pages/landingpage/RentNow";
import Faq from "./components/pages/landingpage/Faq";
import RentCar from "./components/pages/rentcarpage/RentCar";
import Login from "./components/adminpages/login/Login";
import LandingPage from "./components/adminpages/pagesadmin/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Layout>
            <Home />
            <OurService />
            <WhyUs />
            <Testimony />
            <RentNow />
            <Faq />
          </Layout>
        </>} />
        <Route path="/getcars" element={<>
          <Layout>
            <Home />
            <RentCar />
          </Layout>
        </>} />
        <Route path="/login" element={<>
          <Login />
        </>} />
        <Route path="/admindashboard" element={<>
          <LandingPage />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
