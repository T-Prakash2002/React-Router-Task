import React from 'react'

function Card({item}) {
return (
    <div className='col-12 col-md-6 col-lg-4 justify-content-between'>
        <div className="card mb-5">
            <img src={item.image} className="card-img-top" alt="..."/>
        <div className="card-body">

            
            <p className='category'>{item.category}</p>

            <h4 className="card-title">{item.title}</h4>

            
        </div>
        <div className='card-footer d-flex justify-content-between'>
            
                <p className='card-text'>{item.date}</p>
                <p className='card-text'>{item.duration}</p>

            </div>
        </div>
    </div>
)
}

export default Card