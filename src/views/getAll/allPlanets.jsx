/* eslint-disable react-hooks/exhaustive-deps */
import '../../styles/css/styleComponets/pages.css'
import React, { useState, useEffect } from 'react'
import RenderAllPlanets from '../../components/getAll/getAllPlanets'
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import useFullPageLoader from '../../components/hooks/useFullPageLoader'


export default function Example() {
    const [allPlanets, setAllPlanets] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader()
    
   useEffect(() => {
        let unmounted = false
       
       async function fetchPlanets() {
                if (!unmounted) {
                  showLoader()
                  fetch('https://swapi.dev/api/people/?format=json')
                  .then(response => response.json())
                    .then(json => {
                      hideLoader()
                      setAllPlanets(json.results)
                  })
                }
            }
            fetchPlanets()
        
        return () => {
            unmounted = true
        }
        }, [])

    console.log(allPlanets)

    return (
    <div>
        <nav>
            <Link to={`/`} className="link"><AiFillHome className="Home"/></Link>
        </nav>
        <div className="Titulo">
            <h2>Planets</h2>
        </div>
            {allPlanets.map((planets, index) => 
                <RenderAllPlanets
                key={index}
                name={planets.name}
                i = {index + 1}    
                />
            )} 
            {loader}
        </div> 
    )
}

