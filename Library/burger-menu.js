const BURGER = document.getElementById('burger');
const NAV_LINK = document.getElementById('navigation-area');
const MENU_LIST = document.getElementById('nav-menu');
const WHOLE_PAGE = document.getElementById('main');
const BUTTONS_CONTAINER = document.getElementById('carousel-pagination');
const FIRST_BUTTON = document.getElementById('first-btn');
const SECOND_BUTTON = document.getElementById('second-btn');
const THIRD_BUTTON = document.getElementById('third-btn');
const FOURTH_BUTTON = document.getElementById('fourth-btn');
const FIFTH_BUTTON = document.getElementById('fifth-btn');
const CAROUSEL = document.getElementById('about-carousel');
const LEFT_CARRET = document.getElementById('left-carret');
const RIGHT_CARRET = document.getElementById('right-carret');
const PROFILE_BTN = document.getElementById('profile-btn');
const profile_window = document.getElementById('profile-dropdown');
const auth_options = document.querySelectorAll('.profile-actions');
let image_index = 0;
let burgerShown = 0;

const resetButtonsStyle = () => {
    BUTTONS_CONTAINER.querySelectorAll('div').forEach(btn => btn.removeAttribute('class') & btn.setAttribute('class','carousel-pagination-button'));
}

const resetCarouselImageStyle = () => {
    CAROUSEL.querySelectorAll('div').forEach(el => el.removeAttribute('class') & el.setAttribute('class', 'carousel-item'));
}

const classes = ['to-the-begining','to-the-left','to-the-end','to-the-fourth','to-the-fifth'];

const allButtons = ['first-btn','second-btn','third-btn','fourth-btn','fifth-btn'];

/*BURGER.addEventListener('click', (event) => {
    if (BURGER.classList.value == 'burger-collapse') {
        event.target.classList.remove('burger-collapse');
        event.target.classList.add('burger-expand');
        MENU_LIST.classList.remove('nav-hidden');
        MENU_LIST.classList.add('nav-shown');
        burgerShown = 1;
        profile_window.classList.remove('profile-dropdown-show');
        profile_window.classList.add('profile-dropdown-hide');
        profileShown = 0;
        console.log(burgerShown)
    }
    else {
        console.log(burgerShown)
        event.target.classList.remove('burger-expand');
        event.target.classList.add('burger-collapse');
        MENU_LIST.classList.remove('nav-shown');
        MENU_LIST.classList.add('nav-hidden');
        burgerShown = 0;
    }  
});*/

BURGER.addEventListener('click', (event) => {
    if (burgerShown == 0) {
        BURGER.classList.remove('burger-collapse');
        BURGER.classList.add('burger-expand');
        MENU_LIST.classList.remove('nav-hidden');
        MENU_LIST.classList.add('nav-shown');
        profile_window.classList.remove('profile-dropdown-show');
        profile_window.classList.add('profile-dropdown-hide');
        profileShown = 0;
        burgerShown = 1;
        console.log(burgerShown)
    }
    else {
        BURGER.classList.remove('burger-expand');
        BURGER.classList.add('burger-collapse');
        MENU_LIST.classList.add('nav-hidden');
        MENU_LIST.classList.remove('nav-shown');
        burgerShown = 0;
    }  
});

MENU_LIST.addEventListener('click', (event) => {
    MENU_LIST.classList.remove('nav-shown');
    MENU_LIST.classList.add('nav-hidden');
    BURGER.classList.remove('burger-expand');
    BURGER.classList.add('burger-collapse');
    burgerShown = 0;
});

document.addEventListener('mouseup', function(e) {
    if ((!profile_window.contains(e.target)) || (!BURGER.contains(e.target))) {
        profile_window.classList.remove('profile-dropdown-show');
        profile_window.classList.add('profile-dropdown-hide');
        BURGER.classList.remove('burger-expand');
        BURGER.classList.add('burger-collapse');
        MENU_LIST.classList.remove('nav-shown');
        MENU_LIST.classList.add('nav-hidden');
        profileShown = 0;
    }
});

document.addEventListener('mouseup', function(e) {
    if (!BURGER.contains(e.target)) {
        BURGER.classList.remove('burger-expand');
        BURGER.classList.add('burger-collapse');
        MENU_LIST.classList.remove('nav-shown');
        MENU_LIST.classList.add('nav-hidden');
        burgerShown = 0;
    }
});


auth_options.forEach(opt => opt.addEventListener('click', () => {
    profile_window.classList.remove('profile-dropdown-show');
    profile_window.classList.add('profile-dropdown-hide');
    profileShown = 0;
}))


FIRST_BUTTON.addEventListener('click', (event) => {
    resetCarouselImageStyle();
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.add('to-the-begining'));
    resetButtonsStyle();
    FIRST_BUTTON.classList.add('clicked-btn');
    image_index = 0;
});

SECOND_BUTTON.addEventListener('click', (event) => {
    resetCarouselImageStyle();
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.add('to-the-left'));
    resetButtonsStyle();
    SECOND_BUTTON.classList.add('clicked-btn');
    image_index = 1;
});


THIRD_BUTTON.addEventListener('click', (event) => {
    resetCarouselImageStyle();
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.add('to-the-end'));
    resetButtonsStyle();
    THIRD_BUTTON.classList.add('clicked-btn');
    image_index = 2;
});

FOURTH_BUTTON.addEventListener('click', (event) => {
    resetCarouselImageStyle();
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.add('to-the-fourth'));
    resetButtonsStyle();
    FOURTH_BUTTON.classList.add('clicked-btn');
    image_index = 3;
});

FIFTH_BUTTON.addEventListener('click', (event) => {
    resetCarouselImageStyle();
    CAROUSEL.querySelectorAll('div').forEach(el => el.classList.add('to-the-fifth'));
    resetButtonsStyle();
    FIFTH_BUTTON.classList.add('clicked-btn');
    image_index = 4;
});

let classtoapply = '';
let btnnumber = '';

LEFT_CARRET.addEventListener('click', () => {
    if (image_index > 0) {
        image_index -= 1;
        classtoapply = classes[image_index];
        resetCarouselImageStyle();
        CAROUSEL.querySelectorAll('div').forEach(el => el.classList.add(classtoapply));
        btnnumber = allButtons[image_index];
        resetButtonsStyle();
        document.getElementById(btnnumber).classList.add('clicked-btn');
}});

RIGHT_CARRET.addEventListener('click', () => {
    if (image_index < 4) {
        image_index += 1;
        classtoapply = classes[image_index];
        resetCarouselImageStyle();
        CAROUSEL.querySelectorAll('div').forEach(el => el.classList.add(classtoapply));
        btnnumber = allButtons[image_index];
        resetButtonsStyle();
        document.getElementById(btnnumber).classList.add('clicked-btn');
}});


let profileShown = 0;

PROFILE_BTN.addEventListener('click', () => {
    if (profileShown == 0) {
        profile_window.classList.remove('profile-dropdown-hide');
        profile_window.classList.add('profile-dropdown-show');
        profileShown = 1;
        if (burgerShown == 1) {
            BURGER.classList.add('burger-collapse');
            BURGER.classList.remove('burger-expand');
            MENU_LIST.classList.add('nav-hidden');
            MENU_LIST.classList.remove('nav-shown');
            burgerShown = 0;
        }
    }
    else {
        profile_window.classList.remove('profile-dropdown-show');
        profile_window.classList.add('profile-dropdown-hide');
        profileShown = 0;
    }
})