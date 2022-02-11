import React from 'react';
import DbNav from '../components/DbNav';
import Dbsidebar from '../components/Dbsidebar';
import Dbdetails from '../components/Dbdetails';
import '../index.css';

const Dashboard = () => {
  return (
    <section>
        < DbNav />

        <div className="dbGrid">
          < Dbsidebar />
          < Dbdetails />     
        </div>     
    </section>
  );
};

export default Dashboard; 
