import React from 'react';
import './Dot.css'

function Dot(props){
    return(
        <svg className='dot_container' id={props.id} onClick={props.display}>
            <clipPath id="path" clipPathUnits="objectBoundingBox">
                <path d="M0.5,1
                C 0.5,1,0,0.7,0,0.3
                A 0.25,0.25,1,1,1,0.5,0.3
                A 0.25,0.25,1,1,1,1,0.3
                C 1,0.7,0.5,1,0.5,1 Z" />
            </clipPath>
        </svg>
    );
}

export default Dot;