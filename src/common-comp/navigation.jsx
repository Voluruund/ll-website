import {Link} from "react-router-dom";
import { useState } from "react";
import Works from "./Works";

export default function Navigation(){

    const [isActive, setIsActive] = useState(false);

    const handleWorks = event => {
      setIsActive(current => !current);
    };

    window.onload = function(){
        let menu_option = "'menu'"
        let menu_other_option = "'x'"
        let menuToggle = document.querySelector('.menu-toggle')
        let menuToggle_after = window.getComputedStyle(menuToggle, '::before');
        menuToggle.onclick = function (){
            menuToggle.classList.toggle('active')
            setTimeout(function(){
                if(menuToggle_after.content === '"menu"'){
                    menuToggle.style.setProperty('--menu-content', menu_other_option)
                }else{
                    menuToggle.style.setProperty('--menu-content', menu_option)
                }
            }, 500)
        }
    }

    return <>
     {isActive ? <Works /> : null}
        <section className="navigation">
            <div className="menu-toggle">
                <ul>
                    <li><Link to="/" className='nav-item d-500' onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                    <li><Link to="/about" className='nav-item d-600' onClick={() => window.scrollTo(0, 0)}>about</Link></li>
                    <li><a className='nav-item d-700' onClick={handleWorks}>works</a></li>
                    <li><a to="/contact" className='nav-item d-800 scrollto' href="#form">contact</a></li>
                </ul>
            </div>
        </section>
    </>
       
}