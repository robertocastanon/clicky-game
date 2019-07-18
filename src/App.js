import React, { Component } from "react";
// import logo from './logo.svg'
import './App.css'
import Wrapper from './components/Wrapper'
import NavbarComp from './components/Navbar'
import Header from './components/Header'
import ImgCard from './components/Img'
import characters from './characters.json'

class App extends Component {
  state = {
    characters
  }
  render () {
    return (
      <Wrapper>
        <NavbarComp />
        <Header />
        {this.state.characters.map((character) => (
          <ImgCard
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App
