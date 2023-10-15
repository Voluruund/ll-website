import Form from '../common-comp/form';
import Footer from '../common-comp/footer'
import Logo from '../img/laura lavorini-logo.svg'
import Faccia from '../img/faccia.jpg'

const Home = () => {
    return (
        <>
            <section className='f-home-section'>
                <div className="main-title-wp">

                </div>
                <div className='text-anim-wp main-logo-wp'>
                    <img src={Logo} alt="laura lavorini"  className='main-logo'/>
                </div>
            </section>
            <section className="main-p-wp">

            </section>
            <section className="main-img-wp">
                <div className="two-img-wp">
                    <div className='top-align'>
                        <img src={Faccia} alt="faccia" className='img-home'/>
                    </div>
                    <div className='bot-align'>
                        <img src={Faccia} alt="faccia" className='img-home'/>
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