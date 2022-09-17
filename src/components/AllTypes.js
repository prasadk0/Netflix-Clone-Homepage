import React from 'react'
import Movies from './Movies'

function AllTypes() {
  return (
    <div>
    
    <Movies  title={"NETFLIX ORIGINAL"} endPoint={'https://api.themoviedb.org/3/discover/tv/?api_key=067027717593d0425ae3188dc4b6ca57&with_network=123'} />
    <Movies  title={"NETFLIX TRENDING"} endPoint={'https://api.themoviedb.org/3/trending/all/week?api_key=067027717593d0425ae3188dc4b6ca57&with_network=123'} />
    <Movies  title={"NETFLIX ACTION"} endPoint={'https://api.themoviedb.org/3/discover/movie?api_key=067027717593d0425ae3188dc4b6ca57&with_genres=28'} />
    <Movies  title={"NETFLIX HORROrR-MOVIES"} endPoint={'https://api.themoviedb.org/3/discover/movie?api_key=067027717593d0425ae3188dc4b6ca57&with_genres=27'} />
    <Movies  title={"NETFLIX DOCUMENTRIES"} endPoint={'https://api.themoviedb.org/3/discover/movie?api_key=067027717593d0425ae3188dc4b6ca57&with_genres=99'} />
    <Movies  title={"NETFLIX ROMANCE"} endPoint={'https://api.themoviedb.org/3/discover/movie?api_key=067027717593d0425ae3188dc4b6ca57&with_genres=10749'} />

    
    </div>
  )
}

export default AllTypes