import React from 'react'
import { Link } from "react-router-dom";

const RenderAllPlanets = ({name, i}) => {

    return (    
        <div className="Container">
            <div className="Conteudo">
                <h3>{name}</h3>
                <button><Link to={`paramQ${i}`}>Read More</Link></button>
            </div>
        </div>
    )
}

export default RenderAllPlanets