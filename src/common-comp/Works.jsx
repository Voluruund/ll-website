import { StrictMode } from "react"
import Footer from "./footer";
import Form from "./form";
import { useEffect } from "react";
import Navigation from "./topNavigation";
import { Outlet } from "react-router-dom";

export default function Works({stato}){

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
    })

    var loaded = 0

    if(window.innerWidth < 1000){
        loaded = 1
    }

    return <>
        <StrictMode>
            <div className="provaDiv">
                {loaded === 1 ? <Navigation></Navigation> : null}
            </div>
            <Outlet></Outlet>
            <Form />
            <Footer />
        </StrictMode>
    </>
}