import React from 'react'

export default function Number({ numbers }) {
  return (

        // numbers.map(function(number){
        //     return <li>{number}</li>
        // })

        numbers.map((number)=>{ return <li>{number}</li> } )
  )
}
