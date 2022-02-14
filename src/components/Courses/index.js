import React from 'react';
import './Courses.css';
import DbNav from '../DbNav';
import Dbsidebar from '../Dbsidebar';

const index = () => {
  return (
    <section>
        
        < DbNav />
        
        <div className="dbGrid coursesDetails">
            < Dbsidebar />
            <div className="coursesTodo">
                <div>
                    <div className="coursesTodoTitle">
                        <h2>
                            My Courses
                        </h2>
                        <p>
                            Add your courses here for this session/semester/term
                            without the hassle of remembering all of them
                        </p>
                    </div>

                    <form>
                        <div>
                            <input 
                                type="text"
                                placeholder='Add a course'
                            />  
                        </div>

                        <div>
                            <select>
                                <option>
                                    First Year
                                </option>

                                <option>
                                    Second Year
                                </option>

                                <option>
                                    Third Year
                                </option>

                                <option>
                                    Fourth Year
                                </option>

                                <option>
                                    Fifth Year
                                </option>

                                <option>
                                    Carry Over
                                </option>
                            </select>
                        </div>

                        <div>
                            <select>
                                <option>
                                    1 unit
                                </option>

                                <option>
                                    2 unit
                                </option>

                                <option>
                                    3 unit
                                </option>

                                <option>
                                    4 unit
                                </option>

                                <option>
                                    5 unit
                                </option>

                                <option>
                                    6 unit
                                </option>
                            </select>
                        </div>

                        <div>
                            <button>
                                Add a course
                            </button>
                        </div>
                    </form>
                </div>

                <div className="courseResults">
                    <div className="courseResultsDiv">
                        <div>
                            <h3>Course Name</h3>
                            <p>
                                First Year
                            </p>
                            <p>
                                2 units
                            </p>
                        </div>

                        <div>
                            <button>
                                Delete
                            </button>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default index;
