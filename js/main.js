const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
            observer.unobserve(bar);
        }
    });
}, {
    threshold: 0.5
});
document.querySelectorAll('.skills-bar span').forEach(bar => {
    observer.observe(bar);
});
