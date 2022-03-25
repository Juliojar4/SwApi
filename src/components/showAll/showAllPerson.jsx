import React from 'react'
import '../../styles/css/styleComponets/showAll.css'

const RenderAllPeople = ({name, height, mass, skin_color,gender,birth_year,planets }) => {

    return (    
        <div className="Show-Container">
                <h1>{name}</h1>
            <div className="Show-Conteudo">
                <ul>
                    <li className="Particularity">Height: {height}</li>
                    <li className="Particularity">Mass: {mass}</li>
                    <li className="Particularity">Skin color: {skin_color}</li>
                    <li className="Particularity">Gender: {gender}</li>
                    <li className="Particularity">Birth Year: {birth_year}</li>
                    <li className="Particularity">HomeWorld: {planets}</li>
                </ul>
            </div>
        </div>
    )
}

export default RenderAllPeople