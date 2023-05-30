import React from 'react'

function Navbar () {
    return (
        <>
<div class="row container-fluid p-0 m-0">
  <div class="col">
    <nav class="navbar navbar-expand navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" 
              href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
              href="#certifications">Certifications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
              href="#resume">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
              href="#contact">Contact</a>
            </li>
          </ul>
        
    </nav>
  </div>
  
</div>
</>
    );
    
}

export default Navbar