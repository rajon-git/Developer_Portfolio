import {
    
    express,
    
    mongodb,
    
    node,
    react,
    redux,
    
  } from "./techstack";
  import Capture from "./../Banner/Capture.PNG"
  
  export const ProjectList = [
    {
      heading: "Task Manager",
      img: Capture,
      title: "Task Manager",
      description:
        "User Authentication and authorization, Responsive for all devices, Protected Routes, MERN Crud operations, Data loading for server, It’s allow users to track tasks and deadlines.",
      techStack: [react, express, mongodb, node, redux],
      liveLink: "https://taskmanagerfrontend-rajon.netlify.app/",
      gitLink: "https://github.com/rajon-git/TaskManagerFrontend",
    },
    {
      heading: "E-commerce",
      img: "https://raw.githubusercontent.com/SumatM/Arivu/653364fa661bbda14f9070ea6f65bd6bf0412e32/frontend/public/Screenshot%20(711).png",
      title: "E-commerce",
      description:
        "User Authentication and authorization, Admin Dashboard, Protected Routes, Data loading for server, It's allow a business can process orders, accept payments, manage shipping and logistics, and provide customer service.",
      techStack: [react, express, mongodb, node, redux],
      liveLink: "#",
      gitLink: "https://github.com/rajon-git/Ecommerce-Frontend",
    },
    {
      heading: "Inventory Management",
      img: "https://raw.githubusercontent.com/SumatM/Indian-States/main/UI%20images/Screenshot%20(596).png",
      title: "Inventory Management",
      description:
        "User Authentication and authorization, Admin Dashboard, Protected Routes, Data loading for server, The Inventory-Management System has helped Businesses, reduce their workload and improve their Inventory management processes.",
      techStack: [react, express, mongodb, node, redux],
      liveLink: "#",
      gitLink: "https://github.com/rajon-git/Inventory-Management-Frontend",
    },
    
  ];