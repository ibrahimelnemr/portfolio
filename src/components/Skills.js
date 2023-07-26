import React from 'react'
function Skills() {

return(

<>
<div id="skills" class="row py-5 m-0">
    <div class="col-12">
        <div class="text-center p-2 m-2 display-4">
            Skills
        </div>
    </div>

    <section class="p-5">
      <div class="container">
        
        <div class="row py-4">

            {/* Card */}

          <div class="col-md pb-4">
            <div class="card bg-light text-dark fs-4" Style="min-height: 19em;">
              <div class="card-body">
                <div class="h1 mb-3">
                </div>
                <h3 class="card-title mb-3">
                Proficient
                </h3>
                <ul class="list-group">
                    <li class="list-group-item">Python</li>
                    <li class="list-group-item">JavaScript</li>
                    <li class="list-group-item">HTML & CSS</li>
                    <li class="list-group-item">MySQL</li>
                    <li class="list-group-item">React</li>
                    <li class="list-group-item">Bootstrap</li>
                </ul>
               
                

                
                

             
              </div>
            </div>
          </div>
          

          

          {/* Card */}
          <div class="col-md">
            <div class="card bg-light text-dark fs-4" Style="min-height: 19em;">
              <div class="card-body">
                <div class="h1 mb-3"></div>
                <h3 class="card-title mb-3">
                Intermediate
                </h3>
                <ul class="list-group">
                    <li class="list-group-item">Flask</li>
                    <li class="list-group-item">C++</li>
                    <li class="list-group-item">Unity 2D</li>
                    <li class="list-group-item">R</li>
    
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
