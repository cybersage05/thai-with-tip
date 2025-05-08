const bounceElements = document.querySelectorAll('.scroll-bounce');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

bounceElements.forEach(el => observer.observe(el));
