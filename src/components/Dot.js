import './Dot.css'

function Dot(props){
    return(
        <div className='dot_container'>
            <div className='dot'/> <div className='dot_txt'>{props.txt}</div>
        </div>
    );
}

export default Dot;