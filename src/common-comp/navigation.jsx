import {Link} from "react-router-dom";
import { StrictMode } from "react";

export default function Navigation(){

    // window.onload = function(){
        // let menu_option = "'menu'"
        // let menu_other_option = "'x'"
        // let menuToggle = document.querySelector('.menu-toggle')
        // let menuToggle_after = window.getComputedStyle(menuToggle, '::before');
        // menuToggle.onclick = function (){
        //     menuToggle.classList.toggle('active')
        //     console.log('clicked')
        //     setTimeout(function(){
        //         if(menuToggle_after.content === '"menu"'){
        //             menuToggle.style.setProperty('--menu-content', menu_other_option)
        //         }else{
        //             menuToggle.style.setProperty('--menu-content', menu_option)
        //         }
        //     }, 500)
        // }
    // }

    return <>
        <StrictMode>
            <section className="navigation">
                <div className="menu-toggle">
                    <ul>
                        <li><Link to="/" className='nav-item d-500'>Home</Link></li>
                        <li><Link to="/about" className='nav-item d-600'>about</Link></li>
                        <li><Link to="/works" className='nav-item d-700'>works</Link></li>
                        <li><a to="/contact" className='nav-item d-800 scrollto' href="#form">contact</a></li>
                    </ul>
                </div>
            </section>
        </StrictMode>
    </>
       
}