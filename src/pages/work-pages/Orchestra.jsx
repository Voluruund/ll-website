import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../../common-comp/Transition";
import Form from "../../common-comp/form";
import Footer from "../../common-comp/footer";
import threeOne from "../../img/orchestra/3-1.png";
import threeTwo from "../../img/orchestra/3-2.png";
import sixOne from "../../img/orchestra/6-1.png";
import sixTwo from "../../img/orchestra/6-2.png";

export default function Orchestra() {
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
          <p className="work-p">Florence Pops Orchestra</p>
          <p className="work-subtitle mt-20">UX Design / Web Design</p>
          <p className="work-subtitle mt-70">2023</p>
          <div className="work-cta-container">
            <a className="button-outline button--atlas-outline" id="footer-cta" href="https://florencepopsorchestra.it/" target="BLANK">
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
            For the Florence Pops Orchestra, I designed a comprehensive suite of
            visual communication materials, including their website, press kit,
            and concert visuals. This stimulating project allowed me to explore
            various design elements, resulting in a cohesive and dynamic visual
            identity that enhances their vibrant musical performances.
          </p>
        </div>
      </div>
      <div className="works-grid mobile-hidden" id="orchestra">
        <div className="row" id="first">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="second"></div>
        <div className="row" id="third">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row-sm" id="fourth"></div>
        <div className="row" id="fifth"></div>
        <div className="row" id="sixth">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="works-mob desk-hidden" id="orchestra-mob">
            <div>
              <img src="/img/orchestra/1.png" alt="first" />
            </div>
            <div>
              <img src="/img/orchestra/2.png" alt="twoOne" />
            </div>
            <div>
              <img src={threeOne} alt="twoOne" />
            </div>
            <div>
              <img src={threeTwo} alt="twoOne" />
            </div>
            <div>
              <img src="/img/orchestra/4.png" alt="twoOne" />
            </div>
            <div>
              <img src={sixOne} alt="twoOne" />
            </div>
            <div>
              <img src={sixTwo} alt="twoOne" />
            </div>
      </div>
      <div className="works-desc-wp next-wp">
        <div>
          <Link
            to="/works/GuiaNerli"
            onClick={(e) => delayAndGo(e, "/works/guianerli")}
          >
            <p className="cta-page-switch">
              <button>Previous</button>
            </p>
          </Link>
          <img src="/img/previous.svg" alt="previous" />
        </div>
        <div>
          <Link
            to="/works/Pegaso"
            onClick={(e) => delayAndGo(e, "/works/pegaso")}
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
