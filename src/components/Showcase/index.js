import React from 'react';
import './Showcase.css';
import showcaseBackground from '../../assets/showcaseImg.png';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineFacebook} from 'react-icons/ai';

const index = () => {
  return (
    <section className="showcase">
      <div className="showcaseImgSection">
        <div className="showcaseBlock"></div>

        <div 
          style={{
            backgroundImage: `url(${showcaseBackground})`          
          }}
          className="showcaseImg"
        >
        </div>

        <div className="showcaseBlock2"></div>
      </div>

      <div className="showcaseDetails">
        <div>
          <h1>
            STUDENT
            <span className="showcaseTitle">BOOK</span>
            <span className="showcaseTitle2">.</span>
          </h1>
          <p className="description">
            Get all your activities in one place with student book
          </p>
        </div>

        
      </div>

      <div>
        <div className="showcaseMedia">          
          <p>
            <span className="insta">
              < BsInstagram /> {" "}
              < AiOutlineFacebook />
            </span>
            Student Book
          </p>
        </div>
      </div>

      <div className="showcaseImageCorner">
        <p className="quoteSign">
          <span>&#8221;</span>
        </p>
        <p>
          Management is, above all, a practice 
        </p>
        <p>
          where art, science, and craft meet.
        </p>
      </div>
    </section>
  );
};

export default index;
