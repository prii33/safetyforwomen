# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Safety for Women Movement - a React-based website with a Cloudflare Workers backend API.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend (Cloudflare Worker)

The backend is in `backend/` with its own dependencies:
```bash
cd backend
npx wrangler dev       # Run locally
npx wrangler deploy    # Deploy to Cloudflare
```

## Architecture

### Frontend
- **Framework**: React 19 with TypeScript, Vite bundler
- **Routing**: React Router with HashRouter (`/#/path` URLs)
- **Styling**: Tailwind CSS v4 with custom brand colors defined in `tailwind.config.js`
- **Animations**: Framer Motion for page transitions and effects
- **Entry point**: `index.tsx` → `App.tsx`

### Backend (`backend/`)
- **Runtime**: Cloudflare Workers with D1 database
- **API Endpoints**:
  - `POST /api/pledge` - Submit pledge form to D1 database
  - `POST /api/chat` - RAG-style chat using TF-IDF over knowledge base
- **Configuration**: `backend/wrangler.jsonc`

### Key Directories
- `pages/` - Route page components (lazy-loaded)
- `components/` - Reusable UI components
- `content/blog/` - Markdown blog posts with frontmatter
- `utils/blog.ts` - Blog parsing using gray-matter, loaded via Vite's `import.meta.glob`
- `data/` - Static data (events, mock data)
- `hooks/` - Custom React hooks (fluid cursor, outside click)

### Path Alias
`@/*` maps to project root (configured in tsconfig.json and vite.config.ts)

## Brand Colors (Tailwind)
- `brand-red`: #ff0440
- `brand-dark`: black
- `brand-hero`: #e30d40
- `brand-light`: #F9FAFB

## Environment Variables

Create `.env.local` with:
```
GEMINI_API_KEY=your_api_key
```

## Blog System

Blog posts are Markdown files in `content/blog/` with required frontmatter:
- `title`, `excerpt`, `date`, `author`, `readTime`, `image`
- Optional: `tags`, `externalUrl`, `authorBio`, `draft` (draft posts are excluded)
