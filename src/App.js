import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Courses from './components/Courses';
import Materials from './components/Materials';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Register from './components/Register';
import UserRoute from './components/UserRoute';
import { useEffect, useState} from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from "@emotion/react";
import './index.css';

function App() { 
    const override = css`
      
      
    `;

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      }, 4000)
    }, [])

  return (
    <>
      {
        loading?
       (<div className="loader">
          <PuffLoader color={"#a01d1d"} css={override} loading={loading} size={100} />
        </div>)
        :
        <Routes>
          <Route exact path="/" element={ < Homepage />  } />
          <Route path="/user-access" element={ < User />  } />
          <Route path="/dashboard" element={<UserRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
          <Route path="/dashboard/courses" element={ < Courses />  } />
          <Route path="/dashboard/materials" element={ < Materials />  } />
          <Route path="/dashboard/todos" element={ < Todos />  } />
          
          {/* <UserRoute path="/dashboard" element={ < Dashboard />  } />   */}
          <Route path="/register" element={ < Register />  } />        
        </Routes>
      }
        
      
    </>
  );
}

export default App;
