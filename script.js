const burger = document.querySelector('.header__burger');
const panel = document.querySelector('.header__panel');
const slider = document.querySelector('.customers__slider');

(function setupSliderAnimation() {
    const scrollSpeed = 0.1;
    const scrollOffset = slider.scrollWidth;
    let lastTimestamp = 0;
    let scrollCoord = 0;

    // Frametime aware scrolling animation
    function sliderAnimation(timestamp) {
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        scrollCoord += scrollSpeed * delta;
        if (scrollCoord > scrollOffset) {
            scrollCoord -= scrollOffset - delta;
        }
        slider.scroll(scrollCoord, 0);
        window.requestAnimationFrame(sliderAnimation);
    }

    // Duplicate slider items
    const sliderItemCount = slider.childElementCount;
    for (let i = 0; i < sliderItemCount; i++) {
        slider.appendChild(slider.children[i].cloneNode(true));
    }

    // Start animation loop
    window.requestAnimationFrame(sliderAnimation);
})();

burger.addEventListener('click', () => {
    panel.classList.toggle('open');
    burger.classList.toggle('open');
});

document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});