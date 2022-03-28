import React, {useState,useEffect} from 'react'
 
import ShowAllPlanets from '../../components/showAll/showAllPlanets'
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoPlanetSharp } from "react-icons/io5";
import useFullPageLoader from '../../components/hooks/useFullPageLoader'

function ShowPerson() {

    const[planets, setPlanets] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader()
    useEffect(() => {
        const url = window.location.href
        const param = url.split('Q')
       

        let unmounted = false
       
            async function fetchPeople() {
                if (!unmounted) {
                  showLoader()
                  fetch(`https://swapi.dev/api/planets/${param[1]}`)
                  .then(response => response.json())
                    .then(json => {
                      hideLoader()
                      setPlanets(json)
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
        <Link to={`/allPlanets`} className="link"><IoPlanetSharp/></Link>
      </nav>
            <div>
          <ShowAllPlanets
            name={planets.name}
            rotation_period={planets.rotation_period}
            orbital_period={planets.orbital_period}
            diameter={planets.diameter}   
            climate={planets.climate}
            population={planets.population}     
            terrain={planets.terrain}        
          />
        </div>
          {loader}
        </div>
  )
}

export default ShowPerson
