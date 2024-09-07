// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    const texts = ['Web Developer', 'SEO Manager'];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
    
    function type() {
        if (index === texts.length) {
            index = 0;
        }
        currentText = texts[index];
        typingText.innerHTML = isDeleting ? currentText.substring(0, charIndex--) : currentText.substring(0, charIndex++);
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 300);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index++;
            setTimeout(type, 50);
        } else {
            setTimeout(type, isDeleting ? 100 : 150);
        }
    }
    
    type();
});
