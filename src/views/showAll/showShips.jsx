import React, {useState,useEffect} from 'react'
 
import ShowAllShips from '../../components/showAll/showAllShips'

function ShowShips() {

    const[ships, setShips] = useState([]);

    useEffect(() => {
        const url = window.location.href
        const param = url.split('Q')
       

        let unmounted = false
       
            async function fetchPeople() {
                if (!unmounted) {
                    let res = await fetch(`https://swapi.dev/api/starships/${param[1]}/`)
                    let data = await res.json()
                    setShips(data)   
                    console.log(param[1])
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
                <ShowAllShips
                    name={ships.name}
                    manufacturer={ships.manufacturer}
                    length={ships.length}
                    cost_in_credits={ships.cost_in_credits}
                    max_atmosphering_speed={ships.max_atmosphering_speed}
                    starship_class={ships.starship_class}
                    consumables={ships.consumables}
                />
            </div>
        </div>
  )
}

export default ShowShips
    