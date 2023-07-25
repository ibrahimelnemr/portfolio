import React from 'react'

function Navbar () {
    return (
        <>
<div class="row p-0 m-0">
  
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <a href="#" className="navbar-brand">
    Ibrahim El Nemr | Portfolio
    </a>

    <button 
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse" data-bs-target="#navmenu"
    >
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navmenu">
      <ul className="navbar-nav ms-auto">

        {/* About */}
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>

        {/* Projects */}
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>

        {/* Skills */}
        <li className="nav-item">
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        
        {/* Certifications */}
        <li className="nav-item">
          <a href="#certifications" className="nav-link">
            Certifications
          </a>
        </li>

      </ul>
    </div>
  </div>
  

</nav>
  
  
</div>
</>
    );
    
}

export default Navbar