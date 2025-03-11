import React from 'react'
import './Contact.css'
import sss from '../../assets/sss.jpg'
import msg from '../../assets/msg.jpg'
import call from '../../assets/call.jpg'
import location from '../../assets/location.jpg'
const Contact = () => {
    // adding web3form 
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f1987480-956c-42b8-9b75-8b0b82e42915");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    //above  code is web3form code

  return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={sss} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects,so feel
                    free to send me message about anything that you want me to work on.
                    You can contact anytime.
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={msg} alt="" /><p>kmsruthi@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call} alt="" /><p>0405268833</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location} alt="" /><p>Vantaa,Finland</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                <button type="submit" className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>

  )
}

export default Contact