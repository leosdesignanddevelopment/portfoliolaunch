import React from 'react'
import '../../css/skills.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import htmlSvg from '../../img/skills/icons8-html-5.svg'
import cssSvg from '../../img/skills/icons8-css3.svg'
import javascriptSvg from '../../img/skills/icons8-javascript.svg'
import jquerySvg from '../../img/skills/icons8-jquery.svg'
import reactSvg from '../../img/skills/icons8-react-native.svg'
import bootstrapSvg from '../../img/skills/icons8-bootstrap.svg'
import sassSvg from '../../img/skills/icons8-sass.svg'
import wordpressSvg from '../../img/skills/icons8-wordpress.svg'
import phpSvg from '../../img/skills/icons8-php-logo.svg'
import sqlSvg from '../../img/skills/icons8-sql-48.png'
import premiereSvg from '../../img/skills/icons8-adobe-premiere-pro.svg'
import aftereffectsSvg from '../../img/skills/icons8-adobe-after-effects.svg'
import indesignSvg from '../../img/skills/icons8-adobe-indesign.svg'
import photoshopSvg from '../../img/skills/icons8-adobe-photoshop.svg'
import figmaSvg from '../../img/skills/icons8-figma.svg'




function Skills() {
  return (
    <Container fluid>
    <Row className="skillsRow justify-content-start align-items-center text-center">
    
      <Col className='text-center  ' >
        <img src={htmlSvg} className="img-fluid" alt="HTML5 icon" />
        <h3>HTML5</h3>
      </Col>
      <Col className="text-center  " >
        <img src={cssSvg} className="img-fluid" alt="CSS Icon" />
        <h3>CSS3</h3>
      </Col>
      <Col className="text-center  " >
        <img src={javascriptSvg} className="img-fluid" alt="JavaScript Icon" />
        <h3>JavaScript</h3>
      </Col>
    </Row>


    <Row className="skillsRow justify-content-start align-items-center text-center">
    <Col className="text-center" >
        <img src={jquerySvg} className="img-fluid" alt="JQuery Icon" />
        <h3>JQuery</h3>
      </Col>
      <Col className="text-center " >
        <img src={reactSvg} className="img-fluid" alt="React Icon" />
        <h3>React</h3>
      </Col>
      <Col className="text-center  ">
        <img src={bootstrapSvg} className="img-fluid" alt="BootStrap5 icon" />
        <h3>BootStrap 5</h3>
      </Col>

    </Row>


    <Row className="skillsRow justify-content-start align-items-center text-center">
     
     
      <Col className="text-center  ">
        <img src={sassSvg} className="img-fluid" alt="Sass Icon" />
        <h3>Sass</h3>
      </Col>
      <Col className="text-center  ">
        <img src={wordpressSvg} className="img-fluid" alt="WordPress Icon" />
        <h3>WordPress</h3>
      </Col>
      <Col className="text-center  ">
        <img src={phpSvg} className="img-fluid" alt="PHP Icon" />
        <h3>PHP</h3>
      </Col>
    
    </Row>

    <Row className="skillsRow justify-content-start align-items-center text-center">
    <Col className="text-center  ">
        <img src={sqlSvg} className="img-fluid" alt="SQL Icon" />
        <h3>SQL</h3>
      </Col>
      <Col className="text-center  ">
          <img src={premiereSvg} className="img-fluid" alt="premiere5 icon" />
          <h3>Premiere Pro</h3>
        </Col>
        <Col className="text-center  ">
          <img src={aftereffectsSvg} className="img-fluid" alt="aftereffects Icon" />
          <h3>After Effects</h3>
        </Col>
    </Row>


   



    <Row className="skillsRow justify-content-start align-items-center text-center">
      
       
        
        <Col className="text-center  ">
        <img src={indesignSvg} className="img-fluid" alt="indesign Icon" />
        <h3>Indesign</h3>
      </Col>
      <Col className="text-center  ">
        <img src={photoshopSvg} className="img-fluid" alt="photoshop Icon" />
        <h3>PhotoShop</h3>
      </Col>
      <Col className="text-center  ">
        <img src={figmaSvg} className="img-fluid" alt="figma Icon" />
        <h3>Figma</h3>
      </Col>

    </Row>



  </Container>

  
  )
}

export default Skills