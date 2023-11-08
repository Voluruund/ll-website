import { useRef } from "react"

export default function Works(props){

    return <>
        <div className="works-bg">
            <div className="works-desc-wp">
                <div></div>
                <p className="work-subtitle">Close</p>
            </div>
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
                <div className="grid-item tl-first-row">
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
                </div>
            </div>
            <div className="works-desc-wp">
                <p className="cta-page-switch">Previous</p>
                <p className="cta-page-switch">Next</p>
            </div>
        </div>
    </>
}