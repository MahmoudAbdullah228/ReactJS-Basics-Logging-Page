# React Basics — Learning Project

This repository contains a small React + TypeScript app I built for learning purposes. The goal is to practice core React concepts, write clean typed code, and organize styles with SCSS while using modern tooling (Vite, ESLint, Prettier).

## Purpose

- Learn the fundamentals of React with TypeScript by building a simple, functional app.
- Practice component composition, props, state, controlled forms, and conditional UI.
- Keep the project developer-friendly with formatting and linting on save.

## What I built

- Navbar with Login/Register toggles and a theme button.
- RegisterForm and LogInForm implemented as controlled inputs (value + onChange).
- Info section that shows company details and, when logged in, the user’s data.
- Header that greets the user after successful login.

## Tech Stack

- React + TypeScript + Vite
- SCSS for component-level styling
- ESLint + Prettier (format on save)

## Project Structure (key files)

```
React-Basics/
├─ src/
│  ├─ App.tsx                # App state (isLoggedIn, userData) and layout
│  ├─ main.tsx               # React entry
│  ├─ index.css              # Global styles
│  ├─ components/
│  │  ├─ Navbar/
│  │  │  ├─ index.tsx
│  │  │  └─ style.scss
│  │  ├─ RegisterForm/
│  │  │  ├─ index.tsx
│  │  │  └─ style.scss
│  │  ├─ LogInForm/
│  │  │  ├─ index.tsx
│  │  │  └─ style.scss
│  │  ├─ Info/
│  │  │  ├─ index.tsx
│  │  │  └─ style.scss
│  │  └─ Header/
│  │     ├─ index.tsx
│  │     └─ style.scss
│  └─ assets/
│     └─ react.svg
├─ .vscode/
│  └─ settings.json          # Prettier as default formatter + formatOnSave
├─ .prettierrc               # Prettier rules
├─ eslint.config.js          # ESLint rules
├─ vite.config.ts
├─ tsconfig*.json
└─ README.en.md (this file)
```

## How it works (Data Flow)

- App holds top-level state: `isLoggedIn` and `userData` `{ username, email, password }`.
- Navbar toggles the visibility of LogInForm/RegisterForm and handles logout (clears `userData`).
- RegisterForm and LogInForm are controlled forms: typing updates `userData` via `setUserData` passed down from App.
- Info receives `isLoggedIn` and `userData`; it shows user info when logged in and adjusts layout using a CSS variable.
- Conditional styling is done with CSS variables at runtime (e.g., `--company-info-width` set to `49%` when logged in).

## Key Concepts I learned

- Function Components and typing props with TypeScript (when to use `type` vs `interface`).
- State management with `useState` and “lifting state up” to share data between components.
- Controlled inputs: syncing `value` and `onChange` with state to keep forms reliable.
- Passing callbacks from parent to child (e.g., `setUserData`, `setIsLoggedIn`) to update parent state from child events.
- SCSS organization and using CSS Variables for conditional styles (instead of Sass `@if` at compile time).
- Vite dev workflow (fast HMR) and project setup with ESLint + Prettier.

## Approaches & Patterns

- Props as `type` for simple, fixed shapes (good composition with unions/intersections).
- Controlled forms pattern for predictable form state and validation.
- Lifting state to App to keep a single source of truth for auth/user data.
- CSS variables for runtime conditions to avoid overcomplicating Sass logic.

## Running the project

```bash
# install dependencies
yarn
# or
npm install

# start the dev server
yarn dev
# or
npm run dev
```

Vite will start a local server (usually http://localhost:5173).

## Formatting & Linting

- Prettier is the default formatter (format on save is enabled via `.vscode/settings.json`).
- ESLint checks TypeScript/React best practices.

## What I gained

- Confidence with core React patterns (components, props, state, controlled inputs).
- Comfort writing typed React with TypeScript and keeping code consistent with Prettier.
- Practical experience structuring a small app and styling with SCSS and CSS variables.

## Next Steps

- Extract form logic into custom hooks for easier reuse/testing.
- Persist username via `localStorage` for a better UX.
- Add basic unit tests for core components.
