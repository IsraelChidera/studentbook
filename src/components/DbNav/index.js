import React, { useState } from 'react';
import './Dbnav.css';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../../redux/actions';
import {GiHamburgerMenu} from 'react-icons/gi';
import {auth} from '../../firebase';
import '../Dbsidebar/Dbsidebar.css';

const Index = ({handleClickHam}) => {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch(); 
        
    const handleAuth =  () => {        
        if(currentUser) {
            dispatch(logoutInitiate());
        }        
    }

    const [clickProfile, setClickProfile] = useState(false);

    const handleClickProfile = () => {        
        setClickProfile(!clickProfile)
        console.log("the");
    }    

  return ( 
        <section className="dbnav">
            <div className="hamLogo">
                <p 
                    onClick={handleClickHam}
                    className="hamburger"
                >
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
                <div 
                    className="dbID" 
                    onClick={handleClickProfile}
                >
                    < CgProfile /> {" "}              
                    <span>
                        {auth.currentUser.displayName}        
                    </span>
                </div>

                <div 
                    // className={clickProfile? "dbLogout":"none"}
                    className="dbLogoutFlex"
                >
                    <div className="dbSearch">
                        <form>
                            < AiOutlineSearch />
                            <input 
                                type="search"      
                                className="searchBtn"                      
                            />
                        </form>
                    </div>

                    <div 
                        className={clickProfile? "dbLogout":"none2"}
                        // className="dbLogout"
                    >
                        <button                        
                            onClick={handleAuth}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
// export { handleClickHam };
export default Index;
// export 

