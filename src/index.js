import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import PageNotFound from './pages/404.jsx'
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';

import Navigation from './common-comp/navigation';
import Navigationtop from './common-comp/topNavigation';

import { ParallaxProvider } from 'react-scroll-parallax';
import {React, useEffect, useState} from "react";
import Lenis from '@studio-freight/lenis'
import Works from './common-comp/Works.jsx';

// import Distortion from './utils/Distortion.jsx';

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: true,
  smoothWheel: true,
  touchMultiplier: 2,
});

window.lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

window.setTimeout(
  document.onreadystatechange = function () {
    document.querySelectorAll('a[href^="#"].scrollto').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'))
      });
    })
  }
  , 200)

function App () {
  raf()
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
      <ParallaxProvider>
        <Router>
          <Navigation/>
          <Navigationtop></Navigationtop>
          <Routes>
              <Route path='*' element={<PageNotFound />}></Route>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/works" element={<Works />}></Route>
          </Routes>
        </Router>
      </ParallaxProvider>
    </>
  )
}

App()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
