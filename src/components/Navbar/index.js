import React from 'react'
import './style.css'

function ScoreNav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-sm"><h5>Current Score: {props.score} </h5></div>
      <div className="col-sm"><h5>{props.title}</h5></div>
      <div><h5>High Score: {props.topScore}</h5></div>
    </nav>
  )
}

export default ScoreNav