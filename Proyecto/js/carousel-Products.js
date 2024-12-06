const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselContainer.children.length - 5) {
        currentIndex++;
        console.log('Next button clicked, currentIndex:', currentIndex);
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        console.log('Prev button clicked, currentIndex:', currentIndex);
        updateCarousel();
    }
});

function updateCarousel() {
    const cardWidth = carouselContainer.children[0].offsetWidth;
    console.log('Card width:', cardWidth);
    carouselContainer.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}