import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../../common-comp/Transition";
import Form from "../../common-comp/form";
import Footer from "../../common-comp/footer";
import threeOne from "../../img/percorsi/Group 112.png";
import threeTwo from "../../img/percorsi/Group 115.png";
import fourOne from "../../img/percorsi/Group 116.png";
import fourTwo from "../../img/percorsi/Group 223.png";
import fiveOne from "../../img/percorsi/Mask group-1.png";
import fiveTwo from "../../img/percorsi/Mask group-2.png";

export default function PercorsiSomatici() {
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
          <p className="work-p">Percorsi Somatici</p>
          <p className="work-subtitle mt-20">UX Design / Web Design</p>
          <p className="work-subtitle mt-20">2023</p>
          <div className="work-cta-container">
            <a className="button-outline button--atlas-outline" id="footer-cta" href="https://percorsisomatici.it/" target="BLANK">
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
            Percorsi Somatici is a project that collects materials, interviews,
            research, and workshop proposals in the field of movement,
            performance, and body-mind-soul integration. The main goal was to
            represent the sensation of balance. I created a clean and
            easy-to-navigate layout, aiming to find the right balance between
            content and empty spaces. I chose a color palette that emphasizes
            the sense of calm conveyed by this type of dance and movement.
            Subtle animations and smooth transitions further enhance the user
            experience, maintaining a serene and welcoming environment.
          </p>
        </div>
      </div>
      <div className="works-grid mobile-hidden" id="percorsi">
        <div className="row" id="first"></div>
        <div className="row" id="second">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="third">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="fourth"></div>
        <div className="row" id="fifth">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="sixth"></div>
      </div>
      <div className="works-mob desk-hidden" id="percorsi-mob">
          <div>
            <img src="/img/percorsi/1-mob.png" alt="img" />
          </div>
          <div>
            <img src={threeTwo} alt="img" />
          </div>
          <div>
            <img src={fourOne} alt="img" />
          </div>
          <div>
          <div>
            <img src={fourTwo} alt="img" />
          </div>
          <div>
            <img src={fiveOne} alt="img" />
          </div>
          <div>
            <img src={fiveTwo} alt="img" />
          </div>
            <img src={threeOne} alt="img" />
          </div>
          <div>
            <img src="/img/percorsi/5-mob.png" alt="img" />
          </div>
      </div>
      <div className="works-desc-wp next-wp">
        <div>
          <Link
            to="/works/Pegaso"
            onClick={(e) => delayAndGo(e, "/works/pegaso")}
          >
            <p className="cta-page-switch">
              <button>Prev</button>
            </p>
          </Link>
          <img src="/img/previous.svg" alt="previous" />
        </div>
        <div>
          <Link
            to="/works/StudioBigne"
            onClick={(e) => delayAndGo(e, "/works/studiobigne")}
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
