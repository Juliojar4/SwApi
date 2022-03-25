import React from 'react'
import '../../styles/css/styleComponets/showAll.css'

const RenderAllPeople = ({name, model, manufacturer, cost_in_credits,length,starship_class,passengers}) => {

    return (    
        <div className="Show-Container">
                <h1>{name}</h1>
            <div className="Show-Conteudo">
                <ul>
                    <li className="Particularity">Model: {model}</li>
                    <li className="Particularity">Manufacturer: {manufacturer}</li>
                    <li className="Particularity">Cost In Credits: {cost_in_credits}</li>
                    <li className="Particularity">Length: {length}</li>
                    <li className="Particularity">Starship Class: {starship_class}</li>
                    <li className="Particularity">Passengers: {passengers}</li>
                </ul>
            </div>
        </div>
    )
}

export default RenderAllPeople