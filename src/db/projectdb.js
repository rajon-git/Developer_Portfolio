import {
    express,
    mongodb,
    node,
    react,
    redux,
    
  } from "./techstack";
  
  export const ProjectList = [
    {
      heading: "Task Manager",
      img: "https://ibb.co/R0c8p1X",
      title: "Task Manager",
      description:
        "Here you can create,delete,update a task . If any task complete then you can save that as a complete",
      techStack: [react, redux, express, mongodb],
      liveLink: "https://taskmanagerfrontend-rajon.netlify.app/",
      gitLink: "https://github.com/rajon-git/TaskManagerFrontend",
    },
    {
      heading: "E-commerce",
      img: "https://raw.githubusercontent.com/SumatM/Arivu/653364fa661bbda14f9070ea6f65bd6bf0412e32/frontend/public/Screenshot%20(711).png",
      title: "Coursera Clone",
      description:
        "Arivu is an e-learning platform similar to Coursera. It allows students, teachers, and site administrators to engage in live lectures, post lectures, and perform daily activities. The platform includes features for banning suspicious users, ensuring a secure learning environment.",
      techStack: [node, express, mongodb, react, redux],
      liveLink: "https://puny-potato-4945.vercel.app/",
      gitLink: "https://github.com/SumatM/Arivu",
    },
    {
      heading: " Inventory Management",
      img: "https://raw.githubusercontent.com/SumatM/Indian-States/main/UI%20images/Screenshot%20(596).png",
      title: " American Eagle Clone",
      description:
        "Indian States offers a convenient shopping experience with a user-friendly interface and a wide range of products from various brands. Customers can easily find what they are looking for, and can also filter products based on their preferences such as size, color, and price.",
      techStack: [react, redux, express, mongodb],
      liveLink: "https://indian-states.netlify.app/index.html",
      gitLink: "https://github.com/SumatM/Indian-States",
    },
    
  ];