import React from 'react'
import Card from './Card'

function Career({data}) {
  return (
    <div>
      {
        data.map(item=>{
          return <Card key={item.id} item={item}/>
        })

      }
    </div>
  )
}

export default Career