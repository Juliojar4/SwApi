
import {useState, useEffect} from 'react';
import './App.css'

import axios from 'axios';

import AllPeople from './components/getAllPeoples'

function App() {
  
  const [allPeople, setAllPeople] = useState([])

    
  useEffect(() => {
    async function fetchPeoples() {
      let res = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await res.json()
      setAllPeople(data.results)
    }
    fetchPeoples()   
    }, [])

  console.log(allPeople)

  return (

    <div className="container">
      <h1>StarWars Api</h1>    
      <div className='box'>
        <ul>
          {allPeople.map((people, index) => 
            <AllPeople
              key={index}
              name={people.name}
              gender={people.gender}
            />
          )}
        </ul>
      </div>
       
    </div>
  )

}
  export default App;