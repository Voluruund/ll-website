import Form from '../common-comp/form';
import Footer from '../common-comp/footer'
import {Link} from "react-router-dom";
import MultBaloons from '../common-comp/MultBaloons';
import { StrictMode, Suspense } from 'react';
import { useEffect } from 'react';
import Loader from '../common-comp/Loader';
import { useState } from 'react';
import Image from '../common-comp/Image'

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
var navigation

const Home = () => {

    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
    })

    window.setTimeout(
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                navigation = document.getElementById('btNav')
                findMe = document.querySelectorAll('.parag-cv');
                numP = document.getElementById('01')
                pBtn = document.getElementById('btnP')
                imgList = document.querySelectorAll('.img-home')
                showMore = document.getElementById("view-more");
            }
            window.addEventListener('scroll', function(e) {
                navigation.classList.add("navigation-anim")
                findMe.forEach(element => {
                    if (isInViewport(element)) {
                        numP.classList.add("text-anim")
                        element.classList.add("text-anim");
                    }
                });
                if(isInViewport(pBtn)){
                    pBtn.classList.add("btnP-anim")
                }
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
                {/* <Distortion /> */}
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

                <section className="main-p-wp mobile-hidden">
                    <div className="mp-wp">
                        <div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className='p-num d-100' id='01'>(01)</p>
                                <p className="parag-cv d-100">I’m a designer based in </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv d-200"><span className='cursive-title-h'>Florence</span>. Specialized in Graphic design </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv d-300">and Digital branding, with 8+ years of</p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv d-400">experience in <span className='cursive-title-h'>design </span>field.</p>
                            </div>
                        </div>
                        <div>
                            <div className="per-hobbies">
                                <p>About me</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid-2">
                        <div className='first-col-g2'>
                            <img src={'./img/laura-home.png'} alt="Laura" className="img-home-l"/>
                        </div>
                        <div className='second-col-g2'>
                            <p>Thanks to the years spent to study art and the experience of all these years as a freelancer, I gained a great experience in creative process. In the last 4 years I had the chance to teach Web Graphic Design at Nemo Academy in Florence. </p>
                            <div className="per-hobbies">
                                <p>Swimmer</p>
                                <p>Music lover</p>
                                <p>Film/TV series devourer</p>
                            </div>
                            <div className="more-info">
                                <p>more about me</p>
                                <Link to="/about"  className='circular-btn' id='btnP'><span className="material-symbols-outlined">arrow_forward</span></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="main-img-wp demo-1__gallery" id='work'>
                    <div>
                        <Image url="./img/gallery-london.png" nextUrl="./img/monica-logo-home.png"></Image>
                        <div className="info-work">
                            <p><p className='p-num'>(01)</p> DYS44 ART GALLERY LONDON</p>
                            <p>WEB DESIGN</p>
                            <p className='proj-date'>2022</p>
                        </div>
                    </div>

                    <div>
                        <Image url="./img/monica-logo-home.png" nextUrl="./img/faccia.jpg"></Image>
                        <div className="info-work" id='monica'>
                            <p><p className='p-num'>(02)</p> MONICA BRANCHETTI</p>
                            <p>WEB & GRAPHIC DESIGN</p>
                            <p className='proj-date'>2023</p>
                        </div>
                    </div>

                    <div>
                        <Image url="./img/cavallini-logo-home.png" nextUrl="./img/faccia.jpg"></Image>
                        <div className="info-work" id='monica'>
                            <p><p className='p-num'>(03)</p> Valentina Cavallini</p>
                            <p>Branding</p>
                            <p className='proj-date'>2023</p>
                        </div>
                    </div>

                    <div>
                        <Image url="./img/guia-nerli.png" nextUrl="./img/faccia.jpg"></Image>
                        <div className="info-work" id='monica'>
                            <p><p className='p-num'>(04)</p> Guia Nerli</p>
                            <p>Branding</p>
                            <p className='proj-date'>2020</p>
                        </div>
                    </div>

                    <div>
                        <Image url="./img/somatici-home.png" nextUrl="./img/faccia.jpg"></Image>
                        <div className="info-work" id='monica'>
                            <p><p className='p-num'>(05)</p> Percorsi somatici</p>
                            <p>Web Design</p>
                            <p className='proj-date'>2023</p>
                        </div>
                    </div>

                    <div>
                        <Image url="./img/domizia-home.png" nextUrl="./img/faccia.jpg"></Image>
                        <div className="info-work" id='monica'>
                            <p><p className='p-num'>(06)</p> Domizia Vanni</p>
                            <p>Web Design</p>
                            <p className='proj-date'>2023</p>
                        </div>
                    </div>

                    <div>
                        <Image url="./img/bigne-home.png" nextUrl="./img/faccia.jpg"></Image>
                        <div className="info-work" id='monica'>
                            <p><p className='p-num'>(07)</p> Studio Bignè</p>
                            <p>Branding</p>
                            <p className='proj-date'>2023</p>
                        </div>
                    </div>

                    <div>
                        <Image url="./img/pegaso-home.png" nextUrl="./img/faccia.jpg"></Image>
                        <div className="info-work" id='monica'>
                            <p><p className='p-num'>(08)</p> Pasticceria Pegaso</p>
                            <p>Web Design</p>
                            <p className='proj-date'>2023</p>
                        </div>
                    </div>

                    <div>
                        <Image url="./img/personal-work-home.png" nextUrl="./img/faccia.jpg"></Image>
                        <div className="info-work" id='monica'>
                            <p><p className='p-num'>(09)</p> Personal project</p>
                            <p>Illustration</p>
                            <p className='proj-date'>2023</p>
                        </div>
                    </div>
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