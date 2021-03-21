import React from 'react'
import {data3} from '../data2'

const Bike = () => {
 return (
  <div>
    {data3.map((item)=>{
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
