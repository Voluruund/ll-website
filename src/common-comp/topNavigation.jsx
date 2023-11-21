import { StrictMode } from "react";

const Navigation = () => {

    return( <>
        <StrictMode>
            <section className='cta-wp'>
                <a className="button-outline button--atlas-outline scrollto" id="footer-cta" href="#work">
                    <span>Works</span>
                    <div className="marqueebutton-outline" aria-hidden="true">
                        <div className="marquee__inner-outline">
                        <span>Works</span>
                        <span>Works</span>
                        <span>Works</span>
                        <span>Works</span>
                        <span>Works</span>

                        <span>Works</span>
                        <span>Works</span>
                        <span>Works</span>
                        <span>Works</span>
                        <span>Works</span>
                        </div>
                    </div>
                </a>
                <a className="button-outline button--atlas-outline js-end scrollto" href="#form">
                    <span>Say Hi!</span>
                    <div className="marqueebutton-outline" aria-hidden="true">
                        <div className="marquee__inner-outline">
                        <span>Say Hi!</span>
                        <span>Say Hi!</span>
                        <span>Say Hi!</span>
                        <span>Say Hi!</span>
                        <span>Say Hi!</span>

                        <span>Say Hi!</span>
                        <span>Say Hi!</span>
                        <span>Say Hi!</span>
                        <span>Say Hi!</span>
                        <span>Say Hi!</span>
                        </div>
                    </div>
                </a>
            </section>
        </StrictMode>
    </>)
}

export default Navigation;