import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../../common-comp/Transition";
import Form from "../../common-comp/form";
import Footer from "../../common-comp/footer";

export default function Vanni() {
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
          <p className="work-p">Domizia Vanni</p>
          <p className="work-subtitle mt-20">UX Design / Web Design</p>
          <p className="work-subtitle mt-20">2023</p>
          <div className="work-cta-container">
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
        </div>
        <div>
          <p className="work-p">
            This website aims to represent elegance, style, and determination by
            combining a strong lettering font with a classical one. The black
            and white layout is complemented by touches of pink and by the
            colorful outfits created by Domizia. This create a clear structure
            enhanced with subtle animations. This is Domizia Vanni.
          </p>
        </div>
      </div>
      <div className="works-grid" id="vanni">
        <div className="row">
          <img src="/img/vanni/first.png" alt="prova" />
        </div>
        <div className="row">
          <img src="/img/vanni/sl.png" alt="prova" />
        </div>
        <div className="row">
          <img src="/img/vanni/sr.png" alt="prova" />
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="inner-row">
            <img src="/img/vanni/fofirst.png" alt="prova" />
            <img src="/img/vanni/fosecond.png" alt="prova" />
            <img src="/img/vanni/fothird.png" alt="prova" />
          </div>
        </div>
        <div className="row"></div>
        <div className="row">
          <img src="/img/vanni/fr.png" alt="prova" />
        </div>
      </div>
      <div className="works-desc-wp">
        <div>
          <Link
            to="/works/StudioBigne"
            onClick={(e) => delayAndGo(e, "/works/studiobigne")}
          >
            <p className="cta-page-switch">
              <button>Previous</button>
            </p>
          </Link>
          <img src="/img/previous.svg" alt="previous" />
        </div>
        <div>
          <Link
            to="/works/Branchetti"
            onClick={(e) => delayAndGo(e, "/works/branchetti")}
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
