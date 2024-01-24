export const createContact = () => {
    const content = document.querySelector('#content');

    //Create elements
        
        const contactHeaderCont = document.createElement('div');
        const contactHeader = document.createElement('h2');
        const contactPara = document.createElement('p');
        const contactFormCont = document.createElement('div');
        const contactForm = document.createElement('form');
        
        const formUl = document.createElement('ul');
        const nameLi = document.createElement('li');
        
        //Form - Name elements
        //label element
        const labelName = document.createElement('label');
        labelName.setAttribute('for', 'name');
        labelName.textContent = 'Name*';
        //input element
        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.id = 'name';
        inputName.name = 'user_name';

        //Form - Message elements
        const labelMsg = document.createElement('label');
        labelMsg.setAttribute('for', 'msg');
        labelMsg.textContent = 'Your Message*';
        const txtAreaMsg = document.createElement('textarea');
        txtAreaMsg.id = 'msg';
        txtAreaMsg.name = 'user_message';



    //Add class/id
        contactHeaderCont.classList.add('description');
        contactHeader.classList.add('contact-header');
        contactPara.classList.add('contact-para');
        contactFormCont.classList.add('form-cont');
        nameLi.classList.add('form-li');



    
    //Add styling to elements
        //#content element
        content.style.display = 'flex';
        content.style.flexDirection = 'column';

        //Contact header
        contactHeader.style.textAlign = 'center';
        contactHeader.style.margin = '0';
        //Contact p element
        contactPara.style.margin ='0';

        //Contact form
        contactFormCont.style.marginTop = '30px';

    //Append Elements
    content.appendChild(contactFormCont);
    content.insertBefore(contactHeaderCont, contactFormCont);

    contactHeaderCont.appendChild(contactPara);
    contactHeaderCont.insertBefore(contactHeader, contactPara);

        //Form - name section
        nameLi.appendChild(labelName);
        nameLi.appendChild(inputName);
        formUl.appendChild(nameLi);
        contactForm.appendChild(formUl);
        contactFormCont.appendChild(contactForm);








    //Add Text
    contactHeader.textContent = 'Contact Us'
    contactPara.textContent = 'We would love to hear from you. Send us a message and we will get back to you. '





}