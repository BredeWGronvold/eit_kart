import './Dot.css'
import BAR from '../sidebar/bar.js';

function Dot(props){
    return(
        // <BAR 
        //     header={props.header}
        //     img={props.img}
        //     txt={props.txt}
        //     display=false 
        // />

        <canvas className='dot_container'>
            {/* <div className='dot'/> <div className='dot_txt'>{props.txt}</div> */}
        </canvas>
    );
}

export default Dot;