document.querySelectorAll('.supermarket').forEach(supermarket => {
    const images = supermarket.getAttribute('data-images')?.split(',') || [];
    if (!images.length) return; // Пропускаем, если изображений нет

    const imageWrapper = supermarket.querySelector('.image-wrapper');
    let currentIndex = 0;
    let interval;

    // Функция смены изображений с плавной анимацией
    const startSlideshow = () => {
        interval = setInterval(() => {
            const newIndex = (currentIndex + 1) % images.length;

            // Создаем новое изображение
            const newImage = document.createElement('img');
            newImage.src = images[newIndex];
            newImage.className = 'active';
            newImage.style.opacity = '0'; // Начальная прозрачность

            // Добавляем новое изображение
            imageWrapper.appendChild(newImage);

            // Постепенно показываем новое изображение
            setTimeout(() => {
                newImage.style.opacity = '1';
            }, 50);

            // Удаляем старое изображение после плавного перехода
            setTimeout(() => {
                const oldImage = imageWrapper.querySelector('img:not(.active)');
                if (oldImage) oldImage.remove();
            }, 500);

            currentIndex = newIndex;
        }, 2000); // Интервал смены
    };

    // Остановка слайд-шоу
    const stopSlideshow = () => {
        clearInterval(interval);
        const images = imageWrapper.querySelectorAll('img');
        images.forEach((img, index) => {
            if (index > 0) img.remove();
        });
    };

    // Наведение и уход мыши
    supermarket.addEventListener('mouseenter', startSlideshow);
    supermarket.addEventListener('mouseleave', stopSlideshow);
});
