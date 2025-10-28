// src/App.js
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";   // ✅ Import About
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />     {/* ✅ Ye line add karo */}
         <Skills />  
        <Projects /> 
         <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
