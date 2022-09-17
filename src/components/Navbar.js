import React from 'react'

import './movies.css'

function Navbar() {
  return (
    <div >
    <nav class="navbar   fixed-top navbar-expand-lg  bg-black" >
  <div class="container-fluid">
    <img  height={50} width={120} src="data:image/png;base64,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" alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup marron">
      <div class="navbar-nav " id='marron'>
        <a class="nav-link active" id='marron' aria-current="page" href="#">Home</a>
        <a class="nav-link" id='marron' href="#">TV Shows</a>
        <a class="nav-link" id='marron' href="#">Movies</a>
        <a class="nav-link" id='marron' href="#">News and Popular</a>
        <a class="nav-link" id='marron' href="#">My List</a>
        <a class="nav-link" id='marron' href="#">Browse By languages</a>

      </div>
    </div>
  </div>
</nav>
    
    </div>
  )
}

export default Navbar