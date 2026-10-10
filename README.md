# Atelier Interiors — Business Website Demo

A responsive single-page interior design studio website built with React and Vite. This is a portfolio concept/demo, not a real business website.

## Run locally
1. Install Node.js (LTS) if it is not already installed.
2. Extract this folder and open it in VS Code.
3. In the terminal, run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite (usually http://localhost:5173).
5. Check production build with `npm run build`.

## Before publishing
- Open `src/main.jsx` and replace `WHATSAPP_NUMBER` with your WhatsApp number including country code, digits only (example format: `919876543210`).
- Replace the demo email `hello@atelier-demo.example` with the real business email if needed.
- Project copy, sample testimonial, and imagery are illustrative. Clearly identify demo/sample content if you use this in your portfolio.
- The contact form opens WhatsApp with the visitor's submitted details. It does not email or store submissions.
- Project images load from Unsplash and Google Fonts load from Google Fonts, so internet access is needed for those assets.

## GitHub
Create a new GitHub repository, e.g. `atelier-interior-demo`, then run these commands in this project folder:
```bash
git init
git add .
git commit -m "Create Atelier Interiors demo website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/atelier-interior-demo.git
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to authenticate, follow the GitHub sign-in prompt.

## Deploy to Vercel
1. Sign in at https://vercel.com and import the new GitHub repository.
2. Vercel should detect Vite automatically.
3. Build command: `npm run build`; output directory: `dist`.
4. Click Deploy. Vercel will provide a public URL.

## Add to your BrandByWebeara portfolio
Add a portfolio card that links to the deployed Vercel URL. Keep this as a separate repository/project so it does not change your existing agency website.
