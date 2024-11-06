import ISectionCard from "../interfaces/ISectionCard";

const ProjectCards: ISectionCard[] = [
  {
    title: "PropertyFinder Database Query Tool",
    text: "Web scraping, database creation and data access of a real estate website with BeautifulSoup, MySQL and Flask.",
    link: "https://github.com/ibrahimelnemr/property-finder-db",
  },
  {
    title: "Syllabus Analysis Query Tool",
    text: "A demo database query tool for course syllabi and the skills associated each course, as a tool intended for undergraduate students. Created with Angular, Postgresql, and Express.",
    link: "https://github.com/ibrahimelnemr/syllabus-analysis-query-tool",
  },
];

const CertificationCards: ISectionCard[] = [
  {
    title: "Udacity Front-End Web Development Certification",
    bulletPoints: [
      "Created blog website with HTML and CSS Flexbox & Grid Layout",
      "Used JavaScript for dynamically creating UI for a landing page",
      "Utilized NodeJS for retrieving data from an external weather API and displaying on a weather journal app.",
    ],
    link: "https://graduation.udacity.com/confirm/PJ42XA24",
  },
  {
    title: "Meta Django Web Framework Certification",
    bulletPoints: [
      "Implement the HTTP request response cycle by creating views, routes and templates.",
      "Used JavaScript for dynamically creating UI for a landing page",
      "Describe and build a data model to create database tables and dynamic web forms.",
    ],
    link: "https://www.coursera.org/account/accomplishments/certificate/6RXT3N82AMWS",
  },
  {
    title: "Udacity Full-Stack JavaScript Certification",
    bulletPoints: [
      "Built an image processing API using Node, Typescript, and Express, and used Jasmine for unit testing.",
      "Developed a storefront backend using Express and Postgresql with JWT authentication and authorization.",
      "Created a single page Angular ecommerce storefront app.",
      "Deployed a full stack app with AWS Elastic Beanstalk CLI, RDS, S3, and CircleCI.",
    ],
    link: "https://graduation.udacity.com/confirm/e/f5e9b23e-094a-11ee-9036-0f71d7d20cd8",
  },
];

const SkillsImagesUrls = [
  "/images/postgresql_logo.png",
  "/images/angular_logo.png",
  "/images/express.png",
  "/images/node2.png",
  "/images/django_logo3.png",
  "/images/sql.png",
  "/images/react.png",
  "/images/bootstrap.png",
  "/images/python.png",
  "/images/javascript.png",
  "/images/typescript2.png",
  "/images/cpp2.png",
];

const GithubLogoUrl = "/images/github2.png";
const LinkedInLogoUrl = "/images/linkedin.png";

const ProfileImageUrl = "/images/profile.jpg";

const AboutText =
  "Hi! I'm Ibrahim and I am currently doing undergraduate studies at the American University in Cairo. I am passionate about full-stack development and currently looking for opportunities in the industry.";

const CornerText = "Ibrahim El Nemr | Portfolio";

const LinkedInUrl = "https://www.linkedin.com/in/ibrahimelnemr/";

const GithubUrl = "https://github.com/ibrahimelnemr/";

const ContactText =
  "I am currently searching for opportunities in full-stack or back-end development. If you'd like to get in touch, feel free to connect on Github or Linkedin!";

const ContactEmail = "ibrahimelnemr@aucegypt.edu";

export {
  SkillsImagesUrls,
  ProjectCards,
  CertificationCards,
  AboutText,
  ProfileImageUrl,
  GithubLogoUrl,
  LinkedInLogoUrl,
  LinkedInUrl,
  CornerText,
  GithubUrl,
  ContactText,
  ContactEmail,
};
