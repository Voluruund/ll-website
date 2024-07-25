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

import Vanni from './pages/work-pages/Vanni.jsx';
import Orchestra from './pages/work-pages/Orchestra.jsx';
import Branchetti from './pages/work-pages/Branchetti.jsx';
import Cavallini from './pages/work-pages/Cavallini.jsx';
import StudioBigne from './pages/work-pages/StudioBigne.jsx';
import CesareLampronti from './pages/work-pages/CesareLampronti.jsx';
import Pegaso from './pages/work-pages/Pegaso.jsx';
import PercorsiSomatici from './pages/work-pages/PercorsiSomatici.jsx';
import GuiaNerli from './pages/work-pages/GuiaNerli.jsx';

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

  window.onload = function(){
    window.localStorage.clear();

    let menu_option = "'menu'"
    let menu_other_option = "'x'"
    let menuToggle = document.querySelector('.menu-toggle')
    let menuToggle_after = window.getComputedStyle(menuToggle, '::before');
    menuToggle.onclick = function (){
        menuToggle.classList.toggle('active')
        console.log('clicked')
        setTimeout(function(){
            if(menuToggle_after.content === '"menu"'){
                menuToggle.style.setProperty('--menu-content', menu_other_option)
            }else{
                menuToggle.style.setProperty('--menu-content', menu_option)
            }
        }, 500)
    }
};

function App () {

  var navigation

  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        navigation = document.getElementById('btNav')
        window.addEventListener('scroll', function(e) {
          navigation.classList.add("navigation-anim")
        })
    }
  }

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
              <Route index exact path="/" element={<Home />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/works" element={<Works />}></Route>
              <Route path='/works/vanni' element={<Vanni></Vanni>}></Route>
              <Route path='/works/Orchestra' element={<Orchestra></Orchestra>}></Route>
              <Route path='/works/Cavallini' element={<Cavallini></Cavallini>}></Route>
              <Route path='/works/Orchestra' element={<Orchestra></Orchestra>}></Route>
              <Route path='/works/Branchetti' element={<Branchetti></Branchetti>}></Route>
              <Route path='/works/StudioBigne' element={<StudioBigne></StudioBigne>}></Route>
              <Route path='/works/CesareLampronti' element={<CesareLampronti></CesareLampronti>}></Route>
              <Route path='/works/Pegaso' element={<Pegaso></Pegaso>}></Route>
              <Route path='/works/PercorsiSomatici' element={<PercorsiSomatici></PercorsiSomatici>}></Route>
              <Route path='/works/GuiaNerli' element={<GuiaNerli></GuiaNerli>}></Route>
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
