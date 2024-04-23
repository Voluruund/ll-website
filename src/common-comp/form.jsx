import {StrictMode, useState} from 'react';
import ConfirmButton from './confirmButton';

function Form(){
    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleChange = event => {
        if (event.target.checked) {
          alert('✅ Checkbox is checked');
        } else {
          alert('⛔️ Checkbox is NOT checked');
        }
        setIsSubscribed(current => !current);
      };

    return(
        <StrictMode>
            <section className="form-wrapper" id='form'>
                <h2 className="form-title">Drop me a line</h2>
                <div className="form-grid">
                    <p className="title-form mobile-hidden">Name</p>
                    <p className="title-form mobile-hidden">Email</p>
                    <p className="title-form mobile-hidden">Object</p>
                    <p className="title-form ml-10 mobile-hidden">Send</p>

                    <input type="text" className="form-item" placeholder='Nome'/>
                    <input type="email" className="form-item" placeholder='Email'/>
                    <input type="text" className="form-item" placeholder='Messaggio'/>
                    <button className="form-button ml-10 mobile-hidden" onClick={(e) => {
                        if(document.getElementById('policy').checked){
                            window.location.href ='mailto:majidalessio@gmail.com';
                        }else{
                            alert('accetta la privacy')
                        }}}>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
                <div className="agree-wrapper mt-20">
                    <label className="container">
                        <input type="checkbox" id="policy" value={isSubscribed} onChange={handleChange}/>
                        <span className="checkmark"></span>
                    </label>
                    <p className="title-form mobile-hidden">I’ve read and agree with the terms and conditions of the Privacy Policy</p>
                    <p className="title-form desktop-hidden">I accept the terms of the Privacy Policy</p>
                </div>
                <ConfirmButton />
            </section>
        </StrictMode>
    )
}

export default Form;