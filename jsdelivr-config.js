const config = {
  base: "https://cdn.jsdelivr.net/gh/YOUR_USERNAME/ugs-games@main",
  folder: "games"
};

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('games-container');
  try {
    const response = await fetch('filelist.json');
    if (!response.ok) throw new Error('404: filelist.json not found');
    const fileList = await response.json();
    
    console.log('Loaded', fileList.length, 'games');
    
    fileList.forEach((game, index) => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.innerHTML = `<div class="category">#${index + 1}</div><h3>${game}</h3>`;
      card.onclick = () => {
        const url = `${config.base}/${config.folder}/${game}.html`;
        window.open(url, '_blank');
      };
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading games:', err);
  }
});
