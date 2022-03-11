import React from 'react';
import './How.css';
import { AiFillAmazonSquare } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {
    AOS.init();

  return (
        <section id="how" className="how">
            <div className="howtitle">
                <p>
                    services
                </p>
                <h1>
                    How it <span>works</span>
                </h1>
            </div>

            <div className="howGrid">
                <div data-aos="fade-right" data-aos-duration="1000" className="gridBox">
                    <div>
                        <AiFillAmazonSquare/>
                    </div>
                    <div>
                        <h3>
                            Infinite Notes
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className="gridBox">
                    <div>
                        <AiFillAmazonSquare/>
                    </div>
                    <div>
                        <h3>
                            Infinite Notes
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1000" className="gridBox">
                    <div>
                        <AiFillAmazonSquare/>
                    </div>
                    <div>
                        <h3>
                            Infinite Notes
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className="gridBox">
                    <div>
                        <AiFillAmazonSquare/>
                    </div>
                    <div>
                        <h3>
                            Infinite Notes
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
