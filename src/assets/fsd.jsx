import React from 'react'
import Card from './Card'

function Fsd({data}) {

    const fsd=data.filter(i =>i.category === 'FULL STACK DEVELOPMENT');

    
  return (
    <>
      <h1 className='h1 text-center text-success mb-5'>FULL STACK DEVELOPMENT</h1>
      {
        fsd.map(item=>{
          return <Card key={item.id} item={item}/>
        })

      }
    </>
  )
}

export default Fsd