 
import ReactDOM from 'react-dom';

import '../src/styles/css/styleIndex/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 

import AllPeople from './views/getAll/allPeople'
import AllPlanets from './views/getAll/allPlanets'
import AllShips from './views/getAll/allShips'
import ShowPerson from './views/showAll/showPerson'
import ShowPlanets from './views/showAll/showPlanets'
import ShowShips from './views/showAll/showShips'

  ReactDOM.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="allPeople" element={<AllPeople />} />
        <Route path="allPlanets" element={<AllPlanets />} />
        <Route path="allShips" element={<AllShips />} />
        <Route path="/allPeople/paramQ:id" element={<ShowPerson />} />
        <Route path="/allPlanets/paramQ:id" element={<ShowPlanets />} />
        <Route path="/allShips/paramQ:id" element={<ShowShips />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
  );

reportWebVitals();
