 
import React, {useState,useEffect} from 'react'
 
import ShowAllPerson from '../../components/showAll/showAllPerson'
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function ShowPerson() {

    const[person, setPerson] = useState([]);

    useEffect(() => {
        const url = window.location.href
        const param = url.split('Q')
       

        let unmounted = false
       
            async function fetchPeople() {
                if (!unmounted) {
                    let res = await fetch(`https://swapi.dev/api/people/${param[1]}`)
                    let data = await res.json()
                    setPerson(data)
                    
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
        <Link to={`/`} className="link"><AiFillHome className="Home"/></Link>
      </nav>
            <div>
          <ShowAllPerson
            name={person.name}
            height={person.height}
            mass={person.mass}
            skin_color={person.skin_color}    
          />
            </div>
        </div>
  )
}

export default ShowPerson
