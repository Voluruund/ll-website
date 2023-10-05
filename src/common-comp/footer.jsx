import img from '../img/copy-footer.svg'

function Footer(){
    return(
        <footer className='footer-wp'>
            <img src={img} alt="footer" className='img-footer'/>
            <div className="data-footer-wp mt-20">
                <p className='piva'><a href='#'>P.IVA 02435900978</a></p>
                <div className='social'>
                    <p className='ig'><a href="#">instagram</a></p>
                    <p className='ln'><a href="#">linkedin</a></p>
                    <p className='fb'><a href="#">facebook</a></p>
                </div>
                <p className='privacy'><a href="#">privacy policy</a></p>
            </div>
        </footer>
    )
}

export default Footer;