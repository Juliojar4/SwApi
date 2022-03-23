import React, {useState,useEffect} from 'react'
 
import ShowAllPlanets from '../../components/showAll/showAllPlanets'

function ShowPerson() {

    const[planets, setPlanets] = useState([]);

    useEffect(() => {
        const url = window.location.href
        const param = url.split('Q')
       

        let unmounted = false
       
            async function fetchPeople() {
                if (!unmounted) {
                    let res = await fetch(`https://swapi.dev/api/planets/${param[1]}`)
                    let data = await res.json()
                    setPlanets(data)   
                }
            }
            fetchPeople()
        
        return () => {
            unmounted = true
        }
        }, [])
         
    return (
        <div>
            <div>
          <ShowAllPlanets
            name={planets.name}
            rotation_period={planets.rotation_period}
            climate={planets.climate}
            gravity={planets.gravity}   
            terrain={planets.terrain}
            population={planets.population}        
          />
            </div>
        </div>
  )
}

export default ShowPerson
