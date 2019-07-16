import React from 'react'
import './style.css'

const ImgCard = props => (
  <div className="card" onClick={el => props.clickEvent(el.target.src)}>
    <img className="card-img-top card-height" src={props.name} />
  </div>
)

export default ImgCard
