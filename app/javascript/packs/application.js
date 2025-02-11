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