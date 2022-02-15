import React from 'react';
import './Materials.css';
import DbNav from '../DbNav';
import Dbsidebar from '../Dbsidebar';

const index = () => {
  return (
        <section>
            < DbNav />
        
            <div className="dbGrid materialsDetails">
                < Dbsidebar />
                <div className="materialsTodo">
                    <div> 
                        <input type="file"/>                        
                    </div>

                    <p>
                        Add a picture, video, document here.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default index;
