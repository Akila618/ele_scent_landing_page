# ELE-SCENT Landing Page

A modern, responsive landing page for the ELE-SCENT project - an intelligent environmental monitoring system designed to help reduce human-elephant conflict.

## Tech Stack

- **React 18.2.0** - UI framework
- **Vite 5.0.0** - Build tool and dev server
- **Node.js v22.17.1** - Runtime environment
- **CSS3** - Styling

## Project Structure

```
ele_scent_landing_page/
├── src/
│   ├── components/
│   │   ├── Header.jsx       - Navigation header
│   │   ├── Hero.jsx         - Hero section with main title
│   │   ├── AboutProject.jsx - Project description
│   │   ├── VisionMission.jsx- Vision and mission cards
│   │   ├── DataSection.jsx  - Data section with CTA button
│   │   ├── ProjectTeam.jsx  - Team member cards
│   │   ├── Footer.jsx       - Footer
│   │   └── [Component].css  - Component styles
│   ├── App.jsx              - Main app component
│   ├── App.css              - Global app styles
│   ├── main.jsx             - Entry point
│   └── index.css            - Global styles
├── public/
│   └── images/              - Placeholder images (SVG)
├── package.json             - Dependencies
├── vite.config.js           - Vite configuration
├── index.html               - HTML template
└── README.md                - This file
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

## Placeholder Images

All images are currently SVG placeholders. Replace them with your actual images:

### Image Files to Replace

| Location | Path | Recommended Size | Description |
|----------|------|-----------------|-------------|
| Logo | `public/images/logo.svg` | 40x40px | ELE-SCENT logo |
| Hero Image | `public/images/hero-elephants.svg` | 800x500px | Main hero background image with elephants |
| System Diagram | `public/images/system-diagram.svg` | 600x400px | ELE-SCENT system architecture diagram |
| Data Section BG | `public/images/data-section-bg.svg` | 1200x600px | Background for data access section |
| Team Members (6 files) | `public/images/team-member-{1-6}.svg` | 200x200px | Team member photos |

### How to Replace Images

1. **Save your images** in the `public/images/` directory with the same filenames
2. Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`
3. **Update component references** if you change filenames:
   - Header.jsx: `logo.svg`
   - Hero.jsx: `hero-elephants.svg`
   - AboutProject.jsx: `system-diagram.svg`
   - DataSection.jsx: `data-section-bg.svg`
   - ProjectTeam.jsx: `team-member-{1-6}.svg`

### Example: Replacing the Logo

1. Save your logo as `public/images/logo.png` (or any supported format)
2. Update Header.jsx:
   ```jsx
   <img src="/images/logo.png" alt="ELE-SCENT Logo" className="logo-img" />
   ```

## Customization

### Colors
Edit the CSS files to customize colors. Key color variables:
- Primary Green: `#4a9d6f`
- Dark Green: `#2d5016`
- Light Green: `#c8e6c9`, `#a5d6a7`
- Light Gray: `#f8f9fa`

### Content
All text content can be edited in the respective component files (`.jsx`).

### Team Members
Edit the `teamMembers` array in `ProjectTeam.jsx` to update team member names and roles.

## Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1200px and above)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features

✅ Responsive design  
✅ Smooth scrolling navigation  
✅ Hover effects on interactive elements  
✅ Semantic HTML  
✅ Optimized performance with Vite  
✅ Easy image replacement with placeholders  

## Performance

- Vite provides fast hot module replacement (HMR)
- Production build is optimized for minimal bundle size
- Images can be further optimized using tools like:
  - ImageOptim
  - TinyPNG
  - WebP conversion tools

## Future Enhancements

Consider adding:
- Contact form functionality
- Dark mode toggle
- Animations with Framer Motion
- Blog section
- Multi-language support
- SEO optimization
- Analytics integration

## License

© 2025 ELE-SCENT. All rights reserved.

## Support

For questions or issues, please contact the ELE-SCENT team.
