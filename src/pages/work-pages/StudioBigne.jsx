import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Transition from "../../common-comp/Transition"

export default function StudioBigne(){

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
                <p className="work-p">Studio Bignè</p>
                <p className="work-subtitle mt-20">Branding / Graphic Design</p>
                <p className="work-subtitle mt-70">2023</p>
            </div>
            <div>
                <p className="work-p">Studio Bignè is a group of illustrators from Florence, Italy, that started to work together . Everybody have their style but all of them share the passion for art and for italian pastry. For creative people like them I decided to design a colorful graphic and use fonts who recalls editorial style for paragraphs.</p>
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
        <div className="works-grid" id="bigne">

        </div>
        <div className="works-desc-wp">
            <div>
                <Link to="/works/PercorsiSomatici" onClick={(e) => delayAndGo(e, "/works/percorsisomatici")}>
                    <p className="cta-page-switch"><button>Previous</button></p>
                </Link>
                <img src="/img/previous.svg" alt="previous" />
            </div>
            <div>
                <Link to="/works/vanni" onClick={(e) => delayAndGo(e, "/works/vanni")}>
                    <p className="cta-page-switch"><button>Next</button></p>
                </Link>
                <img src="/img/next.svg" alt="next" />
            </div>
        </div>
    </>
}