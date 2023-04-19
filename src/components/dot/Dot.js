import React from 'react';
import './Dot.css'

function Dot(props){
    return(
        <svg viewBox="0 0 100 100" height="200px" width="200px" version="1.1">
            <polygon points="50, 160, 55, 180, 70, 180, 60, 190, 65, 205, 50, 195, 35, 205, 40, 190, 30, 180, 45, 180" stroke="green" fill="red" stroke-width="5"/>
        </svg>
    );
}

export default Dot;