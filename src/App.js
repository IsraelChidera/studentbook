import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Courses from './components/Courses';
import Materials from './components/Materials';
import Todos from './components/Todos';
import { Route, Routes } from 'react-router-dom';
import User from './pages/User';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ < Homepage />  } />
        <Route path="/user-access" element={ < User />  } />
        <Route path="/dashboard/courses" element={ < Courses />  } />
        <Route path="/dashboard/materials" element={ < Materials />  } />
        <Route path="/dashboard/todos" element={ < Todos />  } />
        <Route path="/dashboard" element={ < Dashboard />  } />        
      </Routes>
       
    </>
  );
}

export default App;
