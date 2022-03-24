import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/css/styleComponets/getAll.css'

const RenderAllPeople = ({name,i }) => {

    return (    
        <div className="Container">
            <div className="Conteudo">
                <h3 className="PersonName">{name}</h3>
                <div className="ReadMore">
                    <button><Link to={`paramQ${i}`} className="ReadContent">Read More</Link></button>
                </div>
            </div>
        </div>
    )
}

export default RenderAllPeople