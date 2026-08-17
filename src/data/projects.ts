import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "property-adviser",
    title: "Property Adviser Dashboard",
    description:
      "A production dashboard for property management and listing workflows used by 50+ property agents.",
    technologies: ["Next.js", "TypeScript", "REST APIs", "Responsive UI"],
    highlights: [
      "12+ data views",
      "50+ property agents",
      "40+ reusable components",
      "20+ REST API integrations",
      "Performance optimization",
      "Lighthouse 91",
    ],
    github: "https://github.com/AmrGado-Prog-stack",
    liveDemo: "https://property-adviser-dashboard.vercel.app",
    overview:
      "A comprehensive property management dashboard built with Next.js and TypeScript. The platform streamlines listing management workflows for property advisers and agents.",
    problem:
      "Property agents were managing listings through fragmented tools, leading to slow workflows and inconsistent data. There was no centralized system for managing properties, clients, and market insights.",
    solution:
      "Built a unified dashboard with 12+ specialized data views, integrating 20+ REST API endpoints. Created a reusable component library of 40+ components for consistency across the application.",
    keyFeatures: [
      "Dashboard with 12+ data views",
      "Property listing management",
      "Agent performance tracking",
      "Market analytics integration",
      "Reusable component library (40+ components)",
      "Responsive design for desktop and tablet",
    ],
    impact:
      "Accelerated listing management workflows by 30%, reduced feature delivery time by 35%, and improved Lighthouse performance score from 62 to 91.",
    challenges: [
      "Integrating 20+ REST API endpoints with consistent error handling",
      "Building a performant component library that scales across views",
      "Optimizing initial load time by 45% through code splitting and lazy loading",
      "Maintaining accessibility standards across complex data tables",
    ],
  },
  {
    slug: "ecommerce",
    title: "Multi-Vendor E-Commerce",
    description:
      "A responsive multi-vendor e-commerce platform supporting 30+ vendors and 15+ page templates.",
    technologies: ["React.js", "TypeScript", "REST APIs", "State Management"],
    highlights: [
      "Vendor management",
      "Product management",
      "Order data",
      "Responsive customer-facing pages",
      "Reusable UI components",
    ],
    github: "https://github.com/AmrGado-Prog-stack",
    liveDemo: "https://multivendor-ecommerce.vercel.app",
    overview:
      "A full-featured multi-vendor e-commerce platform built with React.js and TypeScript, supporting multiple vendors with dedicated storefronts and management tools.",
    problem:
      "Small vendors needed an affordable way to sell online without building individual storefronts. Customers needed a unified marketplace to discover products from multiple sellers.",
    solution:
      "Developed a React-based platform with vendor registration, product management, and order tracking. Implemented reusable UI components and state management for consistent user experience.",
    keyFeatures: [
      "Multi-vendor storefronts",
      "Product catalog and search",
      "Shopping cart and checkout",
      "Vendor dashboard",
      "Order management system",
      "Responsive mobile-first design",
    ],
    impact:
      "Supported 30+ vendors and contributed to a 25% increase in mobile conversion rate through improved responsive design and optimized checkout flow.",
    challenges: [
      "Managing complex state across vendor and customer interfaces",
      "Ensuring consistent UX across 15+ responsive page templates",
      "Integrating REST APIs for product, vendor, and order data",
      "Optimizing mobile responsiveness for customer-facing pages",
    ],
  },
  {
    slug: "ludo",
    title: "Ludo Game",
    description:
      "A real-time multiplayer Ludo game application for iOS and Android.",
    technologies: ["Flutter", "Dart"],
    highlights: [
      "Real-time multiplayer",
      "5,000+ downloads",
      "4.3-star average rating",
    ],
    github: "https://github.com/AmrGado-Prog-stack",
    liveDemo: "https://play.google.com/store",
    overview:
      "A real-time multiplayer Ludo game built with Flutter and Dart, targeting iOS and Android platforms with smooth gameplay and social features.",
    problem:
      "Existing Ludo apps lacked smooth real-time multiplayer experiences and had poor user interfaces. There was an opportunity to build a polished game with modern Flutter capabilities.",
    solution:
      "Built the game using Flutter with Dart, implementing real-time multiplayer functionality, smooth animations, and an intuitive user interface optimized for mobile devices.",
    keyFeatures: [
      "Real-time multiplayer gameplay",
      "Cross-platform support (iOS & Android)",
      "Smooth animations and transitions",
      "User authentication and profiles",
      "Leaderboards and achievements",
      "In-app chat during games",
    ],
    impact:
      "Reached 5,000+ downloads within 3 months of launch with a 4.3-star average rating on app stores.",
    challenges: [
      "Implementing reliable real-time multiplayer synchronization",
      "Optimizing game performance across different device specifications",
      "Managing game state consistency during network interruptions",
      "Creating engaging UI/UX that retains players",
    ],
  },
  {
    slug: "shlnaha",
    title: "Shlnaha",
    description:
      "An educational mobile application for managing classes and subscription workflows.",
    technologies: ["Flutter", "Dart", "REST APIs"],
    highlights: [
      "Class management",
      "Subscription workflows",
      "Clean architecture",
    ],
    github: "https://github.com/AmrGado-Prog-stack",
    liveDemo: "https://play.google.com/store",
    overview:
      "An educational mobile application built with Flutter and Dart, designed to streamline class management and subscription workflows for students and educators.",
    problem:
      "Educational institutions struggled with manual class management and subscription tracking. Students needed a unified platform to access courses and manage their learning journey.",
    solution:
      "Developed a Flutter app with clean architecture, implementing class management, subscription workflows, and REST API integration for seamless data synchronization.",
    keyFeatures: [
      "Course catalog and enrollment",
      "Class schedule management",
      "Subscription and payment tracking",
      "Progress monitoring",
      "Push notifications",
      "Clean and maintainable architecture",
    ],
    challenges: [
      "Designing a scalable architecture for future feature expansion",
      "Integrating REST APIs for real-time data synchronization",
      "Creating an intuitive interface for non-technical users",
    ],
  },
  {
    slug: "mems",
    title: "MEMS — Medical Equipment Management System",
    description:
      "A web and mobile solution designed to digitize clinical engineering workflows including medical equipment tracking and maintenance scheduling.",
    technologies: ["Next.js", "TypeScript", "REST APIs", "Flutter"],
    highlights: [
      "Medical equipment tracking",
      "Maintenance scheduling",
      "Role-based dashboards",
      "Reduced manual reporting by 60%",
    ],
    userRoles: ["Admin", "Engineer", "Technician", "Viewer"],
    github: "https://github.com/AmrGado-Prog-stack",
    liveDemo: "https://mems-dashboard.vercel.app",
    overview:
      "A comprehensive Medical Equipment Management System (MEMS) combining web and mobile interfaces to digitize clinical engineering workflows. Built leveraging biomedical engineering domain knowledge.",
    problem:
      "Healthcare facilities relied on paper-based systems and spreadsheets for equipment maintenance tracking, leading to delayed maintenance, compliance issues, and inefficient resource allocation.",
    solution:
      "Developed a full-stack solution with web dashboard (Next.js) and mobile app (Flutter), featuring role-based access control, automated maintenance scheduling, and real-time equipment tracking.",
    keyFeatures: [
      "Medical equipment inventory tracking",
      "Automated maintenance scheduling",
      "Role-based access control (Admin, Engineer, Technician, Viewer)",
      "Equipment lifecycle management",
      "Reporting and compliance dashboards",
      "Cross-platform mobile and web interfaces",
    ],
    impact:
      "Reduced manual reporting time by 60% and improved equipment uptime through proactive maintenance scheduling.",
    challenges: [
      "Designing intuitive interfaces for non-technical medical staff",
      "Ensuring data accuracy and compliance with healthcare standards",
      "Synchronizing data between web and mobile platforms",
      "Managing complex role-based permissions across multiple user types",
    ],
  },
  {
    slug: "iti-management",
    title: "ITI Management",
    description:
      "A course and lecture management platform with synchronized web and mobile interfaces.",
    technologies: ["Next.js", "React Native", "REST API"],
    highlights: [
      "200+ students",
      "20+ instructors",
      "Shared REST API layer",
      "Zero data-sync issues post-launch",
    ],
    github: "https://github.com/AmrGado-Prog-stack",
    liveDemo: "https://iti-management.vercel.app",
    overview:
      "A comprehensive course and lecture management platform built with Next.js for web and React Native for mobile, featuring a shared REST API layer for seamless synchronization.",
    problem:
      "Educational institutions needed a unified system to manage courses, lectures, and student progress across both web and mobile platforms without data synchronization issues.",
    solution:
      "Built a cross-platform solution with Next.js web app and React Native mobile app, connected through a shared REST API layer ensuring consistent data across all interfaces.",
    keyFeatures: [
      "Course creation and management",
      "Lecture scheduling and delivery",
      "Student enrollment and progress tracking",
      "Instructor dashboard",
      "Shared REST API layer",
      "Cross-platform synchronization",
    ],
    impact:
      "Successfully served 200+ students and 20+ instructors with zero data-sync issues post-launch.",
    challenges: [
      "Designing a REST API layer that serves both web and mobile efficiently",
      "Ensuring real-time synchronization across platforms",
      "Managing concurrent access to shared resources",
    ],
  },
];
