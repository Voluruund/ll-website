import Form from '../common-comp/form';
import Footer from '../common-comp/footer'
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import MultBaloons from '../common-comp/MultBaloons';
import { StrictMode, Suspense } from 'react';
import { useEffect } from 'react';
import Loader from '../common-comp/Loader';
// import { useState } from 'react';
import Image from '../common-comp/Image'

// import Distortion from '../utils/Distortion';
import Transition from '../common-comp/Transition';
import { element } from 'three/examples/jsm/nodes/Nodes.js';

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
var pBtn2
var imgList
var showMore
var navigation
var rowAnim
var imgSx
var imgDx

const Home = () => {

    const lenis = window.lenis

    function mountGeneric(){
        navigation.classList.add("navigation-anim")
        if(isInViewport(pBtn)){
            pBtn.classList.add("btnP-anim")
            pBtn2.classList.add("btnP-anim-mob")
            rowAnim.classList.add("animateRow")
        }
    }

    function mountTextAnim(){
        findMe.forEach(element => {
            if (isInViewport(element)) {
                numP.classList.add("text-anim")
                element.classList.add("text-anim");
            }
        });
    }

    function mountShowMore(){
        window.addEventListener('mousemove', function(e){
            let left = (e.pageX + 30)+"px";
            let top = (e.pageY - 30)+"px"
            showMore.setAttribute('listener', 'true')
            showMore.style.visibility = 'visible'
            showMore.style.left = left;
            showMore.style.top = top;
        });
    }

    function mountImgFade(){
        imgSx.forEach(element => {
            if(isInViewport(element)){
                element.classList.add("fadeInUp-animation")
            }
        })

        imgDx.forEach(element => {
            if(isInViewport(element)){
                element.classList.add("fadeInUp-animation")
            }
        })
    }

    function hideShowMore(){
        window.addEventListener('mousemove', function(e){
            showMore.style.visibility = 'hidden'
        });
    }

    useEffect(() => {

        lenis.scrollTo('top')

        navigation = document.getElementById('btNav')
        findMe = document.querySelectorAll('.parag-cv');
        numP = document.getElementById('01')
        pBtn = document.getElementById('btnP')
        pBtn2 = document.getElementById('btnP2')
        rowAnim = document.getElementById('row')
        imgList = document.querySelectorAll('.img-home')
        imgSx = document.querySelectorAll(".sx")
        imgDx = document.querySelectorAll(".dx")
        showMore = document.getElementById("view-more");
        showMore.setAttribute('listener', 'false')

        window.addEventListener('scroll', mountGeneric)
        window.addEventListener('scroll', mountTextAnim)
        window.addEventListener('scroll', mountImgFade)

        if(window.innerWidth > 1024){
            imgList.forEach(element => {
                if(showMore.getAttribute('listener') !== 'true'){
                    element.addEventListener('mouseover', mountShowMore)
                }
                element.addEventListener('mouseout', hideShowMore)
            })
        }

        return () => {
            window.removeEventListener('scroll', mountGeneric)
            window.removeEventListener('mouseover', mountShowMore)
            window.removeEventListener('mouseout', hideShowMore)
            window.removeEventListener('scroll', mountTextAnim)
            window.removeEventListener('scroll', mountImgFade)
        }

    }, [lenis])

    var mobile = 0

    if(window.innerWidth < 768){
        mobile = 1
    }

    const history = useNavigate();

    function delayAndGo(e, path) {
        e.preventDefault();
        var elem = document.getElementById("transOut");
        elem.classList.add("animateTransition")
        setTimeout(() =>{
            history(path)
            elem.classList.remove("animateTransition")
        }, 1500);
    }

    return (
        <>
            <StrictMode>
                <Loader />
                <div className="homeTransition">
                    <Transition />
                </div>
                {/* <Distortion /> */}
                <div className='view-more' id='view-more'>
                    <div className="button-outline button--atlas-outline" id="footer-cta">
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
                    </div>
                </div>

                <section className='f-home-section' id='top'>
                    <Suspense fallback={null}>
                        <MultBaloons />
                    </Suspense>
                    <div className="main-title-wp">
                        <div className='o-hidden'>
                            <p className='main-title-h d-100'>Web Designer</p>
                        </div>
                        <div className='o-hidden'>
                            <p className='main-title-h d-150'><span className='cursive-title-h'>and</span> Graphic Designer</p>
                        </div>
                        <div className='subt-wp o-hidden'>
                            <p className='subtitle-h d-200'>Scroll down</p>
                        </div>
                    </div>
                    <div className='text-anim-wp main-logo-wp o-hidden'>
                        {mobile === 0 ? 
                            <img src={'./img/laura-lavorini-logo.svg'} alt="laura lavorini"  className='main-logo d-100' loading='lazy' id='deskLogo'/>
                            : 
                            <img src={'./img/laura-lavorini-mobile.png'} alt="laura lavorini"  className='main-logo' loading='lazy' id='deskLogo'/>
                        } 
                    </div>
                </section>

                <section className="main-p-wp mobile-hidden">
                    <div className="mp-wp">
                        <div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className='p-num d-100' id='01'>(01)</p>
                                <p className="parag-cv d-100">I’m a web graphic designer based  </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className='parag-cv d-200'>in Florence, specializing in Graphic</p>
                                {/* <p className="parag-cv d-200"><span className='cursive-title-h'>Florence</span>. Specialized in Graphic design </p> */}
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv d-300">Design Design and Digital Branding. With over 8 </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv d-400">years of experience in the design field, I</p>
                                {/* <p className="parag-cv d-400">experience in <span className='cursive-title-h'>design </span>field.</p> */}
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className='parag-cv d-500'> have honed my skills in crafting visually </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className='parag-cv d-600'>compelling and user-friendly designs.</p>
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
                            <p>I work as a freelancer and as a web design teacher in Florence. My journey through the
                                creative design process has been enriched by my passion for fine arts, which continues to
                                inspire my work. 
                            </p>
                            <div className="per-hobbies">
                                <p>Swimmer</p>
                                <p>Music lover</p>
                                <p>Film/TV series devourer</p>
                            </div>
                            <div className="more-info">
                                <p>
                                    more about me
                                    <div className="rowAnim" id='row'></div>
                                </p>
                                <Link to="/about" onClick={(e) => delayAndGo(e, "/about")} className='circular-btn circ-btn-anim' id='btnP'><span className="material-symbols-outlined">arrow_forward</span></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='mp-wp desk-hidden'>
                    <div className='mob-who-am-i-wp'>
                        <div className="text-anim-wp">
                            <p className='p-num d-100' id='01'>(01)</p>
                            <p className="parag-cv d-100">I’m a designer</p>
                        </div>
                        <div className="text-anim-wp">
                            <p className="parag-cv d-200">based in <span className='cursive-title-h'>Florence</span>. Specialized</p>
                        </div>
                        <div className="text-anim-wp">
                            <p className="parag-cv">in Graphic design and Digital </p>
                        </div>
                        <div className="text-anim-wp">
                            <p className="parag-cv d-300">branding, with 8+ years of</p>
                        </div>
                        <div className="text-anim-wp">
                            <p className="parag-cv d-400">experience in <span className='cursive-title-h'>design </span>field.</p>
                        </div>
                    </div>
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
                            <p>
                                more about me
                            </p>
                            <Link to="/about" onClick={(e) => delayAndGo(e, "/about")}  className='circular-btn-mob' id='btnP2'><span className="material-symbols-outlined">arrow_forward</span></Link>
                        </div>
                    </div>
                </div>

                <section className="main-img-wp demo-1__gallery" id='work'>
                    <div className='o-hidden'>
                        <div className="sx"></div>
                        <Link to="/works/cesarelampronti" onClick={(e) => delayAndGo(e, "/works/cesarelampronti")}>
                            <Image url="./img/cover-statica-lampronti.jpg" nextUrl="./img/cover-lampronti.gif"></Image>
                            <div className="info-work">
                                <p><p className='p-num'>(01)</p> DYS44 ART GALLERY LONDON</p>
                                <p>WEB DESIGN</p>
                                <p className='proj-date'>2022</p>
                            </div>
                        </Link>
                    </div>
                    <div className='o-hidden'>
                        <div className="dx"></div>
                        <Link to="/works/branchetti" onClick={(e) => delayAndGo(e, "/works/branchetti")}>
                            <Image url="./img/monica-logo-home.png" nextUrl="./img/monica.gif"></Image>
                            <div className="info-work" id='monica'>
                                <p><p className='p-num'>(02)</p> MONICA BRANCHETTI</p>
                                <p>WEB & GRAPHIC DESIGN</p>
                                <p className='proj-date'>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='o-hidden'>
                        <div className="sx"></div>
                        <Link to="/works/cavallini" onClick={(e) => delayAndGo(e, "/works/cavallini")}>
                            <Image url="./img/bisteccamore.png" nextUrl="./img/cover-bisteccamore.gif"></Image>
                            <div className="info-work" id='monica'>
                                <p><p className='p-num'>(03)</p> Valentina Cavallini</p>
                                <p>Branding</p>
                                <p className='proj-date'>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='o-hidden'>
                        <div className="dx"></div>
                        <Link to="/works/guianerli" onClick={(e) => delayAndGo(e, "/works/guianerli")}>
                            <Image url="./img/guia-nerli.png" nextUrl="./img/cover-guia-nerli.gif"></Image>
                            <div className="info-work" id='monica'>
                                <p><p className='p-num'>(04)</p> Guia Nerli</p>
                                <p>Branding</p>
                                <p className='proj-date'>2020</p>
                            </div>
                        </Link>
                    </div>
                    <div className='o-hidden'>
                        <div className="sx"></div>
                        <Link to="/works/percorsisomatici" onClick={(e) => delayAndGo(e, "/works/percorsisomatici")}>
                            <Image url="./img/somatici-home.png" nextUrl="./img/cover-percorsi-somatici.gif"></Image>
                            <div className="info-work" id='monica'>
                                <p><p className='p-num'>(05)</p> Percorsi somatici</p>
                                <p>Web Design</p>
                                <p className='proj-date'>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='o-hidden'>
                        <div className='dx'></div>
                        <Link to="/works/vanni" onClick={(e) => delayAndGo(e, "/works/vanni")}>
                            <Image url="./img/nuova-coverdomiziavanni.jpg" nextUrl="./img/vanni.gif"></Image>
                            <div className="info-work" id='monica'>
                                <p><p className='p-num'>(06)</p> Domizia Vanni</p>
                                <p>Web Design</p>
                                <p className='proj-date'>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='o-hidden'>
                        <div className="sx"></div>
                        <Link to="/works/studiobigne" onClick={(e) => delayAndGo(e, "/works/studiobigne")}>
                            <Image url="./img/bigne-home.png" nextUrl="./img/bigne.gif"></Image>
                            <div className="info-work" id='monica'>
                                <p><p className='p-num'>(07)</p> Studio Bignè</p>
                                <p>Branding</p>
                                <p className='proj-date'>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='o-hidden'>
                        <div className="dx"></div>
                        <Link to="/works/pegaso" onClick={(e) => delayAndGo(e, "/works/pegaso")}>
                            <Image url="./img/pegaso-home.png" nextUrl="./img/cover-pegaso-home.gif"></Image>
                            <div className="info-work" id='monica'>
                                <p><p className='p-num'>(08)</p> Pasticceria Pegaso</p>
                                <p>Web Design</p>
                                <p className='proj-date'>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='o-hidden'>
                        <div className="sx"></div>
                        <Link to="/works/agricola" onClick={(e) => delayAndGo(e, "/works/agricola")}>
                            <Image url="./img/agricola.png" nextUrl="./img/cover-ludus.gif"></Image>
                            <div className="info-work" id='monica'>
                                <p><p className='p-num'>(09)</p> Personal project</p>
                                <p>Illustration</p>
                                <p className='proj-date'>2023</p>
                            </div>
                        </Link>
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

export default Home;