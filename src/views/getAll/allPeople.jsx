/* eslint-disable react-hooks/exhaustive-deps */
import '../../styles/css/styleComponets/pages.css'
import React, { useState, useEffect } from 'react'
import GetAllPeople from '../../components/getAll/getAllPeoples'
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import useFullPageLoader from '../../components/hooks/useFullPageLoader'

function RenderAllPeople() {
  const [allPeople, setAllPeople] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader()

   useEffect(() => {
        let unmounted = false
       
            async function fetchPeople() {
                if (!unmounted) {
                  showLoader()
                  fetch('https://swapi.dev/api/people/?format=json')
                  .then(response => response.json())
                    .then(json => {
                      hideLoader()
                      setAllPeople(json.results)
                  })
                }
            }
            fetchPeople()
        
        return () => {
            unmounted = true
        }
        }, [])

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
    {loader}
    </div>
  )
}

export default RenderAllPeople

 

