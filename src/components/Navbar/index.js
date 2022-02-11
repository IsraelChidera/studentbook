import React from 'react';
import './Navbar.css';
import '../../index.css';

const index = () => {
  return (
    <nav>
        <div className="logo">
            <a href="#">
                STUDENTBOOK
            </a>
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
                    <a href="#">
                        Login
                    </a>
                </li>
            </ul>

            <button className="signupBtn">
                Sign up
            </button>
        </div>
    </nav>
  );
};

export default index;

