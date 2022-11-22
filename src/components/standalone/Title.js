import React from 'react'

import '../../css/title.css'


function Title(props) {
  return (
   
      <h1 className='titleComponent titleCenter' id={props.id}>{props.title}</h1>
    
  )
}

export default Title