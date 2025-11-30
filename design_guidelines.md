# Design Guidelines: Personal Productivity Tracker

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Notion's clean productivity interfaces combined with the elegant, warm aesthetic provided in your design mockups. The design emphasizes calm focus, gentle motivation, and visual warmth.

## Core Visual Identity

### Color Palette (from provided designs)
- **Primary Background**: Warm beige (#F5E6D3, #F2E8DC)
- **Accent Purple**: Soft lavender (#C4A4D4, #D9C7E5) for important actions
- **Accent Orange**: Warm terracotta (#FF6B3D, #E8866F) for streaks and achievements
- **Accent Gold**: Mustard (#D4A056) for progress indicators
- **Light Blue**: Pastel blue (#D4E7F5) for secondary elements
- **Text**: Deep brown (#4A3F35) for primary text, lighter browns for secondary

### Typography
- **Primary Font**: Elegant serif font (Playfair Display or similar) for headings and welcome messages
- **Body Font**: Clean sans-serif (Inter or Poppins) for interface text
- **Hierarchy**: 
  - Hero text: 3xl to 5xl, serif, elegant spacing
  - Card titles: lg to xl, medium weight
  - Body text: base, regular weight
  - Labels: sm, uppercase tracking

## Layout System

### Spacing Units
Tailwind spacing: **2, 3, 4, 6, 8, 12, 16** for consistent rhythm throughout

### Welcome Screen
- Full-screen centered layout with beige background
- Logo placed at top center (from image 2)
- "Hello There" greeting in large serif typography (matching image 1 aesthetic)
- Soft fade-in animation on load
- "Get Started" button in purple accent with rounded corners

### Dashboard Layout
- **Header**: Logo left, user profile/settings right, date display center
- **Main Grid**: Card-based layout using 2-3 columns on desktop, single column on mobile
- **Categories**: Be Yourself, Daily Thoughts, Work, Skills, Checklist, End Day Thoughts, Team Updates

## Component Library

### Interactive Cards
- Soft rounded corners (rounded-2xl)
- Gentle drop shadow (shadow-md)
- White/off-white background overlaying beige
- Hover: Slight lift effect (translate-y and shadow increase)
- Each card shows icon, title, quick stats (e.g., "3/5 completed")
- Click opens modal overlay

### Modal System
- Backdrop: Warm beige overlay with blur
- Modal: Centered white card with generous padding (p-8)
- Close button: Top right, purple accent
- Content sections: Add new habit, view existing, edit/delete options
- Form inputs: Rounded borders, purple focus rings

### Habit Tracker Elements
- **List Items**: Checkbox left, habit name, streak count right
- **Checkboxes**: Custom styled with purple fill when checked, orange glow on streak milestones
- **Streak Display**: Flame icon + number in orange, celebratory animation on milestones

### Progress Bars
- Height: h-2 to h-3
- Background: Light beige
- Fill: Gradient from gold to orange
- Rounded ends (rounded-full)
- Percentage label above in small text
- Animate fill on load/update

### Motivational Messages
- Toast-style notifications appearing from top
- Soft purple background with white text
- Icons matching achievement type
- Auto-dismiss after 4-5 seconds
- Triggered on: Daily completion, streak milestones, perfect weeks

### Buttons
- Primary: Purple background, white text, rounded-lg, px-6 py-3
- Secondary: Purple outline, purple text
- Icon buttons: Circular, hover state with background fill
- Blurred background on image overlays (if needed)

### Date/Time Reminders
- Small badge notifications with orange accent
- Popup reminder cards with time, task description, snooze/dismiss options
- Bell icon with animated ring on new reminder

## Responsive Behavior

### Mobile (< 768px)
- Single column card grid
- Stack navigation vertically
- Larger touch targets (min 44px)
- Bottom navigation bar for quick access

### Tablet (768px - 1024px)
- 2-column card grid
- Side navigation drawer

### Desktop (> 1024px)
- 3-column card grid
- Persistent sidebar with category quick links
- Wider modals (max-w-2xl)

## Interaction Patterns
- Card click: Smooth scale and modal fade-in
- Checkbox toggle: Quick spring animation
- Progress bar: Ease-out fill animation
- Minimal use of animations—only for feedback and delight
- Focus states: Purple ring, increased shadow

## Data Visualization
- Weekly view: 7-day grid showing completion status (checkmarks in circles)
- Monthly calendar: Heatmap style with orange intensity based on daily completion rate
- Streak graph: Simple line chart with orange gradient fill

## Images
No large hero images needed. Use:
- Small illustrative icons for each category card (line-art style in purple/orange)
- Logo image from provided file 2
- Welcome screen uses provided design 1 aesthetic (no background image, just color)

This design balances elegance with functionality, creating a calming yet motivating productivity experience with your warm, sophisticated color palette.