import { StrictMode, Suspense } from 'react';
import SingleBaloon from './SingleBaloon'

function Footer(){

    var loaded = 0

    if(window.innerWidth < 1000){
        loaded = 1
    }

    return(
        <StrictMode>
            <footer className='footer-wp' id='footer'>
                <Suspense fallback={null}>
                    <SingleBaloon />
                </Suspense>
                <div className='p-abs-100'>
                    <img src={'./img/copy-footer.svg'} alt="footer" className='img-footer'/>
                    <div className="data-footer-wp mt-20">
                        <p className='piva'><a href='#'>P.IVA 02435900978</a></p>
                        <div className='social'>
                            <p className='ig'><a href="#">instagram</a></p>
                            <p className='ln'><a href="#">linkedin</a></p>
                            <p className='fb'><a href="#">facebook</a></p>
                        </div>
                        {loaded === 0 ? 
                            <><p className='privacy'><a href="#">privacy policy | developed by Alessio majid</a></p></>
                            :
                            <>
                                <p className='privacy'><a href="#">privacy policy</a></p>
                                <p className='devby'><a href='#'>developed by Alessio majid</a></p>
                            </>
                        }
                    </div>
                </div>
            </footer>
        </StrictMode>
    )
}

export default Footer;