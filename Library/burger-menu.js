const BURGER = document.getElementById('burger');
const NAVMENU = document.getElementById('navigation-area');
const MENU_LIST = document.getElementById('nav-menu');
const WHOLE_PAGE = document.getElementById('main');

BURGER.addEventListener('click', (event) => {
    if (BURGER.classList.value == 'burger-collapse') {
        event.target.classList.remove('burger-collapse');
        event.target.classList.add('burger-expand');
        NAVMENU.classList.add('nav-area-active');
    }
    else {
        event.target.classList.remove('burger-expand');
        event.target.classList.add('burger-collapse');
        NAVMENU.classList.remove('nav-area-active');
    }  
});

MENU_LIST.addEventListener('click', (event) => {
    NAVMENU.classList.remove('nav-area-active');
    BURGER.classList.remove('burger-expand');
    BURGER.classList.add('burger-collapse');

});

WHOLE_PAGE.addEventListener('click', (event) => {
    if (BURGER.classList.value == 'burger-expand') {
        BURGER.classList.remove('burger-expand');
        BURGER.classList.add('burger-collapse');
        NAVMENU.classList.remove('nav-area-active');
    }
});
