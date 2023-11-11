import Footer from "../common-comp/footer";

function pageNotFound(){
    return ( <>
        <h1>404 error</h1>
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
    </>
    )
}
export default pageNotFound;