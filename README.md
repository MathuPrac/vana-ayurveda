# 🌿 Vana Ayurveda — MERN Stack

A premium, production-ready Ayurvedic wellness website built with the MERN stack.
Frontend-only mode works out of the box. Backend is scaffolded and ready to wire up.

---

## 📁 Project Structure

```
vana-ayurveda-mern/
├── client/                  # React + Vite + TypeScript + Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/      # Header, Footer, Layout, Logo, ScrollToTop
│   │   │   └── ui/          # ScrollReveal, SectionDivider
│   │   ├── data/            # treatments, conditions, testimonials, team, gallery
│   │   ├── hooks/           # useScrollReveal, useAnimatedNumber
│   │   ├── pages/           # HomePage, AyurvedaPage, AboutPage, GalleryPage, ContactPage
│   │   ├── styles/          # globals.css (Tailwind + custom)
│   │   └── utils/           # api.ts (backend-ready axios), cn.ts
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── package.json
│
├── server/                  # Express + Mongoose scaffold
│   ├── src/
│   │   ├── models/          # Inquiry.js (Mongoose schema)
│   │   ├── routes/          # inquiries.js, treatments.js, testimonials.js
│   │   └── index.js         # Express app entry
│   ├── .env.example
│   └── package.json
│
└── package.json             # Monorepo scripts
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
# Install client
cd client && npm install

# Install server (optional — only needed for backend)
cd ../server && npm install
```

### 2. Run frontend only (no backend needed)

```bash
cd client && npm run dev
# → http://localhost:3000
```

The frontend runs in **frontend-only mode** automatically.
All form submissions are simulated in development with a console log.

### 3. Run with backend

```bash
# Terminal 1 — start MongoDB (or use Atlas)
mongod

# Terminal 2 — start Express server
cd server
cp .env.example .env   # fill in your values
npm run dev
# → http://localhost:5000

# Terminal 3 — start React client
cd client
npm run dev
# → http://localhost:3000
```

Set `VITE_API_URL=http://localhost:5000/api` in `client/.env` to connect the frontend to the real backend.

---

## 🧰 Tech Stack

| Layer     | Technology |
|-----------|------------|
| Frontend  | React 18 + TypeScript + Vite |
| Styling   | Tailwind CSS v3 |
| Animation | Framer Motion |
| Icons     | Lucide React |
| Routing   | React Router DOM v6 |
| HTTP      | Axios (backend-ready) |
| Toast     | Sonner |
| Backend   | Express.js (scaffold) |
| Database  | MongoDB + Mongoose (scaffold) |

---

## 🎨 Design Tokens

| Token        | Value     | Usage |
|-------------|-----------|-------|
| `ivory`     | `#F8F4EF` | Page background |
| `warm-white`| `#FDFAF6` | Section backgrounds |
| `sage`      | `#8A9E7F` | Accents, pills |
| `sage-dark` | `#5C7A50` | CTA, hover states |
| `earth`     | `#C4916A` | Warm CTA, icons |
| `bark`      | `#4A3728` | Primary text, dark sections |
| `gold`      | `#C9A96E` | Decorative, dividers, logo |
| `mist`      | `#E8E0D5` | Borders |

---

## 🔌 Backend API Endpoints (Scaffold)

| Method | Route               | Description |
|--------|---------------------|-------------|
| POST   | `/api/inquiries`    | Submit retreat inquiry |
| GET    | `/api/inquiries`    | List all inquiries (admin) |
| GET    | `/api/treatments`   | Fetch treatments from DB |
| GET    | `/api/testimonials` | Fetch testimonials from DB |
| GET    | `/api/health`       | Health check |

---

## 📦 Pages

| Route       | Page            | Content |
|-------------|-----------------|---------|
| `/`         | Home            | Hero, pillars, treatments teaser, testimonials, CTA |
| `/ayurveda` | Ayurveda        | Doshas, 9 conditions, 6 signature + 6 additional treatments |
| `/about`    | About           | Brand story, 3 values, 3 team members |
| `/gallery`  | Gallery         | 12-image masonry + lightbox with keyboard nav |
| `/contact`  | Contact         | 8-field form, map embed, contact info |

---

## ✅ Content Verified

All content from the original site (praana-ayurvedic.com) has been faithfully
captured and converted with fictional brand details to avoid legal issues:

- ✅ 6 Signature Treatments (full descriptions + benefits + images)
- ✅ 6 Additional Therapies
- ✅ 9 Conditions Treated
- ✅ 3 Doshas explained
- ✅ 4 Pillars of healing
- ✅ 3 Team members (fictional names)
- ✅ 3 Guest testimonials
- ✅ 12 Gallery images
- ✅ Contact details (fictional)
- ✅ Brand story & values
