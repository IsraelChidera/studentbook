import React from 'react';
import './Dbnav.css';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../../redux/actions';
import {GiHamburgerMenu} from 'react-icons/gi';

const Index = () => {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch(); 
    
    const handleAuth =  () => {        
        if(currentUser) {
            dispatch(logoutInitiate());
        }        
    }

  return ( 
        <section className="dbnav">
            <div>
                <p>
                    <GiHamburgerMenu/>
                </p>
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

                <div className="dbSearch">
                    <form>
                        < AiOutlineSearch />
                        <input 
                            type="search"      
                            className="searchBtn"                      
                        />
                    </form>
                </div>

                <div className="dbLogout">
                    <button                        
                        onClick={handleAuth}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Index;
