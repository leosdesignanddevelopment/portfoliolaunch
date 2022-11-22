import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

// Svgs 
import creativeSvg from '../../img/avatars/creativethinking.svg'
import solutionsSvg from '../../img/avatars/deliveringsolutions.svg'
import traitsSvg from '../../img/avatars/personaltraits.svg'

import '../../css/specialties.css'



function Specialties() {
  return (
   
    <Container className='specialContainer'>
      <Row>
        <Col>
          <Card className='myCard'>
      <Card.Img variant="top" src={creativeSvg} />
      <Card.Body>
        <Card.Title>Creative Thinking  </Card.Title>
        <Card.Text>
        Creating tangible ideas that meet the client and users needs.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col>
          <Card className='myCard'>
      <Card.Img variant="top" src={solutionsSvg} />
      <Card.Body>
        <Card.Title>Delivering Solutions</Card.Title>
        <Card.Text>
        Bringing ideas to life through modern tools such as design, code, or video.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col>
          <Card className='myCard'>
      <Card.Img variant="top" src={traitsSvg} />
      <Card.Body>
        <Card.Title>Personal Traits </Card.Title>
        <Card.Text>
        I value compeition, passion, drive, and contribution to make me an all around team player.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Specialties