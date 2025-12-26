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
      document.querySelector(anchor.getAttribute('href'))
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
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
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
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
    });
  }

  /* =========================
     CAROUSEL DE PRODUTOS
  ========================= */
  const track = document.querySelector('.carousel-track');
  const productSlides = document.querySelectorAll('.product-card');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let productIndex = 0;

  function updateCarousel() {
    if (!productSlides.length) return;
    const slideWidth = productSlides[0].offsetWidth;
    track.style.transform = `translateX(-${productIndex * slideWidth}px)`;
  }

  nextBtn?.addEventListener('click', () => {
    if (productIndex < productSlides.length - 1) {
      productIndex++;
      updateCarousel();
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (productIndex > 0) {
      productIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);

});
