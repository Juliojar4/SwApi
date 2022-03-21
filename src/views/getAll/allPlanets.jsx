import '../css/pages.css'
import React, { useState, useEffect } from 'react'
import RenderAllPlanets from '../../components/getAll/getAllPlanets'


export default function Example() {
    const [allPlanets, setAllPlanets] = useState([]);

    useEffect(() => {
        async function fetchPlanets() {
        let res = await fetch('https://swapi.dev/api/planets/?format=json')
        let data = await res.json()
        setAllPlanets(data.results)
        }
        fetchPlanets()   
        }, [])

    console.log(allPlanets)



    return (
    <div className='Container'>
        <h2>Planets</h2>
            <div className='Conteudo'>
         {allPlanets.map((planets, index) => 
            <RenderAllPlanets
            key={index}
            name={planets.name}
            />
        )} 
        </div> 
    </div>
    )
}

