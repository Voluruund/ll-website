import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Pegaso(){

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
    })

    window.lenis.scrollTo((0,0), {immediate: true})

    return <>
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
                <Link to="/works/Orchestra">
                    <p className="cta-page-switch"><button>Previous</button></p>
                </Link>
                <img src="/img/previous.svg" alt="previous" />
            </div>
            <div>
                <Link to="/works/PercorsiSomatici">
                    <p className="cta-page-switch"><button>Next</button></p>
                </Link>
                <img src="/img/next.svg" alt="next" />
            </div>
        </div>
    </>
}