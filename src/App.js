import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Wrapper from './components/Wrapper'
import NavbarComp from './components/Navbar'
import Header from './components/Header'
import ImgCard from './components/Img'

function App () {
  return (
    <Wrapper>
      <NavbarComp />
      <Header />
      <ImgCard />
    </Wrapper>
  )
}

export default App
