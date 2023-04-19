import './App.css';
import React, { useState } from 'react';
// import MAP from './components/map/map';
import DOT from "./components/dot/Dot.js"
import BAR from "./components/sidebar/bar.js"

import screenshot from "./images/avskjert_kart.png"
import imgPark from "./images/parkCloseup.png"
import imgUndergang from "./images/undergang.png"
import imgGangbro from "./images/gangbro.jpg"

/** 
 * jeg hadde ikke jobbet med bakgrunnsbilder før, hentet herifra
 * https://upmostly.com/tutorials/react-background-image
 * 
 * videre tenkte jeg vi kunne se på hover effekter som viste små vinduer
 * med informasjon for hvordan vi tenkte utforming av Brattørkaia kunne se ut
*/

function App() {
  const [display_gangbro, set_display_gangbro] = useState(false)
  const [display_undergang, set_display_undergang] = useState(false)
  const [display_park, set_display_park] = useState(false)

  function toggleGangbroDisplay() { set_display_gangbro(!display_gangbro) }
  function toggleUndergangDisplay() { set_display_undergang(!display_undergang) }
  function toggleParkDisplay() { set_display_park(!display_park) }

  return (
    <div className="App">
      <div className="background" style={{
        backgroundImage: `url(${screenshot})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"contain",
        }}>

          {/* <div className='place place_undergang' onClick={toggleUndergangDisplay}>
            
          </div> */}
          <DOT display={toggleUndergangDisplay} />
          {display_undergang &&
          <BAR 
              header="Undergang"
              img={imgUndergang}
              txt="Lorem ipsum bla bla bla"
              display={toggleUndergangDisplay}
          />
          }


          {/* <div className='place place_gangbro' onClick={toggleGangbroDisplay}>
            
          </div> */}
          <DOT display={toggleGangbroDisplay} />
          {display_gangbro &&
          <BAR 
              header="Gangbro"
              img={imgGangbro}
              txt="Lorem ipsum bla bla bla"
              display={toggleGangbroDisplay}
          />
          }

          {/* <div className='place place_park' onClick={toggleParkDisplay}>
            >
          </div> */}
          <DOT display={toggleParkDisplay} />
          {display_park &&
          <BAR 
              header="Park"
              img={imgPark}
              txt="Lorem ipsum bla bla bla"
              display={toggleParkDisplay}
          />
          }
      </div>

    </div>
  );
}

export default App;
