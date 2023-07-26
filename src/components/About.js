import React from 'react'
import profileImg from '../profile.jpg'
function About()
{
return(
<>
<div id="about" class="row p-5 m-0">
    <div class="col-12">
        <div class="text-center p-2 m-2 display-4">
            About
        </div>
    </div>

<div className="row px-0 m-0">

    <div  class="col-sm-6 d-none d-lg-block col-lg-3">

        <div className="d-flex justify-content-center m-5">
            <img src={profileImg} class="img-fluid" Style="border-radius: 15%;" alt="logo" />
        </div>
    </div>

    <div class="col-12 col-lg-9 fs-3 fs-lg-5 d-flex flex-column justify-content-center ">
        <div className="m-5 fw-light">
            <p>
            Hi! I'm Ibrahim and I am currently doing undergraduate studies in Economics with a minor in Computer Science at the American University in Cairo.
            </p>
            
        </div>
    </div>

    </div>
</div>
</>
  
);
}

export default About