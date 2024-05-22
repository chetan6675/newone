document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.querySelector('.animated-paragraph');
    const form = document.getElementById('love-form');
    const responseMessage = document.getElementById('response-message');
    
    setInterval(() => {
        paragraph.classList.toggle('loveGlow');
    }, 2000);
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const answer = document.getElementById('love-answer').value;
        responseMessage.textContent = `Thank you for sharing! Give Me screenshot of this.${answer}.`;
        form.reset();
    });
});
