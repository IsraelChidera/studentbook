import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BiCoffeeTogo } from 'react-icons/bi';
import './Footer.css';

const index = () => {
  return (
        <footer>
            <div>
               &copy;2022, StudentBook.
            </div>

            <div>
                Made with {" "}
                < AiFillHeart /> {" "}
                and {" "}
                < BiCoffeeTogo />
            </div>
        </footer>
    );
};

export default index;
