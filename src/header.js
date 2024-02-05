import LanternIcon from './images/lantern-icon.png';

export const createHeader = () => {

const body = document.body;
const content = document.querySelector('#content');

//Create elements
const header =  document.createElement('header');
const restNameContainer = document.createElement('div');
const restaurantName = document.createElement('h1');
const nav = document.createElement('nav');
const navList = document.createElement('ul');

const liHome = document.createElement('li');
const homeLantern = document.createElement('div');

const liMenu = document.createElement('li');
const menuLantern = document.createElement('div');

const liContact = document.createElement('li');
const contactLantern = document.createElement('div');

const homeIcon = new Image();
homeIcon.src = LanternIcon;
const menuIcon = new Image();
menuIcon.src = LanternIcon;
const contactIcon = new Image();
contactIcon.src = LanternIcon;

//Add class or id to elements
restNameContainer.classList.add('rest-name-container');
restaurantName.setAttribute('id', 'restaurant-name');
navList.classList.add('nav-list');
liHome.classList.add('home-link');
liMenu.classList.add('menu-link');
liContact.classList.add('contact-link');
homeIcon.classList.add('home-icon');
menuIcon.classList.add('menu-icon-hide');
contactIcon.classList.add('contact-icon-hide');

//Append elements
body.insertBefore(header, content); 
header.appendChild(restNameContainer);
restNameContainer.appendChild(restaurantName);
header.appendChild(nav);

nav.appendChild(homeLantern);
homeLantern.appendChild(homeIcon);

nav.appendChild(menuLantern);
menuLantern.appendChild(menuIcon);

nav.appendChild(contactLantern);
contactLantern.appendChild(contactIcon);

nav.appendChild(navList);
navList.appendChild(liHome);
navList.appendChild(liMenu);
navList.appendChild(liContact);


//Add text
restaurantName.textContent = 'Umami Alley';
liHome.textContent = 'Home';
liMenu.textContent = 'Menu';
liContact.textContent = 'Contact';

//Icon visibility
const clickHome = () => {
    //Make icon visible on home
    homeIcon.classList.remove('home-icon-hide');
    homeIcon.classList.add('home-icon');

    //Make icon not visible on menu
    menuIcon.classList.remove('menu-icon');
    menuIcon.classList.add('menu-icon-hide');

    //Make icon not visible on contact
    contactIcon.classList.remove('contact-icon');
    contactIcon.classList.add('contact-icon-hide');
}

const clickMenu = () => {
    //Make icon not visible on home
    homeIcon.classList.remove('home-icon');
    homeIcon.classList.add('home-icon-hide');

    //Make icon visible on menu
    menuIcon.classList.remove('menu-icon-hide');
    menuIcon.classList.add('menu-icon');

    //Make icon not visible on contact
    contactIcon.classList.remove('contact-icon');
    contactIcon.classList.add('contact-icon-hide');
}

const clickContact = () => {
    //Make icon not visible on home
    homeIcon.classList.remove('home-icon');
    homeIcon.classList.add('home-icon-hide');

    //Make icon not visible on menu
    menuIcon.classList.remove('menu-icon');
    menuIcon.classList.add('menu-icon-hide');

    //Make icon visible on contact
    contactIcon.classList.remove('contact-icon-hide');
    contactIcon.classList.add('contact-icon');
}

liHome.addEventListener('click', clickHome);
liMenu.addEventListener('click', clickMenu);
liContact.addEventListener('click', clickContact);

return {liHome, liMenu, liContact}
};