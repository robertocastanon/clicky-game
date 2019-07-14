import React from 'react'
import './style.css'
import Card from 'react-bootstrap/Card'

function ImgCard (props) {
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img src={props.image} />
    </Card>
  )
}

export default ImgCard
