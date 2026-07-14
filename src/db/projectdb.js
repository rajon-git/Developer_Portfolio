import {
  html,
  react,
  DjangoRest,
  Psql,
  mysql,
  redis,
  celery,
  tailwind,
  nginx,
  gunicorn,
  vps,
  odoo,
  python,
  xml,
  owl,
  websocket,
} from "./techstack";

import specialBabyImg from "../Banner/specialBabyShopBD.png";
import aurabellaImg from "../Banner/aurabella-admin.png";
import dailyStarImg from "../Banner/odoo.png";
import nadiaFurnitureImg from "../Banner/nadia-furniture.png";

export const ProjectList = [
  {
    heading: "Special Baby Shop BD | E-commerce and Order Management Platform",
    img: specialBabyImg,
    description: `
      <ul>
        <li>Built admin dashboard features for managing users, vendors, products, purchases, inventory, sales, orders, payments, shipping, and logistics operations.</li>
        <li>Developed a complete e-commerce and order management platform with user registration, login, profile management, product browsing, order placement, order history, and invoice features.</li>
        <li>Developed Purchase Management, Sales Management, and Inventory Ledger modules to track stock movements, product availability, purchase records, sales transactions, and operational reports.</li>
        <li>Implemented server-side data loading, API-driven workflows, and business logic for order processing, payment handling, inventory updates, and customer service operations.</li>
      </ul>
      <strong>Technology:</strong> Django REST Framework, React.js, MySQL, Redis, Celery, Tailwind CSS, HTML, Nginx, Gunicorn, VPS.
    `,
    techStack: [
      DjangoRest,
      react,
      mysql,
      redis,
      celery,
      tailwind,
      html,
      nginx,
      gunicorn,
      vps,
    ],
    liveLink: "https://specialbabyshopbd.com/",
    gitLink: "#",
  },

  {
    heading: "Aurabella | E-commerce, POS, and Order Management Platform",
    img: aurabellaImg,
    description: `
      <ul>
        <li>Developed a complete e-commerce, POS, and order management platform with user registration, login, profile management, product browsing, order placement, order history, and invoice features.</li>
        <li>Built admin dashboard features for managing users, vendors, products, purchases, inventory, sales, orders, payments, shipping, and logistics operations.</li>
        <li>Developed Purchase Management, Sales Management, POS, and Inventory Ledger modules to manage retail sales, stock movements, purchase records, sales transactions, product availability, and operational reports.</li>
        <li>Implemented live notification features using WebSocket to provide real-time updates for orders, sales activities, inventory changes, and admin operations.</li>
        <li>Implemented server-side data loading, API-driven workflows, and business logic for order processing, payment handling, inventory updates, POS transactions, and customer service operations.</li>
      </ul>
      <strong>Technology:</strong> Django REST Framework, React.js, MySQL, Redis, Celery, WebSocket, Tailwind CSS, HTML.
    `,
    techStack: [
      DjangoRest,
      react,
      mysql,
      redis,
      celery,
      websocket,
      tailwind,
      html,
    ],
    liveLink: "#",
    gitLink: "#",
  },

  {
    heading: "The Daily Star | Event Management, Invoicing, and Accounting System",
    img: dailyStarImg,
    description: `
      <ul>
        <li>Developed and customized Odoo ERP modules for The Daily Star Event Management System, covering event booking, registration, approval workflows, and operational tracking.</li>
        <li>Implemented event workflow customization, access control, security rules, and role-based permissions to manage user responsibilities across the event lifecycle.</li>
        <li>Developed invoicing features to generate and manage customer invoices from event bookings, including invoice tracking and integration with accounting workflows.</li>
        <li>Customized accounting-related processes to support event billing, payment tracking, journal entries, and financial reporting requirements.</li>
        <li>Built and customized XML views, forms, list views, menus, actions, and reports to improve usability and business process visibility.</li>
      </ul>
      <strong>Technology:</strong> Odoo, Python, XML, OWL JS, PostgreSQL.
    `,
    techStack: [odoo, python, xml, owl, Psql],
    liveLink: "#",
    gitLink: "#",
  },

  {
    heading: "Nadia Furniture Ltd. | HRM and Manufacturing BOM System",
    img: nadiaFurnitureImg,
    description: `
      <ul>
        <li>Developed and customized Odoo ERP modules for Nadia Furniture Ltd., focused on HRM and Manufacturing BOM management.</li>
        <li>Customized HRM workflows including employee management, attendance, leave management, payroll, approval processes, and employee-related reporting.</li>
        <li>Developed Manufacturing BOM features to manage product components, materials, work centers, production requirements, and manufacturing-related operational data.</li>
        <li>Built custom XML views, forms, list views, menus, actions, access rights, security rules, and dynamic reports for HR and manufacturing operations.</li>
      </ul>
      <strong>Technology:</strong> Odoo, Python, XML, PostgreSQL.
    `,
    techStack: [odoo, python, xml, Psql],
    liveLink: "#",
    gitLink: "#",
  },
];