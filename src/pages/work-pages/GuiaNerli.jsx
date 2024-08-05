import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../../common-comp/Transition";
import Form from "../../common-comp/form";
import Footer from "../../common-comp/footer";
import threeOne from "../../img/guia/2-1.png";
import threeTwo from "../../img/guia/2-2.png";
import fourOne from "../../img/guia/5-1.png";
import fourTwo from "../../img/guia/5-2.png";

export default function GuiaNerli() {
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
          <p className="work-p">Guia Nerli - Psychologist</p>
          <p className="work-subtitle mt-20">Branding / Web Design</p>
          <p className="work-subtitle mt-70">2020</p>
          <div className="work-cta-container">
            <a className="button-outline button--atlas-outline" id="footer-cta" href="https://www.guianerli.it/" target="BLANK">
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
        </div>
        <div>
          <p className="work-p">
            Guia Nerli, a dedicated psychologist, sought to create a welcoming
            online presence. My task was to design both her logo and website,
            drawing inspiration from the comfort and support provided by
            psychotherapeutic journeys. The logo features two individuals
            holding hands, symbolizing connection and trust, setting a warm and
            empathetic tone for her brand.
          </p>
        </div>
      </div>
      <div className="works-grid mobile-hidden" id="guia">
        <div className="row" id="first"></div>
        <div className="row" id="second">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row-sm"></div>
        <div className="row" id="fourth"></div>
        <div className="row" id="fifth">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="works-mob desk-hidden" id="guia-mob">
          <div>
            <img src="/img/guia/1-mob.png" alt="img" />
          </div>
          <div>
            <img src={threeOne} alt="img" />
          </div>
          <div>
            <img src={threeTwo} alt="img" />
          </div>
          <div>
            <img src="/img/guia/3-mob.png" alt="img" />
          </div>
          <div>
            <img src="/img/guia/4-mob.png" alt="img" />
          </div>
          <div>
            <img src={fourOne} alt="img" />
          </div>
          <div>
            <img src={fourTwo} alt="img" />
          </div>
      </div>
      <div className="works-desc-wp next-wp">
        <div>
          <Link
            to="/works/CesareLampronti"
            onClick={(e) => delayAndGo(e, "/works/cesarelampronti")}
          >
            <p className="cta-page-switch">
              <button>Prev</button>
            </p>
          </Link>
          <img src="/img/previous.svg" alt="previous" />
        </div>
        <div>
          <Link
            to="/works/Orchestra"
            onClick={(e) => delayAndGo(e, "/works/orchestra")}
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
