# Habit Tracker

A beautiful, minimalist personal productivity tracker with a warm, inviting design. Track daily and weekly habits, maintain streaks, and stay motivated with visualizations and encouragement.

## Features

- 🎯 **8 Habit Categories**: Team Updates, Be Yourself, Daily Thoughts, Work, Skills, Checklist, End Day Thoughts, Reading
- 🔥 **Streak Tracking**: Track consecutive days of habit completion with flame indicators
- 📊 **Progress Visualization**: See your completion rate with progress bars and stats cards
- 📅 **Weekly View**: Visual calendar showing completed habits throughout the week
- 🌙 **Dark Mode**: Elegant dark mode toggle for comfortable use anytime
- 🎨 **Minimalist Design**: Warm color palette (beige, purple, orange) with elegant SVG illustrations
- 💾 **Local Storage**: Your habits and preferences are saved locally in your browser
- 📱 **Responsive**: Beautifully designed for mobile, tablet, and desktop

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom theming
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui
- **State Management**: React Hooks + Local Storage
- **Routing**: Wouter

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd habit-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5000`

## Usage

### Adding Habits

1. Click on any category card to open the habit modal
2. Enter a habit name, description, and frequency (Daily/Weekly)
3. Click "Add Habit"

### Tracking Habits

1. Check off completed habits in the modal
2. Watch your streaks grow!
3. View completion stats in the dashboard

### Managing Your Profile

1. Click on your profile avatar in the top right
2. Select "Profile & Settings"
3. Edit your name, email, and daily goal
4. Click "Save Settings"

### Customization

- **Dark Mode**: Toggle using the moon/sun icon in the header
- **Daily Goal**: Set your target number of habits per day in settings
- **Personal Info**: Update your name and email in settings

## Project Structure

```
habit-tracker/
├── client/
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── lib/              # Utilities and helpers
│   │   ├── App.tsx           # Main app component
│   │   └── index.css         # Global styles
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── vite.config.ts
```

## Design

The app features a carefully curated color palette:
- **Primary**: Purple (#C9A7D8)
- **Secondary**: Orange (#FF6B3D)
- **Accent**: Gold (#D4A056)
- **Background**: Warm Beige (#F5E6D3)

Each category card includes minimalist SVG illustrations:
- 📋 Team Updates: Document stack
- 🫂 Be Yourself: Graceful hand
- 🍃 Daily Thoughts: Leaf pattern
- 🎯 Work: Target circles
- 🌿 Skills: Fern branches
- ⭐ Checklist: Starburst
- 🏛️ End Day: Arch gateway
- 📖 Reading: Open book

## Deployment

### GitHub Pages

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Update vite.config.ts** (if deploying to a subdirectory):
   ```typescript
   export default {
     base: '/<repository-name>/',
     // ... rest of config
   }
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Select `main` branch and `/dist` folder
   - Click Save

### Vercel

1. **Deploy with one click**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Follow the prompts** to connect your GitHub repository

### Self-Hosted

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting service

3. **Configure server** to serve `index.html` for all routes (for client-side routing)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Making Changes

1. Edit components in `client/src/components/`
2. Add pages in `client/src/pages/`
3. Styles are in `client/src/index.css`
4. Changes auto-reload during development

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Data Storage

All habit data is stored in your browser's local storage. Your data:
- ✅ Stays private on your device
- ✅ Persists across browser sessions
- ✅ Can be exported by clearing browser cache
- ⚠️ Will be lost if browser cache is cleared

**Tip**: Regularly export your data or consider syncing to cloud storage.

## Future Enhancements

- Cloud sync for cross-device access
- Data export/import (CSV, JSON)
- Habit templates
- Social sharing of achievements
- Push notifications
- Statistics and analytics dashboard
- Goal setting and milestone tracking

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions:
1. Check the [GitHub Issues](https://github.com/yourusername/habit-tracker/issues)
2. Create a new issue with a clear description

## Acknowledgments

- Built with [Shadcn UI](https://shadcn-ui.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Happy tracking! Build better habits, one day at a time.** 🚀
