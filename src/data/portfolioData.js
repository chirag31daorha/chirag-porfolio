export const personalInfo = {
  name: "Chirag Daorha",
  initials: "CD",
  role: "Java Full Stack Developer",
  tagline: "Building secure, scalable & production-ready applications",
  location: "Bengaluru, India",
  email: "chirag2001daorha@gmail.com",
  phone: "+91 93998 68949",
  linkedin: "https://linkedin.com/in/chiragdaorha31",
  github: "https://github.com/chirag31daorha",
  available: true,
};

export const skills = [
  { category: "Languages", items: [
    { name: "Java", level: 88 },
    { name: "SQL", level: 82 },
    { name: "JavaScript", level: 75 },
  ]},
  { category: "Backend", items: [
    { name: "Spring Boot", level: 87 },
    { name: "Spring Security", level: 82 },
    { name: "JWT Auth", level: 80 },
    { name: "Hibernate / JPA", level: 83 },
    { name: "REST APIs", level: 88 },
    { name: "WebSocket / STOMP", level: 72 },
    { name: "Maven", level: 75 },
  ]},
  { category: "Frontend", items: [
    { name: "React", level: 78 },
    { name: "Vite", level: 74 },
    { name: "Axios", level: 76 },
    { name: "HTML & CSS", level: 80 },
    { name: "Thymeleaf", level: 68 },
  ]},
  { category: "Database", items: [
    { name: "PostgreSQL", level: 82 },
    { name: "MySQL", level: 75 },
  ]},
  { category: "Tools", items: [
    { name: "Git & GitHub", level: 80 },
    { name: "Postman", level: 82 },
    { name: "VS Code", level: 85 },
    { name: "Eclipse", level: 76 },
  ]},
];

export const techStack = [
  "Java", "Spring Boot", "Spring Security", "JWT", "BCrypt", "Hibernate",
  "Spring Data JPA", "REST APIs", "WebSocket", "STOMP", "Maven",
  "React", "Vite", "Axios", "JavaScript", "HTML", "CSS", "Thymeleaf",
  "PostgreSQL", "MySQL", "pgAdmin", "Git", "GitHub", "Postman",
  "MVC", "Layered Architecture", "DTO Pattern", "JPQL",
];

export const projects = [
  {
    id: 1,
    title: "Flight Booking System",
    emoji: "✈️",
    description:
      "Full stack flight booking platform with Spring Boot REST API backend and React (Vite) frontend — end-to-end flow from user authentication to payment management.",
    highlights: [
      "JWT-based stateless authentication & role-based authorization",
      "4 core entities: Flight, Booking, Passenger, Payment with bidirectional Hibernate mappings",
      "React frontend with Dashboard, FlightManager, BookingManager, PaymentManager",
      "CORS-configured full stack communication via Axios",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "Hibernate", "PostgreSQL", "React", "Vite", "Axios"],
    github: "https://github.com/chirag31daorha",
    color: "#00F5FF",
  },
  {
    id: 2,
    title: "Hospital Appointment & Medical Record System",
    emoji: "🏥",
    description:
      "Backend REST API system with 50+ endpoints across 6 entities — Department, Doctor, Patient, Appointment, Medical Record, and Prescription — with complete CRUD operations.",
    highlights: [
      "50+ REST API endpoints across 6 interconnected entities",
      "Complex bidirectional Hibernate relationships with custom JPQL queries",
      "Business logic: no duplicate doctors, one appointment per slot per patient",
      "Enum-based appointment status: BOOKED / CANCELLED / COMPLETED",
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "Spring Data JPA", "PostgreSQL", "REST APIs", "Postman"],
    github: "https://github.com/chirag31daorha",
    color: "#FF006E",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    emoji: "💬",
    description:
      "Real-time messaging application using Spring Boot WebSocket and STOMP protocol — messages broadcast instantly to all connected users without page refresh.",
    highlights: [
      "WebSocket + STOMP message broker for real-time communication",
      "SockJS for cross-browser compatibility",
      "Multiple concurrent users with custom usernames",
      "Zero page-refresh instant messaging",
    ],
    tech: ["Java", "Spring Boot", "WebSocket", "STOMP", "SockJS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/chirag31daorha",
    color: "#FFB800",
  },
  {
    id: 4,
    title: "To-Do Application",
    emoji: "📝",
    description:
      "Full stack task management application with Spring Boot backend and Thymeleaf for server-side rendering — add, complete, and delete tasks with persistent PostgreSQL storage.",
    highlights: [
      "MVC architecture: Controller → Service → Repository",
      "Thymeleaf server-side rendering",
      "PostgreSQL for persistent task storage",
      "Clean, intuitive task management UI",
    ],
    tech: ["Java", "Spring Boot", "Thymeleaf", "Spring Data JPA", "PostgreSQL"],
    github: "https://github.com/chirag31daorha",
    color: "#7C3AED",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Sagar Institute of Research and Technology (SIRT)",
    location: "Bhopal",
    period: "2020 – 2024",
    icon: "🎓",
  },
];

export const certifications = [
  {
    title: "Java Full Stack Training",
    issuer: "JSpiders BTM, Bengaluru",
    topics: ["Java", "Spring Boot", "Hibernate", "Spring Data JPA", "PostgreSQL", "REST APIs", "React"],
    icon: "☕",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "CodeHelp by Love Babbar",
    topics: ["HTML", "CSS", "JavaScript", "React", "Full Stack Web Development"],
    icon: "🌐",
  },
];

export const summary =
  "Java Full Stack Developer with hands-on experience building secure, scalable, and production-ready applications using Spring Boot, Spring Security, JWT, Hibernate, and PostgreSQL on the backend, and React on the frontend. Proven ability to develop complete full stack systems — from database design and REST API development to JWT-based authentication and responsive UI integration.";