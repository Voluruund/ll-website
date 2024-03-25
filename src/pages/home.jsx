import Form from '../common-comp/form';
import Footer from '../common-comp/footer'
import {Link} from "react-router-dom";
import MultBaloons from '../common-comp/MultBaloons';
import { StrictMode, Suspense } from 'react';
import { useEffect } from 'react';
import Loader from '../common-comp/Loader';
import { useState } from 'react';

import Distortion from '../utils/Distortion';

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
var imgList
var showMore

const Home = () => {

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
    })

    window.setTimeout(
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                findMe = document.querySelectorAll('.parag-cv');
                numP = document.getElementById('01')
                pBtn = document.getElementById('btnP')
                imgList = document.querySelectorAll('.img-home')
                showMore = document.getElementById("view-more");
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

            showMore.setAttribute('listener', 'false')

            if(window.innerWidth > 1024){
                imgList.forEach(element => {
                    if(showMore.getAttribute('listener') !== 'true'){
                        element.addEventListener('mouseover', function(e){
                                window.addEventListener('mousemove', function(e){
                                    let left = (e.pageX + 30)+"px";
                                    let top = (e.pageY - 30)+"px"
                                    showMore.setAttribute('listener', 'true')
                                    showMore.style.visibility = 'visible'
                                    showMore.style.left = left;
                                    showMore.style.top = top;
                                });
                        }, false)
                    }
                })
    
                imgList.forEach(element => {
                    element.addEventListener('mouseout', function(e){
                        window.addEventListener('mousemove', function(e){
                            showMore.style.visibility = 'hidden'
                        });
                    }, false)
                })
            }
    }, 800)

    const [loaded, setLoaded] = useState(0);

    return (
        <>
            <StrictMode>
                {loaded === 0 ? <Loader /> : null}
                <Distortion />
                <div className='view-more' id='view-more'>
                    <a className="button-outline button--atlas-outline" id="footer-cta">
                        <span id='hide-btn-default'>View more</span>
                        <div className="marqueebutton-outline" aria-hidden="true">
                            <div className="marquee__inner-outline btn-hover-reset">
                                <span>View more</span>
                                <span>View more</span>
                                <span>View more</span>
                                <span>View more</span>
                                <span>View more</span>

                                <span>View more</span>
                                <span>View more</span>
                                <span>View more</span>
                                <span>View more</span>
                                <span>View more</span>
                            </div>
                        </div>
                    </a>
                </div>

                <section className='f-home-section' id='top'>
                    <Suspense fallback={null}>
                        <MultBaloons />
                    </Suspense>
                    <div className="main-title-wp">
                        <div><p className='main-title-h'>Web Designer</p></div>
                        <div><p className='main-title-h'><span className='cursive-title-h'>and</span> Graphic Designer</p></div>
                        <div className='subt-wp'><p className='subtitle-h'>Scroll down</p></div>
                    </div>
                    <div className='text-anim-wp main-logo-wp'>
                        <img src={'./img/laura-lavorini-logo.png'} alt="laura lavorini"  className='main-logo' loading='lazy'/>
                    </div>
                </section>


                {/* da rifare */}
                <section className="main-p-wp mobile-hidden">
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
                <section className="main-p-wp desk-hidden">
                    <p className='p-num' id='01'>(01)</p>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-100">I’m Florence-based web </p>
                    </div>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-200">graphic designer with 7</p>
                    </div>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-300">years of experience in the</p>
                    </div>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-400">design field. Since 2020 I </p>
                    </div>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-500">had the opportunity to be</p>
                    </div>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-600">a web design teacher at </p>
                    </div>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-700">Nemo Academy of Digital</p>
                    </div>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-800">Arts. Passionate about </p>
                    </div>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-900">typography, design and </p>
                    </div>
                    <div className="text-anim-wp desk-hidden">
                        <p className="parag-cv d-1000">art in every way and form.</p>
                    </div>
                    <div className="desk-hidden circular-btn-wp-mobile">
                        <Link to="/about"  className='circular-btn-mob'><span className="material-symbols-outlined">arrow_forward</span></Link>
                        <p id='learn-more-p'>learn more</p>
                        <div className='row'></div>
                    </div>
                </section>




                <section className="main-img-wp demo-1__gallery" id='work'>
                    <img src={'./img/faccia.jpg'} alt="faccia" className='img-home demo-1__gallery__figure' loading='lazy'/>
                    <img src='./img/faccia.jpg' alt="faccia" className='img-home demo-1__gallery__figure' loading='lazy'/>
                    <img src={'./img/imgProvaDue.png'} alt="faccia" className='img-home demo-1__gallery__figure' loading='lazy'/>
                    <img src='./img/imgProvaUno.png' alt="faccia" className='img-home demo-1__gallery__figure' loading='lazy'/>
                    <img src={'./img/imgProvaTre.png'} alt="faccia" className='img-home demo-1__gallery__figure' loading='lazy'/>
                </section>
                <div className="r-4 z-100 mobile-hidden">
                    <div className="text-wrapper a-50">
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
                    <div className="text-wrapper rev-anim a-35">
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
                    <div className="text-wrapper rev-anim a-50">
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
                    <div className="text-wrapper mobile-hidden a-40">
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
            </StrictMode>
        </>
    )
}


// new Demo()

export default Home;