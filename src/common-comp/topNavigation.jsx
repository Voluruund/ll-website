import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  direction: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
})

window.lenis = lenis;


//get scroll value
//lenis.on("scroll", ({ scroll, limit }) => {
//  console.log({ scroll, limit });
//});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



const Navigation = () => {

    // document.querySelectorAll('.button-outline').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         lenis.scrollTo(this.getAttribute('href'))
    //     });
    // })

    return(
        <section className='cta-wp'>
            <a href="#footer" className="button-outline button--atlas-outline" id="footer-cta">
                <span href="https://florencepopsorchestra.it/product/la-magia-dello-studio-ghibli-in-concerto/">Works</span>
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
            <a href="#form" className="button-outline button--atlas-outline js-end">
                <span href="https://florencepopsorchestra.it/product/la-magia-dello-studio-ghibli-in-concerto/">Say Hi!</span>
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
    )
}

export default Navigation;