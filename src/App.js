// styles
import "./Styles/Ifo.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Layouts
import { MbNavbar, Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import { Homepage } from "./Pages/Homepage";
import { LeaderboardPage } from "./Pages/Leaderboard Page";
import { IFOPage } from "./Pages/IFO Page";
import Swap from "./Pages/Swap";
import Swap_Page from "./Pages/Swap_Page";
import { AffiliatesPage } from "./Pages/AffiliatesPage";
import { Aptos_Page } from "./Pages/Aptos_Page";
import PageNotFound from "./Components/PageNotFound";
import { AffiliatesDashboard } from "./Pages/AffiliatesDashboard";

let darkPref = localStorage.getItem("darkMode");

function App() {
  const [time, setTime] = useState(new Date());
  function updateClock() {
    const now = new Date();
    setTime(now);
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");

    const timeString = `${hour}:${minute}`;
    document.getElementById("clock").innerText = timeString;
  }

  useEffect(() => {
    updateClock();
    setInterval(updateClock, 60000);
  }, []);

  return (
    <div>
      <img
        src="/images/phone-mockup.png"
        alt="logo"
        style={{
          width: "414px",
          height: "896px",
          zIndex: 9999999999999999,
          position: "fixed",
          top: "0px",
          pointerEvents: "none",
        }}
      />
      <div id="clock"></div>
      <img
        src="/images/wifi.png"
        alt="logo"
        style={{
          width: "21px",
          zIndex: 999999999999,
          position: "fixed",
          top: "40px",
          right: "84px",
        }}
      ></img>
      <img
        src="/images/battery.png"
        alt="logo"
        style={{
          width: "30px",
          zIndex: 999999999999,
          position: "fixed",
          top: "36px",
          right: "43px",
        }}
      ></img>
      <img
        src="/images/data.png"
        alt="logo"
        style={{
          width: "20px",
          zIndex: 999999999999,
          position: "fixed",
          top: "40px",
          right: "116px",
        }}
      ></img>

      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/affiliates-program" element={<AffiliatesPage />} />
        <Route path="/affiliates-dashboard" element={<AffiliatesDashboard />} />
        <Route path="/aptos" element={<Aptos_Page />} />
        <Route path="/ifo" element={<IFOPage></IFOPage>} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/swap" element={<Swap_Page />} />
        <Route path="/testingswap" element={<Swap />} />
      </Routes>
      <Footer />
      <MbNavbar />
    </div>
  );
}

export default App;
