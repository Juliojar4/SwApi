import React from 'react'
import { Link } from "react-router-dom";

const RenderAllPeople = ({name}) => {

    return (    
        <div className="Container">
            <div className="Conteudo">
                <h3>{name}</h3>
                <button><Link to="showPerson">Show more</Link></button>
            </div>
        </div>
    )
}

export default RenderAllPeople