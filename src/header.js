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
const liMenu = document.createElement('li');
const liContact = document.createElement('li');

//Add class or id to elements
restNameContainer.classList.add('rest-name-container');
restaurantName.setAttribute('id', 'restaurant-name');
navList.classList.add('nav-list');
liHome.classList.add('nav-link');
liMenu.classList.add('nav-link');
liContact.classList.add('nav-link');

//Append elements
body.insertBefore(header, content); 
header.appendChild(restNameContainer);
restNameContainer.appendChild(restaurantName);
header.appendChild(nav);
nav.appendChild(navList);
navList.appendChild(liContact);
navList.insertBefore(liMenu, liContact);
navList.insertBefore(liHome, liMenu);


//Add text
restaurantName.textContent = 'Umami Alley';
liHome.textContent = 'Home';
liMenu.textContent = 'Menu';
liContact.textContent = 'Contact';

return {liHome, liMenu, liContact}
};