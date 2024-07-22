import { StrictMode } from "react"
import Footer from "./footer";
import Form from "./form";
import { useEffect } from "react";
import Navigation from "./topNavigation";
import { Outlet } from "react-router-dom";
import Transition from "../common-comp/Transition";

export default function Works({stato}){

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
        TransitionIn()
    })

    window.lenis.scrollTo((0,0), {immediate: true})

    var loaded = 0

    if(window.innerWidth < 1000){
        loaded = 1
    }

    function TransitionIn(){
        var elem = document.getElementById("transIn");
        elem.classList.add("animateTransition-in")
    }

    return <>
        <StrictMode>
            <Transition />
            <div className="provaDiv">
                {loaded === 1 ? <Navigation></Navigation> : null}
            </div>
            <Outlet></Outlet>
            
            <div className="work-wp bt">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="work-wp mb-150">
                <div><p>01</p></div>
                <div><p>nome progetto 01</p></div>
                <div><p>web design</p></div>
                <div><p>2024</p></div>
                <div><p>-{'>'}</p></div>
            </div>
            <div className="r-5 mt-120">
                <div className="text-wrapper">
                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Logo Design</h1>

                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Graphic Design</h1>
                </div>
            </div>
            <Form />
            <Footer />
        </StrictMode>
    </>
}