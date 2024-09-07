import {
  html,
  css,
  express,
  mongodb,
  node,
  react,
  redux,
  Bootstrap,
  Django
} from "./techstack";
import Capture from "./../Banner/Capture.PNG";
import Inventory from "./../Banner/Inventory.png";
import jk_consultancy from "../Banner/jk_consultancy.png"
import library_mng from "../Banner/library_mng.png"

export const ProjectList = [
  {
    heading: "Task Manager",
    img: Capture,
    description: `
      <ul>
        <li>User Authentication and authorization.</li>
        <li>Responsive for all devices.</li>
        <li>Protected Routes.</li>
        <li>MERN Crud operations.</li>
        <li>Data loading for server.</li>
        <li>It allows users to track tasks and deadlines.</li>
    `,
    techStack: [html, css, react, redux, node, express, mongodb],
    liveLink: "https://taskmanager-rajon.netlify.app/",
    gitLink: "https://github.com/rajon-git/TaskManagerFrontend",
  },
  {
    heading: "Inventory Management",
    img: Inventory,
    description: `
      <ul>
        <li>User Authentication and authorization.</li>
        <li>Admin Dashboard.</li>
        <li>Protected Routes.</li>
        <li>MERN Crud operations.</li>
        <li>Data loading for server.</li>
        <li>The Inventory-Management System has helped Businesses, reduce their workload and improve their Inventory management processes.</li>
    `,
    techStack: [html, css, react, redux, node, express, mongodb],
    liveLink: "https://inventory-management-frontend-pied.vercel.app",
    gitLink: "https://github.com/rajon-git/Inventory-Management-Frontend",
  },
  {
    heading: "JK Consultancy",
    img: jk_consultancy,
    description: `
      <ul>
        <li>It's a company portfolio application</li>
        <li>A user can send a quotation what he needs</li>
        <li>Email sending from nodemailer</li>
        <li>It's a company setup application where nationally and internationally setup company and also provide its othere service like VAT, TAX ETC</li>
    `,
    techStack: [html, css,Bootstrap, react, node, express],
    liveLink: "https://jkconsultancy.co/",
    gitLink: "#",
  },
  {
    heading: "Library Management",
    img: library_mng,
    description: `
      <ul>
        <li>User Registration, Login,Logout</li>
        <li>Admin Dashboard: Provide an interface for administrators to manage books, users, and system settings.</li>
        <li>Admin can Add New Books, Update Book Information, Delete Books</li>
        <li>Check Availability, Borrow Books, Return Books</li>
        <li>Track Loans, Renew Loans</li>
    `,
    techStack: [html, css,Bootstrap, Django],
    liveLink: "https://library-management-o36c.onrender.com/",
    gitLink: "https://github.com/rajon-git/Library-Management",
  },
];
