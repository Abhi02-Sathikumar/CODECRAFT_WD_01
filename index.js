window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    document.body.classList.add('scrolled','logos');
  } else {
    document.body.classList.remove('scrolled','logos');
  }
});