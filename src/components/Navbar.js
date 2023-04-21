import React from 'react'

function Navbar () {
    return (
        <>
<div class="row container-fluid p-0 m-0">
  <div class="col">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" 
              href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
              href="#">Certifications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
              href="#">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
              href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
</div>
</>
    );
    
}

export default Navbar