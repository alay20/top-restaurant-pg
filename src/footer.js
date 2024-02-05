export const createFooter = () => {
    
    const body = document.body;
    const content = document.querySelector('#content');
    
    
    const footer = document.createElement('footer');
    const attributeLinks = document.createElement('ul');

    const liBackground = document.createElement('li');
    const backgroundLink = document.createElement('a');
    backgroundLink.setAttribute('href', 'https://www.freepik.com/free-vector/botanical-floral-mockup-illustration_3790718.htm');
    backgroundLink.setAttribute('target', '_blank');
    backgroundLink.textContent = 'Background Image';

    const liLantern = document.createElement('li');
    const lanternLink = document.createElement('a');
    lanternLink.setAttribute('href', 'https://www.freepik.com/icon/lantern_7052534#fromView=search&term=izakaya+lantern&track=ais&page=1&position=5&uuid=c0b42d8d-5986-4930-9cdb-a3a52799e5c7');
    lanternLink.setAttribute('target', '_blank');
    lanternLink.textContent = 'Lantern Icon';
    
    const liAlley = document.createElement('li');
    const alleyImageLink = document.createElement('a');
    alleyImageLink.setAttribute('href', 'https://www.pexels.com/photo/photo-of-people-walking-on-alleyway-1633791/');
    alleyImageLink.setAttribute('target', '_blank');
    alleyImageLink.textContent = 'Alley Image';
    
    //Styling
    footer.style.color = 'rgb(236, 191, 133)';
    footer.style.marginTop = '30px';
    attributeLinks.style.padding = '0px';
    attributeLinks.style.listStyle = 'none';
    liBackground.style.display = 'inline-block';
    liLantern.style.display = 'inline-block';
    liAlley.style.display = 'inline-block';
    liLantern.style.marginLeft = '10px';
    liLantern.style.marginRight = '10px';
    backgroundLink.style.fontSize = '10px';
    backgroundLink.style.textDecoration = 'none';
    lanternLink.style.fontSize = '10px';
    lanternLink.style.textDecoration = 'none';
    alleyImageLink.style.fontSize = '10px';
    alleyImageLink.style.textDecoration = 'none';

    //Append footer elements
    body.appendChild(footer);
    footer.appendChild(attributeLinks);
    attributeLinks.appendChild(liBackground);
    attributeLinks.appendChild(liLantern);
    attributeLinks.appendChild(liAlley);
    liBackground.appendChild(backgroundLink);
    liLantern.appendChild(lanternLink);
    liAlley.appendChild(alleyImageLink);


}