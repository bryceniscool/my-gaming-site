const canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let player = { x: 100, y: 100, color: '#ff6b6b' };

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        player.y -= 20; // jump up
    }
});

function draw() {
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, 600, 400);
    
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, 40, 40);
    
    requestAnimationFrame(draw);
}

draw();
