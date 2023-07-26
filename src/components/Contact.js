import React from 'react';
import github_logo from '../images/github.png'
import github_logo2 from '../images/github2.png'
import linkedin_logo from '../images/linkedin.png'

function Contact() {

return(

<>
<div id="contact" class="row m-0  bg-dark bg-opacity-75 text-light">
    <div class="col-12">
        <div class="text-center p-2 m-2 display-4">
            Get in Touch
        </div>
    </div>
    <div class="col-12">
        <div class="p-2 m-2 lead fs-3">
            
        </div>
    </div>
    <div class="col-6 text-center">
        <img class="img-fluid logo" src={linkedin_logo} alt="" />
    </div>
    <div class="col-6 text-center">
        <img class="img-fluid logo" src={github_logo2} alt="" />
    </div>

    
</div>


</>

);

}

export default Contact
