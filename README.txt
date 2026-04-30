React Geoportfolio Setup
========================

What this is:
- A Vite + React portfolio that does not depend on ArcGIS for the portfolio interface itself.
- Your ArcGIS and GitHub projects are linked as normal outbound project cards.

How to run:
1. Open the folder in Cursor or VS Code.
2. Run: npm install
3. Run: npm run dev
4. Open the local URL shown by Vite.

How to build:
- npm run build

Important files:
- src/App.jsx -> all portfolio content and layout
- src/styles.css -> styling
- index.html -> page shell
- package.json -> project config

What to edit first:
1. Replace the placeholder LinkedIn URL in src/App.jsx
2. Replace the placeholder email in src/App.jsx
3. Add your resume PDF into the public folder as resume.pdf
   - If you want this to work immediately, create a folder named public and place resume.pdf inside it.
4. Add screenshots later if desired
5. Tighten project descriptions with your own methods/results

Hosting options:
- Netlify
- Vercel
- GitHub Pages

Notes:
- The portfolio is self-hosted, but your project links can still point to ArcGIS StoryMaps, ArcGIS Experience Builder, ArcGIS Hub, GitHub, or Netlify.
- If you upload your resume next, the structure is already ready for it.
