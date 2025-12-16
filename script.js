    document.addEventListener('DOMContentLoaded', function() {
        // 1. Funcionalidade do Menu Responsivo (Hambúrguer)
        const mobileMenu = document.getElementById('mobile-menu');
        const mainNav = document.getElementById('main-nav');
        const navLinks = document.querySelectorAll('#main-nav a');

        if (mobileMenu) {
            mobileMenu.addEventListener('click', function() {
                mainNav.classList.toggle('active');
            });
        }

        // Fecha o menu ao clicar em um link (para mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Verifica se a largura da tela é menor ou igual a 768px (o breakpoint do CSS)
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                }
            });
        });

        // 2. Rolagem suave para links de âncora
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Previne o comportamento padrão do link (que é pular instantaneamente)
                e.preventDefault();

                // Rola suavemente até o elemento de destino
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

    });
// 3. Carrossel de imagens do HERO
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000); // troca a cada 5 segundos
const phoneNumber = "5517997449017";

// Botões "Tenho interesse"
document.querySelectorAll(".whatsapp-btn").forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const product = this.getAttribute("data-product");
    const message = `Olá! Tenho interesse no ${product}. Poderia me passar mais informações?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});

// Formulário de contato
document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const text = `Olá! Meu nome é ${name}. ${message}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
});
