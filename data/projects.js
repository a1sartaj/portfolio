export const projects = [
  {
    slug: "mern-movie",
    title: "Movie Ticket Booking App",
    shortDescription: "A functionality full stack movie ticket booking application with admin panel ",
    description: 'A full-stack production-style Movie Ticket Booking Web Application built with the MERN stack. Users can browse movies, select shows, choose seats, and book tickets, while Admin can manage movies, shows, and users.',

    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Bcryptjs', 'jsonwebtoken', 'dotenv', 'node-cron', 'React', 'Vite', 'TailwindCSS', 'Axios', 'React Router', 'React Hot Toast', 'QRCode React'],

    image: "/images/projects/movie.png",
    github: "https://github.com/a1sartaj/shows",
    live: "https://shows.a1sartaj.in",

    problem: 'This movie ticket booking website help to see new movie and there timing for shows so that movie lover can book ticket from their home.',

    features: [
      "Single login system for User & Admin",
      "Password hashing using bcrypt",
      "JWT-based authentication using Authorization header",
      "Role-based routes protection (USER / ADMIN)",
      "Secure booking ownership validation",
      "Movies fetched from TMDB API",
      "Movies listing with pagination",
      "Trailer integration (YouTube)",
      "Admin can create and manage shows",
      'Auto expire past shows using TTL index',
      "Dynamic seat layout",
      "Bookied seats disabled",
      "Secure ticket booking",
      "Booking confirmation page",
      "QR code ticket generation",
    ],

    deployment: {
      frontend: 'VPS server',
      backend: 'VPS server',
      database: 'VPS sever'
    },

    futureImprovements: [
      'Seat Hold system for 5 minutes',
      'Real time seat update (Socket.io)',
      'Payment gateway',
      'Cancel booking page',
      'Ticket pdf download',
      'Email ticket',
      'Admin dashboard analytics',
      'Search & filter',
      'Peformance optimization'
    ]

  },

  {
    slug: "mern-ecommerce",
    title: "MERN E-Commerce Website",
    shortDesc: "A full-stack e-commerce app with authentication, cart, and admin panel.",
    description: "This project is a complete MERN stack e-commerce platform where users can browse products, add them to cart, place orders, and admins can manage products and orders.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/projects/ecommerce.png",
    github: "https://github.com/a1sartaj/shoeshop",
    live: "https://shoeshop.a1sartaj.in",
    features: [
      "User authentication",
      "Admin dashboard",
      "Payment integration",
    ],
    challenges: [
      "Managing authentication and authorization",
      "Designing scalable product schema",
      "Handling cart and order logic",
    ],
    learnings: [
      "JWT authentication",
      "REST API design",
      "State management in React",
    ],
  },

  {
    slug: "mern-todo-app",
    title: "Todo App (MERN Stack)",

    // 👇 Used in project CARD (2–3 lines)
    shortDescription: "A full-stack MERN Todo application with secure authentication, OTP verification, protected routes, and deadline-based task management.",

    // 👇 Used in PROJECT DETAIL page
    description: "A full-stack Todo Application built using the MERN Stack. The app helps users manage their daily tasks efficiently with secure authentication, OTP verification, and role-based protected routes. Users can create, update, delete, and track todos with deadlines and completion status.",

    image: "/images/projects/todo.png",

    // 👇 Tech badges
    tech: [
      "React",
      "Vite",
      "React Router DOM",
      "Axios",
      "Context API",
      "Tailwind CSS",
      "React Hot Toast",
      "React Icons",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "Cookie Parser",
    ],

    github: "https://github.com/a1sartaj/todos",
    live: "https://todos.a1sartaj.in", // keep empty if not public

    // 👇 Detail page sections
    problem:
      "Many people forget their daily tasks or fail to organize them properly. This application helps users store, manage, and complete tasks whenever they have time.",

    features: [
      "User registration & login",
      "OTP verification via email",
      "JWT authentication with HTTP-only cookies",
      "Protected routes (frontend & backend)",
      "Auto logout on token expiry",
      "Create, edit, delete todos",
      "Due date & completion status",
      "Prevent past due date selection",
      "Responsive UI with toast notifications",
    ],

    deployment: {
      frontend: "VPS Server",
      backend: "VPS Server",
      database: "VPS Server",
    },

    futureImprovements: [
      "Drag & drop todos",
      "Search & filter functionality",
      "Priority levels",
      "Reminder notifications",
      "Admin dashboard",
    ],
  },

  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",

    shortDescription:
      "A modern, responsive portfolio website built with Next.js to showcase my projects, skills, and experience as a MERN Stack Developer.",

    description:
      "This is my personal developer portfolio built using Next.js and Tailwind CSS. The goal of this project is to present my work in a clean, professional, and recruiter-friendly way. It includes a dynamic projects section with detailed project pages, dark/light mode support, SEO optimization, and a responsive layout across all devices.",

    image: "/images/projects/portfolio.png",

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Git",
      "Vercel",
    ],

    github: "https://github.com/a1sartaj/portfolio",
    live: "https://a1sartaj.in",

    problem:
      "Many developer portfolios lack structure, clarity, and scalability. Recruiters often struggle to quickly understand a developer’s skills, project depth, and problem-solving ability from cluttered or poorly designed portfolios.",

    features: [
      "Responsive layout for mobile, tablet, and desktop",
      "Dark and light theme with persistent state",
      "Dynamic projects listing with detail pages",
      "Route-aware navigation for better UX",
      "SEO optimized with Open Graph and Twitter cards",
      "Reusable and scalable component structure",
    ],

    deployment: {
      frontend: "Vercel",
    },

    futureImprovements: [
      "Add animations and page transitions",
    ],
  }

];
