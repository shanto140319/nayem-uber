import React, { useState } from 'react'
import Bike from '../Bike';
import Car from '../Car';



const SearchResult = ({value,toValue,fromValue}) => {


  return(
    <article>
      <div className="FromTo">
          <h5>{toValue}</h5>
          <h5>{fromValue}</h5>
      </div>
       <div className="vehicle">
         {value === 1 && <Bike/>}
          {value === 2 && <Car/>}
       </div>
  </article>
  )
 }

export default SearchResult
