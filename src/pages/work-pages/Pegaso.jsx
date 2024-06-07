import { Link , useNavigate} from "react-router-dom"
import { useEffect } from "react"
import Transition from "../../common-comp/Transition"

export default function Pegaso(){

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
                <p className="work-p">Pasticceria Pegaso</p>
                <p className="work-subtitle mt-20">UX Design / Web Design</p>
                <p className="work-subtitle mt-70">2023</p>
            </div>
            <div>
                <p className="work-p">Pasticceria Pegaso is a little pastry in Florence, famous all around the city for their ability to make traditional desserts with simplicity, innovation and originality. Their website emphatize their cakes and desserts with a minimal layout and graphics. Trying to give a warm feeling, like the traditional pastry they used to cook, thanks to the background color</p>
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
        <div className="works-grid" id="pegaso">

        </div>
        <div className="works-desc-wp">
            <div>
                <Link to="/works/Orchestra" onClick={(e) => delayAndGo(e, "/works/orchestra")}>
                    <p className="cta-page-switch"><button>Previous</button></p>
                </Link>
                <img src="/img/previous.svg" alt="previous" />
            </div>
            <div>
                <Link to="/works/PercorsiSomatici" onClick={(e) => delayAndGo(e, "/works/percorsisomatici")}>
                    <p className="cta-page-switch"><button>Next</button></p>
                </Link>
                <img src="/img/next.svg" alt="next" />
            </div>
        </div>
    </>
}