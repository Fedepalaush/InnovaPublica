import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <div className="section-divider"></div>
        <Services />
        <div className="section-divider"></div>
        <Workflow />
        <div className="section-divider"></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
