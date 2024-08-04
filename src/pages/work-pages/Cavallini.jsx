import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../../common-comp/Transition";
import Form from "../../common-comp/form";
import Footer from "../../common-comp/footer";
import twoOne from "../../img/cavallini/2-1.png";
import twoTwo from "../../img/cavallini/2-2.jpg";
import fourOne from "../../img/cavallini/4-1.png";
import fourTwo from "../../img/cavallini/4-2.png";
import fiveOne from "../../img/cavallini/5-1.png";
import fiveTwo from "../../img/cavallini/5-2.png";

export default function Cavallini() {
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
          <p className="work-p">Bisteccamore</p>
          <p className="work-subtitle mt-20">Branding</p>
          <p className="work-subtitle mt-70">2024</p>
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
            The core business of Bisteccamore is based on the love for steak and
            its premium variations. The brand needed to communicate these values
            effectively and distinctively. To achieve this goal, I adopted a
            subtle approach to lettering, which allowed me to play with the
            letters and integrate illustrated elements that harmoniously
            accompany the logo. This design not only visually represents the
            client's passion for the quality and variety of steaks but also
            creates an elegant and recognizable image that reflects the
            restaurant's identity.
          </p>
        </div>
      </div>
      <div className="works-grid mobile-hidden" id="cavallini">
        <div className="row" id="first"></div>
        <div className="row" id="second">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="third"></div>
        <div className="row" id="fourth">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="fifth">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="works-mob desk-hidden" id="cavallini-mob">
            <div>
              <img src="/img/cavallini/1-mob.jpg" alt="first" />
            </div>
            <div>
              <img src={twoOne} alt="twoOne" />
            </div>
            <div>
              <img src={twoTwo} alt="twoOne" />
            </div>
            <div>
              <img src={fourOne} alt="twoOne" />
            </div>
            <div>
              <img src={fourTwo} alt="twoOne" />
            </div>
            <div>
              <img src={fiveOne} alt="twoOne" />
            </div>
            <div>
              <img src={fiveTwo} alt="twoOne" />
            </div>
      </div>
      <div className="works-desc-wp next-wp">
        <div>
          <Link
            to="/works/Branchetti"
            onClick={(e) => delayAndGo(e, "/works/branchetti")}
          >
            <p className="cta-page-switch">
              <button>Previous</button>
            </p>
          </Link>
          <img src="/img/previous.svg" alt="previous" />
        </div>
        <div>
          <Link
            to="/works/CesareLampronti"
            onClick={(e) => delayAndGo(e, "/works/cesarelampronti")}
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
