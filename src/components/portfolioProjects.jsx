import linkedIn from "./img/linkedInClone.png";
import eStore from "./img/ecommWeb.png";
import coursesPortal from "./img/batechnosCourses.png";

const portfolioProjects = [
  {
    projectName: "Linkedin Clone",
    projectDesc:
      "The core objective of this project is to handle multiple user data. Every user creates posts and only deletes their post. View other users' posts, authentication, and update your data like about info also included.",
    projectPurpose: "Multi-User Web Application",
    projectFeatures: [
      "ReactJs, Firebase, Reducer",
      "Google, Email and Pass Auth",
      "Dark and Light Theme",
      "Create and like Post",
      "CRUD Operations with Firebase",
    ],
    projectFeaturesWill: [
      "Mobile Friendly",
      "Comments on Post",
      "Add Video Post",
    ],
    projectImg: linkedIn,
    projectVisit: "https://linkedin-clone-web.netlify.app/",
  },
  {
    projectName: "Courses Portal",
    projectDesc:
      "The core objective of this project is to handle multiple user data. Students add their skills, enroll in courses. This is just a demo project as I deliver a courses portal project to the client.",
    projectPurpose: "Portal Web Application",
    projectFeatures: [
      "ReactJs, Firebase, Reducer",
      "Email and Pass Auth",
      "Mobile Friendly",
      "Add Skills, Add about",
      "CRUD Operations with Firebase",
    ],
    projectFeaturesWill: [
      "Enroll in Course",
      "Dark Theme",
      "Updated Course Content",
    ],
    projectImg: coursesPortal,
    projectVisit: "https://courses-from-me.netlify.app/",
  },
  {
    projectName: "Organic E-Store",
    projectDesc:
      "The core objective of this project is to develop an e-commerce website application. This project covers a lot of functionality like authentication, single blog, and product open. Add item to a wishlist, add to cart, and card animation on checkout.",
    projectPurpose: "E-Commerce Web Application",
    projectFeatures: [
      "ReactJs, Firebase, Reducer",
      "Google, Email and Pass Auth",
      "Mobile Friendly",
      "Add to Cart and Wishlist, Checkout Card Animation",
      "CRUD Operations with Firebase",
    ],
    projectFeaturesWill: [
     
    ],
    projectImg: eStore,
    projectVisit: "https://skillsme-81986.web.app/",
  },
];

export default portfolioProjects;
