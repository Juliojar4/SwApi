import React from 'react'

const PokemonThumb = ({ gender,name}) => {

    return (    
        <div>
     
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <h3>{gender}</h3>
            </div>
        </div>
    )
}

export default PokemonThumb