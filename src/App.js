import React, { Component } from "react";
import './App.css'
import ScoreNav from './components/Navbar'
import Header from './components/Header'
import ImgCard from './components/Img'
import characters from './characters.json'

//shuffle upon each click
function shuffle(arr) {
  for (let i = arr.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    
  }

  render () {
    return (
      <div>
        <ScoreNav />
        <Header />
        <div className="container">
          <div className="row">
            {this.state.characters.map((character) => (
              <ImgCard
                name={character.name}
                image={character.image}
              />
            ))}
            </div>
        </div>
      </div>
    )
  }
}

export default App
