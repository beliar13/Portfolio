const BURGER = document.getElementById('burger');
const NAV_LINK = document.getElementById('navigation-area');
const MENU_LIST = document.getElementById('nav-menu');
const WHOLE_PAGE = document.getElementById('main');
const FIRST_BUTTON = document.getElementById('first-btn');
const SECOND_BUTTON = document.getElementById('second-btn');
const THIRD_BUTTON = document.getElementById('third-btn');
const FOURTH_BUTTON = document.getElementById('fourth-btn');
const FIFTH_BUTTON = document.getElementById('fifth-btn');
const CAROUSEL = document.getElementById('about-carousel');


MENU_LIST.querySelectorAll('li').forEach(el => el.classList.add('list-item-hidden'));

BURGER.addEventListener('click', (event) => {
    if (BURGER.classList.value == 'burger-collapse') {
        event.target.classList.remove('burger-collapse');
        event.target.classList.add('burger-expand');
        MENU_LIST.classList.remove('nav-hidden');
        MENU_LIST.classList.add('nav-shown');
        MENU_LIST.querySelectorAll('li').forEach(el => el.classList.remove('list-item-hidden'));
    }
    else {
        event.target.classList.remove('burger-expand');
        event.target.classList.add('burger-collapse');
        MENU_LIST.classList.remove('nav-shown');
        MENU_LIST.classList.add('nav-hidden');
        MENU_LIST.querySelectorAll('li').forEach(el => el.classList.add('list-item-hidden'));
    }  
});

MENU_LIST.addEventListener('click', (event) => {
    MENU_LIST.classList.remove('nav-shown');
    MENU_LIST.classList.add('nav-hidden');
    BURGER.classList.remove('burger-expand');
    BURGER.classList.add('burger-collapse');

});

WHOLE_PAGE.addEventListener('click', (event) => {
    if (BURGER.classList.value == 'burger-expand') {
        BURGER.classList.remove('burger-expand');
        BURGER.classList.add('burger-collapse');
        MENU_LIST.classList.remove('nav-shown');
        MENU_LIST.classList.add('nav-hidden');
        MENU_LIST.querySelectorAll('li').forEach(el => el.classList.add('list-item-hidden'));
    }
});


FIRST_BUTTON.addEventListener('click', (event) => {
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.remove('to-the-end') & el.classList.add('to-the-left') & el.classList.remove('to-the-fourth') & el.classList.remove('to-the-fifth') & el.classList.add('to-the-begining'));
    SECOND_BUTTON.classList.remove('clicked-btn');
    THIRD_BUTTON.classList.remove('clicked-btn');
    FOURTH_BUTTON.classList.remove('clicked-btn');
    FIFTH_BUTTON.classList.remove('clicked-btn');
    FIRST_BUTTON.classList.add('clicked-btn');
});

SECOND_BUTTON.addEventListener('click', (event) => {
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.remove('to-the-end') & el.classList.remove('to-the-begining') & el.classList.remove('to-the-fourth') & el.classList.remove('to-the-fifth') & el.classList.add('to-the-left'));
    THIRD_BUTTON.classList.remove('clicked-btn');
    FIRST_BUTTON.classList.remove('clicked-btn');
    FOURTH_BUTTON.classList.remove('clicked-btn');
    FIFTH_BUTTON.classList.remove('clicked-btn');
    SECOND_BUTTON.classList.add('clicked-btn');
});


THIRD_BUTTON.addEventListener('click', (event) => {
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.remove('to-the-left') & el.classList.remove('to-the-begining') & el.classList.remove('to-the-fourth') & el.classList.remove('to-the-fifth') & el.classList.add('to-the-end'));
    SECOND_BUTTON.classList.remove('clicked-btn');
    FIRST_BUTTON.classList.remove('clicked-btn');
    FOURTH_BUTTON.classList.remove('clicked-btn');
    FIFTH_BUTTON.classList.remove('clicked-btn');
    THIRD_BUTTON.classList.add('clicked-btn');
});

FOURTH_BUTTON.addEventListener('click', (event) => {
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.remove('to-the-left') & el.classList.remove('to-the-begining') & el.classList.remove('to-the-end') & el.classList.remove('to-the-fifth') & el.classList.add('to-the-fourth'));
    SECOND_BUTTON.classList.remove('clicked-btn');
    FIRST_BUTTON.classList.remove('clicked-btn');
    THIRD_BUTTON.classList.remove('clicked-btn');
    FIFTH_BUTTON.classList.remove('clicked-btn');
    FOURTH_BUTTON.classList.add('clicked-btn');
});

FIFTH_BUTTON.addEventListener('click', (event) => {
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.remove('to-the-left') & el.classList.remove('to-the-begining') & el.classList.remove('to-the-end') & el.classList.remove('to-the-fourth') & el.classList.add('to-the-fifth'));
    SECOND_BUTTON.classList.remove('clicked-btn');
    FIRST_BUTTON.classList.remove('clicked-btn');
    THIRD_BUTTON.classList.remove('clicked-btn');
    FOURTH_BUTTON.classList.remove('clicked-btn');
    FIFTH_BUTTON.classList.add('clicked-btn');
});