import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import heroSvg from '../../img/avatars/hero2.svg'
import blobSvg from '../../img/blobs/heroblob.svg'




// CSS
import '../../App.css'
import '../../css/home.css'

function Home() {
  return (
    <>
    <div className='mainContainer ' id="home">
    <Container>
      
         <Row className=' heroContainer text-center justify-content-center heroSection d-flex align-items-center'>
            <Col>
                <h1 className='heroTagline animateGradient '>I make creative visions possible</h1>
                <p className='heroCaption'>Front-end Designer & Developer &lt;/&gt; </p>
                {/* <img src={blobSvg} alt="" className='heroBlob'/> */}

            </Col>
            <Col s={0}>
                <img src={heroSvg} alt="404" className='heroSvg ' />

            </Col>
        </Row>

      <Row className='text-center'>
        <Col>
        <a href="#myWork" >
          <button>See Work</button>
        </a>
        </Col>
      </Row>


       

    </Container>
   
   
    <svg className='waveSvg parallax' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#C6CBF4" fill-opacity="1" d="M0,224L60,197.3C120,171,240,117,360,122.7C480,128,600,192,720,213.3C840,235,960,213,1080,218.7C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

    
  </div>


   
 
 
  </>

  )
}

export default Home