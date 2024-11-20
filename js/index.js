// burger 
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger__icon');
    const burgerMenu = document.querySelector('.burger__menu');
    const servicesToggle = document.getElementById("servicesToggle");
    const servicesList = document.getElementById("servicesList");
    const icon = servicesToggle.querySelector(".burger_serv__icon");

    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        document.body.style.overflow = burgerMenu.classList.contains('active') ? 'hidden' : '';
    });

    servicesToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        servicesList.classList.toggle("active");
        icon.classList.toggle("rotated");
    });

    document.addEventListener("click", (event) => {
        if (!servicesList.contains(event.target) && !servicesToggle.contains(event.target)) {
            servicesList.classList.remove("active");
            icon.classList.remove("rotated");
        }
    });
});
// animate form
document.addEventListener('DOMContentLoaded', (event) => {
    const mobileWrappingCheckbox = document.getElementById('mobileWrappingCheckbox');
    const addressInput = document.getElementById('addressInput');
    const formazioneCheckbox = document.getElementById('formazioneCheckbox');
    const formazioneMessage = document.getElementById('formazioneMessage');

    mobileWrappingCheckbox.addEventListener('change', function () {
        toggleElement(addressInput, this.checked);
    });

    formazioneCheckbox.addEventListener('change', function () {
        toggleElement(formazioneMessage, this.checked);
    });

    function toggleElement(element, show) {
        if (show) {
            element.style.height = 'auto'; // Set height to 'auto' to fit content
            element.classList.add('open');
        } else {
            element.style.height = '0';
            element.classList.remove('open');
        }
    }
});

// AOS

AOS.init({
    once: true,
});

// phone
$(".phoneInput").mask("+39-888-888-8888");

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
};

$('input[type="tel"]').click(function () {
    $(this).setCursorPosition(16);
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

// contact__swiper

const swiperC = new Swiper(".contact__swiper", {
    loop: true,
    slidesPerView: 4,
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
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
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



// pop up image

function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = element.src;
}

function closeModal(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal || event.target.classList.contains('close')) {
        modal.style.display = "none";
    }
}