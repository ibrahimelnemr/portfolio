import React from 'react'
import profileImg from '../profile.jpg'
function About()
{
return(
<>
<div id="about" class="row">
    <div  class="col-12 border">

        <div class="section-title">
            About
        </div>
        
        <div className="d-flex justify-content-center m-5">
            <img src={profileImg} className="profile-image" alt="logo" />

        </div>
    </div>
</div>
</>
  
);
}

export default About