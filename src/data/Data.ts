import ISectionCard from "../interfaces/ISectionCard";

const ProjectCards: ISectionCard[] = [
  {
    title: "PropertyFinder Database Query Tool",
    text: "Web scraping, database creation and data access of a real estate website with BeautifulSoup, MySQL and Flask.",
    link: "https://github.com/ibrahimelnemr/property-finder-db",
  },
  {
    title: "Flutter Ecommerce App Demo",
    text: "Built a full-stack Flutter application as a demo for an ecommerce app. Used Node.js, TypeScript and MongoDB on the backend. Tested API routes using postman and documented API endpoints. Created app prototype using Figma and implemented design with Flutter. Deployed Node.js backend to Elastic Beanstalk",
    link: "https://github.com/ibrahimelnemr/flutter-ecommerce-app-demo",
  },
  {
    title: "Arabize - Arabic Transliterator",
    text: "Arabic transliteration web tool for transliteration of arabic text into latin characters with options for diacritics and non-diacritics.",
    link: "https://github.com/ibrahimelnemr/arabic-transliterator",
  },
  {
    title: "iOS Alarm Clock App",
    text: "Modified version of default iOS alarm clock app including added features such as repeat interval alarms.",
    link: "https://github.com/ibrahimelnemr/ios-alarm-clock-app",
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
    title: "Udacity iOS Developer Nanodegree",
    bulletPoints: [
      "Created a CLI based Swift application for recording tasks",
      "Implemented a SwiftUI-based application to countdown events",
      "Learned SwiftData framework by creating an application to manage recipes",
      "Learned API access and user authentication by building a travel journal app"
    ],
    link: "https://www.udacity.com/certificate/e/3bf5fb20-6076-11ee-8e55-c77aaa96a8c4",
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
  "Hi! I'm Ibrahim and I a fresh graduate from the American University in Cairo. I am passionate about full-stack development and currently looking for opportunities in the industry.";

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
