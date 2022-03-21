import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="allPeople" element={<AllPeople />} />
      <Route path="allPlanets" element={<AllPlanets />} />
      <Route path="allShips" element={<AllShips />} />
      <Route path="/allPeople/showPerson" element={<ShowPerson />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
