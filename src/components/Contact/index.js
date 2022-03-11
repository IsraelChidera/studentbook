import React from 'react';
import './Contact.css';
import showcaseBackground from '../../assets/student.jpg';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
    AOS.init();

  return (
        <section id="contact" className="contact">
            <div
                style={{
                    backgroundImage: `url(${showcaseBackground})`          
                }}
                className="contactImg"
                data-aos="zoom-in"
                data-aos-duration="500"
            >

            </div>

            <div 
                className="contactFlex"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
            >
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

export default Index;
