import React from 'react';
import './About.css';
import '../../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
    AOS.init();

  return (
    <section className="about">
        <div className="aboutFlexed">
            <div data-aos="fade-up" data-aos-duration="1000" className="aboutFlexed1">
                <h1>
                    The result
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute 
                    irure dolor in reprehenderit 
                    in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui 
                    officia deserunt mollit anim id 
                    est laborum.
                </p>
            </div>

            <div data-aos="fade-right" data-aos-duration="1000" className="aboutFlexed2">
                <div>
                    <h2>
                        25
                    </h2>

                    <p>
                        deserunt mollit anim
                    </p>
                </div>

                <div>
                    <h2>
                        50
                    </h2>

                    <p>
                        deserunt mollit anim
                    </p>
                </div>

                <div>
                    <h2>
                        205
                    </h2>

                    <p>
                        deserunt mollit anim
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Index;
