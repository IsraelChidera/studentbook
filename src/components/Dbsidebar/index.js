import React from 'react';
import './Dbsidebar.css';
import { GiBookshelf } from 'react-icons/gi';
import { MdLibraryBooks } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { MdDashboardCustomize } from "react-icons/md";

const index = () => {
  return (
        <section className="dbSidebar">
            <ul>
                <li>
                   
                        < MdDashboardCustomize className="icon" /> {" "}
                        My Dashboard
                    
                </li>

                <li>
                    <Link to="/dashboard/courses">
                        < GiBookshelf className="icon" /> {" "}
                        My courses
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/materials">
                        < MdLibraryBooks className="icon" /> {" "}
                        My Materials
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/todos">
                        < FaClipboardList className="icon"/> {" "}
                        Todo List
                    </Link>
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
