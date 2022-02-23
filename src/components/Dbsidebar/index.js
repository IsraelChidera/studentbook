import React from 'react';
import './Dbsidebar.css';
import { GiBookshelf } from 'react-icons/gi';
import { MdLibraryBooks } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { MdDashboardCustomize } from "react-icons/md";

const index = () => {
  return (
        <section className="dbSidebar">
            <ul>
                <li>                                   
                    <NavLink 
                        to="/dashboard"
                        style={({ isActive }) => ({
                            color: isActive ? '#f6f6f6' : '#a01d1d',                            
                            textDecoration: isActive ? 'underline' : 'none'
                        })}
                    >
                        < MdDashboardCustomize className="icon" /> {" "}
                        My Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/dashboard/courses"
                        style={({ isActive }) => ({
                            color: isActive ? '#a01d1d' : '#f6f6f6',                            
                            textDecoration: isActive ? 'underline' : 'none'
                        })}
                    >
                        < GiBookshelf className="icon" /> {" "}
                        My courses
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/dashboard/materials"
                        style={({ isActive }) => ({
                            color: isActive ? '#a01d1d' : '#f6f6f6',                            
                            textDecoration: isActive ? 'underline' : 'none'
                        })}
                    >
                        < MdLibraryBooks className="icon" /> {" "}
                        My Materials
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/dashboard/todos"
                        style={({ isActive }) => ({
                            color: isActive ? '#a01d1d' : '#f6f6f6',                            
                            textDecoration: isActive ? 'underline' : 'none'
                        })}    
                    >
                        < FaClipboardList className="icon"/> {" "}
                        Todo List
                    </NavLink>
                </li>

                <li>
                    <a href="#">
                        < MdRateReview className="icon" /> {" "}
                        Reviews
                    </a>
                </li>
            </ul>

            <div>
                <ul>
                    <li>
                        <a href="#">
                            About StudentBook
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    ); 
};

export default index;
