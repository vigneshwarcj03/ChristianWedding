# ChristianWedding

A modern wedding invitation website built with Next.js and React. Includes a hero section with a 3D butterfly animation powered by Three.js, @react-three/fiber, and @react-three/drei.

## Project Overview

- Framework: Next.js 16+ (App Router)
- UI: Tailwind CSS
- Animations: Framer Motion
- 3D: three, @react-three/fiber, @react-three/drei
- Model: `public/butterfly.glb`

## Features

- Full-screen hero with scrolling parallax effects
- Animated names and event details
- Clean, responsive typography and layout
- 3D butterfly flying and roaming in hero section
- Semantically structured components (`Hero`, `IntroScreen`, `Events`, etc.)

## Installation

```bash
npm install
# or yarn
# or pnpm install
```

Install 3D dependencies explicitly (needed for butterfly scene):

```bash
npm install three @react-three/fiber @react-three/drei
```

## Running Locally

```bash
npm run dev
```

Open: http://localhost:3000

## 3D Butterfly Setup

Component: `src/components/Hero.tsx`

- `Butterfly` loads `public/butterfly.glb` using `useGLTF`.
- `useFrame` updates `position` and `rotation` every frame for a looping flight path.
- `ButterflyCanvas` sets up a `Canvas` with multiple lights and a camera view.

If you want to tweak behavior:

- `speed` in `Butterfly` controls movement pace.
- `position` equations control roaming amplitude.
- `scale` controls model size.
- `camera` keys in `ButterflyCanvas` define scene framing.

## Production Build

```bash
npm run build
npm run start
```

## Debugging

- Ensure `public/butterfly.glb` exists and is valid.
- If `useGLTF` errors, delete `.next` and rebuild.
- Check console for asset loading issues.

## Deploy

- Deploy on Vercel (recommended) or any Node.js host.
- Must support static asset serving for `butterfly.glb`.

## Project Structure

```
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    Hero.tsx
    IntroScreen.tsx
    Events.tsx
    Venue.tsx
    Gallery.tsx
    RSVP.tsx
    Countdown.tsx
    StorySlider.tsx
    Footer.tsx
    PetalsBackground.tsx
    GlobalEffects.tsx
`public/`
  butterfly.glb
  file.svg
  globe.svg
  IntroScreen.png
```

## Notes

- This repository is user-tailored for a wedding invite experience.
- Keep animation complexity moderate to preserve performance across devices.
