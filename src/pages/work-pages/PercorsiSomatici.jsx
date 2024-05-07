import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function PercorsiSomatici(){

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
    })

    window.lenis.scrollTo((0,0), {immediate: true})

    return <>
        <div className="works-desc-wp mt-70">
            <div>
                <p className="work-p">Percorsi Somatici</p>
                <p className="work-subtitle mt-20">UX Design / Web Design</p>
                <p className="work-subtitle mt-70">2023</p>
            </div>
            <div>
                <p className="work-p">Percorsi Somatici is a project with a collection of materials, interviews, research, workshop proposals in the field of movement, performance and body-mind-soul integration. The focus was on the way to rapresent this sensation of balance, so I created a clean layout, easy to navigate through, trying to find the good balance between the contents and the empty spaces, and choosed color palette which emphatize the sensation of kalm that this kind of dance and movement give.</p>
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
        <div className="works-grid" id="percorsi">

        </div>
        <div className="works-desc-wp">
            <div>
                <Link to="/works/Pegaso">
                    <p className="cta-page-switch"><button>Previous</button></p>
                </Link>
                <img src="/img/previous.svg" alt="previous" />
            </div>
            <div>
                <Link to="/works/StudioBigne">
                    <p className="cta-page-switch"><button>Next</button></p>
                </Link>
                <img src="/img/next.svg" alt="next" />
            </div>
        </div>
    </>
}