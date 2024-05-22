import ISectionCard from "../Interfaces/ISectionCard"

const ProjectCards: ISectionCard[] = [
    {
        title: "PropertyFinder Database Query Tool",
        text: "Web scraping, database creation and data access of a real estate website with BeautifulSoup, MySQL and Flask.",
        link: "https://github.com/ibrahimelnemr/property-finder-db"
    },
    {
        title: "Syllabus Analysis Query Tool",
        text: "A demo database query tool for course syllabi and the skills associated each course, as a tool intended for undergraduate students. Created with Angular, Postgresql, and Express.",
        link: "https://github.com/ibrahimelnemr/syllabus-analysis-query-tool"
    }
];

const CertificationCards: ISectionCard[] = [
    {
        title: "Udacity Front-End Web Development Certification",
        bulletPoints: [
            "Created blog website with HTML and CSS Flexbox & Grid Layout",
            "Used JavaScript for dynamically creating UI for a landing page",
            "Utilized NodeJS for retrieving data from an external weather API and displaying on a weather journal app.",
          ],
        link: "https://graduation.udacity.com/confirm/PJ42XA24"
    },
    {
        title: "Meta Django Web Framework Certification",
        bulletPoints: [
            "Implement the HTTP request response cycle by creating views, routes and templates.",
            "Used JavaScript for dynamically creating UI for a landing page",
            "Describe and build a data model to create database tables and dynamic web forms.",
          ],
        link: "https://www.coursera.org/account/accomplishments/certificate/6RXT3N82AMWS"
    },
    {
        title: "Udacity Full-Stack JavaScript Certification",
        bulletPoints: [
            "Built an image processing API using Node, Typescript, and Express, and used Jasmine for unit testing.",
            "Developed a storefront backend using Express and Postgresql with JWT authentication and authorization.",
            "Created a single page Angular ecommerce storefront app.",
            "Deployed a full stack app with AWS Elastic Beanstalk CLI, RDS, S3, and CircleCI."
          ],
        link: "https://graduation.udacity.com/confirm/e/f5e9b23e-094a-11ee-9036-0f71d7d20cd8"
    }
]


export {
    ProjectCards,
    CertificationCards
}