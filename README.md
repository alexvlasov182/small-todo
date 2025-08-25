# Small Todo App

A simple **Todo App** built with:

- ⚡ [Vite](https://vitejs.dev/) – Next generation frontend tooling
- 🎨 [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first CSS framework
- 🧩 [shadcn/ui](https://ui.shadcn.com/) – Re-usable UI components
- ⚛️ [React](https://react.dev/) – UI library

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/small-todo.git
cd small-todo
```

## Install dependencies
```bash
yarn install
# or
npm install
```

## Run the development server
```bash
yarn dev
# or
npm run dev
```

## UI Components
This project uses shadcn/ui

To add a new component:

```bash
npx shadcn add button
```

Components will be created inside:

```bash
src/components/ui/
```

## 📂 Project Structure

```bash
src/
 ├─ components/     # UI components
 │   └─ ui/         # shadcn/ui components
 ├─ lib/            # Utility functions
 ├─ App.tsx         # Main app
 └─ index.css       # TailwindCSS setup
```