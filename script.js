const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const auth = document.querySelector('.header__auth');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    auth.classList.toggle('open');
});

document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});