import '../../styles/css/styleComponets/pages.css'
import React, { useState, useEffect } from 'react'
import RenderAllShips from '../../components/getAll/getAllShips'
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";


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
    <div>
        <nav>
            <Link to={`/`} className="link"><AiFillHome className="Home"/></Link>
        </nav>
        <div className="Titulo">
            <h2>Star Ships</h2>
        </div>
         {allShips.map((ships, index) => 
            <RenderAllShips
            key={index}
            name={ships.name}
            i = {index + 1}     
            />
        )}
    </div>
    )
}