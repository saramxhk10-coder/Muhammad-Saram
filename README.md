# Muhammad Saram - Portfolio Website

A modern, premium personal portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## Features

- **Dark Modern Theme** with elegant gradients and glassmorphism effects
- **Smooth Animations** powered by Framer Motion
- **Fully Responsive** for mobile, tablet, and desktop
- **Particle Background** in the hero section
- **Scroll Progress Indicator** at the top
- **Sticky Navbar** with active section highlighting
- **Animated Loading Screen**
- **Interactive Timeline** for experience and education
- **Animated Skill Progress Bars**
- **Contact Form** with validation
- **SEO-friendly** structure

## Tech Stack

- React 18
- Tailwind CSS 3
- Framer Motion
- Lucide React Icons
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
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

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── ScrollProgress.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Timeline.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   └── useScrollProgress.js
│   ├── data/
│   │   └── resumeData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

All content is driven by the `src/data/resumeData.js` file. Update the data there to personalize the portfolio with your own information.

### Adding Your Photo

1. Place your profile photo in the `public/` folder as `avatar.jpg`
2. The hero section will automatically display it

### Updating Colors

Edit the `tailwind.config.js` file to customize the color scheme.

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with by Muhammad Saram
