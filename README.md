# YSSE Course Explorer — Week 6 React Assignment

A React + Vite conversion of the Week 5 YSSE Course Search & Filter System.

## Technologies
- React
- JSX
- JavaScript (ES6+)
- Vite
- Regular CSS

## Required assignment features
- Reusable functional components
- Props for passing course information
- `useState` for search, category, difficulty, sorting and mobile navigation
- Dynamic course rendering with `.map()` and unique `key` values
- Case-insensitive partial keyword search
- Category filtering
- Difficulty-level filtering
- Combined search and filtering
- Reset all filters
- Conditional no-results message
- Dynamic result count
- Responsive desktop, tablet and mobile layouts

## Optional improvement
- Course sorting (Recommended, A–Z, Z–A)

## Run the project
1. Install Node.js LTS: https://nodejs.org/
2. Extract this ZIP file.
3. Open the `ysse-course-system` folder in VS Code.
4. Open **Terminal → New Terminal**.
5. Run:

   ```bash
   npm install
   npm run dev
   ```

6. Open the local address printed in the terminal (normally `http://localhost:5173`).

## Production build check

```bash
npm run build
```

## Project structure

```text
ysse-course-system/
├── public/
│   └── images/  (reserved for local assets)
├── src/
│   ├── components/
│   │   ├── CourseCard.jsx
│   │   ├── CourseSection.jsx
│   │   ├── FilterSection.jsx
│   │   └── SearchBar.jsx
│   ├── data/
│   │   └── courses.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Testing checklist
- [ ] All 8 sample courses display.
- [ ] Search works with uppercase/lowercase and partial keywords.
- [ ] Category filter works.
- [ ] Difficulty filter works.
- [ ] Search + category works together.
- [ ] Search + difficulty works together.
- [ ] Category + difficulty works together.
- [ ] All three filters work together.
- [ ] Reset restores all courses and default controls.
- [ ] No-results message appears for unmatched criteria.
- [ ] Desktop, tablet and mobile layouts are usable.

## Notes
- Course details are the sample data from the Week 5 project.
- Course photos are loaded from Unsplash and Google Fonts are loaded online.
- The YSSE logo mark is cropped from the official-site screenshot supplied by the user and saved as a transparent PNG in `public/images/ysse-official-logo.png`. No photo/background is included in the logo asset.
- `node_modules` and build output are intentionally excluded from the repository.
