import { StrictMode } from "react"
import { useState } from "react"
import Orchestra from "../pages/work-pages/Orchestra"
import Footer from "./footer";
import Form from "./form";
import Cavallini from "../pages/work-pages/Cavallini";
import { useEffect } from "react";
import Branchetti from "../pages/work-pages/Branchetti";
import Vanni from "../pages/work-pages/Vanni";

export default function Works({stato}){

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
    })

    //numero totale delle pagine dei lavori
    const pageCount = 4;
    const [currentIndex, setCurrentIndex] = useState(1);
    console.log(stato)

    const handlePrevClick = () => {
        if (currentIndex > 1) {
          setCurrentIndex(currentIndex - 1);
        }else{
            setCurrentIndex(pageCount);
        }
        window.lenis.scrollTo((0,0), {immediate: true})
      };
      
    const handleNextClick = () => {
        if (currentIndex < pageCount) {
            setCurrentIndex(currentIndex + 1);
        }else{
            setCurrentIndex(1);
        }
        window.lenis.scrollTo((0,0), {immediate: true})
    };

    return <>
        <StrictMode>
            {/* <div className="works-bg"> */}
            {currentIndex === 4 ? <Orchestra /> : null}
            {currentIndex === 2 ? <Cavallini /> : null}
            {currentIndex === 3 ? <Branchetti /> : null}
            {currentIndex === 1 ? <Vanni></Vanni> : null}
            <div className="works-desc-wp">
                <p className="cta-page-switch"><button onClick={handlePrevClick}>Previous</button></p>
                <p className="cta-page-switch"><button onClick={handleNextClick}>Next</button></p>
            </div>
            {/* </div> */}
            <Form />
            <Footer />
        </StrictMode>
    </>
}