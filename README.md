# Counter App

A simple and responsive counter app built with plain HTML, CSS, and JavaScript.

## Description

This project is a lightweight interactive counter with:

- increment and decrement controls
- quick +10 and -10 actions
- reset button
- persistent counter value using `localStorage`
- keyboard shortcuts
- responsive layout for desktop, tablet, and mobile devices

## Live Preview

Try the application locally here:

- http://localhost:8000/

> If you want to deploy it publicly, you can host this static project on Netlify, GitHub Pages, Vercel, or Firebase.

## Features

- Clean and modern UI
- Animated number transitions
- Positive/negative/neutral color states
- Fully responsive design
- No external dependencies

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## Run Locally

From the project folder, start a local server:

```bash
cd "/Users/cristiancipriani/Desktop/my counter"
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Keyboard Shortcuts

- `+` or `ArrowUp`: increment
- `-` or `ArrowDown`: decrement
- `R`: reset
- `PageUp`: +10
- `PageDown`: -10

## License

This project is open for educational and personal use.

## Notes

The app stores the current value in the browser using `localStorage`, so the counter persists across refreshes.
