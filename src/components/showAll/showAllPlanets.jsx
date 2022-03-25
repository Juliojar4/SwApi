import React from 'react'
import '../../styles/css/styleComponets/showAll.css'

const RenderAllPeople = ({name, rotation_period, orbital_period, diameter,climate,population,terrain }) => {

    return (    
        <div className="Show-Container">
                <h1>{name}</h1>
            <div className="Show-Conteudo">
                <ul>
                    <li className="Particularity">Rotation Period: {rotation_period}</li>
                    <li className="Particularity">Orbital Period: {orbital_period}</li>
                    <li className="Particularity">Diameter: {diameter}</li>
                    <li className="Particularity">Climate: {climate}</li>
                    <li className="Particularity">Population: {population}</li>
                    <li className="Particularity">Terrain: {terrain}</li>
                </ul>
            </div>
        </div>
    )
}

export default RenderAllPeople