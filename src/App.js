
import './App.css'

import { IoPlanetSharp } from "react-icons/io5";
import { GiLightSabers } from "react-icons/gi";
import { GiInterceptorShip } from "react-icons/gi";
import { Link } from "react-router-dom";


function App() {
  

 return (

      <div className="container">
        <h1>StarWars Api</h1>    
        <div className='box'>
          <ul>
          <Link to="allPeople"><li><GiLightSabers /></li></Link>
          <Link to="allPlanets"><li><IoPlanetSharp /></li></Link>
          <Link to="allShips" className="Ships"><li><GiInterceptorShip /></li></Link>
          </ul>  
        </div>
      </div>
  )

}
  export default App;