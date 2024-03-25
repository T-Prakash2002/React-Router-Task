import React from 'react'

function Card({item}) {
  return (
    <div className='col-6'>
        <div className="card mb-5">
            <img src={item.image} className="card-img-top" alt="..."/>
        <div className="card-body">

            <p>{item.id}</p>
            <p className='category'>{item.category}</p>

            <h4 className="card-title">{item.title}</h4>

            <p className="card-text"></p>

            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  )
}

export default Card