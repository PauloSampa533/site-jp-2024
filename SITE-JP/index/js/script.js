// Seleciona os elementos do carrossel
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Função para mover o carrossel para o item atual
function showCarouselItem(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Evento para o botão "anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    showCarouselItem(currentIndex);
});

// Evento para o botão "próximo"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    showCarouselItem(currentIndex);
});

// Exibe o primeiro item do carrossel inicialmente
showCarouselItem(currentIndex);
