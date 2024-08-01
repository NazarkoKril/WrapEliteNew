// burger 
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger__icon');
    const burgerMenu = document.querySelector('.burger__menu');

    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        if (burgerMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
});

// blog__swiper

const swiperB = new Swiper(".blog__swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        880: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1275: {
            slidesPerView: 3,
            spaceBetween: 0
        },
    },
    navigation: {
        nextEl: ".blog__next",
        prevEl: ".blog__prev",
    },
    speed: 1000,
});

// form input animation

document.addEventListener("DOMContentLoaded", function () {
    var inputs = document.querySelectorAll("input.effect-20, textarea.effect-20");

    inputs.forEach(function (input) {
        input.addEventListener("focus", function () {
            input.classList.add("has-content");
        });

        input.addEventListener("blur", function () {
            if (input.value === "") {
                input.classList.remove("has-content");
            }
        });
        if (input.value !== "") {
            input.classList.add("has-content");
        }
    });
});

// hero_service

let currentIndex = 0;
const carLeftImages = document.querySelectorAll('.car-left');
const carRightImages = document.querySelectorAll('.car-right');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const slideTitle = document.getElementById('slide-title');

const titles = ["Oscuramento Vetri", "Wrapping Auto", "Pellicole Protettive PPF", "Design Grafico"];
let isAnimating = false;
let autoSlideInterval;


const changeSlide = (direction) => {
    if (isAnimating) return;
    isAnimating = true;

    slideTitle.style.opacity = 0;
    slideTitle.style.transform = 'translateY(-20px)';

    const nextIndex = (currentIndex + direction + carLeftImages.length) % carLeftImages.length;

    carLeftImages[currentIndex].style.transform = `translateX(${direction * 100}%)`;
    carRightImages[currentIndex].style.transform = `translateX(${direction * 100}%)`;

    carLeftImages[nextIndex].classList.remove('hidden');
    carRightImages[nextIndex].classList.remove('hidden');
    carLeftImages[nextIndex].style.transform = `translateX(${-direction * 100}%)`;
    carRightImages[nextIndex].style.transform = `translateX(${-direction * 100}%)`;

    setTimeout(() => {
        carLeftImages[nextIndex].style.transform = 'translateX(0)';
        carRightImages[nextIndex].style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        slideTitle.textContent = titles[nextIndex];
        slideTitle.style.opacity = 1;
        slideTitle.style.transform = 'translateY(0)';
    }, 2000);

    setTimeout(() => {
        carLeftImages[currentIndex].classList.add('hidden');
        carRightImages[currentIndex].classList.add('hidden');
        currentIndex = nextIndex;
        isAnimating = false;
    }, 3000);

    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => changeSlide(1), 6000);
};

nextButton.addEventListener('click', () => {
    changeSlide(1);
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => changeSlide(1), 6000);
});

prevButton.addEventListener('click', () => {
    changeSlide(-1);
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => changeSlide(1), 6000);
});

autoSlideInterval = setInterval(() => changeSlide(1), 6000);