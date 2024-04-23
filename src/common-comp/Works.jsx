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

    //numero totale delle pagine dei lavori
    // const pageCount = 4;
    // const [currentIndex, setCurrentIndex] = useState(1);
    // console.log(stato)

    // const handlePrevClick = () => {
    //     if (currentIndex > 1) {
    //       setCurrentIndex(currentIndex - 1);
    //     }else{
    //         setCurrentIndex(pageCount);
    //     }
    //     window.lenis.scrollTo((0,0), {immediate: true})
    //   };
      
    // const handleNextClick = () => {
    //     if (currentIndex < pageCount) {
    //         setCurrentIndex(currentIndex + 1);
    //     }else{
    //         setCurrentIndex(1);
    //     }
    //     window.lenis.scrollTo((0,0), {immediate: true})
    // };

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