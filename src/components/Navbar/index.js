import React from 'react'
import './style.css'

function ScoreNav(props) {
  return (
    <header className="scoreBoard fixed-top">
      <div className="row">
        <div className="col-md-6 col-left"><h5>{props.title}</h5></div>
        <div className="col-md-3 col-right"><h5>Current Score: {props.score} </h5></div>
        <div clasName="col-mid-3 col-right"><h5>High Score: {props.topScore}</h5></div>
      </div>
    </header>
  )
}

export default ScoreNav