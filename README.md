# ToDo List Application

A full-stack To-Do List web application built with React and Node.js, featuring a modern UI and RESTful API backend.

## Features

- Create, read, update, and delete to-do items
- Clean and intuitive user interface
- Responsive design built with modern web technologies
- RESTful API backend with Node.js and Express
- Database models for persistent data storage

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **JavaScript** - Programming language

## Project Structure

```
ToDo_List/
├── server/                 # Backend application
│   ├── index.js           # Main server file
│   ├── package.json       # Backend dependencies
│   └── Models/
│       └── Todo.js        # Todo data model
│
└── todolist/              # Frontend application
    ├── src/
    │   ├── App.jsx        # Main App component
    │   ├── App.css        # App styling
    │   ├── Home.jsx       # Home page component
    │   ├── Create.jsx     # Create todo component
    │   ├── main.jsx       # Entry point
    │   ├── index.css      # Global styles
    │   └── assets/        # Static assets
    ├── public/            # Public assets
    ├── index.html         # HTML template
    ├── package.json       # Frontend dependencies
    ├── vite.config.js     # Vite configuration
    ├── eslint.config.js   # ESLint configuration
    └── README.md          # Frontend documentation
```

## Installation

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Frontend Setup

1. Navigate to the todolist directory:
   ```bash
   cd todolist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Start the Backend Server

```bash
cd server
npm start
```

The server will run on `http://localhost:5000` (or the configured port).

### Start the Frontend Development Server

```bash
cd todolist
npm run dev
```

The frontend will be available at `http://localhost:5173` (or as shown in the terminal).

## Usage

1. Open your browser and navigate to the frontend URL
2. Create new to-do items using the Create component
3. View all to-do items on the Home page
4. Update or delete items as needed

## Available Scripts

### Frontend
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

### Backend
- `npm start` - Start the server

