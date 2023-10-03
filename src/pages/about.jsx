import Form  from "../common-comp/form";

function About(){
    return (
        <section className="about-page">
            <section className="about-wp">
                <div className="title-about-wp mt-20">
                    <h1 className="about-title">about <br /><span>me</span></h1>
                    <div className="personal-img-wp">
                        <div className='personal-img'></div>
                        {/* <img src={require('../img/_DSC2424-2.jpg')} alt="Laura" className='personal-img' /> */}
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
                        <p className="parag-cv">
                            With over 7 years of design experience I have had the opportunity to take on many different projects and
                            challenges. My classical art degree focused in painting and sculpture gave me the ability to focus on
                            visual key points to realize a good design project.
                        </p>
                        <div className="work-pos-wp">
                            <p className="work-pos-p">Graphic Supervisor of the Web Graphic Design Course at Nemo Academy of Digital
                                Arts</p>
                            <p className="work-pos-p">Graphic Supervisor of the Web Graphic Design Course at Nemo Academy of Digital
                                Arts</p>
                        </div>
                    </div>

                    <div className="title-cv-wp mt-120">
                        <h2 className="title-cv">Curriculum</h2>
                    </div>
                    <div className="parag-cv-wp cv-grid mt-120">
                        <p className="cv-job">2023 - present</p>
                        <p className="cv-job">Graphic Supervisor of the Web Graphic Design Course at Nemo Academy of Digital Arts
                        </p>

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
            <Form></Form>
        </section>
    )
}
export default About;