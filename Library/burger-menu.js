const BURGER = document.getElementById('burger');
const NAV_LINK = document.getElementById('navigation-area');
const MENU_LIST = document.getElementById('nav-menu');
const WHOLE_PAGE = document.getElementById('main');


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
