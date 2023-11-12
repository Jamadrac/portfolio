import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Graphid from "./components/Graphid.jsx"; // New Page
import Gallary from "./components/Gallary.jsx"; // New Page
import Gps from "./pages/Gps.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gps" element={<Gps />} />
      <Route path="/graphid" element={<Graphid />} />
      <Route path="/gallary" element={<Gallary />} />
    </Routes>
  );
};

export default App;
