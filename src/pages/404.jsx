import { StrictMode } from "react";
import Footer from "../common-comp/footer";
// import SingleBaloon from "../common-comp/SingleBaloon";

function pageNotFound(){
    return ( <>
        <StrictMode>
            <div className="logo-wp-404"><img src={"./img/laura-lavorini-logo.png"} alt="logo" /></div>
            <section className="wp-404">
                <div className="txt-wp-404">
                    <p>4</p>
                    <div className="balloon-wp-404">
                        {/* <SingleBaloon /> */}
                    </div>
                    <p>4</p>
                </div>
            </section>
            <div className="r-5">
                <div className="text-wrapper">
                    <h1><span className="circle"></span>Page not found</h1>
                    <h1><span className="circle"></span>Page not found</h1>
                    <h1><span className="circle"></span>Page not found</h1>
                    <h1><span className="circle"></span>Page not found</h1>
                    <h1><span className="circle"></span>Page not found</h1>

                    <h1><span className="circle"></span>Page not found</h1>
                    <h1><span className="circle"></span>Page not found</h1>
                    <h1><span className="circle"></span>Page not found</h1>
                    <h1><span className="circle"></span>Page not found</h1>
                    <h1><span className="circle"></span>Page not found</h1>
                </div>
            </div>
            <div className="footer-not-found">
                <Footer />
            </div>
        </StrictMode>
    </>
    )
}
export default pageNotFound;