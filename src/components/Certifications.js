import React from 'react'
function Certifications() {

return(

<>
<div id="certifications" class="row py-5 m-0 bg-light">
    <div class="col-12">
        <div class="text-center p-2 m-2 display-4">
            Certifications
        </div>
    </div>

    <section class="p-5">
      <div class="container">
        
        <div class="row py-4">

            {/* Card */}

          <div class="col-md">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <div class="h1 mb-3">
                </div>
                <h3 class="card-title mb-3">
                Udacity Professional Front-End Web Development Certification

                </h3>
                <p class="card-text">
                HTML & CSS Flexbox and Grid
                <br/>
                Creating dynamic page content with JavaScript
                <br/>
                NodeJS & API access
                </p>
                <a href="https://graduation.udacity.com/confirm/PJ42XA24" class="btn btn-primary">View Certification</a>
              </div>
            </div>
          </div>
          </div> {/* End of Row */}

          <div class="row py-4">

          {/* Card */}
          <div class="col-md">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <div class="h1 mb-3"></div>
                <h3 class="card-title mb-3">
                Introduction to Game Development in Unity Certification
                </h3>
                <p class="card-text">
                Setup and interface of Unity Game Engine
                <br/>
                C# for game logic
    
                </p>
                <a href="https://drive.google.com/file/d/1djqL4j2jHbNh9_B0nZlHq3312lJAVokw/view" class="btn btn-primary">View Certification</a>
              </div>
            </div>
          </div>
          </div>  {/* End of Row */}
          {/* Card */}
      </div>
    </section>

    
</div>

  
</>

);

}

export default Certifications
