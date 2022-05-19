// Example of function based components 

import React from 'react';
import Person from './Person';


function computer() {
    let a = 10;
    let b = a * 2;

    return (
        <div>
            <h2>Function Based Componnets !</h2>
            {b};
            <Person/>

        </div>
    );
   
};

export default computer;