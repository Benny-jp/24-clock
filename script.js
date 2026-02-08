function resize() {
  const canvas = document.getElementById('your-canvas-id'); // 時計のID
  const size = Math.min(window.innerWidth, window.innerHeight) * 0.9;
  canvas.width = size;
  canvas.height = size;
  // ここで時計をもう一度描く命令を出す
}
window.addEventListener('resize', resize);
window.addEventListener('load', resize);
