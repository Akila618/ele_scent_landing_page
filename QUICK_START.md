# Quick Start Guide - ELE-SCENT Landing Page

## Getting Started (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will automatically open at `http://localhost:3000`

## Quick Image Replacement Guide

### Step 1: Prepare Your Images
- Logo: 40x40px (PNG, JPG, or SVG)
- Hero Image: 800x500px (PNG, JPG, or SVG)
- System Diagram: 600x400px (PNG, JPG, or SVG)
- Data Section BG: 1200x600px (PNG, JPG, or SVG)
- Team Members: 200x200px each (PNG, JPG, or SVG)

### Step 2: Replace Files
Copy your images to `public/images/` with these names:
```
public/images/
├── logo.svg              → Replace with your logo
├── hero-elephants.svg    → Replace with hero image
├── system-diagram.svg    → Replace with your diagram
├── data-section-bg.svg   → Replace with background
├── team-member-1.svg     → Replace with person 1
├── team-member-2.svg     → Replace with person 2
├── team-member-3.svg     → Replace with person 3
├── team-member-4.svg     → Replace with person 4
├── team-member-5.svg     → Replace with person 5
└── team-member-6.svg     → Replace with person 6
```

### Step 3: Update Component References (Optional)
If you want to change file names or formats, edit:
- **Logo**: `src/components/Header.jsx` (line ~8)
- **Hero**: `src/components/Hero.jsx` (line ~10)
- **Diagram**: `src/components/AboutProject.jsx` (line ~12)
- **Data BG**: `src/components/DataSection.jsx` (line ~9)
- **Team**: `src/components/ProjectTeam.jsx` (lines 2-28)

## Customization

### Edit Text Content
All text is in component files:
- **Header/Navigation**: `src/components/Header.jsx`
- **Hero Title**: `src/components/Hero.jsx`
- **About Section**: `src/components/AboutProject.jsx`
- **Vision/Mission**: `src/components/VisionMission.jsx`
- **Data Section Text**: `src/components/DataSection.jsx`
- **Team Members**: `src/components/ProjectTeam.jsx`
- **Footer**: `src/components/Footer.jsx`

### Edit Colors
Main colors are in CSS files:
- Primary Green: `#4a9d6f`
- Dark Green: `#2d5016`
- Light Green: `#c8e6c9`

Edit any `.css` file in `src/components/` to change colors.

## Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## File Structure Reference

```
src/
├── components/          ← Edit text, colors, and images here
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── AboutProject.jsx
│   ├── VisionMission.jsx
│   ├── DataSection.jsx
│   ├── ProjectTeam.jsx
│   ├── Footer.jsx
│   └── [Component].css
├── App.jsx
├── main.jsx
└── index.css
```

## Tips & Tricks

1. **Live Preview**: Changes save automatically when you edit files while `npm run dev` is running
2. **Mobile Testing**: Press F12 in your browser to open DevTools, then toggle device mode
3. **Image Optimization**: Use tools like TinyPNG to compress images before uploading
4. **Team Names**: Update team member names in the array in `ProjectTeam.jsx`

## Common Issues

### Images not showing?
- Check file paths in component files match your image names
- Ensure images are in `public/images/` folder
- Clear browser cache (Ctrl+Shift+Delete)

### Styles not updating?
- Stop dev server (Ctrl+C) and restart `npm run dev`
- Clear CSS cache in browser DevTools

### Port 3000 already in use?
- Edit `vite.config.js` and change the port number
- Or kill the process using port 3000

## Need Help?
Refer to the full README.md for detailed documentation.
