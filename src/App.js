import React, { Component } from "react";
import './App.css'
import ScoreNav from './components/Navbar'
// import Header from './components/Header'
import ImgCard from './components/Img'
import characters from './characters.json'
import Footer from './components/Footer'

// this function shuffles when a card is clicked
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // set initial variables to use later on to 0 or empty
  state = {
    characters,
    // set scores to zero
    score: 0,
    highScore: 0,
    beenClicked: [],
    // at 0 these alerts will not display
    displayLoss: 0,
    displayWin: 0

  }
  // clicked function
  clicked = id => {
    // will asign the state of the empty beenClicked array to be updated
    let beenClicked = this.state.beenClicked
    let score = this.state.score
    let highScore = this.state.highScore
    this.setState({
      displayLoss: 0
    })
  // if the the clicked card has an ID of the already indexed characters
  if (beenClicked.indexOf(id) === -1) {
    // push into the beenClicked array to be stored
    beenClicked.push(id)
    console.log(beenClicked)
    // run function  to handle the socre
    this.handleScore()
    // run function to shuffle after every click
    this.createShuffle()
  } else if (this.state.score === 12) {
    // then display the win alert, if the score equals to 12
    this.setState({
      displayWin: 1,
      score: 0,
      beenClicked: []
    })
  } else {
    this.setState({
      // else then display loss alert
      score: 0,
      beenClicked: []
    })
    console.log('dupes')
    this.setState({
      displayLoss: 1
    })
  }
  // if the score is larger than the highScore than set highScore to score
  if (score > highScore) {
    this.setState({
      highScore: score
    })
  }
}
// function to handle the increase of score after every click that isnt a dupelicate
handleScore = () => {
  this.setState({ score: this.state.score + 1 })
}

// functino to shuffle up all the cards
createShuffle = () => {
  this.setState({ characters: shuffle(characters) })
}

  render () {
    return (
      <div>
        <ScoreNav 
          score={this.state.score}
          title="Battle Cats!"
          highScore={this.state.highScore}
        />
        <row>
        <div className="alert alert-danger text-center" style={{ opacity: this.state.displayLoss }}>
          You clicked on a duplicate, click any card to try again!
        </div>
        <div className="alert alert-success text-center" style={{ opacity: this.state.displayWin }}>
          You got the highest score! Good Job!
        </div>
        </row>
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
        <Footer />
      </div>
    )
  }
}

export default App
