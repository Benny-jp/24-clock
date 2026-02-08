    const clock = document.getElementById('clock');
    
    // 24時間目盛り
    for (let i = 1; i <= 24; i++) {
        const hWrap = document.createElement('div');
        hWrap.className = 'marker hour-num';
        const rotation = i * 15;
        hWrap.style.transform = `rotate(${rotation}deg)`;
        hWrap.innerHTML = `<span style="display:inline-block; transform:rotate(-${rotation}deg)">${i}</span>`;
        clock.appendChild(hWrap);

        const tick = document.createElement('div');
        tick.className = 'tick';
        tick.style.bottom = '50%';
        tick.style.height = '48%'; // 枠のすぐ内側に配置
        tick.style.transformOrigin = 'bottom center';
        tick.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
        clock.appendChild(tick);
    }

    // 分目盛り（ドット）
    for (let i = 0; i < 60; i++) {
        const rotation = i * 6;
        if (i % 5 === 0) {
            const mWrap = document.createElement('div');
            mWrap.className = 'marker min-num';
            mWrap.style.transform = `rotate(${rotation}deg)`;
            const label = i === 0 ? '00' : i.toString().padStart(2, '0');
            mWrap.innerHTML = `<span style="display:inline-block; transform:rotate(-${rotation}deg)">${label}</span>`;
            clock.appendChild(mWrap);
        } else {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.bottom = '50%';
            // 【重要】外に飛び出さないよう、高さを「半径の94%」くらいに抑える
            dot.style.height = '47%'; 
            dot.style.transformOrigin = 'bottom center';
            dot.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
            clock.appendChild(dot);
        }
    }

    function update() {
        const now = new Date();
        const s = now.getSeconds(); const m = now.getMinutes(); const h = now.getHours();
        const sDeg = (s / 60) * 360;
        const mDeg = (m / 60) * 360 + (s / 60) * 6;
        const hDeg = (h / 24) * 360 + (m / 60) * 15;
        document.getElementById('second').style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
        document.getElementById('minute').style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
        document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hDeg}deg)`;
    }
    setInterval(update, 1000); update();
