import './map.css'
import image from "../../images/test_2.png"

function Map(props){
    console.log(props.map)
    return(
        <canvas className='map_canvas' style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            // backgroundSize: "contain",
        }}>
            hei
        </canvas>
    );
}

export default Map;