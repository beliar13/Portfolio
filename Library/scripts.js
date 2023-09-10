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

const overlay_profile = document.getElementById('overlay-profile');

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
    if (TO_REGISTER.innerText == 'Register') {
        OVERLAY_WINDOW.classList.remove('overlay-hidden');
    }
    if (TO_REGISTER.innerText == 'Log Out') {
        isAuth = 0;
        replaceLoginWithProfile();
        replaceRegisterWithLogout();
        profileAfterLogout();
        changeProfileLogo();
        resetCheckCard();
        cardSection();
        resetProfileOnLogout();
        resetFavorites();
        resetRentedBooksProfile();
        document.querySelectorAll('.books-counter').forEach(el => el.innerText = '');
    }

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
    if (TO_LOGIN.innerText == 'Log In') {
        OVERLAY_LOGIN.classList.remove('overlay-hidden');
    }

        if (TO_LOGIN.innerText == 'My profile') {
            overlay_profile.classList.remove('overlay-hidden');
    }
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

const CARD_SECTION_PROFILE = document.getElementById('dc-profile');

CARD_SECTION_PROFILE.addEventListener('click', () => {
    overlay_profile.classList.remove('overlay-hidden');
})

/* Actions with login - end */

/* registration handle - start*/
const cardNumber = () => {
    return (Math.floor(Math.random() * 0xffffffff * 100000).toString(16)).slice(0,9);
}

const rawdata = localStorage.getItem('users');
const data = JSON.parse(rawdata);
const usersarray = data || [];

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
    card = (cardNumber()).toUpperCase();
    usercard = card.toUpperCase();
    visits = 1;
    cardOwn = 0;
    CUvisits = visits;
    books = [];
    CUbooks = books;
    createUserEntry(fname,lname,email,pass,card,visits,cardOwn,books);
    console.log(usersarray);
    usersarray.push(ObjUser);
    localStorage.setItem('users', JSON.stringify(usersarray));
    userInfo = usersarray.find(user => user.email === email) || usersarray.find(user => user.card === card);
    checkAuth(email,card);
    changeProfileLogo(fname, lname, CUvisits,CUbooks);
    changeProfileName(usercard);
    replaceLoginWithProfile();
    resetRentedBooksProfile();
    replaceRegisterWithLogout();
    cardSection();
    duplicatProfileStats();
    rentedBooksShow();
    document.getElementById('profile-module-card').innerText = usercard;
    document.querySelectorAll('.books-counter').forEach(el => el.innerText = '0');
    OVERLAY_WINDOW.classList.add('overlay-hidden');
    isAuth = 1;
})}

const createUserEntry = (fname,lname,email,pass,card,visits,cardOwn,books) => {
    ObjUser = {
        "name": fname,
        "lastname": lname,
        "email": email,
        "password": pass,
        "card": card,
        "visits": visits,
        "cardOwn": cardOwn,
        "books": books,
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

const changeProfileLogo = (fname, lname, CUvisits, CUbooks) => {
    if (isAuth == 1) {
        PROFILE_BTN.style.background = 'white';
        userInitials = fname.charAt(0).toUpperCase() + lname.charAt(0).toUpperCase();
        PROFILE_BTN.innerText = userInitials;
        document.getElementById('profile-initials').innerText = userInitials;
        document.getElementById('profile-fname-lname').innerText = `${fname} ${lname}`;
        document.querySelectorAll('.visits-counter').forEach(el => el.innerText = CUvisits);
        document.querySelectorAll('.books-counter').forEach(el => el.innerText = CUbooks);
        PROFILE_BTN.setAttribute('title', `${fname.charAt(0).toLocaleUpperCase()+fname.slice(1)} ${lname.charAt(0).toLocaleUpperCase()+lname.slice(1)}`);

        
    }
    if (isAuth == 0) {
        PROFILE_BTN.style.background = 'url("./img/icon_profile.svg")';
        PROFILE_BTN.innerText = '';
        PROFILE_BTN.removeAttribute('title');
    }
}

const changeProfileName = (usercard) => {
    document.getElementById('profile-head').innerText = usercard.toUpperCase();
    document.getElementById('profile-head').style.fontSize = '14px'; 
}
/*replace login with profile - start*/

const replaceLoginWithProfile = () => {
    if(isAuth == 1) {
        TO_LOGIN.innerText = 'My profile';
    }
    if(isAuth == 0) {
        TO_LOGIN.innerText = 'Log In';
    }
}

/*replace login with profile - end*/
/* registration handle - end*/

/*replace register with logout - start*/
const replaceRegisterWithLogout = () => {
    if (isAuth == 1) {
        TO_REGISTER.innerText = 'Log Out'
    }
    if (isAuth == 0) {
        TO_REGISTER.innerText = 'Register'        
    }
}

/*replace register with logout - end*/


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
            CUvisits = Number(usersarray[usersarray.indexOf(userInfo)].visits)+1;
            cardOwn = usersarray[usersarray.indexOf(userInfo)].cardOwn;
            CUbooks = (userInfo.books).length;
            usersarray[usersarray.indexOf(userInfo)].visits = CUvisits;
            localStorage.setItem('users', JSON.stringify(usersarray));            
            changeProfileName(usercard);
            resetRentedBooksProfile();
            replaceLoginWithProfile();
            replaceRegisterWithLogout();
            duplicatProfileStats();
            cardSection();
            OVERLAY_LOGIN.classList.add('overlay-hidden');  
            document.getElementById
            document.getElementById('profile-module-card').innerText = usercard.toUpperCase();  
            document.getElementById('find-your-card').innerText = 'Your Library card';
            hehehe();
            rentedBooksShow();
        }
        else {
            isAuth = 0;
            alert('Wrong email/card or password')
        }
        changeProfileLogo(fname, lname,CUvisits, CUbooks);     
    }
)}

/* login handle - end*/

/*buy buttons - start*/
const purchaseButtons = Array.from(document.querySelectorAll('.purchase-button'));
const overlay_buy  = document.getElementById('overlay-buy');

const booknames = ['first-book-name','second-book-name','third-book-name','fourth-book-name']
const bookauthors = ['first-book-author','second-book-author','third-book-author','fourth-book-author']

purchaseButtons.forEach(button => button.addEventListener('click', (e) => {
    if (isAuth == 0){
        OVERLAY_LOGIN.classList.remove('overlay-hidden');
    }
    if ((isAuth == 1 && cardOwn == 0)) {
        overlay_buy.classList.remove('overlay-hidden');
    }

    if (isAuth ==1 && cardOwn == 1) {
        purchaseButtons[purchaseButtons.indexOf(e.target)].setAttribute('disabled','');
	    b = document.getElementById(`${booknames[purchaseButtons.indexOf(e.target)]}`).innerText;
	    c = document.getElementById(`${bookauthors[purchaseButtons.indexOf(e.target)]}`).innerText;
	    d = b+", "+c;
        (usersarray[usersarray.indexOf(userInfo)].books).push(d);
        localStorage.setItem('users', JSON.stringify(usersarray));  
        document.querySelectorAll('.books-counter').forEach(el => el.innerText = (usersarray[usersarray.indexOf(userInfo)].books).length);
        rentedBooksShow();
        hehehe();
    }
}))

/*buy buttons - end*/

/*show profile module - start*/

const profileModule = document.getElementById('profile-module');

document.addEventListener('mouseup', function(e) {
    if (!profileModule.contains(e.target)) {
        overlay_profile.classList.add('overlay-hidden');
    }
});

const close_profile = document.getElementById('close-profile-module')

close_profile.addEventListener('click', () => {
    overlay_profile.classList.add('overlay-hidden');
})

/*show profile module - end*/

/*when logout - start*/
const resetCheckCard = () => {

    if (isAuth == 0) {
        document.getElementById('find-your-card').innerText = 'Find your Library card';
        document.getElementById('reader-name').value = '';
        document.getElementById('reader-card').value = '';

        const check_card_button = document.createElement('button');
        check_card_button.setAttribute('type','button');
        check_card_button.setAttribute('class', 'check-card');
        check_card_button.id = 'check-card';
        check_card_button.innerText = 'Check the card';
        statsContainer.replaceChildren(check_card_button);

    }
}


const cardSection = () => {
    if (isAuth == 1) {
        document.getElementById('get-card-info').innerText = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
        document.getElementById('get-reader-card').innerText = "Visit your profile";
        document.getElementById('dc-profile').style.display = 'flex';
        document.getElementById('dc-login').style.display = 'none';
        document.getElementById('dc-signup').style.display = 'none';
    }

    if (isAuth == 0) {
        document.getElementById('get-card-info').innerText = "You will be able to see a reader card after logging into account or you can register a new account";
        document.getElementById('get-reader-card').innerText = "Get a reader card";
        document.getElementById('dc-profile').style.display = 'none';
        document.getElementById('dc-login').style.display = 'flex';
        document.getElementById('dc-signup').style.display = 'flex';
    }
}


const profileAfterLogout = () => {
    document.getElementById('profile-head').innerText = 'Profile';
}

/*when logout - end*/

/*copy to clipboard - start*/
const copyCard = document.getElementById('copy-card');

copyCard.addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('profile-module-card').innerText)
})
/*copy to clipboard - end*/

/*duplicate profile to check card - start*/
const profStats = document.getElementById('profile-attr-wrapper');
const statsContainer = document.getElementById('card-check-stats');

const duplicatProfileStats = () => {
    clone = profStats.cloneNode(true);
    clone.id = 'libcard-stats';

    statsContainer.replaceChildren(clone);

    document.getElementById('reader-name').value = `${fname.charAt(0).toUpperCase()}${fname.slice(1)} ${lname.charAt(0).toUpperCase()}${lname.slice(1)}`;
    document.getElementById('reader-card').value = usercard.toUpperCase();

}
/*duplicate profile to check card - end*/

/*reset profile module - start*/

const resetProfileOnLogout = () => {
    document.getElementById('profile-module-card').innerText = '';
    document.querySelectorAll('attr-counter').forEach(el => el.innerText = '')
    document.getElementById('profile-initials').innerText = '';
    document.getElementById('profile-fname-lname').innerText = '';
}

/*reset profile module - end*/


/*buy library card - start*/
const cardDetails = document.getElementById('card-details');

if(cardDetails) {
    cardDetails.addEventListener('submit', (e) => {
        e.preventDefault();   
        if (usersarray.find(user => user.card == usercard).visits > 1){
            overlay_buy.classList.add('overlay-hidden');
            usersarray[usersarray.indexOf(userInfo)].cardOwn = 1;
            localStorage.setItem('users', JSON.stringify(usersarray));
            cardOwn = 1;
        }


        if (usersarray.find(user => user.card == usercard).visits == 1) {
            userInfo = usersarray.find(user => user.card == usercard);
            overlay_buy.classList.add('overlay-hidden');
            usersarray[usersarray.indexOf(userInfo)].cardOwn = 1;
            localStorage.setItem('users', JSON.stringify(usersarray)); 
            cardOwn = 1;
        }

    }
)}

/*buy library card - end*/

/*from login window to reg - start*/
const regFromLog = document.getElementById('reg-from-log');
const logFromReg = document.getElementById('log-from-reg');

logFromReg.addEventListener('click', () => {
    OVERLAY_WINDOW.classList.add('overlay-hidden');
    OVERLAY_LOGIN.classList.remove('overlay-hidden');
})


regFromLog.addEventListener('click', () => {
    OVERLAY_WINDOW.classList.remove('overlay-hidden');
    OVERLAY_LOGIN.classList.add('overlay-hidden');
})
/*from login window to reg - end*/

/*compare owned books from local storage and make them own in fav section - start*/

const hehehe = () => {
    for (let i = 0; i < userInfo.books.length;i++) {
        hah = (userInfo.books[i].toString()).substring(0,(userInfo.books[i].toString()).indexOf(','))
        for (let j = 0; j < booknames.length; j++) {
            if (document.getElementById(booknames[j]).innerText == hah) {
                purchaseButtons[j].innerText = 'Own';
                purchaseButtons[j].setAttribute('disabled','');
            }
        }
    }
}

/*compare owned books from local storage and make them own in fav section - end*/

/*testing rented books - start*/
const rentedBooksUl = document.getElementById('rented-books');

const rentedBooksShow = () => {
    if (userInfo) {
        myarray = userInfo.books;
        for (let k = 0; k < myarray.length; k++){
            liItem = myarray[k];
            myli = document.createElement('li');
            myli.innerText = liItem;
            rentedBooksUl.appendChild(myli);
        }
}}
/*testing rented books - end*/

/*reset rented books in profile - start*/
const myUl = document.getElementById('rented-books');
let myUlChild = myUl.lastChild;
const resetRentedBooksProfile = () => {
    while (myUlChild) {
        myUl.removeChild(myUlChild);
        myUlChild = myUl.lastChild;
    }
}
/*reset rented books in profile - end*/


/*check card when not login - start*/

const checkMyCard = () => {
    if (isAuth == 0) {
        cardOwnerName = document.getElementById('reader-name').value;
        cardOwnerCard = document.getElementById('reader-card').value;
        ownerFName = cardOwnerName.substring(0,cardOwnerName.indexOf(' '));
        ownerLName = cardOwnerName.slice(cardOwnerName.indexOf(' ')+1);
        ownerObj = usersarray.find(user => user.card == cardOwnerCard && user.name == ownerFName && user.lastname == ownerLName)
        if (ownerObj) {
            cloneStats = profStats.cloneNode(true);
            cloneStats.id = 'libcard-stats';
            statsContainer.replaceChildren(cloneStats);
            document.querySelectorAll('visits-counter').forEach(el => el.innerText = ownerObj.visits);
            document.querySelectorAll('books-counter').forEach(el => el.innerText = (ownerObj.books).length);
            setTimeout(resetCheckCard, 10000);
        }
}
}
/*check card when not login - end*/

const mybutt = document.getElementById('check-card');
mybutt.addEventListener('click', () => {
    checkMyCard();
})