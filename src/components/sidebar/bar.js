import './bar.css'

function Bar(props){
    return(
        <div className='root'>
            <div className='fade'></div>
            <div className='bar'>
                <div className='text_field'>
                    <h1 className='header'>{props.header}</h1>
                    <img className='img' src={`../../images/${props.image}`} alt="image" />
                    <p className='text'>{props.txt}</p>
                </div> 
            </div>
        </div>
    );
}

export default Bar;