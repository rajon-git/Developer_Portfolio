import {
  html,
  css,
  express,
  mongodb,
  node,
  react,
  redux,
  Bootstrap,
  Django,
  DjangoRest,
  Psql
} from "./techstack";
import Inventory from "./../Banner/Inventory.png";
import jk_consultancy from "../Banner/jk_consultancy.png"
import library_mng from "../Banner/library_mng.png"
import ecom from "../Banner/MyShop.png"
import house from "../Banner/houseHold.png"
import DExpress from "../Banner/dExpress.JPG"

export const ProjectList = [

  {
    heading: "Dhaka Express Global",
    img: DExpress,
    description: `
        Allows users to create accounts, log in, and manage profiles.
        Admin Dashboard.
        Protected Routes.
        Data loading for server.
        The System has helped Businesses, Exceptional Quality, Seamless Shopping Experience, Secure Checkout, Fast Shipping & Easy Returns.
    `,
    techStack: [html, css, Bootstrap, Django, Psql],
    liveLink: "https://dhakaexpressbd.net/",
    gitLink: "#",
  },

  {
    heading: "MyShop Manage",
    img: ecom,
    description: `
        Allows users to create accounts, log in, and manage profiles.
        Admin Dashboard.
        Protected Routes.
        Data loading for server.
        The System has helped Businesses, Exceptional Quality, Seamless Shopping Experience, Secure Checkout, Fast Shipping & Easy Returns.
    `,
    techStack: [html, css, react, redux, node, express, mongodb],
    liveLink: "https://dynamic-buttercream-91f103.netlify.app/",
    gitLink: "https://github.com/rajon-git/MyShop_Mern_Front_User",
  },
  {
    heading: "HouseHold Service",
    img: house,
    description: `Allows users to create accounts, log in, and manage profiles. Admin Dashboard. Protected Routes. Users can search for specific services, compare providers, and book appointments based on availability. Enables customers to provide feedback and view reviews of service providers. 
    `.trim().replace(/\s+/g, " "),
    techStack: [html, css, react, redux, DjangoRest],
    liveLink: "https://householdfront.onrender.com/",
    gitLink: "https://github.com/rajon-git/HouseholdServiceAPI",
  },
  
  {
    heading: "Inventory Management",
    img: Inventory,
    description: `
        Allows users to create accounts, log in, and manage profiles.
        Admin Dashboard.
        Protected Routes.
        MERN Crud operations.
        Data loading for server.
        The Inventory-Management System has helped Businesses, reduce their workload and improve their Inventory management processes.
    `,
    techStack: [html, css, react, redux, node, express, mongodb],
    liveLink: "https://inventory-management-frontend-pied.vercel.app",
    gitLink: "https://github.com/rajon-git/Inventory-Management-Frontend",
  },
  {
    heading: "JK Consultancy",
    img: jk_consultancy,
    description: `
        Allows users to create accounts, log in, and manage profiles.
        A user can send a quotation what he needs
        Email sending from nodemailer
        It's a company setup application where nationally and internationally setup company and also provide its othere service like VAT, TAX ETC.
    `,
    techStack: [html, css,Bootstrap, react, node, express],
    liveLink: "https://jkconsultancy.co/",
    gitLink: "#",
  },
  {
    heading: "Library Management",
    img: library_mng,
    description: `
        Allows users to create accounts, log in, and manage profiles.
        Admin Dashboard: Provide an interface for administrators to manage books, users, and system settings.
        Admin can Add New Books, Update Book Information, Delete Books
        Check Availability, Borrow Books, Return Books
        Track Loans, Renew Loans
    `,
    techStack: [html, css,Bootstrap, Django],
    liveLink: "https://library-management-o36c.onrender.com/",
    gitLink: "https://github.com/rajon-git/Library-Management",
  }
  
];
