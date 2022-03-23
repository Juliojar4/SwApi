 
import React, {useState,useEffect} from 'react'
 
import ShowAllPerson from '../../components/showAll/showAllPerson'

function ShowPerson() {

    const[person, setPerson] = useState([]);

    useEffect(() => {
        const url = window.location.href
        const param = url.split('Q')
       

        let unmounted = false
       
            async function fetchPeople() {
                if (!unmounted) {
                    let res = await fetch(`https://swapi.dev/api/people/${Number(param[1])}`)
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
