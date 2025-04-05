# Coding Guidelines

This document outlines the coding and development practices to ensure consistency, maintainability, and collaboration across the project.

## Table of Contents

- [Coding Guidelines](#coding-guidelines)
  - [Table of Contents](#table-of-contents)
  - [Git Guidelines](#git-guidelines)
  - [DRY Principle](#dry-principle)
  - [SOLID Principles](#solid-principles)
  - [TypeScript Best Practices](#typescript-best-practices)
  - [Package Management](#package-management)
  - [Using Artificial Intelligence (AI) Tools](#using-artificial-intelligence-ai-tools)
  - [General Best Practices](#general-best-practices)

## Git Guidelines

1. **Branching Strategy**

   - When developing a new feature, create a new branch based on the `main` branch.  
     **Example**: If you're working on a suggestion box feature, create a branch named `feature-suggestion-box` from `main`.

     ```bash
     git checkout main
     git pull
     git checkout -b "feature-suggestion-box"
     ```

   - Use descriptive branch names that reflect the feature or task you're working on. Use `feature-branchname` when altering modules in the source coude.
   - When committing a change, make sure to use,

     ```bash
     git commit -m "your_commit_message_here"
     ```
     offering a brief but descriptive commit message. This is especially useful for minor last-moment, unanticipated changes, which might not be accounted for in the branch name.

2. **Pull Requests (PRs)**

   - Once your feature is complete, open a pull request to merge your branch (`feature-new-feature`) into `main`.
   - Run the project locally. (( ToDo: Add run-locally documentation))
   - Request a review from at least one experienced or active team member.
   - Ensure your PR includes a clear description of the changes and any relevant context.

3. **Syncing with `main`**

   - Regularly pull changes from the `main` branch into your feature branch to avoid merge conflicts.

     ```bash
     git checkout main
     git pull
     git checkout feature-suggestion-box
     git merge main
     ```

4. **Resolving Conflicts**
   - In case of merge conflicts, resolve them carefully by reviewing the conflicting files and collaborating with your team if needed.
   - Test your changes after resolving conflicts to ensure everything works as expected.

## DRY Principle

- **Do Not Repeat Yourself**: Avoid duplicating code. If you find yourself writing the same logic multiple times, consider abstracting it into a reusable function, component, or utility.

## SOLID Principles

Follow the SOLID principles to write clean and maintainable code if possible:

- **S**ingle Responsibility Principle: Each class or function should have only one responsibility.
- **O**pen/Closed Principle: Code should be open for extension but closed for modification.
- **L**iskov Substitution Principle: Objects of a superclass should be replaceable with objects of a subclass without breaking the application.
- **I**nterface Segregation Principle: Create small, specific interfaces instead of large, general ones.
- **D**ependency Inversion Principle: Depend on abstractions, not concrete implementations.

## TypeScript Best Practices

- Use TypeScript effectively by leveraging its type system:
  - Always define types for variables, function parameters, and return values.
  - Avoid using `any` unless absolutely necessary.
  - Use interfaces or types for complex data structures.
  - Enable strict type-checking options in your `tsconfig.json`.

## Package Management

- **Prioritize Existing Packages**: Before adding a new package, check if the functionality is already available in the project's existing dependencies.
- **Evaluate New Packages**: If a new package is necessary, ensure it is well-maintained, widely used, and aligns with the project's goals.

## Using Artificial Intelligence (AI) Tools

- **Be Cautious**: When using AI tools (e.g., Deepseek, GitHub Copilot, ChatGPT), review and test the generated code thoroughly. Do not blindly accept suggestions.
- **Understand the Code**: Ensure you understand any AI-generated code before integrating it into the project.
- **Avoid Over-Reliance**: Use AI as a helper, not a replacement for critical thinking and problem-solving.

## General Best Practices

- Write clean, readable, and well-documented code (We can add examples here)
- Follow consistent naming conventions for variables, functions, and files.
- Write meaningful commit messages that describe the purpose of the changes.
- Test your code thoroughly before submitting a pull request.

By following these guidelines, we can maintain a high standard of code quality and ensure smooth collaboration across the team.
