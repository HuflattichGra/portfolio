# Junran Tao - Portfolio

A modern, minimalist portfolio website showcasing full-stack development and AI research projects.

## 🎨 Design

Built with a **Morandi color palette** emphasizing elegance and professionalism:
- Clean white background with soft sage, dust blue, and mauve accents
- Responsive design for all devices
- Smooth animations and transitions

## 🚀 Tech Stack

### Frontend
- **Next.js 15.1.6** - React framework with Pages Router
- **React 19** - UI components
- **Tailwind CSS 3.4.1** - Utility-first styling
- **Framer Motion 12** - Smooth animations

### Typography
- **Playfair Display** - Elegant serif for headings
- **Inter** - Clean sans-serif for body text

### Deployment
- **Vercel** - Hosting and continuous deployment

## 📁 Project Structure

```
junran-portfolio/
├── components/          # Reusable React components
│   ├── Navigation.js
│   ├── ThesisSection.js
│   ├── EvidenceSection.js
│   ├── CTASection.js
│   └── ...
├── data/               # Portfolio data
│   ├── portfolio.js
│   └── caseStudies.js
├── pages/              # Next.js pages
│   ├── index.js
│   ├── _app.js
│   └── case/[slug].js  # Dynamic project detail pages
├── public/             # Static assets
└── styles/             # Global styles
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/HuflattichGra/portfolio.git

# Navigate to project directory
cd junran-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Key Features

- **Dynamic Project Pages** - Detailed case studies with metrics and tech stacks
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Performance Optimized** - Fast loading with Next.js optimization
- **SEO Friendly** - Meta tags and structured content
- **Smooth Animations** - Framer Motion for engaging UX

## 🎯 Sections

1. **Hero** - Introduction with availability status and core competencies
2. **Projects** - Showcase of full-stack and AI research work
3. **Contact** - Professional contact information

## 📝 Customization

### Update Personal Information
Edit `data/portfolio.js`:
```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    email: "your.email@example.com",
    // ...
  }
}
```

### Add New Projects
Edit `data/caseStudies.js`:
```javascript
export const caseStudies = [
  {
    id: 1,
    slug: "project-slug",
    title: "Project Title",
    // ...
  }
]
```

## 📄 License

© 2025 Junran Tao. All rights reserved.

## 🔗 Links

- **Live Site**: [https://junran-portfolio.vercel.app](https://junran-portfolio.vercel.app)
- **GitHub**: [https://github.com/HuflattichGra/portfolio](https://github.com/HuflattichGra/portfolio)
- **LinkedIn**: [Junran Tao](https://www.linkedin.com/in/junran-tao)

