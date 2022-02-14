import React from 'react';
import './Todos.css';
import DbNav from '../DbNav';
import Dbsidebar from '../Dbsidebar';

const index = () => {
  return (
        <section>
            < DbNav />
        
            <div className="dbGrid todoDetails">
                < Dbsidebar />
                <div className="todoTodo">
                    <div>
                        <div className="todoTodoTitle">
                            <h2>
                                My Todo Plan
                            </h2>
                            <p>
                               Add a schedule here 
                            </p>
                        </div>

                        <form>
                            <div>
                                <label>
                                    What is on your mind
                                </label>
                                <input 
                                    type="text"
                                    placeholder='Add a todo'
                                />  
                            </div>

                            <div>
                                <label>
                                    Tags
                                </label>
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
                                <button>
                                    Add a todo
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="todoResults">
                        <div className="todoResultsDiv">
                            <div>
                                <h3>Code for 2 hours</h3>
                                <p>
                                    Technology
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
