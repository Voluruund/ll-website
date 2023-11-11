// import Lenis from "@studio-freight/lenis";
// import { useState } from "react";
// import Works from '../common-comp/Works';

const Navigation = () => {

    // const [isActive, setIsActive] = useState(false);

    // const handleWorks = event => {
    //   setIsActive(current => !current);
    // };

    return( <>
        {/* {isActive ? <Works /> : null} */}
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
    </>)
}

export default Navigation;