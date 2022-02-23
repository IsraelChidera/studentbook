import React from 'react';
import './Navbar.css';
import '../../index.css';
import { Link, useNavigate } from 'react-router-dom';
import { NavHashLink as Links} from 'react-router-hash-link';

const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        console.log("Yes")
        navigate("/register");
    }
  return (
    <nav>
        <div className="logo">
            <Links to="#home">
                STUDENT
                <span className="showcaseTitle">BOOK</span>
                <span className="showcaseTitle2">.</span>
            </Links>
        </div>

        <ul>
            <li>
                <Links 
                    to="/#features"
                    activeClassName="selected"
                    activeStyle={{ color: 'red' }}
                >
                    Why StudentBook?
                </Links>
            </li>

            <li>
                <Links 
                    to="/#how"
                    activeClassName="selected"
                    activeStyle={{ color: 'red' }}    
                >
                    How it works?
                </Links>
            </li>  

            <li>
                <Links 
                    to="/#contact"
                    activeClassName="selected"
                    activeStyle={{ color: 'red' }}    
                >
                    Contact us
                </Links>
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

