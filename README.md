# CSS 3D Loader Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-3d-loader-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the supplied 8.63-second, 720 × 1280 screen recording.

## Source code visible in the video

The recording shows the following CSS declarations in `style.css`:

```css
body {
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.spinner-ring {
  width: 100px;
  height: 100px;
  border: 8px solid transparent;
  border-top: 8px solid cyan;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
  box-shadow: 0 0 20px cyan, 0 0 40px cyan,
              0 0 60px cyan;
  transform: perspective(500px) rotateX(60deg);
}

@keyframes spin {
  0% {
    transform: perspective(500px)
      rotateX(60deg) rotateZ(0deg);
  }
  100% {
    transform: perspective(500px)
      rotateX(60deg) rotateZ(360deg);
  }
}
```

## Visual recreation
- Black background
- Cyan top border on a transparent circular ring
- 100 × 100 px loader with 8 px border
- Cyan glow at 20, 40 and 60 px shadow radii
- 500 px perspective with 60-degree X rotation
- 1.2-second infinite linear rotation around Z axis

## Added convenience features
- Pause / Resume animation
- Copy CSS button
- Responsive preview and code panel

## Run
Extract the ZIP and open `index.html` in a modern browser. No dependencies or build tools are required.

## Files
- `index.html` — loader preview and visible source snippet
- `style.css` — recreated 3D loader styling
- `script.js` — pause/resume and copy actions
- `README.md` — extracted source and run instructions

## Source fidelity
The screen recording makes the core CSS declarations and complete `@keyframes spin` block readable. Those declarations and values have been transcribed. The HTML and JavaScript are not visible in the recording; they are supplied to make a complete runnable project. The page heading and code panel are presentation additions around the loader.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
