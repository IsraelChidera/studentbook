import React, { useEffect } from 'react';
import './Dbdetails.css';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { AiFillRightCircle } from 'react-icons/ai';

const index = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    console.log(date)

   
  return (
        <section className="dbDetailsGrid">
            <div className="dbDetailsContainer">
                <div className="dbDetailsTitle">
                    <h1>
                        Welcome Back
                    </h1>
                    <p>
                        What is on your mind?
                    </p>
                </div>

                <div className="dbDetails">
                    <div className="dbCourses">
                        <h3>
                            Courses
                        </h3>
                        <div className="dbCoursesBg">
                            <p>
                                You have added no courses yet
                            </p>

                            <button>
                                Add course < AiFillRightCircle />
                            </button>
                        </div>
                    </div>

                    <div className="dbMaterials">
                        <h3>
                            My materials
                        </h3>
                        <div className="dbCoursesBg">
                            <p>
                                You have no media files added yet
                            </p>

                            <button>
                                Add materials < AiFillRightCircle />
                            </button>
                        </div>
                    </div>

                    <div className="dbTodo">
                        <h3>
                            Add a new Schedule
                        </h3>

                        <div className="dbCoursesBg">
                            <p>
                                Schedule your day now.
                                Add a new todo list
                            </p>

                            <button>
                                Add todo < AiFillRightCircle />
                            </button>
                        </div>
                    </div>

                    <div className="dbReviews">
                        <div>
                            <p>
                                You have added 0 reviews
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reminder">
                <h3>
                    Reminder 
                    
                </h3>
                
                <p>
                    {date}
                    {" "} 
                    <span className="reminder-icon">
                        < BsFillJournalBookmarkFill />
                    </span>
                </p>
            </div>
        </section>
    );
};

export default index;
