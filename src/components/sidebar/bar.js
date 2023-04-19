import './bar.css'

function Bar(props){
    return(
        <div className='root'>
            <div className='fade' onClick={props.display}></div>
            <div className='bar'>
                <div className='text_field'>
                    <h1 className='heading'>{props.header}</h1>
                    <div className='img' style={{backgroundImage: `url(${props.img}`}} alt="image"></div>
                    <p className='text'>{props.txt}</p>
                    <button className='close' aria-label="Close button" type="button" onClick={props.display} data-close>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div> 
            </div>
        </div>
    );
}

export default Bar;