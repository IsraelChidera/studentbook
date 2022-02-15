import React from 'react';
import './Navbar.css';
import '../../index.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        console.log("Yes")
        navigate("/register");
    }
  return (
    <nav>
        <div className="logo">
            <Link to="/">
                STUDENT
                <span className="showcaseTitle">BOOK</span>
                <span className="showcaseTitle2">.</span>
            </Link>
        </div>

        <ul>
            <li>
                <a href="#">
                    Why StudentBook?
                </a>
            </li>

            <li>
                <a href="#">
                    How it works?
                </a>
            </li>  

            <li>
                <a href="#">
                    Contact us
                </a>
            </li> 
        </ul>

        <div className="clientLogin">
            <ul>
                <li>
                    <Link to="/user-access">
                        Login
                    </Link>
                </li>
            </ul>

            <button
                onClick={handleClick} 
                className="signupBtn"
            >
                Sign Up
            </button>
        </div>
    </nav>
  );
};

export default Navbar;

