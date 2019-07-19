import React, { Component } from "react";
import './App.css'
import ScoreNav from './components/Navbar'
import Header from './components/Header'
import ImgCard from './components/Img'
import characters from './characters.json'

//shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    beenClicked: []

  }

  clicked = id => {
    let beenClicked = this.state.beenClicked
    let score = this.state.score
    let topScore = this.state.topScore
  

  if (beenClicked.indexOf(id) === -1) {
    beenClicked.push(id)
    console.log(beenClicked)

    this.handleIncrement()
    this.createShuffle()

  } else if (this.state.score === 12) {
    this.setState({
      score: 0,
      beenClicked: []
    })
  } else {
    this.setState({
      score: 0,
      beenClicked: []
    })
    console.log('dupes')
  }

  if (score > topScore) {
    this.setState({
      topScore: score
    })
  }
}

handleIncrement = () => {
  this.setState({ score: this.state.score + 1})
}

createShuffle = () => {
  this.setState({ characters: shuffle(characters) })
}

  render () {
    return (
      <div>
        <ScoreNav 
          score={this.state.score}
          title="This is a title"
          topScore={this.state.topScore}
        />
        {/* <Header /> */}
        <div className="container">
          <div className="row">
            {this.state.characters.map((character) => (
              <ImgCard
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                clicked={this.clicked}
              />
            ))}
            </div>
        </div>
      </div>
    )
  }
}

export default App
