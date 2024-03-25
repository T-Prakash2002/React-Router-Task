import React from 'react'
import Card from './Card'

function Datascience({data}) {

  const data_science=data.filter(i =>i.category === 'DATA SCIENCE');

  return (
    <>
    <h1 className='h1 text-center text-success mb-5'>DATA SCIENCE</h1>
      {
        data_science.map(item=>{
          return <Card key={item.id} item={item}/>
        })

      }
    </>
  )
}

export default Datascience