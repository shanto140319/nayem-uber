import React from 'react'
import {data2} from '../data2'

const Bike = () => {
 return (
  <div>
    {data2.map((item)=>{
     const{id,image,price} = item
     return(
      <article>
       <img src={image} alt=""/>
       <h2>hii</h2>
      </article>
     )
    })}
  </div>
 )
}

export default Bike
