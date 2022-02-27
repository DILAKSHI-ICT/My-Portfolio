// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ff9b11, #7b1be4, #38c76d, #ff9b11, #d417a9, #ff4f4f, #ecf0f1",
  firstName: "Dilakshi",
  middleName: "",
  lastName: "Abeysinghe",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/DILAKSHI-ICT",
    },
   
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dilakshi-kaumadi-585b651b0",
    },
    
    
    
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Profile.jpeg"),
  imageSize: 280,
  message:
    "My name is Dilakshi Abeysinghe. I’m an undergraduate of Department of ICT Faculty of Humanities and Social Sciences of University of Sri Jayewardanepura at with a degree in Software Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1oWPrFnrUm3r4C-7KnZvVDCyHhli0ZpHq/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "DILAKSHI-ICT", 
  reposLength: 8,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
"Activities and societies: Games Captain of the School Head Board(2016-2017), President of the School Chess Club (2016-2017), Band Leader of the School Senior Western Band (2015-2016), Leader of the School Orchestra (2015-2016), Member of the School Senior Drama and Ballet Society (2010-2012), Member of the School Science and Innovation Society (2011-2012), Member of the School Debate Team (2011-2012), Member of the School Media Unit (2009-2010), Member of the School Sinhala Literary Association (2009-2014)",
  images: [
    { 
      img: require("../editable-stuff/image-0-02-06-7eaec8b33414fc993e2f3d3d6e7f8cec2d97d9879cd186d401f16732064ff583-V.jpg"), 
      label: "Band Leader of the School Senior Western Band (2015-2016)", 
      
    },
    { 
      img: require("../editable-stuff/new.jpg"), 
      label: "Games Captain of the School Head Board(2016-2017)", 
      
    },
    { 
      img: require("../editable-stuff/Amour.jpg"), 
      label: "AMOUR' 18", 
      
    },
  ],
  imageSize: {
    width:"50",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "SQL", value: 75 },
    { name: "HTML/CSS", value: 85 },
    { name: "Java", value: 70 },
    { name: "React Native", value: 65 },
    { name: "JavaScript", value: 65 },
    { name: "React", value: 55 },
    { name: "C/C++", value: 50 },
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for part-time Business Analyzing or Software Engenieering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "cdkabeysinghe@gmail.com",
};

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'Undergraduate in BSc.(Hons) in Information Technology University of Sri Jayewardenepura ',// Here Add Company Name
      companylogo: require('../assets/img/uni.jpeg'),
      date: 'March 2020 – Present',
    },
    {
      role: 'G.C.E. Advanced Level - Sri Sumangala Balika Maha Vidyalaya, Panadura,',// Here Add Company Name
      companylogo: require('../assets/img/scl.png'),
      date: 'Jan 2004 – Aug 2018',
    },
    
  ]
}
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Trainee at Peoples Bank - Panadura',// Here Add Company Name
      
      companylogo: require('../editable-stuff/pb.jpg'),
      date: 'January 2019 – March 2020',
    
    },
    
  ]
}


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, education };
