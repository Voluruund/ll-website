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


const config = {
  ease: 0.08,
  current: .8,
  next: 10,
  previous: 10,
  rounded: 0
};

const SmoothScroll = ({ children }) => {
  const [height, setHeight] = useState(0);
  const app = useRef();
  const scroll = useRef();

  const smooth = () => {
    config.current = window.scrollY || window.pageYOffset;
    config.previous += (config.current - config.previous) * config.ease;
    config.next += (config.current + config.next) * config.ease;
    config.rounded = Math.round(config.previous * 100) / 100;
    scroll.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${config.rounded}, 0, 1)`;
    requestAnimationFrame(() => smooth());
  };

  const measure = () => setHeight(scroll.current.scrollHeight);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useLayoutEffect(() => {
    requestAnimationFrame(smooth);
  }, []);

  return (
    <div ref={app}className="smoothScroll">
      <div ref={scroll} className='ox-hidden'>{children}</div>
    </div>
  );
};

function App () {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
      <ParallaxProvider>
        <Router>
          <Navigation/>
          <Navigationtop></Navigationtop>
          <SmoothScroll>
            <Routes>
                <Route path='*' element={<PageNotFound />}></Route>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </SmoothScroll>
        </Router>
      </ParallaxProvider>
    </>
  )
}

App()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
