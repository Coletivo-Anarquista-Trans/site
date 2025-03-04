# State Management Guidelines

This document outlines best practices for state management in the project, focusing on **React Context** for global state, folder structure, and theme management with **Tailwind CSS**.

## Table of Contents

- [State Management Guidelines](#state-management-guidelines)
  - [Table of Contents](#table-of-contents)
  - [React Context Overview](#react-context-overview)
    - [When to Use Context](#when-to-use-context)
    - [When Not to Use Context](#when-not-to-use-context)
  - [Context Folder Structure](#context-folder-structure)
  - [Creating a Context](#creating-a-context)
    - [Step 1: Define the Context](#step-1-define-the-context)
    - [Step 2: Create a Provider](#step-2-create-a-provider)
    - [Step 3: Use the Context](#step-3-use-the-context)
  - [Using Context for Theme Management](#using-context-for-theme-management)
    - [Define Themes in Tailwind](#define-themes-in-tailwind)
    - [Apply Themes Dynamically](#apply-themes-dynamically)
  - [Theme Management with Tailwind CSS](#theme-management-with-tailwind-css)
    - [Dynamic Theme Switching](#dynamic-theme-switching)
    - [Persisting Theme](#persisting-theme)
  - [Example: Theme Toggle with Context](#example-theme-toggle-with-context)
    - [App.tsx](#apptsx)
    - [Header.tsx](#headertsx)

## React Context Overview

**React Context** is a built-in feature for managing global state without prop drilling. It is ideal for sharing data (e.g., themes, user authentication) across multiple components.

### When to Use Context

- For global state that needs to be accessed by many components.
- For theme management (light/dark mode or custom themes).
- For user authentication or app-wide settings.

### When Not to Use Context

- For local state (use `useState` or `useReducer` instead).
- For complex state management (consider libraries like **Zustand** or **Redux**).

## Context Folder Structure

Organize your context files in a `context` folder for better maintainability:

```markdown
src/
├── context/               # All context-related files
│   ├── ThemeContext.tsx    # Theme context
│   ├── AuthContext.tsx     # Authentication context
│   └── index.ts           # Exports all contexts
├── components/            # Components using context
└── app/                 # Pages using context
```

## Creating a Context

Here’s how to create and use a context, using `ThemeContext.tsx` as an example:

### Step 1: Define the Context

In `ThemeContext.tsx`, define the context and its types:

```tsx
"use client";

import { createContext, useContext, useState } from "react";

type Theme =
  | "default-theme"
  | "new-theme"
  | "cyberpunk-purple-theme"
  | "cyberpunk-red-theme";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

### Step 2: Create a Provider

Wrap your application (or part of it) with the `ThemeProvider` to make the theme state available globally:

```tsx
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("default-theme");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case "default-theme":
          return "new-theme";
        case "new-theme":
          return "cyberpunk-purple-theme";
        case "cyberpunk-purple-theme":
          return "cyberpunk-red-theme";
        case "cyberpunk-red-theme":
          return "default-theme";
        default:
          return "default-theme";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Step 3: Use the Context

Create a custom hook `useTheme` to access the context in your components:

```tsx
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

## Using Context for Theme Management

Context is particularly useful for managing themes. Here’s how to integrate it with **Tailwind CSS**:

### Define Themes in Tailwind

Extend your `tailwind.config.js` to include theme-specific classes:

```javascript
module.exports = {
  darkMode: "class", // Enable dark mode using class strategy
  theme: {
    extend: {
      colors: {
        "default-theme": {
          background: "#ffffff",
          text: "#000000",
        },
        "new-theme": {
          background: "#f0f0f0",
          text: "#333333",
        },
        "cyberpunk-purple-theme": {
          background: "#4c1d95",
          text: "#e879f9",
        },
        "cyberpunk-red-theme": {
          background: "#7f1d1d",
          text: "#f87171",
        },
      },
    },
  },
};
```

### Apply Themes Dynamically

Use the `theme` state from the context to apply Tailwind classes dynamically:

```tsx
const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`bg-${theme}-background text-${theme}-text`}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
```

## Theme Management with Tailwind CSS

### Dynamic Theme Switching

- Use the `theme` state to toggle between themes.
- Apply Tailwind classes conditionally based on the current theme.

### Persisting Theme

- Save the user’s theme preference in `localStorage` or a cookie to persist across sessions.
- Example:
  ```tsx
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = /* logic to determine next theme */;
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  ```

## Example: Theme Toggle with Context

Here’s how to use your `ThemeContext.tsx` in a component:

### App.tsx

```tsx
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
```

### Header.tsx

```tsx
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`bg-${theme}-background text-${theme}-text p-4`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
```
