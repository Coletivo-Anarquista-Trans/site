# Component Guidelines

This document outlines best practices for creating and organizing components in a **Next.js**, **TypeScript**, and **Tailwind CSS** project. Following these guidelines will ensure consistency, maintainability, and scalability in your codebase.

## Table of Contents

- [Component Guidelines](#component-guidelines)
  - [Table of Contents](#table-of-contents)
  - [Component Structure](#component-structure)
  - [File Naming Conventions](#file-naming-conventions)
  - [TypeScript Best Practices](#typescript-best-practices)
  - [Tailwind CSS Usage](#tailwind-css-usage)
  - [Props and Prop Types](#props-and-prop-types)
  - [Component Composition](#component-composition)
  - [Testing Components](#testing-components)
  - [Example: Creating a Button Component](#example-creating-a-button-component)
    - [Usage](#usage)

## Component Structure

- **Folder Structure**  
  Organize components in a `components` directory. Group related components into subfolders.  
  Example:

```markdown
components/
├── ui/ # Reusable UI components (e.g., buttons, inputs)
├── layout/ # Layout components (e.g., header, footer)
├── features/ # Feature-specific components
└── shared/ # Shared utilities or helpers
```

- **Single Responsibility**
  Each component should have a single responsibility. Avoid creating overly complex components.

- **Reusability**
  Design components to be reusable across different parts of the application.

## File Naming Conventions

- Use **PascalCase** for component file names.
  Example: `Button.tsx`, `Navbar.tsx`.
- Use descriptive names that reflect the component's purpose.
  Example: `PrimaryButton.tsx`, `UserProfileCard.tsx`.

## TypeScript Best Practices

- **Define Props with Interfaces or Types**
  Use TypeScript to define the props for your components. Prefer `interface` for object shapes and `type` for unions or complex types.
  Example:

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
```

- **Use TypeScript Generics**  
   For reusable components, consider using generics to make them more flexible.  
   Example:

  ```typescript
  interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
  }
  ```

- **Enable Strict Type-Checking**  
   Ensure `strict: true` is enabled in your `tsconfig.json` to catch type errors early.

## Tailwind CSS Usage

- **Utility-First Approach**  
   Use Tailwind's utility classes directly in your JSX for styling. Avoid writing custom CSS unless absolutely necessary.  
   Example:

  ```tsx
  <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
  ```

- **Avoid Overusing `@apply`**  
   Use `@apply` sparingly in your CSS files. Overusing it can lead to bloated stylesheets.

- **Responsive Design**  
   Use Tailwind's responsive prefixes (e.g., `sm:`, `md:`, `lg:`) to create responsive components.  
   Example:

  ```tsx
  <div className="text-sm md:text-lg lg:text-xl">Responsive Text</div>
  ```

- **Customizing Tailwind**  
   Extend Tailwind's default theme in `tailwind.config.js` for project-specific styles.  
   Example:
  
  ```javascript
  module.exports = {
    theme: {
      extend: {
        colors: {
          brand: "#4F46E5",
        },
      },
    },
  };
  ```

## Props and Prop Types

- **Destructure Props**  
   Destructure props in the component definition for cleaner code.  
   Example:

  ```tsx
  export default function Button = ({ label, onClick, disabled }: ButtonProps) => {
    return (
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  };
  ```

- **Default Props**  
   Use default values for optional props.  
   Example:

  ```tsx
  export default function Button = ({ label, onClick, disabled = false }: ButtonProps) => {
    return (
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  };
  ```

## Component Composition

- **Break Down Components**  
   Break down large components into smaller, reusable subcomponents.  
   Example: A `Card` component can be composed of `CardHeader`, `CardBody`, and `CardFooter`.

- **Use Children Prop**  
   Use the `children` prop to make components more flexible.  
   Example:

  ```tsx
  export default function Card = ({ children }: { children: React.ReactNode }) => {
    return <div className="p-4 border rounded">{children}</div>;
  };
  ```

## Testing Components

- **Write Unit Tests**  
   Use testing libraries like **Jest** and **React Testing Library** to write unit tests for your components.  
   Example:

  ```typescript
  import { render, screen } from "@testing-library/react";
  import Button from "./Button";

  test("renders button with label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
  ```

- **Test Props and Interactions**  
   Ensure your tests cover different prop combinations and user interactions.

## Example: Creating a Button Component

Here’s an example of a reusable `Button` component using Next.js, TypeScript, and Tailwind CSS:

```tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-500 text-white px-4 py-2 rounded ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      } ${className}`}
    >
      {label}
    </button>
  );
};


```

### Usage

```tsx
import Button from "@/components/ui/Button";

export default function HomePage = () => {
  return (
    <div>
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
};
```
