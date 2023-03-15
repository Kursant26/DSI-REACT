import React from 'react';
import HERO2 from "../img/hero2-img.svg"

function Section1() {
    return (
        <section id="hero2">
            <div className="container">
                <div className="hero2">
                    <img src={HERO2} alt=""/>
                    <div className="hero2title">
                        <h1>Welcome to <span>Dwidasa Samsara <br/> Indonesia (DSI)</span></h1>
                        <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 <br/>
                            by the founders, who each of them has a common end objective <br/>
                            to innovate new creations by making the <br/>
                            most of the ever-growing information technology through <span>DSI</span>’s distinct <br/>
                            front-end based application concept. <br/> <br/>

                            Managed by a team of professional experts with extensive <br/>
                            experience and impressive track records, <span>DSI</span> believes that <br/>
                            continuous improvements and innovations assure your business <br/>
                            to run effectively and efficiently. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1