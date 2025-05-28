const burger = document.querySelector('.header__burger');
const panel = document.querySelector('.header__panel');

burger.addEventListener('click', () => {
    panel.classList.toggle('open');
});

document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});