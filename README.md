# MNL GROUP customer website
Setup: `cp .env.example .env`, set VITE_API_BASE_URL and VITE_WHATSAPP_NUMBER (digits with country code), then `npm install && npm run dev`. Build: `npm run build`.
Integration: all backend calls live in `src/services/api.js` (endpoints are assumptions to align with your Express API). Images: `src/data/images.js`. Business details: `src/config/site.js`.
