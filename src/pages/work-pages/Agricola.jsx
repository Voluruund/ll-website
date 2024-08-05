import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../../common-comp/Transition";
import Form from "../../common-comp/form";
import Footer from "../../common-comp/footer";
import threeOne from "../../img/agricola/2-1.png";
import threeTwo from "../../img/agricola/2-2.png";
import fourOne from "../../img/agricola/4-1.png";
import fourTwo from "../../img/agricola/4-2.png";
import sixOne from "../../img/agricola/6-1.png";
import sixTwo from "../../img/agricola/6-2.png";

export default function Agricola() {
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
          <p className="work-p">Agricola Ludus</p>
          <p className="work-subtitle mt-20">Packaging / Graphic Design</p>
          <p className="work-subtitle mt-70">2020-2023</p>
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
            Agricola Ludus needed distinct wine labels that reflected the
            essence of their products. I crafted three unique labels for their
            wines: "L’Aura" (rosé), "Alba" (white), and "Lauretum" (red). The
            main illustrations were created by Ludovica, the owner’s daughter,
            whose name also inspires the company. The labels blend familial
            warmth with artistic charm, capturing the spirit of the winery.
          </p>
        </div>
      </div>
      <div className="works-grid mobile-hidden" id="agricola">
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
        <div className="row" id="fifth"></div>
        <div className="row" id="sixth">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="works-mob desk-hidden" id="agricola-mob">
        <div>
          <img src="/img/agricola/1-mob.png" alt="img" />
        </div>
        <div>
          <img src={threeOne} alt="img" />
        </div>
        <div>
          <img src={threeTwo} alt="img" />
        </div>
        <div>
          <img src="/img/agricola/3-mob.png" alt="img" />
        </div>
        <div>
          <img src={fourOne} alt="img" />
        </div>
        <div>
          <img src={fourTwo} alt="img" />
        </div>
        <div>
          <img src="/img/agricola/5-mob.png" alt="img" />
        </div>
        <div>
          <img src={sixOne} alt="img" />
        </div>
        <div>
          <img src={sixTwo} alt="img" />
        </div>
      </div>
      <div className="works-desc-wp next-wp">
        <div>
          <Link
            to="/works/vanni"
            onClick={(e) => delayAndGo(e, "/works/vanni")}
          >
            <p className="cta-page-switch">
              <button>Prev</button>
            </p>
          </Link>
          <img src="/img/previous.svg" alt="previous" />
        </div>
        <div>
          <Link
            to="/works/Cavallini"
            onClick={(e) => delayAndGo(e, "/works/cavallini")}
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
