import {StrictMode} from 'react';
import ConfirmButton from './confirmButton';

function invia(){
    var email = document.getElementById("email");
    var nome = document.getElementById("nome");
    var messaggio = document.getElementById("messaggio");
    if ((email === "") || (email === "undefined")) {
        alert("Inserire un indirizzo email valido.");
        // document.modulo.email.focus();
    }
    else if ((nome === "") || (nome === "undefined")) {
        alert("Inserire un nome.");
        // document.modulo.nome.focus();
    }
    else if ((messaggio === "") || (messaggio === "undefined")) {
        alert("Inserire un messaggio.");
        // document.modulo.messaggio.focus();
    }
    else {
        // window.location.href = "mailto:" + email + "?Subject=" + nome + "&Body=" + messaggio;
        console.log("inviato")
    }
}

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
                        <input type="text" className="form-item" placeholder='Nome' id='nome' name='nome'/>
                        <input type="email" className="form-item" placeholder='Email'id='email' name='email'/>
                        <input type="text" className="form-item" placeholder='Messaggio' id='messaggio' name='messaggio'/>
                        <button className="form-button ml-10 mobile-hidden" onClick={invia()}>
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
        </StrictMode>
    )
}