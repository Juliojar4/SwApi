import '../css/pages.css'
import React, { useState, useEffect } from 'react'
import GetAllPeople from '../../components/getAll/getAllPeoples'


function RenderAllPeople() {
  const [allPeople, setAllPeople] = useState([]);

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
    <div className='Container'>
      <h2>Characters</h2>
      <div className='Conteudo'>
        {allPeople.map((people, index) => 
          <GetAllPeople
            key={index}
            name={people.name}
          />
      )}
      </div> 
    </div>
  )
}

export default RenderAllPeople

 

