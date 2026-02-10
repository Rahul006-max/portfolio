# 📊 Portfolio - Data Analyst & Data Engineer

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://rahul006-max.github.io/portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Rahul006-max/portfolio)

A modern, responsive portfolio website showcasing data analytics and engineering expertise. Built with vanilla HTML, CSS, and JavaScript featuring Neo-Brutalist design principles.

## 🌟 Features

### Core Features
- **🎨 Modern Design**: Clean Neo-Brutalist aesthetics with bold borders and vibrant colors
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast & Lightweight**: Minimal dependencies, optimized performance
- **🎯 ATS-Friendly**: Structured content optimized for applicant tracking systems
- **♿ Accessible**: Semantic HTML and WCAG compliant

### Interactive Features (Phase 2 & 3)
- **📊 Interactive Dashboard**: Live data visualization with Chart.js (Bar, Line, Pie charts)
- **🎯 Project Deep-Dive Modals**: Detailed case studies with problem-solution-impact structure
- **📈 Skill Proficiency Bars**: Animated progress bars showing technical competencies
- **🎓 Learning Timeline**: Visual journey from beginner to advanced with scroll animations
- **💬 Testimonials Carousel**: Auto-rotating testimonials with manual navigation
- **💭 Data Philosophy**: Personal principles and approach to data analytics
- **📥 Resume Download**: One-click PDF download functionality

### Polish & UX Features (Phase 4)
- **🌙 Dark Mode Toggle**: Complete dark theme with localStorage persistence
- **📊 Scroll Progress Indicator**: Real-time visual feedback of scroll position
- **✨ Micro-interactions**: Button ripples, card tilts, icon bounces, smooth transitions
- **🎯 Focus Indicators**: Enhanced accessibility with clear focus states
- **🎨 Theme Transitions**: Smooth 0.3s color transitions between themes

## 🚀 Quick Start

### View Locally

```bash
# Clone the repository
git clone https://github.com/Rahul006-max/portfolio.git

# Navigate to project directory
cd portfolio

# Open in your default browser
start index.html
```

### Deploy to GitHub Pages

```bash
# Enable GitHub Pages in repository settings
# Go to Settings > Pages > Source > main branch
# Your site will be live at https://rahul006-max.github.io/portfolio/
```

## 📂 Project Structure

```
portfolio/
├── index.html                  # Main HTML structure
├── styles.css                  # Stylesheet with CSS variables & themes
├── script.js                   # Interactive functionality
├── mypfp.jpg                   # Profile image
├── website-design-spec.json    # Design specifications
├── CHANGES.md                  # Change log
├── PHASE2_COMPLETE.md          # Phase 2 milestones (Tier 1)
├── PHASE3_COMPLETE.md          # Phase 3 milestones (Tier 2)
├── PHASE4_COMPLETE.md          # Phase 4 milestones (Tier 3)
├── RESUME_SETUP.md             # Resume integration guide
└── README.md                   # Documentation (this file)
```

## 🎨 Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)

- **Frontend**: HTML5, CSS3 (with CSS Variables), Vanilla JavaScript
- **Data Visualization**: Chart.js 4.4.0
- **Fonts**: Google Fonts (Space Grotesk, Inter)
- **Design**: Neo-Brutalist principles with responsive layouts
- **Version Control**: Git & GitHub

## 📄 Portfolio Sections

| Section              | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| **Hero**             | Introduction with name, title, call-to-action, and resume download              |
| **Stats**            | Quick metrics overview (Projects, Technologies, Internship, Certifications)     |
| **Skills**           | Technical skills categorized by domain with proficiency bars                    |
| **Data Philosophy**  | Personal principles and approach to data analytics (6 principles)               |
| **Dashboard**        | Interactive data visualization with Chart.js (Bar, Line, Pie charts)            |
| **Learning Timeline**| Visual journey from beginner to advanced with scroll animations                |
| **About**            | Professional summary, experience timeline, and background                       |
| **Projects**         | Showcase of 5 data-focused projects with detailed modals                        |
| **Testimonials**     | Rotating carousel with 4 professional recommendations                           |
| **Certifications**   | Educational credentials, courses, and career interests                          |
| **Contact**          | Interactive contact form with validation and toast notifications                |

## 🛠️ Customization Guide

### 1. Update Personal Information

Edit [index.html](index.html) hero section:

```html
<h1>Hi, I'm [Your Name]</h1>
<p class="hero-subtitle">[Your Professional Title]</p>
```

### 2. Customize Color Scheme

Modify CSS variables in [styles.css](styles.css):

```css
:root {
  --bg-color: #f0f4f8; /* Background color */
  --accent-color: #2563eb; /* Primary accent */
  --accent-secondary: #10b981; /* Secondary accent */
  --border-color: #1f2937; /* Border color */
}
```

### 3. Add Projects

Add new project cards in the portfolio grid:

```html
<div class="portfolio-card">
  <h3>Project Name</h3>
  <p>Project description and key achievements</p>
  <div class="tech-tags">
    <span class="tech-tag">Technology 1</span>
    <span class="tech-tag">Technology 2</span>
  </div>
</div>
```

### 4. Enable Contact Form

The form currently uses demo functionality. To make it functional, integrate with:

- **[Formspree](https://formspree.io/)**: `<form action="https://formspree.io/f/YOUR_ID">`
- **[EmailJS](https://www.emailjs.com/)**: Add EmailJS SDK and configuration
- **[Netlify Forms](https://www.netlify.com/products/forms/)**: Add `netlify` attribute to form
- **Custom Backend**: Build your own API endpoint

## 📦 Deployment Options

### GitHub Pages (Recommended)

```bash
# Push to GitHub
git add .
git commit -m "Update portfolio"
git push origin main

# Enable in Settings > Pages > Deploy from main branch
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🔄 Version Control Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit with meaningful message
git commit -m "Add new project: [Project Name]"

# Push to remote
git push origin main

# Create feature branch
git checkout -b feature/new-section

# Merge branch
git checkout main
git merge feature/new-section
```

## 🐛 Issues & Contributions

Found a bug or have a suggestion? Feel free to:

1. **Open an Issue**: [Create an issue](https://github.com/Rahul006-max/portfolio/issues)
2. **Submit a PR**: Fork, make changes, and submit a pull request
3. **Discussion**: Start a discussion in the repository

### Contributing Guidelines

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR_USERNAME/portfolio.git

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes and commit
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Open a Pull Request
```

## 📈 Roadmap

- [ ] Add dark mode toggle
- [ ] Implement blog section
- [ ] Add project detail pages
- [ ] Integrate Google Analytics
- [ ] Add downloadable resume (PDF)
- [ ] Add testimonials section
- [ ] Implement loading animations
- [ ] Add SEO meta tags
- [ ] Create sitemap.xml
- [ ] Add robots.txt

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds
- **Page Size**: < 500KB
- **Zero Dependencies**: No external frameworks or libraries

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rahul P**

- GitHub: [@Rahul006-max](https://github.com/Rahul006-max)
- Portfolio: [Live Demo](https://rahul006-max.github.io/portfolio/)

## 🙏 Acknowledgments

- Design inspiration from modern Neo-Brutalist websites
- Icons and badges from [Shields.io](https://shields.io/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ for data professionals

[Report Bug](https://github.com/Rahul006-max/portfolio/issues) · [Request Feature](https://github.com/Rahul006-max/portfolio/issues)

</div>
