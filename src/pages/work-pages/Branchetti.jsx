import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Branchetti(){

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
    })

    window.lenis.scrollTo((0,0), {immediate: true})

    return <>
         {/* <div className="works-desc-wp">
            <div></div>
            <p className="work-subtitle">Close</p>
        </div> */}
        <div className="works-desc-wp mt-70">
            <div>
                <p className="work-p">Monica Branchetti</p>
                <p className="work-subtitle mt-20">UX Design / Web Design</p>
                <p className="work-subtitle mt-70">2023</p>
            </div>
            <div>
                <p className="work-p">Monica is the meaning of Artist. A real painter, interior designer, decorator, that comunicate through her art with elegance and professionality. Her website had to represent her works of art and herself with a minimal layout style that let to her works, colours, subjects to lead the scene.</p>
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
        <div className="works-grid" id="branchetti">
            <div className="row">
                <img src="/img/branchetti/firstop.png" alt="prova" />
            </div>
            <div className="row">
                <img src="/img/branchetti/sectop.png" alt="prova" />
            </div>
            <div className="row">
                <div className="inner-row">
                    <div><img src="/img/branchetti/secondf.png" alt="prova" /></div>
                    <div><img src="/img/branchetti/seconds.png" alt="prova" /></div>
                </div>
            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
            <div className="row">
            <div className="inner-row">
                    <div><img src="/img/branchetti/fourthf.png" alt="prova" /></div>
                    <div><img src="/img/branchetti/fourths.png" alt="prova" /></div>
                </div>
            </div>
            <div className="row">
                <div className="inner-row">
                    <div><img src="/img/branchetti/innerf.png" alt="prova" /></div>
                    <div><img src="/img/branchetti/inners.png" alt="prova" /></div>
                    <div><img src="/img/branchetti/innert.png" alt="prova" /></div>
                </div>
            </div>
        </div>
        <div className="works-desc-wp">
            <div>
                <Link to="/works/vanni">
                    <p className="cta-page-switch"><button>Previous</button></p>
                </Link>
                <img src="/img/previous.svg" alt="previous" />
            </div>
            <div>
                <Link to="/works/Cavallini">
                    <p className="cta-page-switch"><button>Next</button></p>
                </Link>
                <img src="/img/next.svg" alt="next" />
            </div>
        </div>
    </>
}