import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactCard from '../standalone/contactCard';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../../css/contact.css'

// Svg imports 
import phoneSvg from '../../img/icons/phone.svg'
import emailSvg from '../../img/icons/email.svg'
import linkedInSvg from '../../img/icons/linkedin.svg'
import twitterSvg from '../../img/icons/twitter.svg'




function Contact() {
  return (
    <Container className='form'>
      <Row>
        {/* <Col className='d-flex align-items-center'>
          <p className='text-center  alig'>Begin The Start to Something Great</p>
        </Col> */}
        <Col>  
          <p className='text-center '>Begin The Start to Something Great</p>
  
          <Form className='text-center' action="https://formsubmit.co/65e5372d46700d34a25119098f21d556" method="POST">
          <Form.Group className="mb-3" controlId="formName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="input" required name="First Name" placeholder="First Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="input" required name="Last Name" placeholder="Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control type="email" required name="email" placeholder="Enter Email" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} placeholder="Type message" />
          </Form.Group>

          {/* <input type="hidden" name="_next" value="../thankyou/index.js"></input> */}
  
          <div className="text-center">
             <Button variant="primary" type="submit" >
                Submit
            </Button>
          </div>
         
      </Form>
    </Col>
      </Row>

      <h4 className='text-center display-5'>Rate This Site</h4>
      
    </Container>
  )
}

export default Contact