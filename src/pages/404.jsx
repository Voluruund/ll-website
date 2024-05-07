import { StrictMode } from "react";
import Footer from "../common-comp/footer";
import SingleBaloon from "../common-comp/SingleBaloon";

function pageNotFound(){

    var showMore

    window.setTimeout(
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                showMore = document.getElementById("view-more");
                showMore.setAttribute('listener', 'false')
            }
            if(window.innerWidth > 1024){
                if(showMore.getAttribute('listener') !== 'true'){
                    document.getElementById("wp-404").addEventListener('mouseover', function(e){
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
                document.getElementById("wp-404").addEventListener('mouseout', function(e){
                    window.addEventListener('mousemove', function(e){
                        showMore.style.visibility = 'hidden'
                    });
                }, false)
            }
    }, 800)

    return ( <>
        <StrictMode>
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
            <div className="logo-wp-404"><img src={"./img/laura-lavorini-logo.png"} alt="logo" /></div>
            <section className="wp-404">
                <a href="/">
                    <div className="txt-wp-404" id="wp-404">
                        <p>4</p>
                        <div className="balloon-wp-404">
                            <SingleBaloon />
                        </div>
                        <p>4</p>
                    </div>
                </a>
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