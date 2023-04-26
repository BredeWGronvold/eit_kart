import './App.css';
import React, { useState } from 'react';
// import MAP from './components/map/map';
import DOT from "./components/dot/Dot.js"
import BAR from "./components/sidebar/bar.js"

import screenshot from "./images/avskjert_kart.png"
import imgPark from "./images/parkCloseup.png"
import imgUndergang from "./images/skansen_undergang.png"
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
        backgroundSize: "contain",
        }}>
          <div className='dot_container_app'>
            <div className='place dot_undergang'>
              <DOT id="undergang" display={toggleUndergangDisplay} />   
            </div>
  
          <div className='place dot_gangbro'>
            <DOT id="gangbro" display={toggleGangbroDisplay} />
          </div>

          <div className='place dot_park'>
            <DOT id="park" display={toggleParkDisplay} />
          </div>
        </div>
      </div>
      {display_undergang && <BAR 
        header="Undergang"
        img={imgUndergang}
        txt="temp"
        display={toggleUndergangDisplay}
      />} 

      {display_gangbro && <BAR 
        header="Gangbro"
        img={imgGangbro}
        txt="Sone 4 representerer hagebroen og begrenser parken mot sør. Beplassingen av broen er basert på antakelsen som en bro som ikke kan åpnes, og som er kun forbeholdt fotgjengere og syklister. Her dominerer planter med grunne røtter, lav høyde og som tåler saltvann, som i Sone 2. Dette skyldes også det begrensede behovet for jord og for å opprettholde utsikten over kanalen."
        display={toggleGangbroDisplay}
      />}

      {display_park &&<BAR 
        header="Park"
        img={imgPark}
        txt="Sone 1 strekker seg fra nordsiden av jernbarnesporene til fjorden og er mest utsatt for vind og saltvann. Videre er det mer plass under betongkulverten her (ingen strømkabler for tog), slik at større jorddybde er mulig. Derfor vil dyprotnende planter med forskjellige høyder og høyest toleranse for saltvann bli brukt her. Videre er dette den eneste sonen hvor det er planlagt å ha flere trær som vindstopper. Mot nord er det planlagt et utsiktspunkt, samt en trapp og rullestolvennlig tilgang.
        Sone 2 begynner på sørsiden av sone 1 og utgjør den største delen av parken. Parkbildet her er mer preget av busker og stauder, men trær vil fortsatt bli brukt. I dette tilfellet vil hovedsakelig trær med overfladiske røtter bli valgt, siden skinnene fører til en høyere betongkulvert og mindre plass for jord. Imidlertid er det fortsatt mulighet for å bruke dyprotnende trær / planter i den nordlige delen av sone 2 (mellom skinnene og sone 1), mens overflatisk rotsystem vil bli brukt i resten av sonen. De valgte plantene har forskjellige rotformer, forskjellige høyder og noen har lavere toleranse for saltvann enn i sone 1. På sørvestsiden er det planlagt en lekeplass, mens det er en eng som planlegges i midten, tilstøtende sone 3.
        Sone 3 er innleiret i sone 2 og fokuserer på planter med høy verdi for insekter / pollinering. På den annen side vil det bli brukt planter her som har lavere toleranse for saltvann enn i sone 1 og 2, for eksempel kirsebærtrær. Rotformen og høyden er forskjellige, der dyprotnende planter som kirsebærtrær, tindved og hagtorn eventuelt må vokse i ekstra containere som beskrevet i 3.5."
        display={toggleParkDisplay}
      />}
    </div>
  );
}

export default App;
