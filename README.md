# CampusPulse - Event & Club Management Web App

CampusPulse is a modern, responsive web application designed for managing college events and clubs. It allows students to browse, filter, and register for events, view featured clubs, and track registrations—all within a user-friendly interface.



## Features

### Events Management
- Browse all upcoming and past events with search, category, and status filters.
- Responsive grid layout with event cards showing title, description, date, category, and hosting club.
- Real-time filtering with a debounced search input for smooth performance.
- Upcoming events display available spots and allow student registration.

### Event Details
- Dedicated event page with full description, date, time, venue, and capacity.
- Visual badges for event status (`Upcoming` / `Past`) and category.
- Registration button triggers a modal popup for attendee details.
- Registrations are tracked and stored using `localStorage`.

### Clubs
- Display top and featured clubs based on member count.
- Club cards include logo, short name, member count, and a “Learn More” link.
- Dynamic progress bars show club growth or event attendance.

### Registration Modal
- Interactive registration form with name, email, and student ID fields.
- Confirmation message displayed after successful registration.
- Data is stored in `localStorage` for demo purposes.
- Option to download registration data as a CSV file.

### Dashboard Stats
- Animated counters showing total events, clubs, registrations, and members.
- Recent events, top clubs, and recent registrations rendered dynamically.

### Responsive Design
- Fully responsive layout for desktop and mobile devices.
- Mobile navigation menu with toggle and auto-close on outside click.
- Smooth hover and transition effects for interactive elements.

---

## Technologies Used

- **HTML5 & CSS3** for structure and styling
- **Tailwind CSS** for modern, responsive UI
- **JavaScript (ES6+)** for dynamic rendering and interactions
- **LocalStorage API** for storing registrations
- **SVG Icons** for visual enhancements
- **Debounce Function** for optimized search performance

---

## Folder Structure
```
CAMPUS-PULSE/
├── assets/
│   ├── campus-hero.png
│   ├── cultural.png
│   ├── debate.png
│   ├── entre.png
│   ├── environmental.png
│   ├── gaming.png
│   ├── icon.png
│   ├── music.png
│   ├── photography.png
│   ├── robotics.png
│   ├── sports.png
│   └── tech.png
├── js/
│   ├── clubs.js
│   ├── dashboard.js
│   ├── data.js
│   ├── eventdetails.js
│   ├── events.js
│   ├── home.js
│   ├── modal.js
│   └── navbar.js
├── clubs.html
├── dashboard.html
├── event-details.html
├── events.html
├── index.html
└── Readme.md
```

## Future Enhancements

- Integrate backend storage to replace `localStorage`.
- Implement authentication for students and club admins.
- Add email notifications for successful registrations.
- Event calendar view with monthly and weekly options.
- Admin panel to manage events, clubs, and registrations.
