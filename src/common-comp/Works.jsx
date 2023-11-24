import { StrictMode } from "react"
import { useState } from "react"
import Orchestra from "../pages/work-pages/Orchestra"

export default function Works(props){

    //numero totale delle pagine dei lavori
    const pageCount = 10;
    const [currentIndex, setCurrentIndex] = useState(1);

    const handlePrevClick = () => {
        if (currentIndex > 1) {
          setCurrentIndex(currentIndex - 1);
        }else{
            setCurrentIndex(pageCount);
        }
        window.lenis.scrollTo(0,0)
      };
      
    const handleNextClick = () => {
        if (currentIndex <= pageCount) {
            setCurrentIndex(currentIndex + 1);
        }else{
            setCurrentIndex(1);
        }
        window.lenis.scrollTo(0,0)
    };

    return <>
        <StrictMode>
            <div className="works-bg">
               {currentIndex === 1 ? <Orchestra /> : null}
               {currentIndex === 2 ? <Orchestra /> : null}
               {currentIndex === 3 ? <Orchestra /> : null}
               {currentIndex === 4 ? <Orchestra /> : null}
               {currentIndex === 5 ? <Orchestra /> : null}
               {currentIndex === 6 ? <Orchestra /> : null}
               {currentIndex === 7 ? <Orchestra /> : null}
               {currentIndex === 8 ? <Orchestra /> : null}
               {currentIndex === 9 ? <Orchestra /> : null}
               {currentIndex === 10 ? <Orchestra /> : null}
               <div className="works-desc-wp">
                    <p className="cta-page-switch" onClick={handlePrevClick}>Previous</p>
                    <p className="cta-page-switch" onClick={handleNextClick}>Next</p>
                </div>
            </div>
        </StrictMode>
    </>
}