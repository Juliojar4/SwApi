import '../../styles/css/styleComponets/pages.css'
import React, { useState, useEffect } from 'react'
import RenderAllPlanets from '../../components/getAll/getAllPlanets'
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function Example() {
    const [allPlanets, setAllPlanets] = useState([]);

   useEffect(() => {
        let unmounted = false
       
            async function fetchPlanets() {
                if (!unmounted) {
                    let res = await fetch('https://swapi.dev/api/planets/?format=json')
                    let data = await res.json()
                    setAllPlanets(data.results)
                    console.log(data)
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
                </div> 
    )
}

