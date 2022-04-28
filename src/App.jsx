import React from "react";
import "./assets/scss/common.scss";
import style from "./assets/scss/App.module.scss";
import Header from "./components/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Sparkle1 from "./assets/img/Sparkle1.png";
import Sparkle2 from "./assets/img/Sparkle2.png";

const App = () => {
  const parallax = React.useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClick = React.useCallback(
    (number) => {
      parallax.current.scrollTo(number);
    },
    [pathname]
  );

  React.useEffect(() => {
    switch (pathname) {
      case "/":
        onClick(0);
        break;
      case "/skill":
        onClick(1);
        break;
      case "/project":
        onClick(2);
        break;
      case "/contact":
        onClick(3);
        break;
      default:
        onClick(0);
        break;
    }
  }, [pathname]);

  React.useEffect(() => {
    const layers = parallax.current?.content.current;
    const paths = ["/", "/skill", "/project", "/contact"];

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index
          return navigate(paths[index]);
        }
      });
    }, {});

    try {
      if (layers) {
        layers.childNodes.forEach((v, i) => {
          console.log("do");
          observer.observe(v);
        });
      } 
    } catch (err) {
      if (err) {
        return;
      }
    }
  }, [parallax]);

  return (
    <>
      <Header onClick={onClick} />
      <main>
        <Parallax pages={4} style={{ top: "82px" }} ref={parallax}>
          <ParallaxLayer
            data-index={0}
            offset={0}
            speed={1}
            factor={1}
            style={{ backgroundColor: "#fff" }}
          >
            <AboutMe />
          </ParallaxLayer>

          <ParallaxLayer
            data-index={1}
            offset={1}
            speed={1}
            factor={1}
            style={{ backgroundColor: "#fff" }}
          >
            <Skill />
          </ParallaxLayer>

          <ParallaxLayer
            data-index={2}
            offset={2}
            speed={1}
            factor={1}
            style={{ backgroundColor: "#fff" }}
          >
            <Project />
          </ParallaxLayer>
          <ParallaxLayer
            data-index={3}
            offset={3}
            speed={1}
            factor={1}
            style={{ backgroundColor: "#fff" }}
          >
            <Contact />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 0, end: 0.3 }}>
            <img
              src={Sparkle2}
              alt="sparkle image1"
              className={style.sparkle2}
            />
            <img
              src={Sparkle1}
              alt="sparkle image1"
              className={style.sparkle1}
            />
          </ParallaxLayer>
        </Parallax>
      </main>
      <Routes>
        <Route path="/" element={this} />
        <Route path="/skill" element={this} />
        <Route path="/project" element={this} />
        <Route path="/contact" element={this} />
      </Routes>
    </>
  );
};

export default App;
