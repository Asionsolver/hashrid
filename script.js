// const canvas = document.getElementById("neonCanvas");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }
// window.addEventListener("resize", resizeCanvas);

// // Get CSS variable value from root
// function getCSSVariable(name) {
//   return getComputedStyle(document.documentElement)
//     .getPropertyValue(name)
//     .trim();
// }

// const neonColor = getCSSVariable("--color-neon");
// const blur = parseInt(getCSSVariable("--shadow-blur")) || 15;
// const lineWidth = parseInt(getCSSVariable("--line-width")) || 3;

// function drawLinePath(path, color = neonColor) {
//   ctx.beginPath();
//   ctx.moveTo(...path[0]);
//   for (let i = 1; i < path.length; i++) {
//     ctx.lineTo(...path[i]);
//   }

//   ctx.strokeStyle = color;
//   ctx.shadowColor = color;
//   ctx.shadowBlur = blur;
//   ctx.lineWidth = lineWidth;
//   ctx.stroke();
// }
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// drawLinePath([
//   [-0, canvas.height - 100],
//   [200, canvas.height - 100],
//   [200, canvas.height - 300],
//   [400, canvas.height - 300],
// ]);
// drawLinePath([
//   [canvas.width - 300, 200],
//   [canvas.width - 300, 400],
//   [canvas.width - 100, 400],
// ]);
