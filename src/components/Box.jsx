import React, { useState } from 'react'
import '../App.css'

export default function Box({number}) {
    const [style,setStyle] = useState({
        backgroundColor:'white'
    })



    
   


  return (
    <div className='box' style={style}>
      {number}
    </div>
  )
}
