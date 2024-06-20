import {Link, useNavigate} from "react-router-dom";
import { StrictMode } from "react";
import { HashLink } from "react-router-hash-link";

var navigation

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
    
    // document.onreadystatechange = function (){
    //     if (document.readyState === "complete") {
    //         navigation = document.getElementById('btNav')
    //         window.addEventListener('scroll', function(e) {
    //             navigation.classList.add("navigation-anim")
    //             console.log(navigation)
    //         }, false)
    //     }
    // }

    const history = useNavigate();

    function delayAndGo(e, path) {
        e.preventDefault();
        var elem = document.getElementById("transOut");
        elem.classList.add("animateTransition")
        setTimeout(() =>{
            history(path)
            elem.classList.remove("animateTransition")
        }, 1500);
    }

    return <>
        <StrictMode>
            <section className="navigation" id="btNav">
                <div className="menu-toggle">
                    <ul>
                        <li><Link to="/" onClick={(e) => delayAndGo(e, "/")} className='nav-item d-500'>Home</Link></li>
                        <li><Link to="/about" onClick={(e) => delayAndGo(e, "/about")} className='nav-item d-600'>about</Link></li>
                        <li><HashLink smooth to="/home#work" onClick={(e) => delayAndGo(e, "/home#work")} className='nav-item d-700'>works</HashLink></li>
                        <li><a to="/contact" className='nav-item d-800 scrollto' href="#form">contact</a></li>
                    </ul>
                </div>
            </section>
        </StrictMode>
    </>
       
}