import React from 'react'
import './style.css'

function ScoreNav(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-warning text-light">
      <div className="col-sm"><h5>Current Score: {props.score} </h5></div>
      <div className="col-sm"><h4>{props.title}</h4></div>
      <div><h5>High Score: {props.highScore}</h5></div>
    </nav>
  )
}

export default ScoreNav