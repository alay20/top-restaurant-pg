import Background from './images/floral-background.jpg'; 

export const createBackground = () => {
    const siteBackground = new Image();
    siteBackground.src = Background;
    const body = document.body;
    body.style.backgroundImage = `url(${Background})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.margin = '0px';
};