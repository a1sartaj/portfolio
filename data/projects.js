export const projects = [
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
    slug: "mern-movie",
    title: "Movie Ticket Booking App",
    description:
      "A MERN-based movie ticket booking platform with seat selection and admin panel.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/projects/movie.png",
    github: "https://github.com/a1sartaj/shows",
    live: "https://shows.a1sartaj.in",
  },

  {
    slug: "mern-todo-app",
    title: "Todo App (MERN Stack)",

    // 👇 Used in project CARD (2–3 lines)
    shortDescription:
      "A full-stack MERN Todo application with secure authentication, OTP verification, protected routes, and deadline-based task management.",

    // 👇 Used in PROJECT DETAIL page
    description:
      "A full-stack Todo Application built using the MERN Stack. The app helps users manage their daily tasks efficiently with secure authentication, OTP verification, and role-based protected routes. Users can create, update, delete, and track todos with deadlines and completion status.",

    image: "/images/projects/todo.png",

    // 👇 Tech badges
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Nodemailer",
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

    frontend: {
      stack: [
        "React",
        "Vite",
        "React Router DOM",
        "Axios",
        "Context API",
        "Tailwind CSS",
        "React Hot Toast",
        "React Icons",
      ],
    },

    backend: {
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Nodemailer",
        "Cookie Parser",
      ],
    
    },

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
    slug: "next-portfolio",
    title: "Personal Portfolio",
    description:
      "My personal portfolio built with Next.js, Tailwind CSS, and modern UI principles.",
    tech: ["Next.js", "Tailwind"],
    image: "/images/projects/portfolio.png",
    github: "https://github.com/a1sartaj/portfolio",
    live: "https://a1sartaj.in",
  },
];
