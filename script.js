document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     MENU MOBILE
  ========================= */
  const mobileMenu = document.getElementById('mobile-menu');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('#main-nav a');

  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        mainNav.classList.remove('active');
      }
    });
  });

  /* =========================
     SCROLL SUAVE
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document
        .querySelector(anchor.getAttribute('href'))
        ?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* =========================
     HERO CAROUSEL
  ========================= */
  const heroSlides = document.querySelectorAll('.hero-slide');
  let heroIndex = 0;

  if (heroSlides.length > 0) {
    setInterval(() => {
      heroSlides[heroIndex].classList.remove('active');
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroSlides[heroIndex].classList.add('active');
    }, 5000);
  }

  /* =========================
     WHATSAPP BOTÕES
  ========================= */
  const phoneNumber = "5517997449017";

  document.querySelectorAll(".whatsapp-btn").forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      const product = button.dataset.product;
      const message = `Olá! Tenho interesse no ${product}. Poderia me passar mais informações?`;
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    });
  });

  /* =========================
     FORMULÁRIO WHATSAPP
  ========================= */
  const form = document.getElementById("whatsapp-form");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
      const text = `Olá! Meu nome é ${name}. ${message}`;

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    });
  }

  /* =========================
     CAROUSEL DE IMAGENS (PRODUTO)
  ========================= */
  document.querySelectorAll('.product-carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 3000);
  });

});
