import './Dot.css'
import BAR from '../sidebar/bar.js';

function Dot(props){
    return(
        <canvas className='dot_container'>
            {/* <div className='dot'/> <div className='dot_txt'>{props.txt}</div> */}
        </canvas>
    );
}

export default Dot;