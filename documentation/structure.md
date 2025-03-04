# Project Structure

This document outlines the structure of the project, explaining the purpose of each folder and file. The project is organized to ensure scalability, maintainability, and clarity.

## Table of Contents

- [Project Structure](#project-structure)
  - [Table of Contents](#table-of-contents)
  - [Root Directory](#root-directory)
  - [Source Directory (`src`)](#source-directory-src)
    - [App Directory (`app`)](#app-directory-app)
    - [Assets Directory (`assets`)](#assets-directory-assets)
    - [Components Directory (`components`)](#components-directory-components)
    - [Context Directory (`context`)](#context-directory-context)
  - [Key Configuration Files](#key-configuration-files)

## Root Directory

The root directory contains configuration files, dependencies, and top-level project files.

```markdown
.
├── .git/ # Git version control directory
├── .next/ # Next.js build output directory
├── documentation/ # Project documentation
├── node_modules/ # Installed dependencies
├── public/ # Static assets (e.g., images, fonts)
├── src/ # Source code directory
├── .gitignore # Specifies files ignored by Git
├── deno.lock # Deno dependency lock file
├── eslint.config.mjs # ESLint configuration
├── libs.md # Documentation for libraries
├── next-env.d.ts # Next.js TypeScript declarations
├── next.config.ts # Next.js configuration
├── package.json # Project dependencies and scripts
├── package-lock.json # NPM dependency lock file
├── postcss.config.mjs # PostCSS configuration
├── README.md # Project overview
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
```

## Source Directory (`src`)

The `src` directory contains all the source code for the project, organized into subdirectories for better maintainability.

### App Directory (`app`)

The `app` directory follows the **Next.js App Router** structure, which is used for routing and page rendering.

```markdown
app/
├── api/ # API routes
│ ├── dinosaurs/ # Dinosaurs API
│ │ ├── data.json # Dinosaurs data
│ │ ├── [dinosaur]/ # Dynamic route for a specific dinosaur
│ │ │ └── route.ts # API route handler for a specific dinosaur
│ │ └── route.ts # API route handler for all dinosaurs
│ └── route.ts # Root API route
├── favicon.ico # Website favicon
├── globals.css # Global CSS styles
├── layout.tsx # Root layout component
└── page.tsx # Home page component
```

### Assets Directory (`assets`)

The `assets` directory is used to store static assets such as images, icons, and fonts.

```markdown
assets/
```

### Components Directory (`components`)

The `components` directory contains reusable UI components, each in its own folder.

```markdown
components/
├── AnimatedBackground/ # Animated background component
│ └── index.tsx
├── ErrorBoundary/ # Error boundary component
│ └── index.tsx
├── Header/ # Header component
│ └── index.tsx
├── MatrixBackground/ # Matrix-style background component
│ └── index.tsx
├── OctagonBox/ # Octagon-shaped box component
│ └── index.tsx
└── ParticleBackground/ # Particle-based background component
└── index.tsx
```

### Context Directory (`context`)

The `context` directory contains React Context providers and hooks for managing global state.

```markdown
context/
└── ThemeContext.tsx # Theme context for managing app themes
```

## Key Configuration Files

- **`next.config.ts`**: Configuration for Next.js, including custom settings for the framework.
- **`tailwind.config.ts`**: Configuration for Tailwind CSS, including theme customization and plugins.
- **`tsconfig.json`**: TypeScript configuration for the project.
- **`eslint.config.mjs`**: ESLint configuration for linting and code quality.
- **`postcss.config.mjs`**: PostCSS configuration for processing CSS.
