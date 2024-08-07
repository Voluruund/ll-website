import {StrictMode} from 'react';
import ConfirmButton from './confirmButton';
import {invioEmail} from '../emailer.js'

export default function Form(){

    return(
        <StrictMode>
            <section className="form-wrapper" id='form'>
                <h2 className="form-title">Drop me a line</h2>
                <form name='modulo'>
                    <div className="form-grid">
                        <p className="title-form mobile-hidden">Name</p>
                        <p className="title-form mobile-hidden">Email</p>
                        <p className="title-form mobile-hidden">Object</p>
                        <p className="title-form ml-10 mobile-hidden">Send</p>
                        <input type="text" className="form-item" placeholder='Nome' id='name' name='nome'/>
                        <input type="email" className="form-item" placeholder='Email'id='email' name='email'/>
                        <input type="text" className="form-item" placeholder='Messaggio' id='content' name='messaggio'/>
                        <button className="form-button ml-10 mobile-hidden" id='submit' onClick={invioEmail()}>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </form>
                {/* <div className="agree-wrapper mt-20">
                    <label className="container">
                        <input type="checkbox" id="policy" value={isSubscribed} onChange={handleChange}/>
                        <span className="checkmark"></span>
                    </label>
                    <p className="title-form mobile-hidden">I’ve read and agree with the terms and conditions of the Privacy Policy. </p>
                    <p className="title-form desktop-hidden"> I accept the terms of the Privacy Policy</p>
                </div> */}
                <ConfirmButton />
            </section>
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        </StrictMode>
    )
}