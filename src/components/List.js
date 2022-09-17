import React, { useEffect, useState } from 'react'


    

function List() {
    const  [d,setD]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(data => setD(data))
        .catch((err)=>{
            console.log(err);
        },[])
    })
  return (
     <div className='netflixoriginal'>
     {console.log(d)}
       <ul>
      { d.map((item)=>{
        return(
           
            <li key={item.id}>
            {item.title}</li>
           
        )
    })}</ul>
      

    </div>
            

        )
   
  
}

export default List