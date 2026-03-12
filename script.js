function toggleMenu() {
    document.querySelector('.menu-links').classList.toggle('open');
    document.querySelector('.hamburger-icon').classList.toggle('open');
  }
  
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('hide');
      document.querySelectorAll('.fade-up').forEach(el => el.classList.add('animated'));
    }, 2200);
  });
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger')
    .forEach(el => revealObserver.observe(el));
  
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    document.querySelector('nav#desktop-nav')?.classList.toggle('scrolled', scrolled);
    document.querySelector('nav#hamburger-nav')?.classList.toggle('scrolled', scrolled);
  });
  
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const inView = scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight;
      document.querySelectorAll(`a[href="#${id}"]`)
        .forEach(l => l.classList.toggle('active', inView));
    });
  });