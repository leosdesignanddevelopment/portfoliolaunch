import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../../css/contactcard.css'



function ContactCard(props) {
  return (
    <Card  className={props.cardClasses} >
    <Card.Img variant="top" src={props.cardImg} className="img-fluid img text-center"/>
    <Card.Body>
      <Card.Title className='cardTitle'>{props.cardTitle}</Card.Title>
      <Card.Text className='cardText'>
        {props.cardText}
      </Card.Text>
    
    </Card.Body>
  </Card>
  )
}

export default ContactCard