import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Transition from "../../common-comp/Transition"

export default function Orchestra(){

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
        TransitionIn()
    })

    window.lenis.scrollTo((0,0), {immediate: true})

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

    return <>
        <Transition/>
        <div className="works-desc-wp mt-70">
            <div>
                <p className="work-p">Florence Pops Orchestra</p>
                <p className="work-subtitle mt-20">UX Design / Web Design</p>
                <p className="work-subtitle mt-70">2023</p>
            </div>
            <div>
                <p className="work-p">Florence Pops Orchestra is a Florentine orchestra who plays animation movies soundtrack all around the world, with the passion and the dedication of the director Carlo Chiarotti. The website is</p>
            </div>
        </div>
        <div className="work-cta-wp">
            <a className="button-outline button--atlas-outline" id="footer-cta">
                <span>Visit Website</span>
                <div className="marqueebutton-outline" aria-hidden="true">
                    <div className="marquee__inner-outline">
                        <span>Visit Website</span>
                        <span>Visit Website</span>
                        <span>Visit Website</span>
                        <span>Visit Website</span>
                        <span>Visit Website</span>

                        <span>Visit Website</span>
                        <span>Visit Website</span>
                        <span>Visit Website</span>
                        <span>Visit Website</span>
                        <span>Visit Website</span>
                    </div>
                </div>
            </a>
        </div>
        <div className="works-grid">
            {/* <div className="grid-item tl-first-row">
                <img src="./img/prova.jpg" alt="prova" />
            </div>
            <div className="grid-item tr-first-row">
                <img src="./img/prova.jpg" alt="prova" />
            </div>
            <div className="grid-item second-row">
                <img src="./img/longimg.jpg" alt="prova" />
            </div>
            <div className="grid-item tl-third-row">
                <img src="./img/prova.jpg" alt="prova" />   
            </div>
            <div className="grid-item tr-third-row">
                <img src="./img/prova.jpg" alt="prova" />
            </div>
            <div className="grid-item fourth-row">
                <img src="./img/longimg.jpg" alt="prova" />
            </div> */}
        </div>
        <div className="works-desc-wp">
            <div>
                <Link to="/works/GuiaNerli" onClick={(e) => delayAndGo(e, "/works/guianerli")}>
                    <p className="cta-page-switch"><button>Previous</button></p>
                </Link>
                <img src="/img/previous.svg" alt="previous" />
            </div>
            <div>
                <Link to="/works/Pegaso" onClick={(e) => delayAndGo(e, "/works/pegaso")}>
                    <p className="cta-page-switch"><button>Next</button></p>
                </Link>
                <img src="/img/next.svg" alt="next" />
            </div>
        </div>
    </>
}