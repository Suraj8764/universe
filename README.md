# The Friendship Universe 💗 — Dedicated to Ritu & Smurti

> *"Two souls, countless memories, one beautiful friendship."*

A bespoke, interactive digital friendship gift built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a soft pastel universe aesthetic (pastel pinks, lavender, soft purple, and cream white) featuring floating starlight particles, interactive Polaroid photo memories, romantic "Open When" envelopes, a friendship compatibility quiz, and a grand celebratory finale.

---

## ✨ Features & Experiences

### 🌌 1. Welcome / Hero Section
- **Constellation Theme**: Opening banner welcoming visitors to "Our Little Universe".
- **Dynamic Floating Stardust**: HTML5 Canvas particle system emitting soft pink and lavender floating hearts and stars.
- **Glassmorphism Pill Navigation**: Smooth scrolling links to all chapters with an integrated music player.
- **Primary CTA**: *"Enter Our Little World"* with graceful animated scroll.

### 📖 2. Our Friendship Story (Timeline)
- **Interactive Chronological Milestones**:
  1. *Chapter I: How the Friendship Started* ("The First Hello")
  2. *Chapter II: First Memorable Moment* ("The Day Everything Clicked")
  3. *Chapter III: Funniest Memories* ("Uncontrollable Giggles & Inside Jokes")
  4. *Chapter IV: Special Occasions* ("Midnight Countdowns & Celebrations")
  5. *Chapter V: Unforgettable Moments* ("Through Thick and Thin")
- **Expandable Secret Reflections**: Interactive notes attached to each milestone.
- **100% Configurable**: All dates, titles, quotes, and memories are configured in `data/friendship.ts`.

### 📸 3. Memory Wall (Polaroid Photo Gallery)
- **Authentic Polaroid Aesthetic**: Natural tilt rotations (`-4°` to `+4°`), washi tape decorations, and handwriting font captions.
- **Interactive Lightbox**: Click any Polaroid to reveal the high-resolution artwork or photo, date, location pin, and the backstory.
- **Category Filter**: Filter memories by *All Moments*, *Candid Laughs*, *Adventures*, and *Celebrations*.
- **Ready for Real Photos**: Built-in artistic pastel SVG illustrations out of the box, with simple drag-and-drop replacement for real JPG/PNG photos.

### 💌 4. "Open When..." Letters
- **6 Essential Emotional Categories**:
  1. *Open when you need a smile.*
  2. *Open when you feel sad.*
  3. *Open when you miss your best friend.*
  4. *Open when you want to laugh.*
  5. *Open when life gets difficult.*
  6. *Open when you want to remember your friendship.*
- **Realistic Envelope Experience**: Color-coded envelopes with wax seal heart stamps.
- **Handwritten Letter Modal**: Opens a vintage parchment note featuring warm greetings, heartfelt paragraphs, signature, and close controls.

### 🎭 5. Friendship Quiz
- **6 Classic Best-Friend Debates**:
  - *Who is more dramatic?*
  - *Who laughs the most?*
  - *Who is always late?*
  - *Who gives the best advice?*
  - *Who is more emotional?*
  - *Who is the biggest foodie?*
- **Interactive Choice Cards**: Pick between *Ritu 🌸*, *Smurti 💜*, or *Both of Us! 👯‍♀️*.
- **Dynamic Result Screen**: Shows the "Celestial Soulmates" archetype, score breakdown, compatibility metrics, and celebration confetti.

### 🌟 6. Our Special Moments
- Dedicated glassmorphism cards celebrating:
  - *Random Laughter*
  - *Endless Conversations*
  - *Silly Fights*
  - *Secret Sharing*
  - *Unforgettable Memories*

### ❤️ 7. Final Surprise
- **"One Last Surprise" CTA Button**: Glowing stardust aura with heartbeat animation.
- **Full-Screen Celebration Takeover**: Multi-stage confetti cannon burst and floating heart shower.
- **Emotional Dedication**:
  > *"Some friendships are too beautiful to be explained in words.*  
  > *They make ordinary days special, turn little moments into unforgettable memories, and make life a little more beautiful.*  
  > *Ritu & Smurti, may your friendship always remain this special.*  
  > *Keep smiling. Keep laughing. Keep creating memories.*  
  > *With lots of love ❤️"*

### 🎵 8. Audio Experience
- **User-Controlled Music Toggle**: Audio never autoplays; the user is always in control.
- **Built-in Web Audio API Synthesizer**: Generates a gentle music-box lullaby in the pentatonic scale (zero broken URLs or external network requirements).
- **MP3 Track Support**: Drop any audio file named `friendship-melody.mp3` into `public/music/` and the player seamlessly plays it with volume and mute controls.

---

## 🛠️ Project Architecture

```
frindsip/
├── app/
│   ├── globals.css                # Pastel theme, glassmorphism, keyframes, typography
│   ├── layout.tsx                 # Root layout, metadata & SEO
│   └── page.tsx                   # Master page orchestrating all sections
├── components/
│   ├── BackgroundMusic.tsx        # Web Audio API chime synthesizer & MP3 audio controller
│   ├── FinalSurprise.tsx          # Fullscreen celebration modal with confetti explosion
│   ├── FloatingHeartsCanvas.tsx   # Canvas-based 60fps floating stardust & hearts
│   ├── Footer.tsx                 # Closing tribute and navigation
│   ├── FriendshipQuiz.tsx         # Interactive friendship quiz with result archetype
│   ├── FriendshipStory.tsx        # Vertical chronological milestone timeline
│   ├── Hero.tsx                   # Opening celestial hero section
│   ├── MemoryWall.tsx             # Polaroid photo cards & interactive modal
│   ├── Navbar.tsx                 # Responsive floating pill header & drawer
│   ├── OpenWhenLetters.tsx        # 6 animated wax-seal envelopes & letter modals
│   └── SpecialMoments.tsx         # 5 highlight cards for laughter, secrets, etc.
├── data/
│   └── friendship.ts              # Single source of truth for all content & memories
├── public/
│   ├── images/                    # Drop your JPG/PNG photos here
│   │   └── README.md              # Photo setup guide
│   └── music/                     # Drop your custom MP3 track here
│       └── README.md              # Audio setup guide
├── package.json
└── tsconfig.json
```

---

## 🎨 How to Personalize the Content

All names, milestones, quotes, letters, and quiz questions are stored in [data/friendship.ts](file:///Users/surajsahoo/Documents/frindsip/data/friendship.ts).

### 1. Adding Real Photos
1. Copy your photos into `public/images/` (e.g. `ritu-smurti-1.jpg`).
2. Open `data/friendship.ts` and set `imagePath`:
   ```typescript
   {
     id: "polaroid-1",
     title: "Golden Hour Giggles",
     date: "October Sunset",
     location: "Our Favorite Hillside",
     imagePath: "/images/ritu-smurti-1.jpg", // Real photo path
     ...
   }
   ```

### 2. Adding a Custom Song
Place an MP3 file at `public/music/friendship-melody.mp3`. The player will automatically switch to your audio file!

---

## 💻 Local Development

1. Clone or navigate to the repository:
   ```bash
   cd /Users/surajsahoo/Documents/frindsip
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment to Vercel

The website is fully configured and optimized for zero-config deployment on Vercel:

### Option A: Via GitHub (Recommended)
1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: The Friendship Universe for Ritu & Smurti"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New"** > **"Project"**.
4. Import your GitHub repository.
5. Keep default settings (`Framework: Next.js`, `Build Command: npm run build`).
6. Click **"Deploy"**. Your live URL will be ready in under a minute!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts to link and deploy directly from your terminal.

---

*Crafted with infinite love for Ritu & Smurti 💗*
