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

// hero__swiper
const swiperH = new Swiper(".hero__swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    autoplay: {
        delay: 2000,
    },
    speed: 1500,
});

// blog__swiper
const swiperB = new Swiper(".blog__swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {

        320: {
            slidesPerView: 3,
            spaceBetween: 0
        },
    },
    navigation: {
        nextEl: ".blog__next",
        prevEl: ".blog__prev",
    },
});

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
