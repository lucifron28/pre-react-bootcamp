# JavaScript Projects for React Preparation

A collection of vanilla JavaScript mini-projects to master key concepts and patterns before learning React.js. Each project targets skills essential for React development, such as state management, DOM manipulation, and component-like thinking.

---

## How to Use This Repo

Each folder contains a standalone mini-project designed to build JavaScript skills that translate directly to React. Projects progress in complexity, with bonus challenges to deepen understanding.

- **Setup:** Use a modern bundler like Vite or Parcel for module support and a consistent development environment.
- **Code Quality:** Write modular, reusable code with ES6+ features (e.g., arrow functions, destructuring).
- **Accessibility:** Ensure projects include basic ARIA attributes and keyboard navigation for accessibility.
- **Responsiveness:** Design UIs to adapt to mobile and desktop screens using CSS Flexbox/Grid.

---

## Project Guidelines

### 01 - To-Do List
- **Goal:** Create a task manager with add, toggle complete, and delete functionality.
- **Concepts to Practice:**
  - DOM manipulation (`document.createElement`, `appendChild`)
  - Event handling (`click` events)
  - State management with arrays
  - Persist data using `localStorage`
  - Dynamic list rendering
- **Bonus:** Add task editing, filtering (all, active, completed), and ARIA labels for accessibility.

---

### 02 - Counter
- **Goal:** Build a counter with increment, decrement, and reset buttons.
- **Concepts to Practice:**
  - State management with variables
  - Event listeners for buttons
  - UI updates based on state
- **Bonus:** Add keyboard shortcuts (e.g., up/down arrows) and unit tests with Jest.

---

### 03 - Tabs
- **Goal:** Create a tabbed interface to switch content on click.
- **Concepts to Practice:**
  - Event delegation (listening on parent container)
  - Class manipulation (`classList.add` / `remove`)
  - Conditional rendering (show/hide content)
- **Bonus:** Add keyboard navigation (e.g., arrow keys) and ARIA roles for accessibility.

---

### 04 - Form with Validation
- **Goal:** Build a form with input validation on submit.
- **Concepts to Practice:**
  - Controlled inputs (`input` events)
  - Validation logic (e.g., required fields, email format)
  - Dynamic error message display
  - Prevent invalid form submission
- **Bonus:** Add real-time validation feedback and test validation logic with Jest.

---

### 05 - Fetch API + Display Data
- **Goal:** Fetch and display data from a public API (e.g., JSONPlaceholder).
- **Concepts to Practice:**
  - `fetch` with async/await
  - Promise and error handling
  - Dynamic rendering of API data
- **Bonus:** Add a loading spinner, retry logic, and a fallback UI for empty/failed requests.

---

### 06 - Image Carousel / Slider
- **Goal:** Build a slider cycling through images manually and automatically.
- **Concepts to Practice:**
  - Timers (`setInterval` / `clearInterval`)
  - State updates for user interaction and timers
  - Conditional rendering of active slide
- **Bonus:** Add swipe support for mobile and ARIA labels for accessibility.

---

### 07 - Filterable Product List
- **Goal:** Display a list of items with filtering based on user input.
- **Concepts to Practice:**
  - Array methods (`.filter()`, `.map()`)
  - Controlled input for filter keyword
  - Rendering filtered data
- **Bonus:** Add category filters, multi-criteria filtering, and responsive grid layout.

---

### 08 - Countdown Timer or Stopwatch
- **Goal:** Create a countdown timer or stopwatch with start, stop, and reset controls.
- **Concepts to Practice:**
  - `setTimeout` / `setInterval` for timing
  - Real-time UI updates
  - Control state management
- **Bonus:** Add sound alerts or visual effects at zero and ensure mobile responsiveness.

---

### 09 - Simple Routing Simulation
- **Goal:** Build a single-page app with multiple "pages" (e.g., Home, About) using URL hash changes.
- **Concepts to Practice:**
  - `hashchange` or `history` API for navigation
  - Conditional rendering based on route
  - Modular page components
- **Bonus:** Add smooth transitions between routes and ARIA navigation landmarks.

---

### 10 - Draggable Task Board
- **Goal:** Create a task board where tasks can be reordered via drag-and-drop.
- **Concepts to Practice:**
  - Drag-and-drop events (`dragstart`, `dragover`, `drop`)
  - State updates for reordering
  - Dynamic rendering of task order
- **Bonus:** Persist order in `localStorage` and add touch support for mobile.

---

### 11 - Simple State Store
- **Goal:** Build a centralized state store (e.g., inspired by Redux) to sync state across UI components.
- **Concepts to Practice:**
  - Pub/sub pattern for state updates
  - Centralized state management
  - Updating multiple UI elements from one store
- **Bonus:** Add a simple reducer function and test state updates with Jest.

---

### 12 - Mini React-Lite Framework (Challenge)
- **Goal:** Create a minimal library simulating React’s core (e.g., `createElement`, render, state).
- **Concepts to Practice:**
  - Pure functions and immutability
  - Virtual DOM concepts
  - Manual DOM diffing and patching
  - Component-based structure
- **Bonus:** Add support for event handlers, props, and reusable components.

---

## Final Tips

- Write **clean, modular code** with single-responsibility functions.
- Use **immutable state** where possible to mimic React’s state management.
- Centralize rendering logic to avoid scattered DOM manipulation.
- Practice **component-like thinking** by structuring code like React components.
- Test at least one project (e.g., Counter or Form) with Jest to understand unit testing.
- Ensure all projects are **responsive** (use CSS Flexbox/Grid) and **accessible** (ARIA attributes, keyboard support).
- Document lessons learned for each project and how they relate to React (e.g., state updates mirror `useState`
