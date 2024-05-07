import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Cavallini(){

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
    })

    window.lenis.scrollTo((0,0), {immediate: true})

    return <>
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
        <div className="works-grid" id="cavallini">

        </div>
        <div className="works-desc-wp">
            <div>
                <Link to="/works/Branchetti">
                    <p className="cta-page-switch"><button>Previous</button></p>
                </Link>
                <img src="/img/previous.svg" alt="previous" />
            </div>
            <div>
                <Link to="/works/CesareLampronti">
                    <p className="cta-page-switch"><button>Next</button></p>
                </Link>
                <img src="/img/next.svg" alt="next" />
            </div>
        </div>
   </>
}