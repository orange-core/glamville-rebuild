# Glamville Wellness & Beauty Spas — concept rebuild

A six-page static website concept created by OrangeCore to demonstrate a more editorial, mobile-friendly experience for Glamville.

## Pages
- `index.html` — Home
- `services.html` — Service categories and indicative starting prices
- `booking.html` — Appointment request form
- `gallery.html` — The experience / visual gallery
- `about.html` — Brand story
- `contact.html` — Contact details and branch links

## Assets and structure
- `css/main.css` — Shared responsive styles
- `js/main.js` — Mobile navigation, year, date minimum and service preselection
- `js/forms.js` — Booking and enquiry WhatsApp handoff
- HTML pages each include a small inline `<style>` block for page-specific styling.
- Photography is currently remote Unsplash editorial imagery and must be replaced with approved Glamville photography before production.

## Appointment form behaviour
This is a static concept. Forms do **not** send an email or store data on a server. They prepare a message and open WhatsApp using the publicly listed general contact number. The visitor must review and press Send, and the team must reply to confirm availability. Before launch, Glamville should approve the contact routing and branch numbers. Do not describe an appointment as confirmed until the business confirms it.

## Before production launch
1. Confirm the correct contact details and booking number for each branch.
2. Verify all prices, service names, hours, branch addresses, and map links with Glamville.
3. Replace editorial placeholder images with photos the business has approved for use.
4. Configure an authorized booking notification backend if email notifications or a booking dashboard are required. Never put Brevo/API secrets in browser JavaScript.
5. Add the business's approved privacy notice and consent language for handling booking details.
6. Review accessibility, image licensing, mobile layout, and cross-browser behaviour.
7. Remove any demo wording once Glamville approves the website and content.

## Deploy
The site is plain static HTML/CSS/JS and can be deployed to GitHub Pages, Cloudflare Pages, or another static host. No build step is required.

This is an unofficial concept and is not affiliated with or operated by Glamville.