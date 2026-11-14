// This configures JSDelivr to use your GitHub Pages repo as the base
const config = {
    base: "https://cdn.jsdelivr.net/gh/YOUR_USERNAME/ugs-games@main",
    folder: "games"
};

// Auto-load all games from the file list
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('games-container');
    const fileList = await fetch('filelist.json').then(r => r.json());
    
    fileList.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="category">#${index + 1}</div>
            <h3>${game}</h3>
        `;
        card.onclick = () => {
            const url = `${config.base}/${config.folder}/${game}.html`;
            window.open(url, '_blank');
        };
        container.appendChild(card);
    });
});
