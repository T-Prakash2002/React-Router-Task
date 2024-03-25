import React from 'react'
import Card from './Card'

function All({data}) {
  return (
    <>
    <h1 className='h1 text-center text-success mb-5'>ALL</h1>
      {
        data.map(item=>{
          
          return <Card key={item.id} item={item}/>
        })

      }
    </>
  )
}

export default All