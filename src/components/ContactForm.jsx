import emailjs from '@emailjs/browser';
import Header from './Header';
import ReCAPTCHA from 'react-google-recaptcha'
import { useState, useRef } from 'react';
import Footer from './Footer';

function ContactForm() {
    const [verified, setVerification] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const formRef = useRef();
    const recaptchaRef = useRef();

    const googleCaptchaKey = import.meta.env.VITE_GOOGLECAPTCHAKEY;
    const emailJsKey = import.meta.env.VITE_MAILJSKEY;
    function sendEmail(e){
        e.preventDefault();

        if (!verified) {
            alert('Please verify that you are not a robot.');
            return;
        }

        emailjs
        .sendForm(
            'gmail',
            'template_skwg47s',
            formRef.current,
            {publicKey: mailJsKey}
        )
        .then(
            () => {
            console.log('SUCCESS!');
            formRef.current.reset();
            recaptchaRef.current.reset();
            setEmailSent(true)
            setVerification(false)
            },
            (error) => {
            console.log("FAILURE", error);
            },
        );
        e.target.reset()
  };


    return (
    <div className='contact-top-container'>
        <div className='side-image left-img'></div>
        <div className='side-image right-img'></div>

            <Header/>
            <div className="contact-content-wrapper">
                {!emailSent?(
                <div className="contact-form">
                    <form ref={formRef} onSubmit={sendEmail}>
                        <label>Your name</label>
                        <input type="text" name="name"/>

                        <label>Your Email</label>
                        <input type="email" name="email" />

                        <label>Location Name</label>
                        <input name="locName" />

                        <label>Location Coordinates (Right click the location on Google maps)</label>
                        <input name="locCoor" />

                        <label>Any Info about the location</label>
                        <input maxLength={200} name="locInfo" />
                        <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={googleCaptchaKey}
                        onChange={() => setVerification(true)}
                        onExpired={() => setVerification(false)}
                        style={{ marginTop: "1rem", marginBottom: "1rem" }} />
            
                        <button
                        type='submit'
                        value="send"
                        style={{padding:".5rem", margin:"1rem"}}>
                            Submit
                        </button>
                    </form>
                </div>
                ):(
                    <div className='contact-form'>
                        <h2>✅ Email Sent!</h2>
                        <p>Thank you for your contribution. I'll review your submission soon.</p>
                    </div>
                )}
            </div>
        <Footer/>   
    </div>
    );
}
export default ContactForm;
