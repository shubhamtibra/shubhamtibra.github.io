/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "shubhamtibra",
  title: "Hi all, I'm Subham Tibra",
  subTitle: emoji(
    "A passionate Full Stack Software Developer and Machine learning enthusiast 🚀 having experience building Web applications with / Reactjs / Nodejs and Python",
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SgeK3DRtiBlGa5EY-Yt22_L_kF-IUUiI/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shubhamtibra",
  linkedin: "https://www.linkedin.com/in/shubham-tibra-7b85a5106/",
  gmail: "shubh.tibra@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Polyglot fullstack developer | Interested in learning new technologies",
  skills: [
    emoji(
      "⚡ Develop highly scalable backend system | DB Schema design | Query optimisation | Scalability",
    ),
    emoji(
      "⚡ Gather customer requirements | Design the system | Implement | Rollout",
    ),
    emoji("⚡ Experience with AWS | Github Workflows"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "MySQL/Postgres/MongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology, Kharagpur",
      logo: require("./assets/images/iitkgp.jpg"),
      subHeader: "Master of Science in Mathematics and Computer Science",
      duration: "2014 - 2019",
      desc: "Graduated with Honors with 8.0 CGPA",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend with Nodejs/Python",
      progressPercentage: "100%",
    },
    {
      Stack: "Machine learning",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "SAP",
      companylogo: require("./assets/images/icons8-sap-logo-144.png"),
      date: "Nov 2021 – Jan 2024",
      desc: "Tech lead for Lifecycle Manager Project",
      descBullets: [
        "Developed a robust system to queue and execute customer processes, manage incoming success or error notifications, and implement resumption capabilities, eliminating the need for process restarts.",
        "Prevents corruption of customer data, streamlines the process of customer onboarding to going live.",
      ],
    },
    {
      role: "Fullstack Developer and Machine learning engineer",
      company: "Kommunicate",
      companylogo: require("./assets/images/kommunicate.png"),
      date: "Aug 2020 – Nov 2021",
      desc: "Engineered multiple projects from scratch",
      descBullets: [
        "Engineered a Python-based chatbot intent recommendation system, effectively converting user prompts into actionable intents.",
        "Preprocessed data, create sentence embeddings, clustered the embeddings and optimised the hyperparameters.",
        "Used MySQL explain statement to optimise the query from 1m to 20sec.",
        "Developed context-aware feature for the chatbot so it remembers the previous user input and responds based on that.",
        "Single-handedly built the most user requested feature Whatsapp integration. Used MongoDB, Express.js and \
        Caching. RabbitMQ for communication between microservices and React.js for UI.",
        "Built Shopify app to add chatbot to customer's website. Created the Oauth flow, store the access token and map \
        shopify customer to corresponding account in our system.",
        "Rewrote our entire payment page in React.js with new pricing structure under strict deadline of one week",
      ],
    },
    {
      role: "Deep Learning Intern",
      company: "Liv.ai (Acquired by Flipkart)",
      companylogo: require("./assets/images/flipkart.png"),
      date: "Apr 2018 – July 2018",
      desc: "Trained and deployed deep learning language models in Tensorflow.",

      descBullets: [
        "Optimized data processing by implementing batch reading of 1TB text data and employing subword tokenization, \
      resulting in an 11% accuracy improvement.",
        "Designed custom deep learning model to predict conversation between two individuals.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "My Open source contribution",
  projects: [
    {
      image: require("./assets/images/sympy.png"),
      projectName: "GSoC 2016 | Sympy | Holonomic functions",
      projectDesc: "Solve differential equations in Python",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://docs.sympy.org/latest/modules/holonomic/about.html",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Employee of the quarter",
      subtitle: "Employee of the quarter three times in a row.",
      // image: require("./assets/images/codeInLogo.webp"),
      // imageAlt: "Google Code-In Logo",
      // footerLink: [
      //   {
      //     name: "Certification",
      //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
      //   },
      //   {
      //     name: "Award Letter",
      //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
      //   },
      //   {
      //     name: "Google Code-in Blog",
      //     url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
      //   }
      //]
    },
    {
      title: "JEE Advanced",
      subtitle: "General rank of 2065 among 1.5 million students.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      // imageAlt: "Google Assistant Action Logo",
      // footerLink: [
      //   {
      //     name: "View Google Assistant Action",
      //     url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
      //   }
      // ]
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9462251581",
  email_address: "shubh.tibra@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
