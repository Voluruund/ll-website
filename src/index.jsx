import React from 'react';
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
import Form from './common-comp/form';

function index(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Router>
      {/* inserire qui il codice extra router tipo la navbar */}
      <Navigation/>
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Form></Form>
    </Router>
  )
}

index()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
