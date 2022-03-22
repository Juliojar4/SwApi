import '../css/pages.css'
import React, { useState, useEffect } from 'react'
import GetAllPeople from '../../components/getAll/getAllPeoples'


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
      <h2>Characters</h2>
      <div className='Conteudo'>
        {allPeople.map((people, i) => 
          <GetAllPeople
            key={i}
            name={people.name}
            height={people.height}
            chave={i}
          />
      )}
      </div> 
    </div>
  )
}

export default RenderAllPeople

 

