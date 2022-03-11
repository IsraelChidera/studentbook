import React from 'react';
import './Features.css';
import showcaseBackground from '../../assets/featuresSvg.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
    AOS.init();

  return (
    <section id="features" className="features">
        <div>
            <div className="featuresTitle">
                <h2>
                    Features
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo 
                    consequat
                </p>
                <div
                    className="featuresTitleImg"
                    style={{
                        backgroundImage: `url(${showcaseBackground})`          
                    }}
                ></div>
            </div>

            <div className="featuresFlexed">
                <div className="featuresGrid">
                    <div data-aos="fade-right" data-aos-duration="1000" className="grid">
                        <h1>
                            1
                        </h1>
                        <p>
                            Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo 
                            consequat
                        </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000" className="grid">
                        <h1>
                            2
                        </h1>
                        <p>
                            Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo 
                            consequat
                        </p>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1000" className="grid">
                        <h1>
                            3
                        </h1>
                        <p>
                            Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo 
                            consequat
                        </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000" className="grid">
                        <h1>
                            4
                        </h1>
                        <p>
                            Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo 
                            consequat
                        </p>
                    </div>
                </div>

                <div                     
                    className="featuresImg"                    
                ></div>
            </div>
        </div>
    </section>
  );
};

export default Index;
