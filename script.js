document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#ff7e5f', '#feb47b', '#ff6b6b', '#ffb6b9', '#ff9a8b'];
    let i = 0;
    setInterval(() => {
        document.body.style.background = `linear-gradient(to right, ${colors[i % colors.length]}, ${colors[(i + 1) % colors.length]})`;
        i++;
    }, 3000);
});
