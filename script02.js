document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.querySelector('.animated-paragraph');
    setInterval(() => {
        paragraph.classList.toggle('loveGlow');
    }, 2000);
});
