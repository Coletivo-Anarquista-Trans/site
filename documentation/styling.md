# Styling Guidelines

This document explains how styling is implemented in the app using **Tailwind CSS** and themes. It covers the configuration, theming system, and best practices for maintaining a consistent design.

## Table of Contents

- [Styling Guidelines](#styling-guidelines)
  - [Table of Contents](#table-of-contents)
  - [Tailwind CSS Overview](#tailwind-css-overview)
    - [Key Features](#key-features)
  - [Theme Configuration](#theme-configuration)
    - [`tailwind.config.ts`](#tailwindconfigts)
    - [Key Points](#key-points)
  - [Using CSS Variables for Theming](#using-css-variables-for-theming)
    - [Example CSS Variables](#example-css-variables)
    - [Applying CSS Variables](#applying-css-variables)
  - [Applying Styles with Tailwind](#applying-styles-with-tailwind)
    - [Example: Styling a Button](#example-styling-a-button)
    - [Example: Glow Effect](#example-glow-effect)
  - [Dynamic Theme Switching](#dynamic-theme-switching)
    - [Step 1: Toggle Themes](#step-1-toggle-themes)
    - [Step 2: Apply Theme Classes](#step-2-apply-theme-classes)
  - [Best Practices](#best-practices)

## Tailwind CSS Overview

**Tailwind CSS** is a utility-first CSS framework that allows you to style your app directly in your markup using utility classes. It is highly customizable and integrates seamlessly with modern frameworks like **Next.js**.

### Key Features

- Utility-first approach for rapid development.
- Customizable theme configuration.
- Support for dark mode and dynamic theming.
- Just-in-Time (JIT) mode for faster builds.

## Theme Configuration

The `tailwind.config.ts` file defines the app's theme and customizations. Here’s a breakdown of the configuration:

### `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";
import twGlow from "twglow";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent1: "var(--accent-1)",
        accent2: "var(--accent-2)",
        accent3: "var(--accent-3)",
        accent4: "var(--accent-4)",
        accent5: "var(--accent-5)",
        accent6: "var(--accent-6)",
      },
      boxShadow: {
        focus: "0 0 0 2px var(--accent-2)",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  darkMode: "class", // Enables manual theme toggling
  mode: "jit", // Just-in-Time mode for faster builds
  plugins: [twGlow], // Adds glow effects
} satisfies Config;
```

### Key Points

- **Colors**: Defined using CSS variables (`var(--variable-name)`), allowing dynamic theming.
- **Shadows**: Custom `boxShadow` and `dropShadow` utilities for focus states and glow effects.
- **Dark Mode**: Enabled via `darkMode: "class"`, allowing manual theme toggling.
- **JIT Mode**: Ensures faster builds by generating styles on-demand.

## Using CSS Variables for Theming

The app uses **CSS variables** to define theme colors, making it easy to switch between themes dynamically.

### Example CSS Variables

Define your theme colors in a global CSS file (e.g., `globals.css`):

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --accent-1: #f3f4f6;
  --accent-2: #e5e7eb;
  --accent-3: #d1d5db;
  --accent-4: #9ca3af;
  --accent-5: #6b7280;
  --accent-6: #4b5563;
}

.dark {
  --background: #1a1a1a;
  --foreground: #ffffff;
  --accent-1: #2d2d2d;
  --accent-2: #3d3d3d;
  --accent-3: #4d4d4d;
  --accent-4: #5d5d5d;
  --accent-5: #6d6d6d;
  --accent-6: #7d7d7d;
}
```

### Applying CSS Variables

Tailwind classes reference these variables for consistent theming:

```html
<div className="bg-background text-foreground">
  <p>This is a themed component.</p>
</div>
```

## Applying Styles with Tailwind

Tailwind’s utility-first approach allows you to style components directly in your markup. Here’s how to use it effectively:

### Example: Styling a Button

```tsx
<button className="bg-accent-1 text-foreground px-4 py-2 rounded-lg shadow-focus hover:bg-accent-2">
  Click Me
</button>
```

### Example: Glow Effect

Use the custom `dropShadow.glow` utility for glowing effects:

```tsx
<div className="drop-shadow-glow">
  <p>This text has a glow effect!</p>
</div>
```

## Dynamic Theme Switching

The app supports dynamic theme switching using **React Context** and Tailwind’s `darkMode: "class"` strategy.

### Step 1: Toggle Themes

Use a `ThemeContext` to toggle between light and dark themes:

```tsx
const { theme, toggleTheme } = useTheme();

// Add the dark class to the root element
document.documentElement.classList.toggle("dark", theme === "dark");
```

### Step 2: Apply Theme Classes

Tailwind will automatically apply dark mode classes when the `dark` class is present:

```html
<div
  className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground"
>
  <p>This text changes with the theme.</p>
</div>
```

## Best Practices

- **Consistent Naming**: Use consistent naming for CSS variables and Tailwind classes.
- **Avoid Hardcoding Colors**: Always use theme variables (`var(--variable-name)`) for colors.
- **Leverage Utilities**: Use Tailwind’s utility classes for spacing, typography, and layout.
- **Test Themes**: Ensure all components look good in both light and dark modes.
- **Optimize for Performance**: Use JIT mode and purge unused styles in production.
