import React from 'react'
import profileImg from '../profile.jpg'
function About()
{
return(
<>
<div id="about" class="row p-0 m-0">
    <div class="col-12">
        <div class="text-center p-2 m-2 display-4">
            About
        </div>
    </div>
    <div className="row p-0 m-0">


    <div  class="col-6">

        <div className="d-flex justify-content-center m-5">
    
            <img src={profileImg} Style="height: 40vh; max-width: auto; border-radius: 15%;" alt="logo" />
        </div>
    </div>

    <div class="col-6">
        <div className="d-flex justify-content-center m-5 fs-4 fw-light">
            Hi! I'm Ibrahim and I am currently doing undergraduate studies in Economics with a minor in Computer Science at the American University in Cairo.

            I am passionate about computer science, driven to take on new projects and eager to learn. Currently looking for an opportunity in the computer science industry to grow my knowledge of emerging frameworks and technologies.
        </div>
    </div>

    </div>
</div>
</>
  
);
}

export default About