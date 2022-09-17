import React, { useEffect, useState } from 'react'
import './movies.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
function Movies(props) {
  var display;
    const [d,setData]=useState([]);
    const [id,setId]=useState("")
    const originals = "https://api.themoviedb.org/3/discover/tv/?api_key=067027717593d0425ae3188dc4b6ca57&with_network=123"
   useEffect(()=>{
    fetch(props.endPoint)
    .then(Response => Response.json())
    .then(data => setData(data.results))
    .catch((err)=>{
        console.log(err);
    },[])
   
   })
function playTheTrailer(data){
   movieTrailer(data.name|| "")
   .then(function(op){
    const kid= new URLSearchParams(new URL(op).search);
     setId(kid.get("v"))
  
  })
   .catch((err)=>{
    console.log(err);
   })
   display=1;
 

}
const options ={
  height:"600px",
  width:"100%"
}
  return (
    <div >
   <h1>{props.title}</h1>
   {
    <div className="netflixoriginal separate">
    {d.map((i)=>{
         const image= "https://image.tmdb.org/t/p/original"+i.backdrop_path;
         return(
          <div className="netflixoriginal">
          <img className='originalimg' src={image} alt="img" height={200} width={100} onClick={function(){
            playTheTrailer(i);
          }} />

          </div>
         )
    })}
    </div>
   
  }
   {props.title==="NETFLIX TRENDING"?<YouTube videoId="fNwwt25mheo" opts={options} />:""}
    </div>
  )
}

// https://image.tmdb.org/t/p/original
// react-youtube module(to connect react applicatiopn to you tube) and movie-trailer module

export default Movies