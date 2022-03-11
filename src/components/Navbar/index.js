import React, {useEffect, useState} from 'react';
import './Navbar.css';
import '../../index.css';
import { Link, useNavigate } from 'react-router-dom';
import { NavHashLink as Links} from 'react-router-hash-link';
import { gsap } from "gsap";
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {      
        navigate("/register");
    }

    const [click, setClick] = useState(false);

    const handleClicks = () => {
        setClick(!click)
    }
    
    useEffect(() => {
      
    gsap.from('.navbar', {duration: 2, y: '-100%', ease: 'bounce'})
    gsap.from('li', {duration: 1, opacity: 0, delay: 1, stagger: .5})

    }, [])
    
    
  return (
    <nav className="navbar">
        <div className="logo">
            <Links to="#home">
                STUDENT
                <span className="showcaseTitle">BOOK</span>
                <span className="showcaseTitle2">.</span>
            </Links>
        </div>

        <p 
            className="ham"
            onClick={handleClicks}    
        >
            <GiHamburgerMenu/>
        </p>

        <div 
            className={click? 'linksList' : 'none'}            
        >            
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
        </div>
    </nav>
  );
};

export default Navbar;

