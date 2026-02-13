# Experiments Repository

A personal development monorepo showcasing various web development projects and experiments. Each project is self-contained within its own directory and can be independently deployed to GitHub Pages.

## 🏗️ Monorepo Structure

This repository is organized as a monorepo where each project lives in its own directory with dedicated documentation and dependencies:

```
experiments/
├── bash-cheatsheet/          # Interactive bash command reference
│   ├── index.html           # Main HTML file (GitHub Pages entry)
│   └── README.md            # Project documentation
├── project-2/               # Future project
│   ├── index.html
│   └── README.md
└── README.md                # This file - monorepo overview
```

## 🚀 Current Projects

### Bash Navigation & Manipulation Cheatsheet 📟

An interactive, terminal-inspired cheat sheet for Bash navigation and file manipulation commands. Features a modern CRT monitor aesthetic with comprehensive command reference.

**Status**: ✅ COMPLETE - Ready for GitHub Pages deployment

#### 🎯 Features

- **Interactive Command Reference**: Comprehensive bash commands organized by category
- **Click-to-Copy**: Click any command to copy it to your clipboard
- **Terminal Aesthetics**: Retro CRT design with scanline effects
- **Modern Typography**: JetBrains Mono and Syne fonts
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Professional terminal-inspired color scheme

#### 🛠️ Tech Stack

- **Frontend**: Pure HTML, CSS, and JavaScript
- **Fonts**: JetBrains Mono, Syne (Google Fonts)
- **Design**: CSS Grid, Flexbox, Custom animations
- **Deployment**: GitHub Pages ready

#### 🚀 Live Demo

Visit the [Bash Cheatsheet](https://klstack3.github.io/experiments/bash-cheatsheet/) to use the interactive reference.

---

## 📚 How to Add New Projects

### 1. Create Project Directory

```bash
mkdir my-new-project
cd my-new-project
```

### 2. Add Project Files

- Create `index.html` as the main entry point (required for GitHub Pages)
- Add a `README.md` with project-specific documentation
- Include any additional assets, stylesheets, or scripts

### 3. Update Main README

Add your project to the "Current Projects" section in this README.md

### 4. Commit and Push

```bash
git add my-new-project/
git commit -m "Add new project: My New Project"
git push origin main
```

## 🌐 GitHub Pages Deployment

### Automatic Deployment

This repository is configured for GitHub Pages deployment from the `main` branch. Any project with an `index.html` file will be automatically accessible at:

```
https://klstack3.github.io/experiments/[project-name]/
```

### Setting up GitHub Pages (if not already enabled)

1. **Repository Settings**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section

2. **Configure Source**
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`

3. **Wait for Deployment**
   - GitHub will build and deploy automatically
   - Check the "Actions" tab for deployment status
   - Your site will be live within a few minutes

### Project-Specific Deployment Requirements

For each project to work properly with GitHub Pages:

#### ✅ Required Files

- **`index.html`** - Main entry point (GitHub Pages serves this automatically)
- **`README.md`** - Project documentation

#### 🎨 Best Practices

- **Self-contained**: Each project should include all necessary assets
- **Relative paths**: Use relative links for internal resources
- **No build process**: Static files work best (HTML, CSS, JS)
- **Responsive design**: Ensure mobile compatibility

#### 📁 Example Project Structure

```
my-project/
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── css/
│   └── styles.css          # Stylesheets
├── js/
│   └── app.js              # JavaScript files
└── assets/
    ├── images/             # Images and graphics
    └── fonts/              # Custom fonts (if any)
```

### Testing Locally

Before pushing, test your project locally:

```bash
# Navigate to project directory
cd my-new-project

# Open in browser (macOS)
open index.html

# Or use a simple HTTP server
python -m http.server 8000
# Then visit http://localhost:8000
```

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the repository root
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

## 🔧 Development Workflow

### Clone and Setup

```bash
# Clone the repository
git clone https://github.com/klstack3/experiments.git
cd experiments

# Work on existing project
cd existing-project

# Or create new project
mkdir new-project && cd new-project
```

### Working with Projects

Each project is independent and can use its own:

- **Tech stack** (vanilla JS, React, Vue, etc.)
- **Build process** (though static files work best for GitHub Pages)
- **Dependencies** (package.json, etc.)

### Committing Changes

```bash
# Add specific project
git add my-project/

# Or add multiple projects
git add .

# Commit with descriptive message
git commit -m "Update: Enhanced bash cheatsheet UI"

# Push to deploy
git push origin main
```

## 📝 License

MIT License - See individual project directories for specific details.

## 🤝 Contributing

This is a personal development portfolio showcasing various experiments and learning projects. Each project directory contains its own documentation and contribution guidelines.

---

_Happy experimenting! 🧪_
