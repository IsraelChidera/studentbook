import React from 'react';
import './Dbnav.css';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const index = () => {
  return ( 
        <section className="dbnav">
            <div>
                <h1>
                    <Link to="/">
                        STUDENT
                        <span className="showcaseTitle">BOOK</span>
                        <span className="showcaseTitle2">.</span>
                    </Link>
                </h1>
            </div>

            <div className="dbProfile">                
                <div className="dbID">
                    < CgProfile /> {" "}              
                    <span>
                        Israel Chidera
                    </span>
                </div>

                <div>
                    <form>
                        < AiOutlineSearch />
                        <input 
                            type="search"      
                            className="searchBtn"                      
                        />
                    </form>
                </div>

                <div className="dbLogout">
                    <button>
                        Logout
                    </button>
                </div>
            </div>
        </section>
    );
};

export default index;
