import React from 'react'
import Carousel2 from './Carousel2';
import Card from './Card';
function Projects() {

return(

<>
<div id="projects" class="row p-5 m-0 bg-light">
    <div class="col-12">
        <div class="text-center p-2 m-2 display-4">
            Projects
        </div>
    </div>
    

    <div className="col-12 ">
        <div class="p-2 m-2 h1 fw-light">
            Linear Algebra Website
        </div>
        <div class="p-2 m-2 fs-5 fw-light">
        Created website for displaying course materials for Linear Algebra professor at AUC
        <br/>
        Added frontend styling with Bootstrap 5
        <br/>
        Used react-router-dom for routing with hash router
        </div>
        <div class="p-2 m-2 fs-5 fw-light">
            <a href="https://github.com/iwelnemr/linear-algebra-website" target="_blank">
                View on Github
            </a>
        </div>
    </div>

    <div className="col-12 ">
        <div class="p-2 m-2 h1 fw-light">
            PropertyFinder Real Estate MySQL Database Project

        </div>
        <div class="p-2 m-2 fs-5 fw-light">
        
        Implemented python web scraping scripts (BeautifulSoup) to retrieve data from real estate website propertyfinder.eg with jupyter notebook
        <br/>
        Utilized pandas to clean and sort data into dataframes
        <br/>
        Created local SQL database using SQL workbench and uploaded to remotely hosted server using dump
        <br/>
        Implemented GUI web app using Flask and pymysql to connect to remote database and display aggregated data and custom queries
        <br/>
        </div>
        <div class="p-2 m-2 fs-5 fw-light">
            <a href="https://github.com/iwelnemr/property-finder-db" target="_blank">
                View on Github
            </a>
        </div>
    </div>

    <div className="col-12 ">
        <div class="p-2 m-2 h1 fw-light">
        SwiftUI Healthcare Front-End iOS App
        </div>
        <div class="p-2 m-2 fs-5 fw-light">
        Identified app requirements, and created UML diagram of main components

        <br/>
        Used agile methodology and scrum to organize workflow between team members

        <br/>
        Created app prototype using Figma for all UI components
        <br/>
        Implemented app frontend using SwiftUI library and deployed to iOS
        </div>
        <div class="p-2 m-2 fs-5 fw-light">
            <a href="https://github.com/iwelnemr/wecare-swiftui-app" target="_blank">
                View on Github
            </a>
        </div>
    </div>


    <div className="col-12 ">
        <div class="p-2 m-2 h1 fw-light">
            R Stock Beta Calculator
        </div>
        <div class="p-2 m-2 fs-5 fw-light">
        Implemented R script in Jupyter notebook to analyze historical stock data
        <br/>
        Computed beta coefficients using regression analysis
        <br/>
        Conducted hypothesis testing with t-value at 95% confidence level
        </div>
        <div class="p-2 m-2 fs-5 fw-light">
            <a href="https://github.com/iwelnemr/r-stock-beta-calculator" target="_blank">
                View on Github
            </a>
        </div>
    </div>
    
    {/* <div  class="col-12">

        <div className="d-flex justify-content-center">
            <div className="w-75 m-5">
                <Carousel2/>
            </div>
        </div>
    </div> */}
</div>
</>

);

}

export default Projects
