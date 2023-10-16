import Form from '../common-comp/form';
import Footer from '../common-comp/footer'
import Logo from '../img/laura lavorini-logo.png'
import Faccia from '../img/faccia.jpg'
import {Link} from "react-router-dom";

var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight * 1.4 || document.documentElement.clientHeight * 1.4) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
  
var findMe
var numP
var pBtn

const Home = () => {

    window.setTimeout(
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                findMe = document.querySelectorAll('.parag-cv');
                numP = document.getElementById('01')
                pBtn = document.getElementById('btnP')
            }
            window.addEventListener('scroll', function(e) {
                findMe.forEach(element => {
                    if (isInViewport(element)) {
                        pBtn.classList.add("btnP-anim")
                        numP.classList.add("text-anim")
                        element.classList.add("text-anim");
                    }
                });
            }, false)
        }, 200)

    return (
        <>
            <section className='f-home-section'>
                <div className="main-title-wp">
                    <div><p className='main-title-h'>Web Designer</p></div>
                    <div><p className='main-title-h'><span className='cursive-title-h'>and</span> Graphic Designer</p></div>
                    <div><p className='subtitle-h'>Scroll down</p></div>
                </div>
                <div className='text-anim-wp main-logo-wp'>
                    <img src={Logo} alt="laura lavorini"  className='main-logo' loading='lazy'/>
                </div>
            </section>
            <section className="main-p-wp">
                <div className="text-anim-wp mobile-hidden">
                    <p className='p-num d-100' id='01'>(01)</p>
                    <p className="parag-cv d-100">I’m Florence-based web graphic designer  </p>
                </div>
                <div className="text-anim-wp mobile-hidden">
                    <p className="parag-cv d-200">with 7 years of experience in the design field. Since</p>
                </div>
                <div className="text-anim-wp mobile-hidden">
                    <p className="parag-cv d-300">2020 I had the opportunity to be a web design </p>
                </div>
                <div className="text-anim-wp mobile-hidden">
                    <p className="parag-cv d-400">teacher at Nemo Academy of Digital Arts. </p>
                </div>
                <div className="text-anim-wp mobile-hidden">
                    <p className="parag-cv d-500">Passionate about typography, design and art in </p>
                </div>
                <div className="text-anim-wp mobile-hidden">
                    <p className="parag-cv d-600">every way and form.</p>
                    <Link to="/about"  className='circular-btn' id='btnP'><span className="material-symbols-outlined">arrow_forward</span></Link>
                </div>
            </section>
            <section className="main-img-wp">
                <div className="two-img-wp">
                    <div className='top-align'>
                        <img src={Faccia} alt="faccia" className='img-home' loading='lazy'/>
                    </div>
                    <div className='bot-align'>
                        <img src={Faccia} alt="faccia" className='img-home' loading='lazy'/>
                    </div>
                </div>
            </section>
            <div className="r-4 z-100 mobile-hidden">
                <div className="text-wrapper">
                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>

                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>
                </div>
            </div>
            <div className="mobile-hidden">
                <div className="text-wrapper rev-anim">
                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>

                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>
                </div>
            </div>
            <div className="r-7 z-100 mobile-hidden">
                <div className="text-wrapper">
                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>

                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>
                </div>
            </div>
            <div className="r-m4 z-80 mobile-hidden">
                <div className="text-wrapper rev-anim">
                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>

                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>
                </div>
            </div>
            <div className='mb-150'>
                <div className="text-wrapper mobile-hidden">
                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>

                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>
                </div>
            </div>
            <div className="r-5 desk-hidden">
                <div className="text-wrapper mtb-200">
                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>

                    <h1><span className="circle"></span>Graphic Design</h1>
                    <h1><span className="circle"></span>Web Design</h1>
                    <h1><span className="circle"></span>Illustration</h1>
                    <h1><span className="circle"></span>Logo Design</h1>
                    <h1><span className="circle"></span>Branding</h1>
                    <h1><span className="circle"></span>UX Design</h1>
                </div>
            </div>
            <Form></Form>
            <Footer></Footer>
        </>
    )
}

export default Home;