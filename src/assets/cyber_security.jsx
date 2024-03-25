import React from 'react'
import Card from './Card'

function Cyber_security({data}) {

  const cyber_security=data.filter(i =>i.category === 'CYBER SECURITY');

  return (
    <>
    <h1 className='h1 text-center text-success mb-5'>CYBER SECURITY</h1>
      {
        cyber_security.map(item=>{
          return <Card key={item.id} item={item}/>
        })

      }
    </>
  )
}

export default Cyber_security