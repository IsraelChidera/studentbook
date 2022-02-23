import React, { useEffect, useState } from 'react';
import './Courses.css';
import DbNav from '../DbNav';
import Dbsidebar from '../Dbsidebar';
import { AiFillDelete } from 'react-icons/ai';

const Index = () => {
    var store = require('store'); 
    const [courseValue, setCourseValue] = useState("");
    const [year, setYear] = useState("");
    const [units, setUnits] = useState("");
    const [course, setCourse] = useState(()=>{
        const saved = store.get('course');
        if(saved){
            return saved
        }else {
            return []
        }
    })

    const handleAddCourse = (e) => {
        e.preventDefault();

        const date = new Date();
        const time = date.getTime();

        let todoObject = {
            ID: time,
            CourseValue: courseValue,
            Year: year,
            Units: units
        }

        setCourse([...course, todoObject]);
        setCourseValue("");
        setYear([]);
        setUnits([]);
    }

    const handleDelete = (ID) => {
        const deleteTask = course.filter((cos) => cos.ID !== ID);
        setCourse(deleteTask);
    }
    
    useEffect(()=> {
        store.set("course", course)
    }, [course])

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

                    <form
                        onSubmit={handleAddCourse}
                    >
                        <div>
                            <input 
                                type="text"
                                placeholder='Add a course'
                                value={courseValue}
                                onChange={(e)=>setCourseValue(e.target.value)}
                            />  
                        </div>

                        <div>
                            <select
                                value={year}
                                onChange={(e)=>setYear(e.target.value)}
                            >
                                <option value="firstYear">
                                    First Year
                                </option>

                                <option value="secondYear">
                                    Second Year
                                </option>

                                <option value="thirdYear">
                                    Third Year
                                </option>

                                <option value="fourthYear">
                                    Fourth Year
                                </option>

                                <option value="fifthYear">
                                    Fifth Year
                                </option>

                                <option value="extraYear">
                                    Extra Year
                                </option>
                            </select>
                        </div>

                        <div>
                            <select
                                value={units}
                                onChange={(e)=>setUnits(e.target.value)}
                            >
                                <option value="oneUnit">
                                    1 unit
                                </option>

                                <option value="twoUnit">
                                    2 unit
                                </option>

                                <option value="threeUnit">
                                    3 unit
                                </option>

                                <option value="fourUnit">
                                    4 unit
                                </option>

                                <option value="fiveUnit">
                                    5 unit
                                </option>

                                <option value="sixUnit">
                                    6 unit
                                </option>

                                <option value="others">
                                    greater than 6 unit
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
                    <div className="courseResultsHeading">
                        <h3>
                            Courses
                        </h3>
                    </div>
                    {course.length>0? course.map((cos, i)=> (
                        <div className="courseResultsDiv" key={cos.ID}>                        
                            <div>
                                <h3>{cos.CourseValue}</h3>
                                <p>
                                    {cos.Year}
                                </p>
                                <p>
                                    2 units
                                </p>
                            </div>

                            <div className="courseResultsBtn">
                                <button
                                    onClick={()=>handleDelete(cos.ID)}
                                >
                                    <AiFillDelete/>
                                </button>    
                            </div>
                        </div>
                    )): (<p className="courseResultPara">
                            No course added yet. Please add one now...
                        </p>)}
                    
                </div>
            </div>
        </div>
    </section>
  );
};

export default Index;
