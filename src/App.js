import './App.css';
import DOT from "./components/Dot.js"
import background from "./images/trondheim.png"
import screenshot from "./images/test_2.png"
import kvadrat from "./images/kvadrat.png"

function App() {
  return (
    <div className="App">
      <div className="background" style={{
        backgroundImage : `url(${screenshot})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"contain",
        }}>
          <div className='place_container'>

            <div className='place_gangbro'>
              <DOT txt="Gangbro"/>
            </div>
            <div className='place_overgang'>
              <DOT txt="Overgang"/>
            </div>
            <div className='place_blomstereng'>
              <DOT txt="Blomstereng"/>
            </div>
          </div>        
      </div>
    </div>
  );
}

export default App;
