import React from 'react'
import "./home.css"
import mylogo from "./home-logo.png"
export default function Home() {
    return (
        <>
            <div className="mc">
                <div className="content">
                    <h3>HEY THERE!</h3>
                    <h1>I am Debdutta Mukherjee</h1>
                    <h2>A Full Web Developer</h2>
                    <p>I am a dedicated student
                        pursuing a Bachelor of Technology in Computer
                        Science Engineering from VIT Chennai. I have interest in web development
                        technologies including HTML, CSS, Bootstrap, JavaScript, React, NodeJS, ExpressJs. 
                    </p>
                    <div className="handle">
                        <a href="https://www.instagram.com/accounts/login/">Insta</a>
                        <a href="https://www.facebook.com/login/">Facebook</a>
                        <a href="https://twitter.com/i/flow/login">Twitter</a>
                        <a href="https://www.linkedin.com/in/debdutta-mukherjee-5b3a28248/">LinkedIn</a>
                    </div>
                </div>
                <div className="pic">
                    <img src={mylogo} alt="" />
                </div>
            </div>
        </>
    )
}
