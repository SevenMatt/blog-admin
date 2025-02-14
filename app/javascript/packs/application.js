// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#carouselExample");
    if (carousel) {
        let instance = new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true,
        })
    }
})

document.addEventListener("DOMContentLoaded", function () {
    // Navbar transparente ao rolar a página
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(10, 25, 47, 0.95)";
        } else {
            navbar.style.background = "rgba(10, 25, 47, 0.8)";
        }
    });

    // Animação suave ao clicar nos links do menu 
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const taget = document.querySelector(this.getAttribute("href"));
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animação de digitação
    const typingElement = document.getElementById("typing");
    const texts = ["Desenvolvedor Web", "Criador de Experiências Digitais", "Apaixonado por Tecnologia"];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex <texts[textIndex].length) {
            typingElement.textContent += texts[textIndex][charIndex];
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        }
    }

    type();

    // Animação ao rolar
    const aboutSection = document.querySelector(".about-section");

    function handleScroll() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para carregar se estiver visível
});