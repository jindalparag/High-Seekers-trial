# HIGH SEEKERS — Adventure Travel Platform

A responsive React + Vite frontend foundation for a premium adventure travel brand.

## Requirements

- Node.js 18 or newer
- npm (included with Node.js)

## Run locally

Open this project folder in VS Code, then run these commands in the integrated terminal:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Do not open `index.html` directly in the browser.

## Production build

```bash
npm run build
npm run preview
```

## What's included

- Responsive editorial-style homepage and navigation/footer
- Explore page with search, category, destination, difficulty, duration, season, budget filters and sorting
- Dynamic adventure detail pages from centralized sample data
- Day-wise itinerary, trip facts, inclusion/prepare tabs and FAQs
- Simulated booking request flow with validation and dynamic totals
- Destinations, About, Team, Stories, Gallery, Upcoming Trips, Custom Trips, Contact and FAQ routes
- Newsletter and contact form front-end validation
- Reduced-motion check for the GSAP hero animation

## Important demo notes

- Adventure prices, departure dates, ratings, trip logistics and testimonials are sample content. Verify all operational information before publishing.
- Booking requests and contact/newsletter forms are local UI simulations. They do not send messages, reserve inventory or process payments.
- Images are remote Unsplash URLs. Replace with licensed/owned optimized assets before production.
- No backend, authentication, inventory, payment gateway or real email integration is connected.

## Future extension points

- Keep trip content in `src/data/adventures.js` until a backend is introduced.
- Add API adapters under `src/services/` when connecting a server.
- The itinerary is structured day-by-day and can later be extended with route coordinates, elevation and campsite metadata for a React Three Fiber / Three.js trek experience.
