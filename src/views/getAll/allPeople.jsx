import '../../styles/css/styleComponets/pages.css'
import React, { useState, useEffect } from 'react'
import GetAllPeople from '../../components/getAll/getAllPeoples'
import { AiFillHome } from "react-icons/ai";
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
    <div>
      <nav>
        <Link to={`/`} className="link"><AiFillHome className="Home"/></Link>
      </nav>
      <div className="Titulo">
        <h2>Characters</h2>
      </div>
          {allPeople.map((people, i) => 
            <GetAllPeople
              key={i}
              name={people.name}
              i = {i + 1}
            />
      )}

    </div>
  )
}

export default RenderAllPeople

 

