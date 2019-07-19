import React, { Component } from "react";
import './App.css'
import ScoreNav from './components/Navbar'
// import Header from './components/Header'
import ImgCard from './components/Img'
import characters from './characters.json'
import Footer from './components/Footer'

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
    beenClicked: [],
    displayLoss: 0,
    displayWin: 0

  }

  clicked = id => {
    let beenClicked = this.state.beenClicked
    let score = this.state.score
    let topScore = this.state.topScore
    this.setState({
      displayLoss: 0
    })
  
  if (beenClicked.indexOf(id) === -1) {
    beenClicked.push(id)
    console.log(beenClicked)

    this.handleIncrement()
    this.createShuffle()

  } else if (this.state.score === 12) {
    this.setState({
      displayWin: 1,
      score: 0,
      beenClicked: []
    })
  } else {
    this.setState({
      score: 0,
      beenClicked: []
    })
    console.log('dupes')
    this.setState({
      displayLoss: 1
    })
  }

  if (score > topScore) {
    this.setState({
      topScore: score
    })
  }
}

handleIncrement = () => {
  this.setState({ score: this.state.score + 1 })
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
