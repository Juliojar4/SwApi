import React, {useState,useEffect} from 'react'
 
import ShowAllShips from '../../components/showAll/showAllShips'
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiInterceptorShip } from "react-icons/gi";
import useFullPageLoader from '../../components/hooks/useFullPageLoader'
import teste from './teste'

function ShowShips() {

    const[ships, setShips] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader()

    useEffect(() => {
        const url = window.location.href
        const param = url.split('Q')
       

        let unmounted = false
       
            async function fetchPeople() {
                if (!unmounted) {
                  showLoader()
                  fetch(`https://swapi.dev/api/starships/${param[1]}`)
                  .then(response => response.json())
                    .then(json => {
                      hideLoader()
                      setShips(json)
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
        <Link to={`/allShips`} className="link"><GiInterceptorShip/></Link>
      </nav>
            <div>
                <ShowAllShips
                    name={ships.name}
                    model={ships.model}
                    manufacturer={ships.manufacturer}
                    cost_in_credits={ships.cost_in_credits}
                    length={ships.length}
                    starship_class={ships.starship_class}
                    passengers={ships.passengers}
                />
            </div>
        
            {loader}
        </div>
  )
}

export default ShowShips
    