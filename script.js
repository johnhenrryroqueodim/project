const navLinks = document.querySelectorAll('.nav-link');
const slides = document.querySelectorAll('.slide');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  slides.forEach((slide, index) => {
    const top = slide.offsetTop;
    const height = slide.offsetHeight;

    if (scrollY >= top && scrollY <= top + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
      slides.forEach(slide => slide.classList.remove('active'));
      slide.classList.add('active');
    }
  });
});