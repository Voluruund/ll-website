import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../../common-comp/Transition";
import Form from "../../common-comp/form";
import Footer from "../../common-comp/footer";

export default function Branchetti() {
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
          <p className="work-p">Monica Branchetti</p>
          <p className="work-subtitle mt-20">UX Design / Web Design / Graphic Design</p>
          <p className="work-subtitle mt-70">2024</p>
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
            Monica embodies the true meaning of an Artist. A real painter,
            interior designer, and decorator, she communicates through her art
            with elegance and professionalism. Her website needed to represent
            her works of art and herself with a minimalist layout style,
            allowing her works, colors, and subjects to take center stage. The
            essential design ensures that the focus remains on the artworks,
            while intuitive navigation and a clear structure reflect her refined
            artistic sensibility.
          </p>
        </div>
      </div>
      <div className="works-grid" id="branchetti">
        <div className="row">
          <img src="/img/branchetti/firstop.png" alt="prova" />
        </div>
        <div className="row">
          <img src="/img/branchetti/sectop.png" alt="prova" />
        </div>
        <div className="row">
          <div className="inner-row">
            <div>
              <img src="/img/branchetti/secondf.png" alt="prova" />
            </div>
            <div>
              <img src="/img/branchetti/seconds.png" alt="prova" />
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row">
          <div className="inner-row">
            <div>
              <img src="/img/branchetti/fourthf.png" alt="prova" />
            </div>
            <div>
              <img src="/img/branchetti/fourths.png" alt="prova" />
            </div>
          </div>
        </div>
        <div className="row-sm"></div>
        <div className="row">
          <div className="inner-row">
            <div>
              <img src="/img/branchetti/innerf.png" alt="prova" />
            </div>
            <div>
              <img src="/img/branchetti/inners.png" alt="prova" />
            </div>
            <div>
              <img src="/img/branchetti/innert.png" alt="prova" />
            </div>
          </div>
        </div>
      </div>
      <div className="works-desc-wp">
        <div>
          <Link
            to="/works/vanni"
            onClick={(e) => delayAndGo(e, "/works/vanni")}
          >
            <p className="cta-page-switch">
              <button>Previous</button>
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
