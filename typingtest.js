let PROMPTS = {}, spans = [], idx = 0;
let started = false, timer;
let timeLeft, initialTime;
let correct = 0, total = 0, combo = 0, bestCombo = 0;
let wpmSamples = [], errorSamples = [];
let totalWords = 0; 

const el = id => document.getElementById(id);

/* -------- load prompts -------- */
fetch('prompts.json')
    .then(r => r.json())
    .then(j => { PROMPTS = j; reset(); });

function buildPrompt(diff, min) {
    let text = '';
    while (text.split(/\s+/).length < min) {
        text += (text ? ' ' : '') +
            PROMPTS[diff][Math.floor(Math.random() * PROMPTS[diff].length)];
    }
    return text;
}

/* -------- reset -------- */
function reset() {
    clearInterval(timer);
    document.removeEventListener('keydown', keyHandler);

    idx = correct = total = combo = bestCombo = 0;
    wpmSamples = [];
    errorSamples = [];
    started = false;

    initialTime = timeLeft = +el('time').value;
    el('timeDisplay').textContent = timeLeft;
    el('wpm').textContent = 0;
    el('accuracy').textContent = 100;
    el('combo').textContent = 0;
    el('bestCombo').textContent = 0;

    el('textDisplay').innerHTML = '';
    
    const text = buildPrompt(el('difficulty').value, +el('length').value);
    totalWords = text.trim().split(/\s+/).length; 
    
    if (el('wordCount')) {
        el('wordCount').textContent = `0 / ${totalWords}`;
    }

    spans = [...text].map((c, i) => {
        const s = document.createElement('span');
        s.textContent = c;
        if (i === 0) s.classList.add('current');
        el('textDisplay').appendChild(s);
        return s;
    });

    setTimeout(() => document.addEventListener('keydown', keyHandler), 50);
}

/* -------- timer -------- */
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        el('timeDisplay').textContent = timeLeft;

        const elapsed = initialTime - timeLeft;
        const wpm = Math.round((correct / 5) / (elapsed / 60) || 0);
        wpmSamples.push({time: elapsed, wpm: wpm});
        el('wpm').textContent = wpm;

        if (timeLeft <= 0) finish();
    }, 1000);
}

/* -------- word count helper -------- */
function updateWordCount() {
    if (!el('wordCount')) return;
    if (idx === 0) {
        el('wordCount').textContent = `0 / ${totalWords}`;
        return;
    }
    let spaces = spans.slice(0, idx).filter(span => span.textContent === ' ').length;
    let currentWord = Math.min(spaces + 1, totalWords);
    el('wordCount').textContent = `${currentWord} / ${totalWords}`;
}

/* -------- typing -------- */
function keyHandler(e) {
    // --- NEW: Immediately allow browser shortcuts (Ctrl+R, Ctrl+C, etc.) ---
    if (e.ctrlKey || e.metaKey) return;

    if (!started) {
        started = true;
        startTimer();
    }

    if (['Shift', 'Alt', 'Control', 'Meta', 'Enter', 'Tab'].includes(e.key)) return;

    if (e.key === 'Backspace') {
        if (idx > 0) {
            spans[idx]?.classList.remove('current');
            idx--;
            spans[idx].classList.remove('correct', 'incorrect');
            spans[idx].classList.add('current');
            combo = 0;
            updateWordCount();
        }
        return;
    }

    e.preventDefault(); // This no longer blocks Ctrl+R thanks to the check above!

    const s = spans[idx];
    if (!s) return finish();

    if (e.key === s.textContent) {
        s.classList.add('correct');
        correct++;
        combo++;
        bestCombo = Math.max(bestCombo, combo);
    } else {
        s.classList.add('incorrect');
        combo = 0;
        errorSamples.push(wpmSamples.length);
    }

    total++;
    s.classList.remove('current');
    idx++;
    spans[idx]?.classList.add('current');

    el('combo').textContent = combo;
    el('bestCombo').textContent = bestCombo;
    el('accuracy').textContent = Math.round((correct / total) * 100);
    
    updateWordCount();

    if (idx >= spans.length) finish();
}

/* -------- consistency -------- */
function consistencyScore() {
    if(wpmSamples.length === 0) return 0;
    const avg = wpmSamples.reduce((a, b) => a + b.wpm, 0) / wpmSamples.length;
    const variance = wpmSamples.reduce((a, b) => a + (b.wpm - avg) ** 2, 0) / wpmSamples.length;
    return Math.max(0, 100 - Math.sqrt(variance)).toFixed(0);
}

/* -------- graph -------- */
function drawGraph() {
    const c = el('graph'), ctx = c.getContext('2d');
    
    // Increased left padding to 40 so the numbers have room to breathe
    const padX = 40; 
    const padY = 30;
    const maxWpm = Math.max(...wpmSamples.map(s => s.wpm), 1) * 1.1; 
    const points = [];

    // Pre-calculate all points
    wpmSamples.forEach((sample, i) => {
        const x = padX + (i / Math.max(wpmSamples.length - 1, 1)) * (c.width - padX * 2);
        const y = c.height - padY - (sample.wpm / maxWpm) * (c.height - padY * 2);
        points.push({x, y, wpm: sample.wpm, time: sample.time});
    });

    // --- NEW: Helper function to draw the base graph and labels ---
    function drawBase() {
        ctx.clearRect(0, 0, c.width, c.height);

        // Draw Axes
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary') || '#FF9A8B';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padX, padY);
        ctx.lineTo(padX, c.height - padY);
        ctx.lineTo(c.width - padX, c.height - padY);
        ctx.stroke();

        // Draw Y-Axis Numbers
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-light') || '#9a8c98';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        
        ctx.fillText(Math.round(maxWpm), padX - 8, padY); // Top (Max)
        ctx.fillText(Math.round(maxWpm / 2), padX - 8, c.height / 2); // Middle (Half)
        ctx.fillText("0", padX - 8, c.height - padY); // Bottom (Zero)

        if (points.length === 0) return;

        // Draw Line
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary') || '#FF6A88';
        ctx.lineWidth = 2;
        ctx.beginPath();
        points.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
        ctx.stroke();
    }

    // Draw the initial graph
    drawBase();

    // Hover Interactivity
    c.onmousemove = (e) => {
        const rect = c.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        
        let closest = null;
        let minXDist = Infinity;
        
        points.forEach(p => {
            const xDist = Math.abs(mouseX - p.x);
            if(xDist < minXDist) {
                minXDist = xDist;
                closest = p;
            }
        });

        // Redraw base graph (including the new numbers!)
        drawBase();

        // Draw highlight if hovering over the chart area
        if(closest && mouseX >= padX && mouseX <= c.width - padX) {
            ctx.strokeStyle = 'rgba(255, 106, 136, 0.3)'; 
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(closest.x, padY);
            ctx.lineTo(closest.x, c.height - padY);
            ctx.stroke();

            ctx.fillStyle = '#fff';
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary') || '#FF6A88';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(closest.x, closest.y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-main') || '#5e4b52';
            ctx.font = 'bold 12px sans-serif';
            
            const text = `WPM: ${closest.wpm} (${closest.time}s)`;
            const textWidth = ctx.measureText(text).width;
            
            let textX = closest.x + 10;
            if (textX + textWidth > c.width) {
                textX = closest.x - textWidth - 10;
            }
            
            ctx.fillText(text, textX, closest.y - 15);
        }
    };
    
    // Reset to base graph when mouse leaves
    c.onmouseleave = () => drawBase();
}

/* -------- finish -------- */
function finish() {
    clearInterval(timer);
    document.removeEventListener('keydown', keyHandler);

    el('mWpm').textContent = el('wpm').textContent;
    el('mAcc').textContent = el('accuracy').textContent + '%';
    el('mTime').textContent = (initialTime - timeLeft) + 's';
    el('mCons').textContent = consistencyScore() + '%';

    el('modal').classList.add('show');
    drawGraph();
}

/* -------- events -------- */
el('restart').onclick = reset;
el('restartModal').onclick = () => {
    el('modal').classList.remove('show');
    reset();
};
el('close').onclick = () => el('modal').classList.remove('show');
['difficulty', 'length', 'time'].forEach(i => el(i).onchange = reset);
