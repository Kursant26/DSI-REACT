import React from 'react';
import CARD from "../img/cards1.svg"
import CARD2 from "../img/cards2.svg"
import CARD3 from "../img/cards3.svg"


function Cards() {
    return(
        <section id="cards">
            <div className="container">
                <h1 className="cards-title">Product and Service</h1>
                <div className="cards">
                    <div className="card">
                        <img src={CARD} alt=""/>
                            <h1>Our Product</h1>
                            <p>Our product is made on the base of our <br/>
                                team’s careful research and analyses, <br/>
                                ranging from internet based <br/> application.</p>
                            <button>Read More</button>
                    </div>
                    <div className="card">
                        <img src={CARD2} alt=""/>
                        <h1>Our Service</h1>
                            <p>DSI’s shared service solutions focus on <br/>
                                the front-end based software <br/>
                                development, designed specifically for <br/>
                                the banking and sectors.
                            </p>
                            <button>Read More</button>
                    </div>
                    <div className="card">
                        <img src={CARD3} alt=""/>
                        <h1>Our Techno</h1>
                            <p>First JAVA, runs on more than 850 <br/>
                                million personal computers worldwide, <br/>
                                million personal computers worldwide, <br/>
                                and on billions of devices worldwide, <br/>
                            </p>
                            <button>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards