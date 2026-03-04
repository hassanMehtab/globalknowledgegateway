# Global Education World — Educational Website

A clean, professional educational website for **Islamic Studies** (Quran with tarjuma, tafsir, Hadith), **Science & Math** (Physics, Math; Chemistry & Biology coming soon), and **Premium Courses** (Web Development from HTML/CSS/JS to React.js, and Backend Development with Node.js). All teaching is done **live on Zoom** with qualified staff.

## Features

- **Primary color:** Green (`#0D5C3D`) — change in `css/styles.css` under `:root { --primary: ... }`
- **Secondary color:** White
- **Sticky WhatsApp button** — fixed in the bottom-right corner on every page; always visible when scrolling
- **Responsive layout** — works on mobile and desktop
- **Clear sections:** Home, Islamic Studies, Science & Math, Premium Courses, Our Goals, Our Staff, Contact

## How to run

1. Open the project folder in your editor.
2. Serve the folder with any local server (e.g. VS Code “Live Server”, or `npx serve .` in the project folder).
3. Or open `index.html` directly in the browser (some features work better with a local server).

## What to change

- **WhatsApp number:** Replace `14434846773` in every file with your real number (country code + number, no + or spaces). Search for `wa.me/14434846773` across the project.
- **Site name:** The site is named “Global Education World” in the header/logo and footer; change it here and in the HTML files if you want a different name.
- **Primary color:** In `css/styles.css`, update `--primary` and `--primary-dark` / `--primary-light` if you want a different green or another primary color.

## Zoom

- Add your Zoom meeting links or enrollment process in the Contact section or on course pages.
- You can add a “Join class” or “Schedule” section later that links to Zoom or a booking page.

## File structure

```
education-website/
├── index.html          # Home (all sections)
├── css/
│   └── styles.css     # All styles; primary/secondary colors here
├── js/
│   └── main.js        # Mobile menu, footer year
├── pages/
│   ├── islamic-studies.html
│   ├── secondary.html
│   └── premium-courses.html
└── README.md
```

## Backend course

The **Backend Development** course is outlined as: Node.js, Express, SQL & NoSQL databases, REST APIs, authentication, and deployment. You can extend the syllabus on `pages/premium-courses.html` as you develop the course.
