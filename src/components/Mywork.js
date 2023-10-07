import React from 'react'
import "./mywork.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Pikachu from "./logo2.png"
import Wordg from "./wordguess.png"
export default function Mywork() {
    return (
        <>
            <div className="mc3">
                <h1>My Work</h1>
                <div className="con2">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={Pikachu} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Pikachu's Adventure</h5>
                            <p class="card-text">Pikachu's Adventure is an exciting game where your goal is to score points by
                                whacking the Pikachu that pop up on the screen.</p>
                            <a href="https://deb-dutta10.github.io/Gaming-Zone-/PikAdv/index4.html" class="btn btn-light">Explore</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={Wordg} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Word Guess</h5>
                            <p class="card-text">Word Guess Game is an exciting game where your goal is to guess the word correctly using some hints given</p>
                            <a href="https://deb-dutta10.github.io/Gaming-Zone-/Wordguess/index5.html"   class="btn btn-light">Explore</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
