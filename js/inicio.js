let currentIndex = 1;
showSlide(currentIndex);

function currentSlide(n) {
    showSlide(currentIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    let buttons = document.getElementsByClassName("carousel-btn");

    if (n > slides.length) {
        currentIndex = 1;
    }
    if (n < 1) {
        currentIndex = slides.length;
    }

    // Ocultar todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quitar la clase "active" de todos los botones
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    // Mostrar la diapositiva actual y añadir la clase "active" al botón correspondiente
    slides[currentIndex - 1].style.display = "block";
    buttons[currentIndex - 1].className += " active";
}