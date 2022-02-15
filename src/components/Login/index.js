import React from 'react';
import './Login.css';
import userAccessBg from '../../assets/userBg.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/register")
    }

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
                    <Link to="/">
                        STUDENT
                        <span className="loginTitle">BOOK</span>
                        <span className="loginTitle2">.</span>
                    </Link>
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

                        <div
                            className="rememberAccess"
                        >
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
                                <button
                                    className="loginBtn"
                                >                                    
                                    LOGIN
                                </button>
                            </div>

                            <div>
                                <button
                                    onClick={handleClick}
                                    className="registerBtn"
                                >                                    
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

export default Index;
