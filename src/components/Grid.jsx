// import React, { useState } from 'react'
import Box from './Box'

export default function Grid(props) {
    const numberArray = []
  
    for(let i = 0; i < props.boxes; i++) {
            numberArray.push(i)
    }

  return (
        numberArray.map((number) => <Box key={number} number={number} />)
  )
}
