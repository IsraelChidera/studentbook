import React, { useState, useEffect } from 'react';
import './Todos.css';
import DbNav from '../DbNav';
import Dbsidebar from '../Dbsidebar';
import { AiFillDelete } from 'react-icons/ai';

const Index = () => {
    var store = require('store');    
    const [todoValue, setTodoValue] = useState("");
    const [todos, setTodos] = useState(()=>{
        const saved = store.get('Todos');       
        if(saved){
            return saved;
        }
        else{
            return []
        }
    });
    const [todoTags, setTodoTags] = useState([])    

    const handleTodo = (e) => {
        e.preventDefault();        
        
        // store.set('user', {todo: [state.todo], tag: [todoTags]});           

        const date = new Date();
        const time = date.getTime();

        let todoObject = {
            ID: time,
            TodoValue: todoValue,
            Tags: todoTags
        }

        setTodos([...todos, todoObject]);        
        setTodoValue("");
        setTodoTags([])
        
    }
    
    const onDelete = (ID) => {
        const deleteTask = todos.filter((todo) => todo.ID !== ID);
        setTodos(deleteTask);
    }
    
    useEffect(()=>{
        // localStorage.setItem('Todos', JSON.stringify(todos));
        store.set('Todos', todos)
    }, [todos])

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

                        <form
                            onSubmit={handleTodo}
                        >
                            <div>
                                <label>
                                    What is on your mind
                                </label>
                                <input 
                                    type="text"
                                    placeholder='Add a todo'
                                    name="todo"
                                    onChange={(e)=>setTodoValue(e.target.value)}
                                    value={todoValue}
                                    required
                                />  
                            </div>

                            <div>
                                <label>
                                    Tags
                                </label>
                                <select
                                    value={todoTags}
                                    onChange={(e)=>setTodoTags(e.target.value)} 
                                    required                           
                                >
                                    <option value="select tag">
                                        Select tag
                                    </option>

                                    <option value="entertainment">
                                        Entertainment
                                    </option>

                                    <option value="academics">
                                        Academics
                                    </option>

                                    <option value="Sports">
                                        Sports
                                    </option>

                                    <option value="relationship">
                                        Relationship
                                    </option>

                                    <option value="religion">
                                        Religion
                                    </option>

                                    <option value="finances">
                                        Finances
                                    </option>

                                    <option value="tech">
                                        Tech
                                    </option>

                                    <option value="others">
                                        Others
                                    </option>
                                </select>
                            </div>                            

                            <div>
                                <button                                
                                >
                                    Add a todo
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="todoResults">
                        <div className="scheduleHeading">
                            <h3>Schedule</h3>
                        </div>
                       

                        {todos.length>0 ? todos.map((todo,i) => (
                            <div className="todoResultsDiv" key={todo.ID}>
                                <div>
                                    <h3>{todo.TodoValue}</h3>
                                    <p>
                                        {todo.Tags} 
                                    </p>                                
                                </div>

                                <div className="todoResultsBtn">
                                    <button 
                                        onClick={()=>onDelete(todo.ID)}>                                         
                                        <AiFillDelete/>
                                    </button>    
                                </div>                            
                            </div>
                        )): (<p className="todoResultPara">
                                No schedule added yet. Please add one now...
                            </p>)}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
