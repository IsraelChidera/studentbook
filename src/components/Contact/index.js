import React from 'react';
import './Contact.css';
import showcaseBackground from '../../assets/showcaseImg.png';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';

const index = () => {
  return (
        <section className="contact">
            <div
                style={{
                    backgroundImage: `url(${showcaseBackground})`          
                }}
                className="contactImg"
            >

            </div>

            <div className="contactFlex">
                <h1>
                    Contact <span className="titleDesign">Us</span>
                </h1>

                <div className="contactDetailsFlex">
                    <div>
                        <h4>
                            Address
                        </h4>
                        <p>
                            lorem ipseum dolor impteum
                        </p>
                        <p>
                            (+234) 817 876 4726
                        </p>
                    </div>

                    <div>
                        <span className="contactSM">
                            < BsInstagram className="icon" /> {" "}
                            < AiOutlineFacebook className="icon" />
                        </span>
                    </div>
                </div>

                <div className="contactButton">
                    <form>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter email"
                            />
                        </div>
                        
                        <div>       
                            <button>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default index;
