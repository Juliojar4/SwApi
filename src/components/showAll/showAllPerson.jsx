import React from 'react'
import '../../styles/css/styleComponets/showAll.css'

const RenderAllPeople = ({name, height, mass, skin_color}) => {

    return (    
        <div className="Show-Container">
                <h1>{name}</h1>
            <div className="Show-Conteudo">
                <h3>Height:{height}</h3>
                <h3>Mass:{mass}</h3>
                <h3>skin color:{skin_color}</h3>
            </div>
        </div>
    )
}

export default RenderAllPeople