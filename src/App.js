import './App.css';
import React, { useState } from 'react';
// import MAP from './components/map/map';
import DOT from "./components/dot/Dot.js"
import BAR from "./components/sidebar/bar.js"
import screenshot from "./images/test_2.png"
import img_gangbro from "./images/trondheim.png"

/** 
 * jeg hadde ikke jobbet med bakgrunnsbilder før, hentet herifra
 * https://upmostly.com/tutorials/react-background-image
 * 
 * videre tenkte jeg vi kunne se på hover effekter som viste små vinduer
 * med informasjon for hvordan vi tenkte utforming av Brattørkaia kunne se ut
*/

function App() {
  let display_test = false
  const [display_gangbro, set_display_gangbro] = useState(false)
  localStorage.setItem("display", false)

  return (
    <div className="App">
      <div className="background" style={{
        backgroundImage: `url(${screenshot})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize:"contain",
        }}>
          {/* <div className='place_container'> */}
          {/* <BAR /> */}

          <div className='place place_gangbro' onClick={() => localStorage.setItem("display", true)}>
            <DOT txt="Gangbro" />
          </div>
          <BAR 
              header="Gangbro"
              img={img_gangbro}
              txt="Lorem ipsum bla bla bla"
              // display={display}
              // set_display = {set_display_gangbro}
          />

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
