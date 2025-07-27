// Skills section logo..
import bootstrapLogo from './tech_logo/bootstrap.png';
import cLogo from './tech_logo/c.png';
import CppLogo from './tech_logo/cpp.png'
import cssLogo from './tech_logo/css.png';
import expressLogo from './tech_logo/express.png';
import figmaLogo from './tech_logo/figma.png';
import firebaseLogo from './tech_logo/firebase.png';
import gitLogo from './tech_logo/git.png';
import githubLogo from './tech_logo/github.png';
import htmlLogo from './tech_logo/html.png';
import javaLogo from './tech_logo/java.png';
import javascriptLogo from './tech_logo/javascript.png';
import mongodbLogo from './tech_logo/mongodb.png';
import mysqlLogo from './tech_logo/mysql.png';
import netlifyLogo from './tech_logo/netlify.png';
import nodejsLogo from './tech_logo/nodejs.png';
import postmanLogo from './tech_logo/postman.png';
import pythonLogo from './tech_logo/python.png';
import reactjsLogo from './tech_logo/reactjs.png';
import reduxLogo from './tech_logo/redux.png';
import tailwindLogo from './tech_logo/tailwindcss.png';
import vercelLogo from './tech_logo/vercel.png';
import vscodeLogo from './tech_logo/vscode.png';

// education logo..
// import educationLogo from './educ_logo/eduction.png';
import educationLogo from './educ_logo/cap.jpg'

// profile picture 
import profilePic from './profile_pic/user_icon.png';
// import profilePic from './profile_pic/photo1.png';

// project picture 
import blogAppPic from './project_pic/BlogApp.png';
import chatAppPic from './project_pic/ChatApp.png';
import weatherAppPic from './project_pic/WeatherApp.png';
import imageGalleryPic from './project_pic/ImageGallery.png';

// Coding Profie Pic..
import leetCodePic from './platform_pic/LeetCode.png';
import codechefPic from './platform_pic/codechef.jpg';
import gfgPic from './platform_pic/gfg.jpeg'

export const assets = {
    bootstrapLogo ,
    cLogo,
    CppLogo,
    cssLogo,
    expressLogo,
    figmaLogo,
    firebaseLogo,
    gitLogo,
    githubLogo,
    htmlLogo,
    javaLogo,
    javascriptLogo,
    mongodbLogo,
    mysqlLogo,
    netlifyLogo,
    nodejsLogo,
    postmanLogo,
    pythonLogo,
    reactjsLogo,
    reduxLogo,
    tailwindLogo,
    vercelLogo,
    vscodeLogo,
    educationLogo,
    profilePic,
}

// skills sections
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Tailwind CSS', logo: tailwindLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },,
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: CppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const ProjectsInfo = [
  {
    id: 0,
    title : "AI Powered Blog App" ,
    description : "Developed an Admin Dashboard to manage blog posts, moderate comments, and track user activity." ,
    image : blogAppPic,
    tags : ["React JS" , "Node JS" , "Express JS" , "MongoDB" , "Gemini AI"],
    github : "https://github.com/guptakumarankit/Blog-App",
    livePage : "https://blog-app-lake-sigma.vercel.app/",
  },
  {
    id: 1,
    title : "Real Time Chat-APP" ,
    description : "Built a real-time chat app with one-to-one messaging, supporting text and image sharing." ,
    image : chatAppPic,
    tags : ["React JS" , "Node JS" , "Express JS" , "MongoDB" , "Socket.Io"],
    github : "https://github.com/guptakumarankit/Chat-App",
    livePage : "https://chat-app-frontend-sandy-sigma.vercel.app/login",
  },
  {
    id: 2,
    title : "Image-Gallery" ,
    description : "Built a real-time chat app with one-to-one messaging, supporting text and image sharing." ,
    image : imageGalleryPic,
    tags : ["HTML" , "CSS" , "JavaScript" , "Unplash API"],
    github : "https://github.com/guptakumarankit/Image-Gallery-Vithika-",
    livePage : "https://guptakumarankit.github.io/Image-Gallery-Vithika-/",
  },
  {
    id: 3,
    title : "Weather-APP" ,
    description : "Developed an Admin Dashboard to manage blog posts, moderate comments, and track user activity." ,
    image : weatherAppPic,
    tags : ["HTML" , "CSS" , "JavaScript" , "API"],
    github : "https://github.com/guptakumarankit/Weather-App",
    livePage : "https://guptakumarankit.github.io/Weather-App/",
  },
]

export const codingPlatform = [
  {
    id : 0 ,
    Name : "LeetCode",
    image : leetCodePic ,
    link : "https://leetcode.com/problemset/",
  },
  {
    id : 1 ,
    Name : "GFG",
    image : gfgPic ,
    link : "https://leetcode.com/problemset/",
  },
  {
    id : 2 ,
    Name : "CodeChef",
    image : codechefPic ,
    link : "https://leetcode.com/problemset/",
  }
] 

export const education = [
  {
    id : 0 ,
    logo : educationLogo,
    course : "Secondary School Board - (10th)",
    name : "High School" ,
    percentage : "78.6%" ,
    section : "2017 - 2018" ,
    subjects : ["Math" , "Science" , "Hindi" , "English" , "Social Science"],
  },
  {
    id : 1 ,
    logo : educationLogo,
    course : "Higher Secondary School Board - (12th)",
    name : "Shri Shankar College" ,
    percentage : "81.8%" ,
    section : "2018 - 2020",
    subjects : ["Physics" , "Chemistry" , "Math" , "English"],
  },
  {
    id : 2,
    logo : educationLogo,
    course : "B.Tech in Computer Science Engineering",
    name : "Budge Budge Institute Of Technology",
    percentage : "8.71 CGPA" ,
    section : "2021 - 2025",
    subjects : ["C" , "C++" , "JAVA" , "OOPS" , "DBMS" , "OS" , "NETWORKING" ],
  },
]