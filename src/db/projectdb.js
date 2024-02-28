import {
  html,
  css,
  express,
  mongodb,
  node,
  react,
  redux,
} from "./techstack";
import Capture from "./../Banner/Capture.PNG";
import Inventory from "./../Banner/Inventory.png";

export const ProjectList = [
  {
    heading: "Task Manager",
    img: Capture,
    title: "Task Manager",
    description:
      "User Authentication and authorization. Responsive for all devices. Protected Routes. MERN Crud operations. Data loading for server. It’s allow users to track tasks and deadlines.",
    techStack: [html, css, react, redux,node,express,mongodb],
    liveLink: "https://taskmanager-rajon.netlify.app/",
    gitLink: "https://github.com/rajon-git/TaskManagerFrontend",
  },
  {
    heading: "Inventory Management",
    img: Inventory,
    title: "Inventory Management",
    description:
      "User Authentication and authorization. Admin Dashboard. Protected Routes. Data loading for server. The Inventory-Management System has helped Businesses, reduce their workload and improve their Inventory management processes.",
    techStack: [html, css, react, redux,node,express,mongodb],
    liveLink: "https://inventory-management-frontend-pied.vercel.app",
    gitLink: "https://github.com/rajon-git/Inventory-Management-Frontend",
  },
];
