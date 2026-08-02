# Counter App 🔢

A simple, clean React mini-project to practice **state management**, **event handling**, and **conditional rendering** — built as part of a hands-on 30-day React learning roadmap.


## ✨ Features

- **Increment / Decrement / Reset** — core counter functionality
- **Quick Actions** — jump the count by +1, +5, +10, -1, -5, -10 in one click
- **Guard against negative values** — count never drops below 0
- **Dark Mode toggle** — switch between light and dark themes on the fly
- Fully responsive, card-based UI

## 🖼️ Preview

The app displays the current count in a card, with primary action buttons (Increment, Decrement, Reset) and a secondary row of "Quick Action" pill buttons for faster adjustments. A theme toggle sits in the top-right corner.

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **Vite** (build tool / dev server)
- **CSS** (custom styling, no external UI library)

## 🚀 Getting Started

```bash
# clone the repo
git clone <your-repo-url>
cd counter-app

# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📁 Project Structure

```
counter-app/
├── src/
│   ├── App.jsx      # Main counter logic and UI
│   ├── App.css       # Styling (light + dark mode)
│   └── main.jsx
└── README.md
```

## 🧠 Key Concepts Practiced

- `useState` for managing multiple pieces of state (`count`, `isDarkMode`)
- Functional state updates (`setCount(prev => prev + 1)`) to avoid stale state bugs
- Conditional class names for theme switching
- Reusable handler functions (`handleQuickActions`) driven by dynamic values
- Basic UI/UX guardrails (preventing negative counts)

## 🔮 Possible Improvements

- Refactor the six Quick Action buttons into a single `.map()` over an array (DRY principle)
- Extract the minimum count boundary (`0`) into a configurable constant/prop
- Persist dark mode preference using local state lifted to a parent, or context (once Hooks week is covered)

## 📝 License

This project is for learning purposes as part of a personal React roadmap.
