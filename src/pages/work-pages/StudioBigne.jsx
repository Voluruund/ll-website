import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../../common-comp/Transition";
import Form from "../../common-comp/form";
import Footer from "../../common-comp/footer";
import twoOne from "../../img/bigne/2-1.png";
import twoTwo from "../../img/bigne/2-2.png";
import fourOne from "../../img/bigne/5-1.png";
import fourTwo from "../../img/bigne/5-2.png";
import sixOne from "../../img/bigne/7-2.png";
import sixTwo from "../../img/bigne/7-1.png";

export default function StudioBigne() {
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
          <p className="work-p">Studio Bignè</p>
          <p className="work-subtitle mt-20">Branding / Graphic Design</p>
          <p className="work-subtitle mt-20">2023</p>
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
            Studio Bignè is a group of young illustrators from Florence, Italy,
            who began working together. Each member has their own unique style,
            but they all share a passion for art and Italian pastry. For such a
            creative and dynamic group, I designed a modern and vibrant graphic
            that reflects their energy and I used bright and captivating colors
            to attract attention and convey the group's vitality. Additionally,
            I chose fonts that evoke an editorial style, adding a touch of
            elegance and professionalism.{" "}
          </p>
        </div>
      </div>
      <div className="works-grid mobile-hidden" id="bigne">
        <div className="row" id="first"></div>
        <div className="row" id="second">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="third"></div>
        <div className="row" id="fourth"></div>
        <div className="row" id="fifth">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="row" id="sixth"></div>
        <div className="row" id="seventh">
          <div className="work-grid-2">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="works-mob desk-hidden" id="bigne-mob">
            <div>
              <img src="/img/bigne/1.png" alt="img" />
            </div>
            <div>
              <img src={twoOne} alt="img" />
            </div>
            <div>
              <img src={twoTwo} alt="img" />
            </div>
            <div>
              <img src="/img/bigne/3.png" alt="img" />
            </div>
            <div>
              <img src={fourOne} alt="img" />
            </div>
            <div>
              <img src={fourTwo} alt="img" />
            </div>
            <div>
              <img src="/img/bigne/5.png" alt="img" />
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
            to="/works/PercorsiSomatici"
            onClick={(e) => delayAndGo(e, "/works/percorsisomatici")}
          >
            <p className="cta-page-switch">
              <button>Previous</button>
            </p>
          </Link>
          <img src="/img/previous.svg" alt="previous" />
        </div>
        <div>
          <Link
            to="/works/vanni"
            onClick={(e) => delayAndGo(e, "/works/vanni")}
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
