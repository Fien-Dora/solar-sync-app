// src/pages/LandingPage.jsx
import React from "react";
import Welcome from "../components/Landing/Welcome";
import AnimatedPage from "../components/AnimatedPage";

const LandingPage = () => {
  return (
    <>
      <AnimatedPage>
        <Welcome />
      </AnimatedPage>
    </>
  );
};

export default LandingPage;
