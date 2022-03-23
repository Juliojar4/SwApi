import '../css/pages.css'
import React, { useState, useEffect } from 'react'
import GetAllPeople from '../../components/getAll/getAllPeoples'
import { Link } from "react-router-dom";

function RenderAllPeople() {
  const [allPeople, setAllPeople] = useState([]);

   useEffect(() => {
        let unmounted = false
       
            async function fetchPeople() {
                if (!unmounted) {
                    let res = await fetch('https://swapi.dev/api/people/?format=json')
                    let data = await res.json()
                    setAllPeople(data.results)
                }
            }
            fetchPeople()
        
        return () => {
            unmounted = true
        }
        }, [])
  console.log(allPeople)

  return (
    <div className='Container'>
      <Link to={`/`}><h2>People</h2></Link>

      <div className='Conteudo'>
        {allPeople.map((people, i) => 
          <GetAllPeople
            key={i}
            name={people.name}
            height={people.height}
            i = {i + 1}
          />
      )}
      </div> 
    </div>
  )
}

export default RenderAllPeople

 

