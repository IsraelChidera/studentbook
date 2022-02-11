import React from 'react';
import './Dbsidebar.css';
import { GiBookshelf } from 'react-icons/gi';
import { MdLibraryBooks } from 'react-icons/md';
import { MdRateReview } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa'

const index = () => {
  return (
        <section className="dbSidebar">
            <ul>
                <li>
                    <a href="#">
                        < GiBookshelf className="icon" /> {" "}
                        My courses
                    </a>
                </li>

                <li>
                    <a href="#">
                        < MdLibraryBooks className="icon" /> {" "}
                        My Materials
                    </a>
                </li>

                <li>
                    <a href="#">
                        < FaClipboardList className="icon"/> {" "}
                        Todo List
                    </a>
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
