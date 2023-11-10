import React from 'react'
import profileImg from '../profile.jpg'
function About()
{
return(
<>
<div class="row bg-light p-5 m-0">

    <div className="col-12 pb-5">
        <div class="text-center display-6">
            About
        </div>
    </div>
    
    <div  class="col-12 d-flex my-auto col-lg-3 d-lg-block d-none">
        <img src={profileImg} class="img-fluid" Style="border-radius: 15%;" alt="logo" />
    </div>

    <div class="col-12 d-flex my-auto col-lg-9 fs-4 d-flex text-center">
        <div className="m-5 fw-light">
            
                Hi! I'm Ibrahim and I am currently doing undergraduate studies at the American University in Cairo. I am passionate about full-stack development and currently looking for opportunities in the industry. 
            
        </div>
    </div>
        
</div>

</>
  
);
}

export default About