import {useParallax } from "react-scroll-parallax";
import Form from '../common-comp/form';
import Footer from '../common-comp/footer'
import { StrictMode, useEffect } from "react";
import Transition from "../common-comp/Transition";

const About = () => {

    function followImage(){
        var scrollingDiv = document.getElementById("scrollingDiv")
        var image = document.getElementById("imgScroll")
        var scrollTop = window.scrollY

        // TODO 
        // ERRORE NON SO PERCHE'
        var divTop = scrollingDiv.offsetTop
        // TODO

        var divHeight = scrollingDiv.offsetHeight
        var imageHeight = image.offsetHeight
        if(scrollTop + 40 > divTop && scrollTop + 40 < divTop + divHeight - imageHeight){
            image.style.top = scrollTop - divTop + 40 + "px"
        }else if (scrollTop + 40 <= divTop){
            image.style.top = "0"
        }else{
            image.style.top = divHeight - image.offsetHeight + "px"
        }
    }
    
    const lenis = window.lenis

    useEffect(() => {
        lenis.scrollTo('top')
        TransitionIn()
        window.addEventListener('scroll', followImage);

        //cleanup
        return () => {
            window.removeEventListener('scroll', followImage);
        };
    })

    window.lenis.scrollTo((0,0), {immediate: true})


    const parallax = useParallax({
        easing: 'easeInOut',
        shouldAlwaysCompleteAnimation: true,
        speed: 4,
        scale: [1, .9]
    });

    function TransitionIn(){
        var elem = document.getElementById("transIn");
        elem.classList.add("animateTransition-in")
    }

    return (
        <>  
            <StrictMode>
                <Transition />
                <section className="about-page" id="top">
                    <section className="about-wp">
                        <div className="title-about-wp mt-20">
                            <h1 className="about-title" id="title">about <br /><span>me</span></h1>
                            <div className="personal-img-wp" id="scrollingDiv">
                                <div className='personal-img def-border-radius' id="imgScroll">
                                    <img src={'./img/Laura-Lavorini.png'} alt="Laura" className="img-sizes" ref={parallax.ref}/>
                                </div>
                            </div>
                        </div>
                        <div className="p-data-wp mt-50">
                            <div className="title-cv-wp b-bottom">
                                <h2 className="title-cv pd-60-bot ">bio</h2>
                            </div>
                            <div className="parag-cv-wp pd-60-bot b-bottom">
                                <div className="text-anim-wp mobile-hidden">
                                    <p className="parag-cv text-anim d-100">With over 8 years of experience in the design</p>
                                </div>
                                <div className="text-anim-wp mobile-hidden">
                                    <p className="parag-cv text-anim d-200">industry, I have had the opportunity to</p>
                                </div>
                                <div className="text-anim-wp mobile-hidden">
                                    <p className="parag-cv text-anim d-300">collaborate with a diverse range of clients,</p>
                                </div>
                                <div className="text-anim-wp mobile-hidden">
                                    <p className="parag-cv text-anim d-400">tailoring each project to meet their unique</p>
                                </div>
                                <div className="text-anim-wp mobile-hidden">
                                    <p className="parag-cv text-anim d-500">My passion for creating visually</p>
                                </div>
                                <div className="text-anim-wp mobile-hidden">
                                    <p className="parag-cv text-anim d-600">appealing designs was sparked during my</p>
                                </div>
                                <div className="text-anim-wp mobile-hidden">
                                    <p className="parag-cv text-anim d-700">formative years. I am currently also a Web</p>
                                </div>
                                <div className="text-anim-wp mobile-hidden">
                                    <p className="parag-cv text-anim d-800">Graphic Design course supervisor at Nemo</p>
                                </div>
                                <div className="text-anim-wp mobile-hidden">
                                    <p className="parag-cv text-anim d-900">Academy of Digital Arts in Florence.</p>
                                </div>
                                <p className="parag-cv desk-hidden">
                                    With over 8 years of experience in the design industry, I have had the opportunity to
                                    collaborate with a diverse range of clients, tailoring each project to meet their unique goals.
                                    My passion for creating visually appealing designs was sparked during my formative years. I
                                    am currently also a Web Graphic Design course supervisor at Nemo Academy of Digital Arts
                                    in Florence.
                                </p>
                                <div className="work-pos-wp">
                                    <p className="work-pos-p">
                                        I hold a degree in painting and sculpture, which has deeply influenced my approach to
                                        graphic and web design. This classical art background allows me to infuse my work with a
                                        rich sense of aesthetics and creativity.
                                    </p>
                                    <p className="work-pos-p">
                                        My expertise spans across various domains, including Graphic Design, Digital Branding, and
                                        Web Design. I am dedicated to pushing the boundaries of design, exploring new techniques
                                        and trends to deliver exceptional results.
                                    </p>
                                </div>
                            </div>

                            <div className="title-cv-wp pd-60-y b-bottom">
                                <hr className="desk-hidden"/>
                                <h2 className="title-cv ">Curriculum</h2>
                            </div>
                            <div className="parag-cv-wp cv-grid pd-60-y b-bottom">
                                <p className="cv-job">2023 - present</p>
                                <p className="cv-job">Graphic Supervisor of the Web Graphic Design Course at Nemo Academy of Digital Arts</p>

                                <p className="cv-job mt-20">2020 - present</p>
                                <p className="cv-job mt-20">Web Graphic Designer Teacher at Nemo Academy of Digital Arts</p>

                                <p className="cv-job mt-20">2019 - present</p>
                                <p className="cv-job mt-20">Founder of Ragou Design studio in Florence</p>

                                <p className="cv-job mt-20">2016 - present</p>
                                <p className="cv-job mt-20">Start as Graphic Designer Freelance</p>

                                <p className="cv-job mt-20">2016 - 2017</p>
                                <p className="cv-job mt-20">Graphic Designer at Eliograf Prato</p>

                                <p className="cv-job mt-20">2016</p>
                                <p className="cv-job mt-20">Stage at Studio Righi Photographer</p>

                                <p className="cv-job mt-20">2016</p>
                                <p className="cv-job mt-20">Stage at Stylgraphix</p>
                            </div>

                            <div className="title-cv-wp pd-60-y b-bottom">
                                <hr className="desk-hidden"/>
                                <h2 className="title-cv">Services</h2>
                            </div>
                            <div className="parag-cv-wp services-grid pd-60-y b-bottom">
                                <p className="cv-job">Web Design</p>
                                <p className="cv-job">Logo Design</p>
                                <p className="cv-job">Illustration</p>

                                <p className="cv-job mt-20">Graphic Design</p>
                                <p className="cv-job mt-20">Branding</p>
                                <p className="cv-job mt-20">UX Design</p>
                            </div>
                            
                            <div className="title-cv-wp pd-60-y">
                                <hr className="desk-hidden"/>
                                <h2 className="title-cv">Testimonials</h2>
                            </div>
                            <div className="parag-cv-wp pd-60-y">
                                <p className="parag-testimonial">
                                “ I have been privileged and lucky to have had my website designed and built by the amazing Laura Lavorini, who understood my needs and surprised me with more I could ever hope for. Easy to navigate through, effective in helping me promote my profession and my career and fully integrated with my social media platforms. Graphically captivating in its simple structure the website that Laura created for me is truly something special, so much that I received a lot of positive feedback from colleagues and clients. I couldn’t think of anyone better in her field. Passionate, knowledgeable and patient, Laura is, despite her young age, a consummate professional who will surprise and please even the pickiest client! “
                                </p>
                                <ul><li>Fabrizio Mancinelli</li></ul>
                                <hr />

                                <p className="parag-testimonial mt-50">
                                “ I have been privileged and lucky to have had my website designed and built by the Laura Lavorini, who understood my needs and surprised me with more I could ever hope for. Easy to navigate through, effective in helping me promote my profession and my career and fully integrated with my social media platforms.
                                </p>
                                <ul><li>Fabrizio Mancinelli</li></ul>
                                <hr className="desk-hidden"/>
                            </div>
                        </div>
                    </section>
                    <div className="r-5">
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
                </section>
                <Form></Form>
                <Footer></Footer>
            </StrictMode>
        </>
    )
}
export default About;