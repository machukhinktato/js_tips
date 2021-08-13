 window.addEventListener('DOMContentLoaded', () => {

    const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalTrigger.addEventListener('click', (e) => {
        console.log(e);
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });

    modalCloseBtn.addEventListener('click', closeModal);


    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
       if (e.code === 'Escape' && modal.classList.contains('show')) {
           closeModal();
       }
    });

});
