import React from 'react'
function Skills() {

return(

<>
<div id="skills" class="row p-5 m-0">
    <div class="col-12">
        <div class="text-center p-2 m-2 display-4">
            Skills
        </div>
    </div>

    <section class="p-5">
      <div class="container">
        
        <div class="row g-4 p-4">

            {/* Card */}

          <div class="col-md">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <div class="h1 mb-3">
                </div>
                <h3 class="card-title mb-3">
                Proficient
                </h3>
               
                <ul>
                    <li>
                    Python
                    </li>
                    <li>
                    JavaScript
                    </li>
                    <li>
                    HTML & CSS
                    </li>
                    <li>
                    React
                    </li>
                    <li>
                    Bootstrap
                    </li>
                    <li>
                    MySQL
                    </li>
                </ul>
                

             
              </div>
            </div>
          </div>
          

          

          {/* Card */}
          <div class="col-md">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <div class="h1 mb-3"></div>
                <h3 class="card-title mb-3">
                Intermediate
                </h3>
                <ul>
                    <li>
                    Flask
                    </li>
                    <li>
                    C++
                    </li>
                    <li>
                    Unity 2D
                    </li>
                    <li>
                    R
                    </li>
                </ul>
                
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

export default Skills
