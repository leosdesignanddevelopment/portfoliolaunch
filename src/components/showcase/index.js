import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useRef, useEffect } from 'react';

import '../../css/showcase.css'


function Showcase(props) {
  const [projects, projectNumber] = useState(0)



  return (
    <Container className='showcaseContainer text-center' >

    

    <Row className='mb-4'>
     
      <Col>
      
        <h2>{props.showcaseTitle}</h2>
      </Col>
      
    </Row>

    <Row className='mb-4'>
      <Col>
      <a href={props.showcaseLink}>
        <img className='img-fluid' src={props.showcaseImg} alt={props.showcaseAlt} />
      </a>  
      </Col>
    
    </Row>

    <Row className='mb-4'>
      <Col>
        <h3 className=' d-flex align-items-center justify-content-center'> <span>Stack: </span> <img src={props.showcaseStack} alt={props.showcaseStackAlt} className="img-fluid"/> </h3>
      </Col>
    
    </Row>

    <Row className='mb-4'>
      <Col>
        <p className='text-start'>{props.showcaseDescription} <a href={props.showcaseLinkOriginal}>{props.showcaseLinkDescription}</a> </p>
      </Col>
    
    </Row>
  </Container>
  )

  
}

export default Showcase