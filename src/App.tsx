import React from "react";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect } from "react";
import NotFound from "./Pages/NotFound";
import Response from "./components/Response";
import Home from "./Pages/Home";
import CommingSoon from "./Pages/Blog";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<CommingSoon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
