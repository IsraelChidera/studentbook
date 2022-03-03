import React, { useState } from 'react';
import DbNav from '../components/DbNav';
import Dbsidebar from '../components/Dbsidebar';
import Dbdetails from '../components/Dbdetails';
import '../index.css';

const Dashboard = () => {
  const [click, setClick] = useState(false);
  
  let handleClickHam = () => {    
    setClick(!click);
    console.log("ye");
  }

  return (
    <section>
        < DbNav handleClickHam={handleClickHam}/>

        <div className="dbGrid">
          < Dbsidebar 
            className="sidebar" 
            handleClickHam={click}
          />
          < Dbdetails />     
        </div>     
    </section>
  );
};

export default Dashboard; 
