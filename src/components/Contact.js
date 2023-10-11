function Contact(){
    return(
        <div className="contact-form">
            <h1>Contact Us</h1>
            <form className="form-elements">
                <input type="email" placeholder="Enter email here" />
                <input type="text" placeholder="Enter number" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Contact;