/* eslint-disable react-hooks/exhaustive-deps */
 
import React, {useState,useEffect} from 'react'
 
import ShowAllPerson from '../../components/showAll/showAllPerson'
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiLightSabers } from "react-icons/gi";
import useFullPageLoader from '../../components/hooks/useFullPageLoader'

function ShowPerson() {

    const [person, setPerson] = useState([]);
    const [planets, setPlanets] = useState('');
    const [loader, showLoader, hideLoader] = useFullPageLoader()

    useEffect(() => {
        const url = window.location.href
        const param = url.split('Q')

        let unmounted = false
       
            async function fetchPeople() {
                if (!unmounted) {
                  showLoader()
                  fetch(`https://swapi.dev/api/people/${param[1]}`)
                  .then(response => response.json())
                    .then(json => {
                      setPerson(json)
                  })  
                }
            }
            fetchPeople()
      
                async function fetchPeoplePlanet() {
                if (!unmounted) {
                  showLoader()
                  fetch(`https://swapi.dev/api/people/${param[1]}`)
                  .then(response => response.json())
                    .then(json => {
                      fetch(json.homeworld)
                        .then(response => response.json())
                        .then(json => {
                          hideLoader()
                          setPlanets(json)  
                          console.log(json.name)
                        })
                  })  
                }
            }
            fetchPeoplePlanet()
        
        return () => {
            unmounted = true
        }
        }, [])
         
    return (
        <div>
      <nav>
        <Link to={`/`} className="link"><AiFillHome className="Home"/></Link>
        <Link to={`/allPeople`} className="link"><GiLightSabers/></Link>
      </nav>
            <div>
          <ShowAllPerson
            name={person.name}
            height={person.height}
            mass={person.mass}
            skin_color={person.skin_color}  
            gender={person.gender}
            birth_year={person.birth_year}
            planets={planets.name}
          />
        </div>
        {loader}
        </div>
  )

}

export default ShowPerson

