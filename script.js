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
 
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealElements.forEach(el => revealObserver.observe(el));
 
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav#desktop-nav');
    const mobileNav = document.querySelector('nav#hamburger-nav');
    if (window.scrollY > 60) {
      nav?.classList.add('scrolled');
      mobileNav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
      mobileNav?.classList.remove('scrolled');
    }
  });

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const links = document.querySelectorAll(`.nav-links a[href="#${id}"], .footer-links a[href="#${id}"]`);
      if (scrollY >= top && scrollY < top + height) {
        links.forEach(l => l.classList.add('active'));
      } else {
        links.forEach(l => l.classList.remove('active'));
      }
    });
  });