function Form(){
    return(
        <section className="form-wrapper">
            <h2 className="form-title">Drop me a line</h2>
            <div className="form-grid">
                <p className="title-form">Nome</p>
                <p className="title-form">Email</p>
                <p className="title-form">Messaggio</p>
                <p className="title-form ml-10">Send</p>

                <input type="text" className="form-item" />
                <input type="email" className="form-item" />
                <input type="text" className="form-item" />
                <button className="form-button ml-10"onClick={(e) => {window.location.href ='mailto:majidalessio@gmail.com';}}>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
            <div className="agree-wrapper mt-20">
                {/* <input type="checkbox" name="policy" id="policy" className="form-checkbox"/> */}
                <label className="container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <p className="title-form">I’ve read and agree with the terms and conditions of the Privacy Policy</p>
            </div>
        </section>
    )
}

export default Form;