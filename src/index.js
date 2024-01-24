import './style.css';
import { createBackground } from './background';
import { createHeader } from './header';
import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';

const clickNav = (() => {
    createBackground();
    createHome();
    createBackground();    
    const headerElements = createHeader();

    const content = document.querySelector('#content');
    

    let getContentDiv = () => content;
    
    const clickHome = () => {
        getContentDiv().textContent = '';
        createHome();
    }

    const clickMenu = () => {
        getContentDiv().textContent = '';
        createMenu();    
    }

    const clickContact = () => {
        getContentDiv().textContent = '';
        createContact();
    }

    return { headerElements, clickHome, clickMenu, clickContact }
})();


clickNav.headerElements.liHome.addEventListener('click', clickNav.clickHome);
clickNav.headerElements.liMenu.addEventListener('click', clickNav.clickMenu);
clickNav.headerElements.liContact.addEventListener('click', clickNav.clickContact);

