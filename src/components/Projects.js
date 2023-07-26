import React from 'react'
import Carousel2 from './Carousel2';
import Card from './Card';
function Projects() {

return(

<>
<div id="projects" class="row py-5 m-0 bg-light">
    <div class="col-12">
        <div class="text-center p-2 m-2 display-4">
            Projects
        </div>
    </div>

    <section class="py-5">
      <div class="container">
        
        <div class="row p-4">

            {/* Card */}

          <div class="col-md">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <div class="h1 mb-3">
                </div>
                <h3 class="card-title mb-3">
                    Linear Algebra Website
                </h3>
                <p class="card-text">
                Created website for displaying course materials for Linear Algebra professor with Bootstrap 5 and React.
                </p>
                <a href="https://github.com/iwelnemr/linear-algebra-website" class="btn btn-primary">View on Github</a>
              </div>
            </div>
          </div>
          </div> {/* End of Row */}

          <div class="row g-4 p-4">

          {/* Card */}
          <div class="col-md">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <div class="h1 mb-3"></div>
                <h3 class="card-title mb-3">
                PropertyFinder Real Estate Database
                </h3>
                <p class="card-text">
                Web scraping, database creation and data access of a real estate website with BeautifulSoup, MySQL and Flask.
                
                </p>
                <a href="https://github.com/iwelnemr/property-finder-db" class="btn btn-primary">View on Github</a>
              </div>
            </div>
          </div>
          </div>  {/* End of Row */}
          {/* Card */}
          
          <div class="row g-4 p-4">
        
        {/* Card */}
          <div class="col-md">
            <div class="card bg-light text-dark">
              <div class="card-body">
                <div class="h1 mb-3">
                </div>
                <h3 class="card-title mb-3">
                SwiftUI Front-End iOS Prototype
                </h3>
                <p class="card-text">
                Created Front-End app prototype for iOS healthcare app using Figma and SwiftUI.
                </p>
                <a href="https://github.com/iwelnemr/wecare-swiftui-app" class="btn btn-primary">View on Github</a>
              </div>
            </div>
          </div> {/* End of Row */}
          

        
      </div>
      </div>
    </section>

    
</div>
</>

);

}

export default Projects
