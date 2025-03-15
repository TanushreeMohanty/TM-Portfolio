import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Ensure the path is correct
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Blog />
      <Testimonials />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
