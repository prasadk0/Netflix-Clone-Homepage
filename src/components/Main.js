// import React from 'react'
import React, { useEffect, useState } from 'react'
import './main.css'

function Main() {
  const [d,setData]=useState([]);
  const originals = "https://api.themoviedb.org/3/discover/tv/?api_key=067027717593d0425ae3188dc4b6ca57&with_network=123"
 useEffect(()=>{
  fetch("https://api.themoviedb.org/3/trending/all/week?api_key=067027717593d0425ae3188dc4b6ca57&with_network=123")
  .then(Response => Response.json())
  .then(data => setData(data.results[5]))
  .catch((err)=>{
      console.log(err);
  },[])
 
 })

  return (
    <div>
    <img height={660} width={1517} src="https://image.tmdb.org/t/p/original/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg" alt="" />
    <div className="abs">
    <h2>{d.title}</h2>
    <p>{d.overview}</p>
    <p><button>PLAY</button><button>DOWNLOAD</button></p>
    </div>
    </div>
  )
}

export default Main