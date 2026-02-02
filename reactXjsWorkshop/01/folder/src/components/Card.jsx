import React from 'react'

const Card = (props) => {
  return (
    <div>
    <div className='card'>
        <img src={props.image} alt="a pic of beach buoy" />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default Card
