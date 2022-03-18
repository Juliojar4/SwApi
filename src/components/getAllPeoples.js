import React from 'react'

const PokemonThumb = ({ gender,name}) => {

    return (    
        <div>
     
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <h3>{gender}</h3>
            </div>
            <button>Read More</button>
        </div>
    )
}

export default PokemonThumb