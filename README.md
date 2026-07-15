# CampusPulse

Event and Club Management Platform for Campus Communities

[Live Demo](https://abdullahlko.github.io/campus-pulse/) | [Repository](https://github.com/abdullahlko/campus-pulse)

**Tech Stack:** HTML5, CSS3, Tailwind CSS, JavaScript (ES6+) | **Deployment:** GitHub Pages | **Competition:** CodeSprint Hackathon

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## About

CampusPulse is a  web application that serves as a central hub for campus life. It connects students with clubs, events and communities, making it easy to discover campus activities, register for events and find clubs that match their interests.

Built as a lightweight, framework-free platform using vanilla HTML, CSS and JavaScript, CampusPulse delivers a responsive experience without external dependencies.

---

## Features

### Event Discovery and Registration
Browse upcoming and past campus events with full-text search. Filter events by category (Technology, Cultural, Sports, Academic, Social) and status (Upcoming / Past). Each event displays date, time, venue, capacity and registration progress. One-click registration through a modal form persists user data in localStorage.

### Club Directory
Explore campus clubs with profile cards showing member count, event statistics, founding year and category information. Search and filter clubs by name and category. Each club profile displays a gradient-branded identity for visual distinction.

### Admin Dashboard
View analytics including total events, active clubs, registrations and total members with animated counters. Recent events table with registration progress visualization, top clubs ranked by membership, recent registrations feed and CSV export functionality for offline analysis.

### Responsive Design
Fully optimized for desktop, tablet and mobile devices with sticky navigation and mobile hamburger menu. Smooth hover transitions, scale effects and shadow animations. Breadcrumb navigation on detail pages for user navigation.

### Data Persistence
Event and club registrations stored in localStorage persist across browser sessions. A centralized JSON data store (data.js) maintains all events and clubs with shared utility functions for consistent data access.

---

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| Structure | HTML5 (semantic markup) |
| Styling | Tailwind CSS (CDN) with custom theme |
| Logic | JavaScript (ES6+) |
| Data Storage | Client-side JSON + localStorage API |
| Deployment | Static site (GitHub Pages) |

Zero dependencies. Zero build step. Entirely vanilla implementation.

---

## Architecture

```
CampusPulse/
├── index.html              # Home page with hero, stats, featured content
├── events.html             # Event catalog with search and filtering
├── event-details.html      # Individual event detail view
├── clubs.html              # Club directory with filtering
├── dashboard.html          # Admin analytics panel
│
├── js/
│   ├── data.js             # Centralized data store (events, clubs, registrations)
│   ├── home.js             # Home page logic and rendering
│   ├── events.js           # Event filtering, search, and rendering
│   ├── eventdetails.js     # Dynamic event detail page loading
│   ├── clubs.js            # Club filtering, search, and rendering
│   ├── dashboard.js        # Analytics, tables, and CSV export logic
│   ├── modal.js            # Registration form modal handling
│   └── navbar.js           # Mobile navigation toggle
│
└── assets/                 # Club logos, hero images, icons
```

**Architecture Overview:**

Single-page application pattern with multi-page routing through distinct HTML files. Each page includes only necessary JavaScript modules for lightweight payloads. data.js serves as the single source of truth for all events, clubs and sample registrations. Registration submissions are captured through the modal form and persisted to localStorage. Admin dashboard dynamically renders analytics, tables and export functionality from registered data.

**Key Design Decisions:**
- Vanilla JavaScript for performance with zero dependency overhead
- Tailwind CSS for rapid styling with consistent design system
- Client-side data store for demo simplicity with clear backend integration path
- localStorage for registration persistence without a database
- Modular script organization for maintainability and selective loading

---

## Getting Started

No installation required. The project runs directly in any modern browser.

### Live Demo
Visit: [abdullahlko.github.io/campus-pulse](https://abdullahlko.github.io/campus-pulse/)

### Run Locally

```bash
git clone https://github.com/abdullahlko/campus-pulse.git
cd campus-pulse

# Open index.html in your browser
open index.html      # macOS
xdg-open index.html  # Linux
start index.html     # Windows
```

For a local server:

```bash
python -m http.server 8000     # Python
npx serve .                    # Node.js
```

Then open `http://localhost:8000` in your browser.

---

## Project Structure

**Pages:**
- Home (index.html) - Hero section with featured events and popular clubs
- Events (events.html) - Event catalog with search and filtering
- Event Details (event-details.html) - Individual event information and registration
- Clubs (clubs.html) - Club directory with search and categorization
- Dashboard (dashboard.html) - Admin analytics and registration management

**JavaScript Modules:**
- data.js - Event and club data definitions with utility functions
- modal.js, navbar.js - Registration form and mobile navigation
- Page-specific logic - Filtering, search, rendering and interactions

**Assets:** Club logos, hero images and icons in SVG and PNG formats.

---

Built for CodeSprint Hackathon. Designed end-to-end application architecture, event and club data models, registration modal system, localStorage integration and admin dashboard analytics. Owns technical infrastructure, product features and user experience design.

---
---
