import { StrictMode } from "react"
import Footer from "./footer";
import Form from "./form";
import { useEffect } from "react";
import Navigation from "./topNavigation";
import { Outlet } from "react-router-dom";
import Transition from "../common-comp/Transition";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

export default function Works({stato}){

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
        TransitionIn()

        const followImg = document.getElementById('follow-img');
        const hoverDivs = document.querySelectorAll('.hover-div');
    
        document.addEventListener('mousemove', (e) => {
            followImg.style.left = e.pageX - 150 + 'px';
            followImg.style.top = e.pageY - 150 + 'px';
        });
    
        hoverDivs.forEach(div => {
            div.addEventListener('mouseenter', () => {
                const url = div.getAttribute('data-url');
                followImg.src = url;
                followImg.style.display = 'block';
            });
    
            div.addEventListener('mouseleave', () => {
                followImg.style.display = 'none';
            });
        });
    }, [])

    window.lenis.scrollTo((0,0), {immediate: true})

    var loaded = 0

    if(window.innerWidth < 1000){
        loaded = 1
    }

    function TransitionIn(){
        var elem = document.getElementById("transIn");
        elem.classList.add("animateTransition-in")
    }

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

    // function updateImagePosition() {
    //     followImg.style.left = mouseX + 10 + 'px'; // 10px offset for better visibility
    //     followImg.style.top = mouseY + 10 + 'px';
    // }

    return <>
        <StrictMode>
            <Transition />
            <div className="provaDiv">
                {loaded === 1 ? <Navigation></Navigation> : null}
            </div>
            {/* <Outlet></Outlet> */}

            <img src="" alt="follow" id="follow-img"/>

            <Link to="/works/cavallini" onClick={(e) => delayAndGo(e, "/works/cavallini")} className="dec-none">
                <div className="work-wp hover-div bt" data-url="img/work/bisteccamore.png">
                    <div><p className="p-num">01</p></div>
                    <div><p className="parag-cv">Bisteccamore</p></div>
                    <div className="services-grid"><p className="cv-job">Branding / web design</p></div>
                    <div><p className="text-center">2024</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/vanni" onClick={(e) => delayAndGo(e, "/works/vanni")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/domizia.png">
                    <div><p className="p-num">02</p></div>
                    <div><p className="parag-cv">Domizia Vanni</p></div>
                    <div className="services-grid"><p className="cv-job">UX Design / Web Design</p></div>
                    <div><p className="text-center">2023</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/orchestra" onClick={(e) => delayAndGo(e, "/works/orchestra")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/orchestra.png">
                    <div><p className="p-num">03</p></div>
                    <div><p className="parag-cv">Florence Pops Orchestra</p></div>
                    <div className="services-grid"><p className="cv-job">UX Design / Web Design</p></div>
                    <div><p className="text-center">2023</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/branchetti" onClick={(e) => delayAndGo(e, "/works/branchetti")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/branchetti.png">
                    <div><p className="p-num">04</p></div>
                    <div><p className="parag-cv">Monica Branchetti</p></div>
                    <div className="services-grid"><p className="cv-job">UX Design / Web Design</p></div>
                    <div><p className="text-center">2024</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/studiobigne" onClick={(e) => delayAndGo(e, "/works/studiobigne")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/studio.png">
                    <div><p className="p-num">05</p></div>
                    <div><p className="parag-cv">Studio Bignè</p></div>
                    <div className="services-grid"><p className="cv-job">Branding / Graphic Design</p></div>
                    <div><p className="text-center">2023</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/CesareLampronti" onClick={(e) => delayAndGo(e, "/works/CesareLampronti")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/lampronti.png">
                    <div><p className="p-num">06</p></div>
                    <div><p className="parag-cv">DYS44 Art Gallery London</p></div>
                    <div className="services-grid"><p className="cv-job">Web Design</p></div>
                    <div><p className="text-center">2022</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/Pegaso" onClick={(e) => delayAndGo(e, "/works/Pegaso")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/pegaso.png">
                    <div><p className="p-num">07</p></div>
                    <div><p className="parag-cv">Pasticceria Pegaso</p></div>
                    <div className="services-grid"><p className="cv-job">UX Design / Web Design</p></div>
                    <div><p className="text-center">2023</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/PercorsiSomatici" onClick={(e) => delayAndGo(e, "/works/PercorsiSomatici")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/percorsi.png">
                    <div><p className="p-num">08</p></div>
                    <div><p className="parag-cv">Percorsi Somatici</p></div>
                    <div className="services-grid"><p className="cv-job">UX Design / Web Design</p></div>
                    <div><p className="text-center">2023</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/GuiaNerli" onClick={(e) => delayAndGo(e, "/works/GuiaNerli")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/nerli.png">
                    <div><p className="p-num">09</p></div>
                    <div><p className="parag-cv">Guia Nerli - Psychologist</p></div>
                    <div className="services-grid"><p className="cv-job">Branding / Web design</p></div>
                    <div><p className="text-center">2020</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/agricola" onClick={(e) => delayAndGo(e, "/works/agricola")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/">
                    <div><p className="p-num">10</p></div>
                    <div><p className="parag-cv">Agricola Ludus</p></div>
                    <div className="services-grid"><p className="cv-job">Packaging / Graphic Design</p></div>
                    <div><p className="text-center">2023</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/viaggi" onClick={(e) => delayAndGo(e, "/works/viaggi")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/viaggi.png">
                    <div><p className="p-num">11</p></div>
                    <div><p className="parag-cv">Nuove Idee Viaggi by Elisa</p></div>
                    <div className="services-grid"><p className="cv-job">Web design</p></div>
                    <div><p className="text-center">2024</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/alexandra" onClick={(e) => delayAndGo(e, "/works/alexandra")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/alexandra.png">
                    <div><p className="p-num">12</p></div>
                    <div><p className="parag-cv">Alexandra Michelozzi</p></div>
                    <div className="services-grid"><p className="cv-job">Web Design / Graphic Design</p></div>
                    <div><p className="text-center">2023</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/chimera" onClick={(e) => delayAndGo(e, "/works/chimera")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/chimera.png">
                    <div><p className="p-num">13</p></div>
                    <div><p className="parag-cv">Chimera Sleepwear</p></div>
                    <div className="services-grid"><p className="cv-job">UX Design / Web Design / Graphic Design</p></div>
                    <div><p className="text-center">2023</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/easea" onClick={(e) => delayAndGo(e, "/works/easea")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/">
                    <div><p className="p-num">14</p></div>
                    <div><p className="parag-cv">Easea</p></div>
                    <div className="services-grid"><p className="cv-job">Branding</p></div>
                    <div><p className="text-center">2024</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/mancinelli" onClick={(e) => delayAndGo(e, "/works/mancinelli")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/">
                    <div><p className="p-num">15</p></div>
                    <div><p className="parag-cv">Fabrizio Mancinelli</p></div>
                    <div className="services-grid"><p className="cv-job">Web design</p></div>
                    <div><p className="text-center">2023</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>

            <Link to="/works/gastone" onClick={(e) => delayAndGo(e, "/works/gastone")} className="dec-none">
                <div className="work-wp hover-div" data-url="img/work/">
                    <div><p className="p-num">16</p></div>
                    <div><p className="parag-cv">Gastone's</p></div>
                    <div className="services-grid"><p className="cv-job">Branding</p></div>
                    <div><p className="text-center">2018</p></div>
                    <div><img src="/img/next.svg" alt="next" /></div>
                </div>
            </Link>
            <div className="r-5" id="banner-works">
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