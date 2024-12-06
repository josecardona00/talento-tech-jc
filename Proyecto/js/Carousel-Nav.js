document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    let counter = 0;
    let size = carouselImages[0].clientWidth;

    const updateSize = () => {
        size = carouselImages[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };

    const nextSlide = () => {
        if (counter >= carouselImages.length - 1) {
            counter = -1;
        }
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        resetInterval();
    };

    const prevSlide = () => {
        if (counter <= 0) {
            counter = carouselImages.length - 1;
        } else {
            counter--;
        }
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        resetInterval();
    };

    const startInterval = () => {
        intervalId = setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos
    };

    const resetInterval = () => {
        clearInterval(intervalId);
        startInterval();
    };

    window.addEventListener('resize', updateSize);

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    startInterval(); // Inicia el intervalo al cargar la página
    updateSize(); // Ajusta el tamaño inicial
});