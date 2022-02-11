import React from 'react';
import './Register.css';
import userAccessBg from '../../assets/userBg.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const index = () => {
  return (
    <section className="register">
        <div
            style={{
                backgroundImage: `url(${userAccessBg})`          
            }}
            className="registerImg"
        >
        </div>

        <div className="registerFlexed">
            <div className="registerDetailsFlexed">
                <h1>
                    STUDENT
                    <span className="registerTitle">BOOK</span>
                    <span className="registerTitle2">.</span>
                </h1>

                <form>
                    <div className="formDetails">
                        <div>
                            <label>
                                Full Name
                            </label>
                            <input
                                type="text"                            
                            />    
                        </div>

                        <div>
                            <label>
                                Email
                            </label>
                            <input
                                type="email"                            
                            />    
                        </div>

                        <div>
                            <label>
                                Password
                            </label>
                            <input
                                type="password"                            
                            />    
                        </div>

                        <div className="rememberAccess">
                            <input 
                                type="checkbox" 
                            />
                            {" "}
                            <span className="rememberSpan">
                                Remember Me
                            </span>
                        </div>

                        <div className="signUpBtn">
                            <button>
                                Sign Up
                            </button>
                        </div>
                    </div>

                    

                    <div className="Smregister">
                        <p>
                            or
                        </p>
                        <div className="SmregisterFlexed">
                            <div>
                                <button>
                                    < FcGoogle /> {" "}
                                    Continue With Google
                                </button>
                            </div>

                            <div>
                                <button
                                    className="FbBtn"
                                >
                                    < FaFacebookF /> {" "}
                                    Continue With Facebook
                                </button>
                            </div>
                        </div>
                    </div>    
                </form>
            </div>
        </div>
    </section>
  );
};

export default index;
