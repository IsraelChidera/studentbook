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
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? '#1f2b36' : '#f0f0f0',
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
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? '#1f2b36' : '#f0f0f0',
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
                            color: isActive ? '#fff' : '#545e6f',
                            background: isActive ? '#1f2b36' : '#f0f0f0',
                          })}
                    >
                        < MdLibraryBooks className="icon" /> {" "}
                        My Materials
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/todos">
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
