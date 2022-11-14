const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 2000,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    initialSlide: 1,
});

const form = document.getElementById('form');
const formHeader = document.querySelector('.form-header');
const formFooter = document.querySelector('.form-footer');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    formHeader.classList.add('hide');
    formFooter.classList.add('hide');
    let success = document.createElement('div');
    success.classList.add('success');
    success.innerHTML = `
        <img src='assets/success.svg' alt='Успешно' width='194' height='128'/>
        <p>Спасибо! Мы будем держать вас в курсе обновлений</p>
    `;
    form.replaceWith(success);
})
