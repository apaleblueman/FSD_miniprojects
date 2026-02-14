import React from 'react'

export default function Card({id,imageUrl, name, price, stock}) {
  return (
    <div>
        <p>Product {id}</p>
        <img src={imageUrl}/>
        <p>{name}</p>
        <p>{price}</p>
        <p>{stock}</p>
    </div>
  );
}
