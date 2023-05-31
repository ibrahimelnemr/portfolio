import React from 'react'
import profileImg from '../profile.jpg'
function About()
{
return(
<>
<div id="about" class="row p-0 m-0 border">
    <div class="col-12">
        <div class="section-title text-center p-2 m-2 display-4">
            About
        </div>
    </div>
    
    <div  class="col-6">

        <div className="d-flex justify-content-center m-5">
    
            <img src={profileImg} className="profile-image" alt="logo" />
        </div>
    </div>

    <div class="col-6">
        <div className="d-flex justify-content-center m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    </div>
</div>
</>
  
);
}

export default About