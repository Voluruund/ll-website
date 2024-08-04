import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../../common-comp/Transition";
import Form from "../../common-comp/form";
import Footer from "../../common-comp/footer";
import threeOne from "../../img/cesarelampronti/2-1.png";
import threeTwo from "../../img/cesarelampronti/2-2.png";
import sixOne from "../../img/cesarelampronti/4-1.png";
import sixTwo from "../../img/cesarelampronti/4-2.png";

export default function CesareLampronti() {
  const lenis = window.lenis;

  useEffect(() => {
    lenis.scrollTo("top");
    TransitionIn();
  });

  window.lenis.scrollTo((0, 0), { immediate: true });

  function TransitionIn() {
    var elem = document.getElementById("transIn");
    elem.classList.add("animateTransition-in");
  }

  const history = useNavigate();

  function delayAndGo(e, path) {
    e.preventDefault();
    var elem = document.getElementById("transOut");
    elem.classList.add("animateTransition");
    setTimeout(() => {
      history(path);
      elem.classList.remove("animateTransition");
    }, 1500);
  }

  return (
    <>
      <Transition />
      <div className="works-desc-wp mt-70">
        <div className="rel">
          <p className="work-p">DYS44 Art Gallery London</p>
          <p className="work-subtitle mt-20">Web Design</p>
          <p className="work-subtitle mt-70">2022</p>
          {/* <div className="work-cta-container">
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
          </div> */}
        </div>
        <div>
          <p className="work-p">
            Collaborating with Francesco Bianciardi, I had the opportunity to
            work on the DYS44 Art Gallery London project. I was responsible for
            the graphic design of the website, aiming to create an elegant and
            fluid layout. The design balances sophistication with functionality,
            adhering to the gallery's standards and enhancing the overall user
            experience.
          </p>
        </div>
      </div>
      <div className="works-grid mobile-hidden" id="cesare">
        <div className="row" id="first">
          <img src="/img/cesarelampronti/1.png" alt="1" />
        </div>
        <div className="row" id="second">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="third">
          <div>
            <img src="/img/cesarelampronti/3-1.png" alt="" />
            <img src="/img/cesarelampronti/3-2.png" alt="" />
          </div>
        </div>
        <div className="row" id="fourth">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="fifth">
          <div>
            <img src="/img/cesarelampronti/5-1.png" alt="" />
            <img src="/img/cesarelampronti/5-2.png" alt="" />
            <img src="/img/cesarelampronti/5-3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="works-mob desk-hidden" id="cesare-mob">
        <div>
          <img src="/img/cesarelampronti/1-mob.png" alt="img" />
        </div>
        <div>
          <img src={threeOne} alt="img" />
        </div>
        <div>
          <img src={threeTwo} alt="img" />
        </div>
        <div>
          <img src="/img/cesarelampronti/3-mob.png" alt="img" />
        </div>
        <div>
          <img src={sixOne} alt="img" />
        </div>
        <div>
          <img src={sixTwo} alt="img" />
        </div>
        <div>
          <img src="/img/cesarelampronti/5-mob.png" alt="img" />
        </div>
      </div>
      <div className="works-desc-wp next-wp">
        <div>
          <Link
            to="/works/Cavallini"
            onClick={(e) => delayAndGo(e, "/works/cavallini")}
          >
            <p className="cta-page-switch">
              <button>Previous</button>
            </p>
          </Link>
          <img src="/img/previous.svg" alt="previous" />
        </div>
        <div>
          <Link
            to="/works/GuiaNerli"
            onClick={(e) => delayAndGo(e, "/works/guianerli")}
          >
            <p className="cta-page-switch">
              <button>Next</button>
            </p>
          </Link>
          <img src="/img/next.svg" alt="next" />
        </div>
      </div>
      <div className="r-5 mt-120">
        <div className="text-wrapper">
          <h1>
            <span className="circle"></span>Graphic Design
          </h1>
          <h1>
            <span className="circle"></span>Logo Design
          </h1>
          <h1>
            <span className="circle"></span>Web Design
          </h1>
          <h1>
            <span className="circle"></span>Graphic Design
          </h1>
          <h1>
            <span className="circle"></span>Logo Design
          </h1>

          <h1>
            <span className="circle"></span>Web Design
          </h1>
          <h1>
            <span className="circle"></span>Graphic Design
          </h1>
          <h1>
            <span className="circle"></span>Logo Design
          </h1>
          <h1>
            <span className="circle"></span>Web Design
          </h1>
          <h1>
            <span className="circle"></span>Graphic Design
          </h1>
        </div>
      </div>
      <Form />
      <Footer />
    </>
  );
}
