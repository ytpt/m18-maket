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