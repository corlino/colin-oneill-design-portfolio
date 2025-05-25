# Alex Chen - UX Designer Portfolio

A modern, responsive portfolio website showcasing UX/UI design projects and skills.

## Features

- 🎨 Modern design with blue/green color scheme
- 🌙 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design for all devices
- 🖼️ Interactive project galleries with functional carousels
- ⚡ Smooth scrolling and animations
- ♿ Accessibility-focused with WCAG compliance
- 🚀 Fast loading and optimized performance

## Technologies Used

- HTML5
- CSS3 (Tailwind CSS via CDN)
- Vanilla JavaScript
- Lucide Icons
- Modern CSS features (Grid, Flexbox, Custom Properties)

## Project Structure

\`\`\`
portfolio/
├── index.html          # Main HTML file
├── js/
│   └── main.js         # JavaScript functionality
├── css/
│   └── styles.css      # Additional custom styles
├── images/             # Project images and assets
├── package.json        # Project configuration
└── README.md          # Project documentation
\`\`\`

## Getting Started

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/alexchen-design/portfolio.git
   cd portfolio
   \`\`\`

2. Install dependencies (optional, for development server):
   \`\`\`bash
   npm install
   \`\`\`

3. Start development server:
   \`\`\`bash
   npm start
   \`\`\`
   Or simply open `index.html` in your browser.

## Customization

### Adding New Projects

Edit the `projects` array in `js/main.js`:

\`\`\`javascript
const projects = [
    {
        id: 7,
        title: "Your Project Title",
        category: "Project Category",
        description: "Project description...",
        image: "/path/to/main-image.jpg",
        images: [
            "/path/to/image1.jpg",
            "/path/to/image2.jpg",
            "/path/to/image3.jpg"
        ],
        // ... other project properties
    }
];
\`\`\`

### Updating Personal Information

1. Update the hero section in `index.html`
2. Modify contact information in the contact section
3. Update social media links
4. Replace placeholder images with your actual photos

### Customizing Colors

The color scheme uses CSS custom properties and Tailwind classes. To change colors:

1. Update the Tailwind config in `index.html`
2. Modify CSS custom properties in the `<style>` section
3. Update gradient classes throughout the HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images with proper sizing
- Minimal JavaScript bundle
- CSS optimizations for smooth animations
- Lazy loading for better performance

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build` (optional)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

### Vercel

1. Import your GitHub repository to Vercel
2. Configure build settings (if needed)
3. Deploy with automatic deployments on push

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

- Email: alex.chen.design@email.com
- LinkedIn: [linkedin.com/in/alexchen-ux](https://linkedin.com/in/alexchen-ux)
- GitHub: [github.com/alexchen-design](https://github.com/alexchen-design)
\`\`\`

Perfect! I've created a complete HTML portfolio with all the functionality from the React version. Here's what I've included:

## 🎯 **Complete HTML Portfolio Features:**

### **📁 File Structure:**
- **`index.html`** - Main HTML file with complete structure
- **`js/main.js`** - All JavaScript functionality
- **`css/styles.css`** - Additional custom styles
- **`package.json`** - Project configuration
- **`README.md`** - Complete documentation

### **🎠 Fully Functional Carousels:**
- **Working image navigation** with arrow buttons
- **Clickable indicators** for direct image access
- **Keyboard navigation** (arrow keys, escape)
- **Smooth transitions** between images
- **Automatic reset** when opening new projects

### **🎨 Blue/Green Color Scheme:**
- **Consistent theming** throughout all components
- **Dark/light mode** with localStorage persistence
- **Responsive gradients** and hover effects
- **Accessibility-compliant** color contrasts

### **📱 Responsive Design:**
- **Mobile-first** approach
- **Touch-friendly** interactions
- **Adaptive layouts** for all screen sizes
- **Optimized performance** on mobile devices

### **⚡ Modern Features:**
- **Smooth scrolling** navigation
- **Active section** highlighting
- **Theme persistence** across sessions
- **Contact form** handling
- **Performance optimizations**

### **♿ Accessibility:**
- **Semantic HTML** structure
- **ARIA labels** and roles
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support

The HTML version maintains all the functionality of the React version while being completely self-contained and easy to deploy to any static hosting platform!
