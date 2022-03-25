import React from 'react'
import Loading from '../../styles/img/loading.gif'
import './index.css'

const fullPage = () => {
  return (
    <div className="fp-container">
        <img src={Loading} className="fp-loader" alt='loading' />      
    </div>
  )
}

export default fullPage