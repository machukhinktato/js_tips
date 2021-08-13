window.addEventListener('DOMContentLoaded', () => {

const modalTrigger = document.querySelector('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');


// modal version with hide and show inline styles

modalTrigger.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
});

modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
});

// modal version with toggle button


/*
modalTrigger('click', () => {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
});

modalCloseBtn('click', () => {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
});
*/

});
