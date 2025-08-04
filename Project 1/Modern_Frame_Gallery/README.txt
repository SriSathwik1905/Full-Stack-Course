The Modern Frame Gallery
=======================

Author: P. Sri Sathwik

Implemented Features:
---------------------

HTML Features:
- Proper DOCTYPE declaration and semantic HTML5 structure
- All pages include: <html>, <head>, <body>, <header>, <nav>, <main>, <section>, <article>, <footer>
- Meta charset UTF-8 and proper page titles
- Static, desktop-oriented website with 4 pages: Home, Gallery, About, Contact
- Navigation menu linking all pages via relative paths
- External link with target="_blank" and rel="noopener" for security

Page-Specific Content:
- Home page: Welcome message, featured artwork with badge, upcoming exhibition highlight, animated "Open House!" banner
- Gallery page: 2x2 CSS Grid layout displaying artwork with titles, descriptions, and hover effects
- About page: Gallery history with floated image, notable artists (unordered list with custom bullets), exhibition timeline (ordered list)
- Contact page: Address, phone, email, studio hours in properly formatted table

Text and Lists:
- Proper heading hierarchy (h1-h3) with semantic structure
- Formatted text using <p>, <strong>, <em> elements
- Ordered list (exhibition timeline) with decimal-leading-zero styling
- Unordered list (staff) with custom bullet points using CSS pseudo-elements
- Table with proper thead/tbody structure and alternating row colors

Images and Media:
- Featured artwork image with proper alt attributes
- Gallery images with actual artwork content
- Background image properly implemented
- All images properly sized with object-fit: cover
- Image hover effects with transform: scale()

CSS Features:
-------------

Layout and Positioning:
- External stylesheet (css/style.css) linked to all pages
- CSS Box Model with box-sizing: border-box
- Fixed header (position: fixed) that stays at top during scroll
- Absolute positioning for badge and banner elements
- Float layout for About page image with proper clearfix
- Flexbox for navigation menu alignment
- CSS Grid for 2x2 gallery layout

Colors and Design:
- Named colors, HEX (#ff6347), RGB, and HSL color values
- Semi-transparent backgrounds using rgba()
- Background image on body element with proper sizing
- Border-radius for rounded corners throughout
- Box-shadow effects on cards and images
- Consistent color scheme with accent color (#ff6347)

Typography and Text Effects:
- Custom font stack with fallbacks
- Text-transform: uppercase for navigation
- Letter-spacing for enhanced readability
- Text-shadow effects on headings
- Text-align: center for headings and featured content

Interactive Elements:
- CSS transitions on navigation links, images, and interactive elements
- Transform effects on hover (scale, color changes)
- Navigation links grow and change color on hover
- Image hover effects in gallery with smooth scaling

Animations:
- CSS @keyframes animation for blinking "Open House!" banner
- 3-second infinite loop with opacity changes
- Smooth transitions throughout the site

Advanced Styling:
- Custom list styling with ::before pseudo-elements
- Table styling with borders, padding, and hover effects
- Responsive-style margins and padding for visual spacing
- Consistent border and shadow styling across components

Known Issues:
-------------
- Not responsive (desktop-only as required per specifications)

Browsers Tested:
----------------
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)

W3C Validation:
---------------
- All HTML pages validated for HTML5 compliance
- CSS validated for proper syntax and browser compatibility

Instructions:
-------------
- To view the website, open index.html in your browser
- All pages are interconnected via the navigation menu
- All artwork and background images are properly implemented
- The site is optimized for desktop viewing (1000px+ screen width)
