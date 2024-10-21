// Selecione todos os carrosséis automáticos
document.querySelectorAll('.carousel-wrapper-auto').forEach(function(carouselWrapper) {
    const prevButton = carouselWrapper.querySelector('.carousel-control-auto.prev');
    const nextButton = carouselWrapper.querySelector('.carousel-control-auto.next');
    const carousel = carouselWrapper.querySelector('.carousel-auto');
    const carouselItems = carouselWrapper.querySelectorAll('.carousel-item-auto');

    let currentIndex = 0;
    const totalItems = carouselItems.length;
    const autoSlideInterval = 3000; // Tempo entre slides (5 segundos)

    // Função para exibir o item correto do carrossel
    function showCarouselItem(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[index].classList.add('active');
    }

    // Evento de clique para o botão "Anterior"
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showCarouselItem(currentIndex);
        resetAutoSlide(); // Reinicia o slide automático após interação manual
    });

    // Evento de clique para o botão "Próximo"
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        showCarouselItem(currentIndex);
        resetAutoSlide(); // Reinicia o slide automático após interação manual
    });

    // Função para avançar automaticamente
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showCarouselItem(currentIndex);
    }

    // Inicia o carrossel automático
    let autoSlideTimer = setInterval(autoSlide, autoSlideInterval);

    // Função para reiniciar o temporizador de slide automático
    function resetAutoSlide() {
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(autoSlide, autoSlideInterval);
    }

    // Inicializar o primeiro item ativo
    showCarouselItem(currentIndex);
});
