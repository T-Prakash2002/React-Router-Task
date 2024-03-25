import React from 'react'
import Card from './Card'

function Career({data}) {

  const career=data.filter(i =>i.category === 'CAREER');

  return (
    <>
    <h1 className='h1 text-center text-success mb-5'>CAREER</h1>
      {
        career.map(item=>{
          return <Card key={item.id} item={item}/>
        })

      }
    </>
  )
}

export default Career