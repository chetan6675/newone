document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.querySelector('.animated-paragraph');
    setInterval(() => {
        paragraph.classList.toggle('shadow-pulse');
    }, 1000);
});
