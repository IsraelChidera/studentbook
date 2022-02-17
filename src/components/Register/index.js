import React, { useEffect, useState } from 'react';
import './Register.css';
import userAccessBg from '../../assets/userBg.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerInitiate } from '../../redux/actions';

const Index = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: ""
    });

    const { currentUser } = useSelector((state) => state.user);

    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser) {
            navigate("/dashboard")
        }
    }, [currentUser, navigate])

    const dispatch = useDispatch(); 
    const {displayName, email, password} = state;

    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerInitiate(email, password, displayName)) 
        setState({email: "", displayName: "", password: ""})
    }

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
                        <Link to="/">
                            STUDENT
                            <span className="registerTitle">BOOK</span>
                            <span className="registerTitle2">.</span>
                        </Link>
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="formDetails">
                            <div>
                                <label>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="displayName"
                                    onChange={handleChange}   
                                    value={displayName}   
                                    required                      
                                />    
                            </div>

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

                            <div className="rememberAccess">
                                <input 
                                    type="checkbox" 
                                    required
                                />
                                {" "}
                                <span className="rememberSpan">
                                    Remember Me
                                </span>
                            </div>

                            <div className="signUpBtn">
                                <button                                    
                                >
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
                                        Sign up With Google
                                    </button>
                                </div>

                                <div>
                                    <button
                                        className="FbBtn"
                                    >
                                        < FaFacebookF /> {" "}
                                        Sign up With Facebook
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
