import React from 'react'
import {Container} from 'react-bootstrap'
import '../../App.css'

import '../../css/landing.css'


class Landing extends React.Component {  
  constructor() {
    super()    
    this.state = {
      animate: false
    }
    
  }

  render() {
    return (
      <div className='main-content d-flex align-items-center '>
      <Container className={this.state.animate ? "fadeIn item" : "item"}>
         <p className='ms-5 item'>Omar Morales</p>
         <h2 className='ms-5 item'>(Scroll to explore) </h2>
         
      </Container>
      </div>
    )
  }



    // Exist Check
  componentDidMount() {
    if(<Landing/>) {
      this.setState({
        animate: true
      })
    }
  }



}


export default Landing
