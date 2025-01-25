document.addEventListener('DOMContentLoaded', function() {
    const sectionsContainer = document.querySelector('.sections-container');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    let isScrolling = false;
    let currentSection = 0;

    // Update active navigation link based on current section
    function updateActiveLink() {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[currentSection].classList.add('active');
    }

    // Smooth scroll to section
    function scrollToSection(index) {
        if (isScrolling) return;
        isScrolling = true;
        currentSection = index;
        
        const section = sections[index];
        section.scrollIntoView({ behavior: 'smooth' });
        updateActiveLink();

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }

    // Handle navigation click
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(index);
        });
    });

    // Handle wheel event for smooth scrolling
    sectionsContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        if (isScrolling) return;

        if (e.deltaY > 0 && currentSection < sections.length - 1) {
            // Scroll down
            scrollToSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
            // Scroll up
            scrollToSection(currentSection - 1);
        }
    }, { passive: false });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isScrolling) return;

        if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSection < sections.length - 1) {
            e.preventDefault();
            scrollToSection(currentSection + 1);
        } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
            e.preventDefault();
            scrollToSection(currentSection - 1);
        }
    });

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    sectionsContainer.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    sectionsContainer.addEventListener('touchmove', (e) => {
        if (isScrolling) {
            e.preventDefault();
            return;
        }
        touchEndY = e.touches[0].clientY;
    }, { passive: false });

    sectionsContainer.addEventListener('touchend', () => {
        if (isScrolling) return;

        const diff = touchStartY - touchEndY;
        const sensitivity = 50; // minimum distance for swipe

        if (Math.abs(diff) < sensitivity) return;

        if (diff > 0 && currentSection < sections.length - 1) {
            // Swipe up
            scrollToSection(currentSection + 1);
        } else if (diff < 0 && currentSection > 0) {
            // Swipe down
            scrollToSection(currentSection - 1);
        }
    });

    // Intersection Observer to update current section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                if (!isScrolling && index !== currentSection) {
                    currentSection = index;
                    updateActiveLink();
                }
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));

    // Initial active state
    updateActiveLink();
});
