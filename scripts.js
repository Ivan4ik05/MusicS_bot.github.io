document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cta-button');
    
    // Добавляем эффект при наведении
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Анимация появления контента
    const sections = document.querySelectorAll('section');
    const animateSection = (section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('visible');
        }
    };

    sections.forEach(section => {
        section.classList.add('hidden');
        window.addEventListener('scroll', () => animateSection(section));
        animateSection(section);
    });
});
