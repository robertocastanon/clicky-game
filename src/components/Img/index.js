import React from 'react'
import './style.css'
import Card from 'react-bootstrap/Card'

function ImgCard (props) {
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img src='https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/' />
    </Card>
  )
}

export default ImgCard
