import Lenis from "@studio-freight/lenis";
import { useState } from "react";
import Works from '../common-comp/Works';


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  direction: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
})

window.lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

console.log(document.querySelectorAll('a[href^="#"].scrollto'))

const Navigation = () => {

    document.querySelectorAll('a[href^="#"].scrollto').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          lenis.scrollTo(this.getAttribute('href'))
          console.log(this.getAttribute('href'))
        });
    })

    const [isActive, setIsActive] = useState(false);

    const handleWorks = event => {
      setIsActive(current => !current);
    };

    return( <>
        {isActive ? <Works /> : null}
        <section className='cta-wp'>
            <a className="button-outline button--atlas-outline" id="footer-cta" onClick={handleWorks}>
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