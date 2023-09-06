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

const TO_REGISTER = document.getElementById('register');
const OVERLAY_WINDOW = document.getElementById('overlay');
const CLOSE_REGISTER = document.getElementById('close-register');
const GETREADERCARD_REG = document.getElementById('dc-signup');
const REG_WINDOW = document.getElementById('register-window');

const TO_LOGIN = document.getElementById('login');
const OVERLAY_LOGIN = document.getElementById('overlay-login');
const CLOSE_LOGIN = document.getElementById('close-login');
const GETREADERCARD_LOGIN = document.getElementById('dc-login');
const LOGIN_WINDOW = document.getElementById('login-window');

const formFName = document.getElementById('register-fname');
const formLName = document.getElementById('register-lname');
const formEmail = document.getElementById('register-email');
const formPass = document.getElementById('register-password');
const formReg = document.getElementById('register-form');

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

/* Actions with register - start */

TO_REGISTER.addEventListener('click', () => {
    OVERLAY_WINDOW.classList.remove('overlay-hidden');
})


GETREADERCARD_REG.addEventListener('click', () => {
    OVERLAY_WINDOW.classList.remove('overlay-hidden');
})

CLOSE_REGISTER.addEventListener('click', () => {
    OVERLAY_WINDOW.classList.add('overlay-hidden');
})

document.addEventListener('mouseup', function(e) {
    if (!REG_WINDOW.contains(e.target)) {
        OVERLAY_WINDOW.classList.add('overlay-hidden');
    }
});

/* Actions with register - end */

/* Actions with login - start */

TO_LOGIN.addEventListener('click', () => {
    OVERLAY_LOGIN.classList.remove('overlay-hidden');
})


GETREADERCARD_LOGIN.addEventListener('click', () => {
    OVERLAY_LOGIN.classList.remove('overlay-hidden');
})

CLOSE_LOGIN.addEventListener('click', () => {
    OVERLAY_LOGIN.classList.add('overlay-hidden');
})

document.addEventListener('mouseup', function(e) {
    if (!LOGIN_WINDOW.contains(e.target)) {
        OVERLAY_LOGIN.classList.add('overlay-hidden');
    }
});

/* Actions with login - end */

/* registration handle - start*/
const cardNumber = () => {
    return Math.floor(Math.random() * 100000000000).toString(16);
}

const rawdata = localStorage.getItem('users');
const data = JSON.parse(rawdata);
let usersarray = data || [];

let fname = '';
let lname = '';
let email = '';
let pass = '';
let card = '';
let currentUser = '';
let isAuth = 0;
let userInitials = '';

if (formReg){
formReg.addEventListener('submit', (e) => {
    e.preventDefault();
    fname = formFName.value;
    lname = formLName.value;
    email = formEmail.value;
    pass = formPass.value;
    card = cardNumber();
    usercard = card;
    createUserEntry(fname,lname,email,pass,card);
    console.log(usersarray);
    usersarray.push(ObjUser);
    localStorage.setItem('users', JSON.stringify(usersarray));
    checkAuth(email,card);
    console.log(card);
    console.log(isAuth);
    changeProfileLogo(fname, lname);
    changeProfileName(usercard);
    replaceLoginWithProfile();
    OVERLAY_WINDOW.classList.add('overlay-hidden');
})}

const createUserEntry = (fname,lname,email,pass,card) => {
    ObjUser = {
        "name": fname,
        "lastname": lname,
        "email": email,
        "password": pass,
        "card": card
    }
    return ObjUser;
}

const checkAuth = (email, card) => {
    if (usersarray.find(user => user.email === email) || usersarray.find(user => user.card === card)) {
        isAuth = 1;
    }
    else {
        isAuth = 0;
    }
    return isAuth;
}

const changeProfileLogo = (fname, lname) => {
    if (isAuth == 1) {
        PROFILE_BTN.style.background = 'white';
        userInitials = fname.charAt(0).toUpperCase() + lname.charAt(0).toUpperCase();
        PROFILE_BTN.innerText = userInitials;
    }
    if (isAuth == 0) {
        PROFILE_BTN.style.background = 'url("./img/icon_profile.svg")';
        PROFILE_BTN.innerText = '';
    }
}

const changeProfileName = (usercard) => {
    document.getElementById('profile-head').innerText = usercard;
}
/*replace login with profile - start*/

const logprof = document.getElementById('logprof')

const replaceLoginWithProfile = () => {
    logprof.innerHTML = '<div class="profile-actions" id="profile-after-login">My profile</div>'
}
/*replace login with profile - end*/
/* registration handle - end*/
/* login handle - start*/


const formLogin = document.getElementById('login-form');
const formLoginEmailLogin = document.getElementById('login-email');
const formLoginPass = document.getElementById('login-password');

if(formLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();   
        loginName = formLoginEmailLogin.value;
        loginPass = formLoginPass.value;
        if ((usersarray.find(user => user.email == loginName) && (usersarray.find(user => user.password == loginPass))) || (usersarray.find(user => user.card == loginName) && (usersarray.find(user => user.password == loginPass)))) {
            userInfo = usersarray.find(user => user.email == loginName) || usersarray.find(user => user.card == loginName);         
            console.log(userInfo);
            isAuth = 1;
            lname = userInfo.lastname;
            fname = userInfo.name;
            usercard = userInfo.card;
            changeProfileName(usercard);
            replaceLoginWithProfile();
            OVERLAY_LOGIN.classList.add('overlay-hidden');    
        }
        else {
            isAuth = 0;
            alert('Wrong email/card or password')
        }
        changeProfileLogo(fname, lname);     
    }
)}

/* login handle - end*/

/*buy unAuth - start*/
const purchaseButtons = document.querySelectorAll('.purchase-button')

purchaseButtons.forEach(button => button.addEventListener('click', () => {
    if (isAuth == 0){
        OVERLAY_LOGIN.classList.remove('overlay-hidden');
    }
}))

/*buy unAuth - end*/