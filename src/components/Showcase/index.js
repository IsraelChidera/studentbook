import React, { useEffect } from 'react';
import './Showcase.css';
import showcaseBackground from '../../assets/showcaseImg.png';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineFacebook} from 'react-icons/ai';
import { gsap } from "gsap";

const Index = () => {

  useEffect(()=>{
    gsap.from('.showcaseDetails', {duration: 2, x: '-120%', ease: 'power2.in', delay: 1})
    // gsap.from('.showcaseImg', {duration: 3, y: '100%'})
    // gsap.from('.showcaseImageCorner', {duration: 2, bottom:'-100%', ease: 'steps', delay: 1})
  },[])

  return (
    <section id="home" className="showcase">
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

export default Index;
