import React from 'react'
import "./contact.css"
import ablogo from "./aboutlogo.png"
export default function Contact() {
    return (
        <>
        <div className="mc">
        <div className="content">
                    <h1 className='hcon'>Contact Me</h1>
                    <h2>Wanna talk about a project or just say Hi !!</h2>
                    <h5>Name: Debdutta Mukherjee</h5>
                    <h5>Register Number: 21BCE1897</h5>
                    <h5>Email: debduttamukherjee32@gmail.com</h5>
                    <h5>Phone Number: 9727807695</h5>
                    <div className="handle">
                        <a href="https://www.instagram.com/accounts/login/">Insta</a>
                        <a href="https://www.facebook.com/login/">Facebook</a>
                        <a href="https://twitter.com/i/flow/login">Twitter</a>
                        <a href="https://www.linkedin.com/in/debdutta-mukherjee-5b3a28248/">LinkedIn</a>
                    </div>
                </div>
                <div className="pic">
                    <img src={ablogo} alt="" />
                </div>
        </div>
        </>
    )
}
