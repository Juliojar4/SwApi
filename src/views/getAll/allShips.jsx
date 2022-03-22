import '../css/pages.css'
import React, { useState, useEffect } from 'react'
import RenderAllShips from '../../components/getAll/getAllShips'


export default function Example() {
    const [allShips, setAllShips] = useState([]);

    useEffect(() => {
        let unmounted = false
       
            async function fetchShips() {
                if (!unmounted) {
                    let res = await fetch('https://swapi.dev/api/starships/?format=json')
                    let data = await res.json()
                    setAllShips(data.results)
                }
            }
            fetchShips()
        
        return () => {
            unmounted = true
        }
        }, [])

    console.log(allShips)



    return (
    <div className='Container'>
        <h2>Ships</h2>
            <div className='Conteudo'>
         {allShips.map((ships, index) => 
            <RenderAllShips
            key={index}
            name={ships.name}
            />
        )} 
        </div> 
    </div>
    )
}