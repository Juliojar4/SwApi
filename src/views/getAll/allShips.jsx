/* eslint-disable react-hooks/exhaustive-deps */
import '../../styles/css/styleComponets/pages.css'
import React, { useState, useEffect } from 'react'
import RenderAllShips from '../../components/getAll/getAllShips'
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import useFullPageLoader from '../../components/hooks/useFullPageLoader'

export default function Example() {
    const [allShips, setAllShips] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader()

    useEffect(() => {
        let unmounted = false
       
       async function fetchShips() {
                if (!unmounted) {
                  showLoader()
                  fetch('https://swapi.dev/api/starships/?format=json')
                  .then(response => response.json())
                    .then(json => {
                      hideLoader()
                      setAllShips(json.results)
                  })
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
        {loader}    
    </div>
    )
}