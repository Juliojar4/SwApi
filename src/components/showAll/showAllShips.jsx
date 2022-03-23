import React from 'react'
 

const RenderAllPeople = ({name, manufacturer,length, cost_in_credits, max_atmosphering_speed,consumables,starship_class}) => {

    return (    
        <div className="Container">
            <div className="Conteudo">
                <h2>{name}</h2>
                <h3>Manufacturer -- {manufacturer}</h3>
                <h3>Length -- {length}</h3>
                <h3>Cost In Credits -- {cost_in_credits}</h3>
                <h3>Max Atmosphering Speed -- {max_atmosphering_speed}</h3>
                <h3>Starship Class -- {starship_class}</h3>
                <h3>Consumables -- {consumables}</h3>
            </div>
        </div>
    )
}

export default RenderAllPeople