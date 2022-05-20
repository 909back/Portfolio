import React from "react";
import "./assets/scss/common.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";

// pages
import Header from './components/Header';
import AboutMe from "./pages/AboutMe";
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<AboutMe/>} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
};

export default App;
