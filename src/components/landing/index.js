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
         <p className='ms-5 item'>A Portfolio</p>
         <h2 className='ms-5 item'>By: Omar Morales  </h2>
         
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





  // componentDidMount(){
  //   // Check if visited
  //   if (window.sessionStorage.getItem("key") === null) {
  //     window.sessionStorage.setItem("key", 1)

  //     this.setState({
  //       animate: false
      
  //     })

  //     console.log("First Token Loaded")
  //   } else {
  //     this.setState({
  //       animate: true
  //     })
  //     console.log("Token Exist")
  //   }


  // }


}

    // sessionStorage.setItem('key', 'value');
    // let data = sessionStorage.getItem('key');

    // // Removal
    // sessionStorage.removeItem('key')
    // sessionStorage.clear();


    // console.log("loaded")
    // // Check if visited
    // if (window.sessionStorage.getItem("firstLoadDone") == 1) {
    //   this.setState({
    //     animate: true
    //   })
    //   window.sessionStorage.setItem("firstLoadDone", null)
    // } else {
    //   this.setState({
    //     animate:false
    //   })
    // }
// function Landing() {



//   return (
//   <div className='main-content d-flex align-items-center fadeIn '>
//   <Container>
//        <p className='ms-5 '>A Portfolio</p>
//       <h2 className='ms-5'>By: Omar Morales  </h2>

     

   
//   </Container>
// </div>
//   )
// }

export default Landing