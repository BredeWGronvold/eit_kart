import './App.css';
// import MAP from './components/map/map';
import DOT from "./components/dot/Dot.js"
import screenshot from "./images/test_2.png"

/** 
 * jeg hadde ikke jobbet med bakgrunnsbilder før, hentet herifra
 * https://upmostly.com/tutorials/react-background-image
 * 
 * videre tenkte jeg vi kunne se på hover effekter som viste små vinduer
 * med informasjon for hvordan vi tenkte utforming av Brattørkaia kunne se ut
*/

function App() {
  return (
    <div className="App">
      <div className="background" style={{
        backgroundImage: `url(${screenshot})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize:"contain",
        }}>
          {/* <div className='place_container'> */}

            <div className='place place_gangbro'>
              <DOT txt="Gangbro"/>
            </div>
            <div className='place place_overgang'>
              <DOT txt="Overgang"/>
            </div>
            <div className='place place_blomstereng'>
              <DOT txt="Blomstereng"/>
            </div>
          {/* </div>         */}
      </div>

    </div>
  );
}

export default App;
