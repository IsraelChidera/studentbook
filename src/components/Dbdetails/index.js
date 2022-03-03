import React, { useEffect } from 'react';
import './Dbdetails.css';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { AiFillRightCircle } from 'react-icons/ai';
import {auth} from '../../firebase';
import { useNavigate  } from 'react-router-dom';

const Index = () => {
    var store = require('store');  
    let navigate = useNavigate();
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const savedCourses = store.get('course')
    const savedTodos = store.get('Todos');  
    console.log(auth.currentUser.displayName)
    // NEWCOM598
    useEffect(()=> {             
        console.log("saved", savedTodos)
        console.log("saved couse", savedCourses);        
    }, [])
    
    
    const handleCourseClick = () => {
        navigate("/dashboard/courses", { replace: true });
    }

    const handleTodoClick = () => {
        navigate("/dashboard/todos", { replace: true });
    }

    const handleMaterialClick = () => {
        navigate("/dashboard/materials", { replace: true });
    }
   
  return (
        <section className="dbDetailsGrid">
            <div className="dbDetailsContainer">
                <div className="dbDetailsTitle">
                    <h1>
                    Welcome, {auth.currentUser.displayName}
                    </h1>
                    <p>
                        What are your plans for today?
                    </p>
                </div>

                <div className="dbDetails">
                    <div className="dbCourses">
                        <h3>
                            Courses
                        </h3>
                        <div className="dbCoursesBg">                            

                            {savedCourses.map((cos)=>(
                                <ul key={cos.ID}>
                                    <li>
                                        {cos.CourseValue} {" "}
                                        {"("+ cos.Units + ")" }
                                    </li>

                                    <p>
                                        {
                                            cos.Year
                                        }
                                    </p>
                                </ul>
                            ))}

                            <button onClick={handleCourseClick}>
                                Add course < AiFillRightCircle />
                            </button>
                        </div>
                    </div>

                    <div className="dbTodo">
                        <h3>
                            Add a new Schedule
                        </h3>

                        <div className="dbCoursesBg">                            

                            {
                                savedTodos.map((todo) => (
                                    <ul>
                                        <li>
                                            {todo.TodoValue}
                                        </li>
                                        
                                        <p>
                                            {todo.Tags}
                                        </p>
                                    </ul>                                    
                                ))
                            }

                            <button onClick={handleTodoClick}>
                                Add todo < AiFillRightCircle />
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

                            <button onClick={handleMaterialClick}>
                                Add materials < AiFillRightCircle />
                            </button>
                        </div>
                    </div>

                    <div className="dbReviews">
                        <div>
                            <p>
                                You have added 0 reviews ( feature not available!!! )
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

export default Index;
