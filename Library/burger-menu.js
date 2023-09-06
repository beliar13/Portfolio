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
    createUserEntry(fname,lname,email,pass,card);
    console.log(usersarray);
    usersarray.push(ObjUser);
    localStorage.setItem('users', JSON.stringify(usersarray));
    checkAuth(email,card);
    console.log(card);
    console.log(isAuth);
    changeProfileLogo(fname, lname);
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

/*favourites fade - start*/

const seasons_winter = [
    {
        "name": "The Book Eaters",
        "author": "By Sunyi Dean",
        "description": "An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.",
        "cover": '<img src="./img/winter/books-winter-1.jpg" alt="winter-1">',
    },
    {
        "name": "Cackle",
        "author": "By Rachel Harrison",
        "description": "Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.",
        "cover": '<img src="./img/winter/books-winter-2.jpg" alt="winter-2">',
    },
    {
        "name": "Dante: Poet of the Secular World",
        "author": "By Erich Auerbach",
        "description": "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.",
        "cover": '<img src="./img/winter/books-winter-3.jpg" alt="winter-3">',
    },
    {
        "name": "The Last Queen",
        "author": "By Clive Irving",
        "description": "A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.",
        "cover": '<img src="./img/winter/books-winter-4.jpg" alt="winter-4">'
    },
    ]


const seasons_spring = [
    {
        "name": "The Body",
        "author": "By Stephen King",
        "description": "Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.",
        "cover": '<img src="./img/spring/book-spring-1.png" alt="spring-1">',
    },
    {
        "name": "Carry: A Memoir of Survival on Stolen Land",
        "author": "By Toni Jenson",
        "description": "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.",
        "cover": '<img src="./img/spring/book-spring-2.png" alt="spring-2">',
    },
    {
        "name": "Days of Distraction",
        "author": "By Alexandra Chang",
        "description": "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.",
        "cover": '<img src="./img/spring/book-spring-3.png" alt="spring-3">',
    },
    {
        "name": "Dominicana",
        "author": "By Angie Cruz",
        "description": "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.",
        "cover": '<img src="./img/spring/book-spring-4.png" alt="spring-4">'
    },
    ]


const seasons_summer = [
    {
        "name": "Crude: A Memoir",
        "author": "By Pablo Fajardo & Sophie Tardy-Joubert",
        "description": "Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people.",
        "cover": '<img src="./img/summer/book-summer-1.png" alt="summer-1">',
    },
    {
        "name": "Let My People Go Surfing",
        "author": "By Yvon Chouinard",
        "description": "Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.",
        "cover": '<img src="./img/summer/book-summer-2.png" alt="summer-2">',
    },
    {
        "name": "The Octopus Museum: Poems",
        "author": "By Brenda Shaughnessy",
        "description": "This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.",
        "cover": '<img src="./img/summer/book-summer-3.png" alt="summer-3">',
    },
    {
        "name": "Shark Dialogues: A Novel",
        "author": "By Kiana Davenport",
        "description": "An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.",
        "cover": '<img src="./img/summer/book-summer-4.png" alt="summer-4">',
    },
    ]

const seasons_autumn = [
    {
        "name": "Casual Conversation",
        "author": "By Renia White",
        "description": "White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity.",
        "cover": '<img src="./img/autumn/book-autumn-1.png" alt="autumn-1">',
    },
    {
        "name": "The Great Fire",
        "author": "By Lou Ureneck",
        "description": "The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide",
        "cover": '<img src="./img/autumn/book-autumn-2.png" alt="autumn-2">',
    },
    {
        "name": "Rickey: The Life and Legend",
        "author": "By Howard Bryant",
        "description": "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?",
        "cover": '<img src="./img/autumn/book-autumn-3.png" alt="autumn-3">',
    },
    {
        "name": "Slug: And Other Stories",
        "author": "By Megan Milks",
        "description": "Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.",
        "cover": '<img src="./img/autumn/book-autumn-4.png" alt="autumn-4">',
    },
    ]


const firstbook_name = document.getElementById('first-book-name');
const secondbook_name = document.getElementById('second-book-name');
const thirdbook_name = document.getElementById('third-book-name');
const fourthbook_name = document.getElementById('fourth-book-name');

const firstbook_author = document.getElementById('first-book-author');
const secondbook_author = document.getElementById('second-book-author');
const thirdbook_author = document.getElementById('third-book-author');
const fourthbook_author = document.getElementById('fourth-book-author');

const firstbook_description = document.getElementById('first-book-description');
const secondbook_description = document.getElementById('second-book-description');
const thirdbook_description = document.getElementById('third-book-description');
const fourthbook_description = document.getElementById('fourth-book-description');

const firstbook_cover = document.getElementById('first-book-cover');
const secondbook_cover = document.getElementById('second-book-cover');
const thirdbook_cover = document.getElementById('third-book-cover');
const fourthbook_cover = document.getElementById('fourth-book-cover');

const button_spring = document.getElementById('season-spring');
const button_winter = document.getElementById('season-winter');
const button_summer = document.getElementById('season-summer');
const button_autumn = document.getElementById('season-autumn');

const season_card = document.getElementById('season-book-wrapper');


button_spring.addEventListener('click', () => {
    season_card.classList.add('fade-anim');
    season_card.ontransitionend = () => {
        if (season_card.classList.contains('fade-anim')) {
            firstbook_name.innerText = seasons_spring[0].name;
            firstbook_author.innerText = seasons_spring[0].author;
            firstbook_description.innerText = seasons_spring[0].description;
            firstbook_cover.innerHTML = seasons_spring[0].cover;

            secondbook_name.innerText = seasons_spring[1].name;
            secondbook_author.innerText = seasons_spring[1].author;
            secondbook_description.innerText = seasons_spring[1].description;
            secondbook_cover.innerHTML = seasons_spring[1].cover;

            thirdbook_name.innerText = seasons_spring[2].name;
            thirdbook_author.innerText = seasons_spring[2].author;
            thirdbook_description.innerText = seasons_spring[2].description;
            thirdbook_cover.innerHTML = seasons_spring[2].cover;

            fourthbook_name.innerText = seasons_spring[3].name;
            fourthbook_author.innerText = seasons_spring[3].author;
            fourthbook_description.innerText = seasons_spring[3].description;
            fourthbook_cover.innerHTML = seasons_spring[3].cover;
            
            season_card.classList.remove('fade-anim');    
        }
    }
})

button_winter.addEventListener('click', () => {
    season_card.classList.add('fade-anim');
    season_card.ontransitionend = () => {
        if (season_card.classList.contains('fade-anim')) {
            firstbook_name.innerText = seasons_winter[0].name;
            firstbook_author.innerText = seasons_winter[0].author;
            firstbook_description.innerText = seasons_winter[0].description;
            firstbook_cover.innerHTML = seasons_winter[0].cover;

            secondbook_name.innerText = seasons_winter[1].name;
            secondbook_author.innerText = seasons_winter[1].author;
            secondbook_description.innerText = seasons_winter[1].description;
            secondbook_cover.innerHTML = seasons_winter[1].cover;

            thirdbook_name.innerText = seasons_winter[2].name;
            thirdbook_author.innerText = seasons_winter[2].author;
            thirdbook_description.innerText = seasons_winter[2].description;
            thirdbook_cover.innerHTML = seasons_winter[2].cover;

            fourthbook_name.innerText = seasons_winter[3].name;
            fourthbook_author.innerText = seasons_winter[3].author;
            fourthbook_description.innerText = seasons_winter[3].description;
            fourthbook_cover.innerHTML = seasons_winter[3].cover;
            season_card.classList.remove('fade-anim');    
        }
    }
})

button_autumn.addEventListener('click', () => {
    season_card.classList.add('fade-anim');
    season_card.ontransitionend = () => {
        if (season_card.classList.contains('fade-anim')) {
            firstbook_name.innerText = seasons_autumn[0].name;
            firstbook_author.innerText = seasons_autumn[0].author;
            firstbook_description.innerText = seasons_autumn[0].description;
            firstbook_cover.innerHTML = seasons_autumn[0].cover;

            secondbook_name.innerText = seasons_autumn[1].name;
            secondbook_author.innerText = seasons_autumn[1].author;
            secondbook_description.innerText = seasons_autumn[1].description;
            secondbook_cover.innerHTML = seasons_autumn[1].cover;

            thirdbook_name.innerText = seasons_autumn[2].name;
            thirdbook_author.innerText = seasons_autumn[2].author;
            thirdbook_description.innerText = seasons_autumn[2].description;
            thirdbook_cover.innerHTML = seasons_autumn[2].cover;

            fourthbook_name.innerText = seasons_autumn[3].name;
            fourthbook_author.innerText = seasons_autumn[3].author;
            fourthbook_description.innerText = seasons_autumn[3].description;
            fourthbook_cover.innerHTML = seasons_autumn[3].cover;
            season_card.classList.remove('fade-anim');    
        }
    }
})

button_summer.addEventListener('click', () => {
    season_card.classList.add('fade-anim');
    season_card.ontransitionend = () => {
        if (season_card.classList.contains('fade-anim')) {
            firstbook_name.innerText = seasons_summer[0].name;
            firstbook_author.innerText = seasons_summer[0].author;
            firstbook_description.innerText = seasons_summer[0].description;
            firstbook_cover.innerHTML = seasons_summer[0].cover;

            secondbook_name.innerText = seasons_summer[1].name;
            secondbook_author.innerText = seasons_summer[1].author;
            secondbook_description.innerText = seasons_summer[1].description;
            secondbook_cover.innerHTML = seasons_summer[1].cover;

            thirdbook_name.innerText = seasons_summer[2].name;
            thirdbook_author.innerText = seasons_summer[2].author;
            thirdbook_description.innerText = seasons_summer[2].description;
            thirdbook_cover.innerHTML = seasons_summer[2].cover;

            fourthbook_name.innerText = seasons_summer[3].name;
            fourthbook_author.innerText = seasons_summer[3].author;
            fourthbook_description.innerText = seasons_summer[3].description;
            fourthbook_cover.innerHTML = seasons_summer[3].cover;
            season_card.classList.remove('fade-anim');    
        }
    }
})

/*favourites fade - end*/


