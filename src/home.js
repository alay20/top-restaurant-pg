import Homeimage from './images/alley.jpg';

export const createHome = () => {
    const content = document.querySelector('#content');

    //Create elements
    const infoContainer = document.createElement('div');
    const restDescript = document.createElement('p');
    const restHoursContainer = document.createElement('div');
    const restHoursHeader = document.createElement('h2');
    const restHours = document.createElement('p');
    const restLocationContainer = document.createElement('div');
    const restLocationHeader = document.createElement('h2');
    const restLocation = document.createElement('p');

    //Add classes
    infoContainer.classList.add('info-container');

    restDescript.classList.add('description');

    restHoursContainer.classList.add('hrs-container');
    restHoursHeader.classList.add('hours-header');
    restHours.classList.add('hours');

    restLocationContainer.classList.add('loca-container');
    restLocationHeader.classList.add('location-header');
    restLocation.classList.add('location');

    //#content element styling    
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';
    content.style.width = 'auto';


    //Appened elements
    content.appendChild(infoContainer);
    infoContainer.appendChild(restLocationContainer);
    infoContainer.insertBefore(restHoursContainer, restLocationContainer);
    infoContainer.insertBefore(restDescript, restHoursContainer);

    restHoursContainer.appendChild(restHours);
    restHoursContainer.insertBefore(restHoursHeader, restHours);

    restLocationContainer.appendChild(restLocation);
    restLocationContainer.insertBefore(restLocationHeader, restLocation);



    //Add Alley image
    const homeImage = new Image();
    homeImage.src = Homeimage;
    content.insertBefore(homeImage, infoContainer);
    homeImage.classList.add('main-img');


    //Add text
    restDescript.textContent = `Welcome to Umami Alley, your haven for authentic Japanese izakaya delights in the heart of Toronto.
    Experience the art of umami with our thoughtfully crafted menu, blending traditional flavors with modern flair.
    From savory yakitori to aburi oshi bursting with flavours, each dish tells a tale of culinary mastery.
    Join us for an intimate evening, where lantern-lit tables set the stage for shared moments and exquisite cuisine.
    Elevate your senses at Umami Alley – a celebration of taste, culture, and the spirit of izakaya dining.`;

    restHoursHeader.textContent = 'Hours';
    restHours.textContent = 'Monday to Thursday 5 pm - 11 pm\nFriday to Sunday 5 pm - 1 am';

    restLocationHeader.textContent = 'Location';
    restLocation.textContent = '123 Nippon Street, Toronto, ON M5T 1A1';

}