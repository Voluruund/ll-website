import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import PageNotFound from './pages/404.jsx'
import About from './pages/about';
import Home from './pages/home';

import Navigation from './common-comp/navigation';
import Navigationtop from './common-comp/topNavigation';

import { ParallaxProvider } from 'react-scroll-parallax';
import {React, useEffect, useState, useRef, useLayoutEffect} from "react";
import Lenis from '@studio-freight/lenis'

const config = {
  ease: 0.08,
  current: .8,
  next: 10,
  previous: 10,
  rounded: 0
};

const lenis = new Lenis({
  duration: 1.2,
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

function App () {
  
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
          </Routes>
        </Router>
      </ParallaxProvider>
    </>
  )
}

requestAnimationFrame(raf);
App()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
