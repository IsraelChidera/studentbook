import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import User from './pages/User';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={ < Homepage />  } />
        <Route path="/user-access" element={ < User />  } />
        <Route path="/dashboard" element={ < Dashboard />  } />        
      </Routes>
       
    </>
  );
}

export default App;
