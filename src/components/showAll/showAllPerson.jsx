import React from 'react'
 

const RenderAllPeople = ({name, height, mass, skin_color,}) => {

    return (    
        <div className="Container">
            <div className="Conteudo">
                <h2>{name}</h2>
                <h3>Height:{height}</h3>
                <h3>Mass:{mass}</h3>
                <h3>skin color:{skin_color}</h3>
            </div>
        </div>
    )
}

export default RenderAllPeople