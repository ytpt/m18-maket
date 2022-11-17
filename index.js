//slider
const line = document.querySelector('.line');
const slides = document.querySelectorAll('.slide');
const sliderWidth = document.querySelector('.slider').offsetWidth;
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let widthArray = [0];
let lineWidth = 0;
let offset = 0;
let step = 0;
let rest = 0;

for (let i = 0; i < slides.length; i++) {
    widthArray.push(slides[i].offsetWidth);
    lineWidth += slides[i].offsetWidth;
}
line.style.width = lineWidth + 'px';

const moveSlide = function() {
    rest = lineWidth - sliderWidth - (offset + widthArray[step]);

    if(rest >= 0) {
        offset = offset + widthArray[step];
        line.style.left = -offset + 'px';
    } else {
        line.style.left = -(lineWidth - sliderWidth) + 'px';
        offset = 0;
        step = -1;
    }

    if(step + 1 == slides.length) {
        step = 0;
        offset = 0;
    } else {
        step++;
    }
}

window.onload = moveSlide();
btnNext.addEventListener('click', moveSlide)
btnPrev.addEventListener('click', moveSlide);

//form
const form = document.getElementById('form');
const formHeader = document.querySelector('.form-header');
const formFooter = document.querySelector('.form-footer');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const requiredInputs = form.querySelectorAll('.required');
    requiredInputs.forEach(input => {
        if(input.value == '') {
            input.classList.add('input-error');
        } else {
            input.classList.remove('input-error');
        }
    })

    if(requiredInputs[0].value !== '' && requiredInputs[1].value !== '') {
        formHeader.classList.add('hide');
        formFooter.classList.add('hide');

        let success = document.createElement('div');
        success.classList.add('success');
        success.innerHTML = `
            <img src='assets/success.svg' alt='Успешно' width='194' height='128'/>
            <p>Спасибо! Мы будем держать вас в курсе обновлений</p>
        `;
        form.replaceWith(success);
    }
})