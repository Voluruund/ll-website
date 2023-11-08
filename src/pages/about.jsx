import {useParallax } from "react-scroll-parallax";
import Form from '../common-comp/form';
import Footer from '../common-comp/footer'

const About = () => {
    const parallax = useParallax({
        easing: 'easeInOut',
        // shouldAlwaysCompleteAnimation: true,
        speed: 4,
        scale: [1, .9]
    });
    return (
        <>  
            <section className="about-page">
                <section className="about-wp">
                    <div className="title-about-wp mt-20">
                        <h1 className="about-title">about <br /><span>me</span></h1>
                        <div className="personal-img-wp">
                            <div className='personal-img def-border-radius'>
                                <img src={'./img/Laura-Lavorini.png'} alt="Laura" className="img-sizes" ref={parallax.ref}/>
                            </div>
                        <div className="fl-bot">
                                <p className="serious-cta">Serious photo</p>
                        </div>
                        </div>
                    </div>
                    <div className="p-data-wp mt-50">
                        <div className="title-cv-wp">
                            <h2 className="title-cv">bio</h2>
                        </div>
                        <div className="parag-cv-wp">
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv text-anim d-100">With over 7 years of design </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv text-anim d-200">experience I have had the opportunity </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv text-anim d-300">to take on many different projects and </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv text-anim d-400">challenges. My classical art degree </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv text-anim d-500"> focused in painting and sculpture gave </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv text-anim d-600">me the ability to focus onvisual key </p>
                            </div>
                            <div className="text-anim-wp mobile-hidden">
                                <p className="parag-cv text-anim d-700">points to realize a good design project.</p>
                            </div>
                            <p className="parag-cv desk-hidden">
                                With over 7 years of design experience I have had the opportunity to take on many different projects and challenges. 
                                My classical art degree focused in painting and sculpture gave me the ability to focus on visual key points to realize
                                a good design project.
                            </p>
                            <div className="work-pos-wp">
                                <p className="work-pos-p">Graphic Supervisor of the Web Graphic Design Course at Nemo Academy of Digital
                                    Arts</p>
                                <p className="work-pos-p">Graphic Supervisor of the Web Graphic Design Course at Nemo Academy of Digital
                                    Arts</p>
                            </div>
                        </div>

                        <div className="title-cv-wp mt-120">
                            <hr className="desk-hidden"/>
                            <h2 className="title-cv">Curriculum</h2>
                        </div>
                        <div className="parag-cv-wp cv-grid mt-120">
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

                        <div className="title-cv-wp mt-70">
                            <hr className="desk-hidden"/>
                            <h2 className="title-cv">Services</h2>
                        </div>
                        <div className="parag-cv-wp services-grid mt-70">
                            <p className="cv-job">Web Design</p>
                            <p className="cv-job">Logo Design</p>
                            <p className="cv-job">Illustration</p>

                            <p className="cv-job mt-20">Graphic Design</p>
                            <p className="cv-job mt-20">Branding</p>
                            <p className="cv-job mt-20">UX Design</p>
                        </div>
                        
                        <div className="title-cv-wp mt-120">
                            <hr className="desk-hidden"/>
                            <h2 className="title-cv">Testimonials</h2>
                        </div>
                        <div className="parag-cv-wp mt-120">
                            <p className="parag-testimonial">
                                “ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiamperspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam “
                            </p>
                            <ul><li>Nome persona</li></ul>
                            <hr />

                            <p className="parag-testimonial mt-50">
                                “ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiamperspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam “
                            </p>
                            <ul><li>Nome persona</li></ul>
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
        </>
    )
}
export default About;