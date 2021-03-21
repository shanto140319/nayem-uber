import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SearchResult from '../SearchResult/SearchResult';

const SearchFrom = () => {
        const{id} = useParams()

   
     const[value,setValue] = useState(null);
    
    const [show,setShow] = useState(false)
    const [toValue,setToValue] = useState('');
    const [fromValue,setFromValue] = useState('');

       useEffect(()=>{
      if(id==='1'){
      setValue(1)
     }
     if(id==='2'){
      setValue(2)
     }
   },[show])
    const handleFromValue = (e)=>{
        const value = e.target.value;
        setFromValue(value)
    }
    const handleToValue = (e)=>{
        const value = e.target.value;
        setToValue(value)
    }
    const handleSearch = (e)=>{
        e.preventDefault();
        setShow(true)
    }
    return (
        <main>
           <div className="form">
                <form>
                    <label htmlFor="pickFrom">
                   Pick From
               </label>
               <input type="text" name="pickFrom" id="pickFrom" onChange={handleFromValue}/>
                   <br/>
               <label htmlFor="pickTo">
                   Pick To
               </label>
               <input type="text" name="pickTo" id="pickTo" onChange={handleToValue}/>
                   <br/>
                 <button type="submit" onClick={handleSearch}>Search</button>
                </form>

                 { show && <SearchResult value={value} fromValue={fromValue} toValue={toValue} />
                }
           </div> 
           <div className="map"></div>
        </main>
    );
};

export default SearchFrom;

