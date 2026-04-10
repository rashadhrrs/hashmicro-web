# HashMicro Web
Blog-style web page built as part of the HashMicro Mid-Level Front End Developer assessment.

## Preview

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 3000
```

Then visit [http://localhost:3000](http://localhost:3000)

## Structure

```
hashmicro-frontend-test/
├── index.html        # Main page
├── css/
│   └── style.css     # All styles (reset, layout, components, responsive)
├── js/
│   └── main.js       # Sticky nav, hamburger menu, search handler
└── images/           # Background and post images
```

## Features

- **Hero header** — full-width background image with logo, title, and tagline
- **Social media icons** — 5 clickable icons with hover effects (Font Awesome)
- **Sticky navigation** — becomes fixed to the top after scrolling past the hero, with slide-down animation
- **Blog card grid** — 3-column CSS grid with 6 cards
- **HTML overlay box** — black semi-transparent box on each card is pure HTML, content is editable directly in markup
- **Card hover effect** — image zoom + overlay lift on hover
- **Responsive** — 3 columns → 2 columns (tablet) → 1 column (mobile), hamburger menu on mobile

## Tech Stack

- Plain HTML5, CSS3, JavaScript (no framework, no CMS)
- [Font Awesome 6](https://fontawesome.com) — social and UI icons
- [Google Fonts](https://fonts.google.com) — Oswald + Open Sans
- [Normalize.css](https://necolas.github.io/normalize.css/) — CSS reset

## Requirements Met

| Requirement | Status |
|---|---|
| Social icons are clickable with hover effect | ✓ |
| Navigation is sticky after scroll | ✓ |
| Page is responsive | ✓ |
| Black box on card is HTML (editable) with hover effect | ✓ |
| No WordPress / no CMS | ✓ |
