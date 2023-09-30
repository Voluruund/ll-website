import {Link} from "react-router-dom";

function Navigation(){

    window.onload = function(){
        let menuToggle = document.querySelector('.menu-toggle')
        menuToggle.onclick = function (){
            menuToggle.classList.toggle('active')
        }
    }

    return (
        <section className="navigation">
            <div className="menu-toggle"></div>
            <div className="menu">
                <ul>
                    <li><Link to="/" className='nav-item'>Home</Link></li>
                    <li><Link to="/about" className='nav-item'>about</Link></li>
                    <li><Link to="/works" className='nav-item'>works</Link></li>
                    <li><Link to="/contact" className='nav-item'>contact</Link></li>
                </ul>
            </div>
        </section>
    )
}
export default Navigation;