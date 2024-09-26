const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Функция для показа слайда по индексу
function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  // Изменение позиции слайдов
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Обработчик нажатия на кнопку "следующий слайд"
nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Обработчик нажатия на кнопку "предыдущий слайд"
prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});
