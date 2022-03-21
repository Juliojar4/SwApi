import React from 'react'

const RenderAllShips = ({name}) => {

    return (    
        <div className="Container">
            <div className="Conteudo">
                <h3>{name}</h3>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default RenderAllShips