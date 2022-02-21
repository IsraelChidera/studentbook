import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Courses from './components/Courses';
import Materials from './components/Materials';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Register from './components/Register';
import UserRoute from './components/UserRoute';
import {Fragment} from 'react';

function App() {
  return (
    <>
      {/* <Fragment> */}
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
      {/* </Fragment> */}
    </>
  );
}

export default App;
