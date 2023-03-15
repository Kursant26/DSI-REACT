import React from 'react';
import HERO from "../img/hero-img.svg"

function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                 <div className="hero-title">
                     <h1>Making the most of the <br/>
                         ever-growing <br/>
                         <span>Information Technology</span></h1>
                     <p>Managed by a team of professional experts with extensive <br/>
                         experience and impressive track records</p>
                     <button>Read More</button>
                 </div>
                    <img src={HERO} alt=""/>
                </div>
            </div>
        </section>
    )
}
export default Hero