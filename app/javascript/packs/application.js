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