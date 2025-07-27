# IGROTEK Game Development Portfolio

A professional portfolio website for IGROTEK game development company, showcasing Unity games with integrated WebGL player functionality.

## 🚀 Features

- **Professional Portfolio Design**: Modern, responsive design showcasing game development expertise
- **WebGL Game Integration**: Play games directly in the browser through modal windows
- **Responsive Layout**: Optimized for mobile, tablet, and desktop viewing
- **Contact Integration**: Multiple contact methods including Upwork, Freelancer, email, and phone
- **Easy Content Management**: Simple structure for adding new games and updating content

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with company branding
│   ├── GameCard.tsx        # Individual game showcase cards
│   ├── GameModal.tsx       # Modal for playing WebGL games
│   └── Contact.tsx         # Contact section with multiple channels
├── data/
│   └── games.ts           # Game data configuration
└── App.tsx                # Main application component
```

## 🎮 Adding WebGL Game Builds

### 1. Prepare Your Unity WebGL Build

1. In Unity, go to **File > Build Settings**
2. Select **WebGL** platform and click **Switch Platform**
3. Click **Build** and choose an output folder
4. Unity will create a folder containing:
   - `index.html`
   - `Build/` folder with game files
   - `TemplateData/` folder with assets

### 2. Add Game to Website

1. **Create Game Folder**: 
   ```
   public/games/your-game-name/
   ```

2. **Copy WebGL Files**:
   Copy all files from your Unity WebGL build into the game folder:
   ```
   public/games/your-game-name/
   ├── index.html
   ├── Build/
   │   ├── your-game-name.data
   │   ├── your-game-name.framework.js
   │   ├── your-game-name.loader.js
   │   └── your-game-name.wasm
   └── TemplateData/
       ├── favicon.ico
       ├── fullscreen-button.png
       ├── progress-bar-empty-dark.png
       ├── progress-bar-empty-light.png
       ├── progress-bar-full-dark.png
       ├── progress-bar-full-light.png
       ├── unity-logo-dark.png
       ├── unity-logo-light.png
       └── webgl-logo.png
   ```

3. **Update Games Data**:
   Edit `src/data/games.ts` and add your game:
   ```typescript
   {
     id: 'your-game-name',
     title: 'Your Game Title',
     description: 'Engaging description of your game...',
     thumbnail: 'https://your-thumbnail-url.jpg',
     category: 'Unity 3D', // or 'Unity 2D'
     type: 'Single Player', // See available types below
     webglPath: '/games/your-game-name/index.html'
   }
   ```

### 3. Game Types Available

- `Single Player`
- `Multiplayer`
- `2D`
- `3D`
- `Hypercasual`
- `Racing`
- `Educational`

## 🖼️ Updating Game Thumbnails

1. **Use High-Quality Images**: Recommended size 800x600px or 16:9 aspect ratio
2. **Free Stock Photos**: Use Pexels URLs for consistent, professional imagery
3. **Update in games.ts**: Replace the `thumbnail` URL in your game object

Example:
```typescript
thumbnail: 'https://images.pexels.com/photos/[photo-id]/pexels-photo-[photo-id].jpeg?auto=compress&cs=tinysrgb&w=800'
```

## 🏢 Updating Company Information

### Logo Replacement

1. **Header Component**: Edit `src/components/Header.tsx`
2. **Replace Icon**: Change the `<Gamepad2>` icon import and usage
3. **Add Image Logo**: Replace with `<img>` tag pointing to your logo file

```typescript
// Replace this:
<Gamepad2 className="h-8 w-8 text-white" />

// With this:
<img src="/path/to/your/logo.png" alt="IGROTEK Logo" className="h-8 w-8" />
```

### Contact Information

Edit `src/components/Contact.tsx` to update:

- **Email Address**: Change `contact@igrotek.com`
- **Phone Number**: Update `+1 (555) 123-4567`
- **Upwork Profile**: Update URL `https://www.upwork.com/freelancers/igrotek`
- **Freelancer Profile**: Update URL `https://www.freelancer.com/u/igrotek`
- **Company Location**: Modify address/location information

### Company Name and Branding

1. **Header**: Update company name in `src/components/Header.tsx`
2. **Footer**: Update branding in `src/App.tsx` footer section
3. **Page Title**: Update `index.html` title tag
4. **About Section**: Modify company description in `src/App.tsx`

## 🚀 Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Getting Started

1. **Clone/Download** the project
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```
4. **Build for Production**:
   ```bash
   npm run build
   ```

### File Structure for WebGL Games

```
public/
└── games/
    ├── racing-fury/
    │   ├── index.html
    │   ├── Build/
    │   └── TemplateData/
    ├── puzzle-master/
    │   ├── index.html
    │   ├── Build/
    │   └── TemplateData/
    └── your-new-game/
        ├── index.html
        ├── Build/
        └── TemplateData/
```

## 🎨 Customization

### Colors and Styling

- **Primary Colors**: Blue (#1e40af) and Orange (#f97316)
- **Styling**: Uses Tailwind CSS for consistent design
- **Responsive**: Mobile-first responsive design approach

### Adding New Sections

1. Create new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 📱 Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **WebGL Support**: Required for game functionality
- **Mobile**: Responsive design works on all mobile devices
- **Touch Support**: Games support touch controls when available

## 🔧 Troubleshooting

### WebGL Games Not Loading

1. **Check File Paths**: Ensure `webglPath` in games.ts matches actual file location
2. **Unity Build Settings**: Verify WebGL build was successful
3. **CORS Issues**: Games must be served from same domain
4. **Browser Console**: Check for JavaScript errors

### Contact Form

The contact form is currently frontend-only. To make it functional:

1. Add backend API endpoint
2. Integrate with email service (EmailJS, Formspree, etc.)
3. Update form submission handler in `src/components/Contact.tsx`

## 📈 Analytics and SEO

### Adding Analytics

1. **Google Analytics**: Add tracking code to `index.html`
2. **Game Analytics**: Track game plays and user engagement
3. **Contact Form**: Track form submissions and inquiries

### SEO Optimization

1. **Meta Tags**: Update `index.html` with relevant meta tags
2. **Game Descriptions**: Use descriptive text for better search visibility
3. **Image Alt Tags**: Ensure all images have descriptive alt attributes

## 🚀 Deployment

The website can be deployed to:

- **Netlify**: Drag and drop `dist` folder after `npm run build`
- **Vercel**: Connect GitHub repository for automatic deployments
- **GitHub Pages**: Enable pages in repository settings
- **Any Static Host**: Upload `dist` folder contents

### Important Notes

- WebGL games require significant bandwidth
- Consider CDN for better game loading performance
- Ensure hosting supports large file uploads for game builds

## 📞 Support

For questions about this portfolio template or Unity game development services, contact IGROTEK:

- **Email**: contact@igrotek.com
- **Upwork**: [IGROTEK Profile](https://www.upwork.com/freelancers/igrotek)
- **Freelancer**: [IGROTEK Profile](https://www.freelancer.com/u/igrotek)

---

*This portfolio website showcases the professional game development capabilities of IGROTEK, specializing in Unity engine development across all platforms and game types.*