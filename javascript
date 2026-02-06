// 描画ループ内の時間表示部分
const now = new Date();
const timeStr = now.toLocaleTimeString();

ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
ctx.font = '24px Arial';
ctx.textAlign = 'right';
ctx.textBaseline = 'bottom';

// 余白を20から18へ修正（2px外周寄り）
const padding = 18; 
ctx.fillText(timeStr, canvas.width - padding, canvas.height - padding);
