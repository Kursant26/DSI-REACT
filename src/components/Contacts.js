import React from 'react';
import LOGO from "../img/header-logo.svg";

function Contacts() {
    return(
        <section id="contacts">
            <div className="container">
                <div className="contact">
                    <div className="block-left">
                        <img src={LOGO} alt=""/>
                        <h3>PT Dwidasa Samsara Indonesia</h3>
                            <p>Ruko Jalur Sutera 29A No. 53 <br/>
                                Alam Sutera Serpong, Tangerang 15323
                            </p>
                    </div>
                    <div className="block-right">
                        <h3>Contact</h3>
                        <p>Phone : +62.21.5314.1135 <br/>
                            Fax : +62.21.5314.1135 <br/>
                            Email : community@dwidasa.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacts