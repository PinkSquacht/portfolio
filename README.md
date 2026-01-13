# 💼 Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my professional work, projects, and skills.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://your-portfolio-url.vercel.app)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.3-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## ✨ Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Single Page Application**: Seamless navigation with React Router
- **Interactive Sections**:
  - 🏠 Landing page with hero section
  - 👤 About me section
  - 💼 Projects showcase
  - 📧 Contact form with Formspree integration
  - 📄 Resume/CV viewer
  - 🤝 Consulting services
- **Bootstrap 5**: Utilizes Bootstrap for consistent styling
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **SEO Friendly**: Structured for search engine optimization

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets
│   └── assets/
│       └── img/            # Images and media files
├── src/
│   ├── components/         # React components
│   │   ├── About.jsx      # About section
│   │   ├── Consulting.jsx # Consulting services
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Landing.jsx    # Hero/landing section
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Projects.jsx   # Projects showcase
│   │   └── Resume.jsx     # Resume viewer
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── eslint.config.js       # ESLint configuration
├── vite.config.js         # Vite configuration
├── vercel.json            # Vercel deployment config
└── package.json           # Project dependencies
```

## 🛠️ Built With

- **[React](https://reactjs.org/)** - Frontend library
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Bootstrap 5](https://getbootstrap.com/)** - CSS framework
- **[Formspree](https://formspree.io/)** - Contact form handling
- **[ESLint](https://eslint.org/)** - Code linting

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🚢 Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

The `vercel.json` file ensures proper routing for the single-page application.

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production-ready files
```

## 🎨 Customization

To personalize this portfolio for your own use:

1. **Update Personal Information**: Edit the content in each component file
2. **Add Your Projects**: Modify [Projects.jsx](src/components/Projects.jsx)
3. **Configure Contact Form**: Update Formspree endpoint in [Contact.jsx](src/components/Contact.jsx)
4. **Replace Images**: Add your images to `public/assets/img/`
5. **Update Resume**: Add your resume link in [Resume.jsx](src/components/Resume.jsx)
6. **Modify Colors/Styles**: Update component styles or add custom CSS

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/portfolio/issues).

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/your-username/portfolio](https://github.com/your-username/portfolio)

---

⭐️ If you like this project, please give it a star on GitHub!
