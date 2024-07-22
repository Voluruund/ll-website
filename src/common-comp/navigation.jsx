import {Link, useNavigate} from "react-router-dom";
import { StrictMode } from "react";
import { HashLink } from "react-router-hash-link";

var navigation

export default function Navigation(){

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
                        <li><HashLink smooth to="/home#work" onClick={(e) => delayAndGo(e, "/works")} className='nav-item d-700'>works</HashLink></li>
                        <li><a to="/contact" className='nav-item d-800 scrollto' href="#form">contact</a></li>
                    </ul>
                </div>
            </section>
        </StrictMode>
    </>
       
}