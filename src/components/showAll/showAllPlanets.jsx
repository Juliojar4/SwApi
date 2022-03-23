import React from 'react'
 

const RenderAllPeople = ({name, rotation_period, climate, gravity,terrain,population}) => {

    return (    
        <div className="Container">
            <div className="Conteudo">
                <h2>{name}</h2>
                <h3>Rotation Period -- {rotation_period}</h3>
                <h3>Climate -- {climate}</h3>
                <h3>Gavity -- {gravity}</h3>
                <h3>Terrain -- {terrain}</h3>
                <h3>Populatioyn -- {population}</h3>
            </div>
        </div>
    )
}

export default RenderAllPeople