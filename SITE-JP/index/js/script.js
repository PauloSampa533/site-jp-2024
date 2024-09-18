// Seleciona os elementos necessários
const gallery = document.querySelector('.galeria-gallery');
const images = document.querySelectorAll('.galeria-gallery img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0; // Índice atual da imagem
const imageWidth = images[0].clientWidth; // Largura de uma imagem para saber o deslocamento

// Função para atualizar o carrossel
function updateGallery() {
  gallery.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

// Evento para o botão "Próximo"
nextButton.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateGallery();
  }
});

// Evento para o botão "Anterior"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

// Para ajustar a largura ao redimensionar a janela
window.addEventListener('resize', () => {
  gallery.style.transition = 'none'; // Remove a transição para evitar bugs
  updateGallery();
  setTimeout(() => {
    gallery.style.transition = 'transform 0.4s ease'; // Reaplica a transição
  }, 50);
});
