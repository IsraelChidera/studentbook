import React from 'react';
import './Login.css';
import userAccessBg from '../../assets/userBg.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const index = () => {
  return (
    <section className="login">
        <div
            style={{
                backgroundImage: `url(${userAccessBg})`          
            }}
            className="loginImg"
        >
        </div>

        <div className="loginFlexed">
            <div className="loginDetailsFlexed">
                <h1>
                    STUDENT
                    <span className="loginTitle">BOOK</span>
                    <span className="loginTitle2">.</span>
                </h1>

                <form>
                    <div className="formDetails">
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

                        <div>
                            <input 
                                type="checkbox" 
                            />
                            {" "}
                            <span className="rememberSpan">
                                Remember Me
                            </span>
                        </div>

                        <div className="loginAndRegister">
                            <div>
                                <button>                                    
                                    LOGIN
                                </button>
                            </div>

                            <div>
                                <button>                                    
                                    CREATE ACCOUNT 
                                </button>
                            </div>
                        </div>
                    </div>

                    

                    <div className="SmLogin">
                        <p>
                            or
                        </p>
                        <div className="SmLoginFlexed">
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
