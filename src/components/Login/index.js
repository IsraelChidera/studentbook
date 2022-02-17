import React, {useState} from 'react';
import './Login.css';
import userAccessBg from '../../assets/userBg.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const {email, password} = state;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/register")
    }

    const handleSubmit = () => {

    }

    const handleGoogleSignIn = () => {

    }

    const handleFacebookSignIn = () => {

    }

    const handleChange = () => {

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

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="formDetails">
                        <div>
                            <label>
                                Email
                            </label>
                            <input
                                type="email"       
                                name="email"
                                onChange={handleChange}    
                                value={email}
                                required                 
                            />    
                        </div>

                        <div>
                            <label>
                                Password
                            </label>
                            <input
                                type="password" 
                                name="password"
                                onChange={handleChange} 
                                value={password}   
                                required                       
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

                        <div                            
                            className="loginAndRegister"
                        >
                            <div>
                                <button                                
                                    className="loginBtn"
                                    type="submit"
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
                                <button
                                    onClick={handleGoogleSignIn}
                                >
                                    < FcGoogle /> {" "}
                                    Continue With Google
                                </button>
                            </div>

                            <div>
                                <button
                                    className="FbBtn"
                                    onClick={handleFacebookSignIn}
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
