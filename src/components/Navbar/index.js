import React from 'react'
import './style.css'

function ScoreNav() {
  return (
    <header className="scoreBoard fixed-top">
      <div className="row">
        <div className="col-md-6 col-left"><h5>Title</h5></div>
        <div className="col-md-3 col-right"><h5>Current Score: </h5></div>
        <div clasName="col-mid-3 col-right"><h5>High Score: </h5></div>
      </div>
    </header>
  )
}

export default ScoreNav