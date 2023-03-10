import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import './Styles/Contact.css'


export default function Contact(){
    const form = useRef()

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_ic2dw5o', 'template_bmn0ax7', form.current, 'OWWs8F3jz65bhLtrz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    function handleChange(event){
        setForm(oldForm=> ({
            ...oldForm,
            [event.target.name] : event.target.value
        }))
    }

    return(
        <div className="page-style">
            <div className="container bg-brown">
                <div className="center-container">
                    <ul>
                        <h2>Contact Links</h2>
                        <li>Email: david.peguero.cancel@gmail.com</li>
                        <li>LinkedIn : <a href="https://www.linkedin.com/in/david-peguero">david-peguero</a></li>
                        <li>Github: <a href="https://www.github.com/DavidPeguero">DavidPeguero</a></li>
                    </ul>
                </div>
            </div>
            <div className="container bg-dark">
                <div className="center-container">
                    <form  onSubmit={sendEmail} ref={form} className="message-form" >
                        <h4>Name</h4>
                        <input type="text" name="name" onChange={(event) => handleChange(event)} placeholder="Name" required></input>
                        <h4>Email</h4>
                        <input type="text" name="email" onChange={(event)=>handleChange(event)} placeholder="Email" required></input>
                        <h4>Subject</h4>
                        <input type="text" name="subject" onChange={(event)=>handleChange(event)} placeholder="Subject" required></input>
                        <h4>Message</h4>
                        <textarea className="message-text" rows="4" cols="50" name="message" onChange={handleChange}
                        type="textarea" placeholder="Type Text Here" required></textarea>
                        <br></br>
                        <button type="submit">Send</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}