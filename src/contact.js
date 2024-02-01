export const createContact = () => {
    const content = document.querySelector('#content');
    

    //Create elements
        const contactMainCont = document.createElement('div');
            //access contactMainCont
               let getContactMainCont = () => contactMainCont;
        const contactHeader = document.createElement('h2');
        const contactPara = document.createElement('p');
        const contactFormCont = document.createElement('div');
        const contactForm = document.createElement('form');
            //access contactForm
                let getcontactForm = () => contactForm;
        
        const formUl = document.createElement('ul');
        const nameLi = document.createElement('li');
        const emailLi = document.createElement('li');
        const phoneLi = document.createElement('li');
        const categoryLi = document.createElement('li');
        const btnLi = document.createElement('li');
        const msgLi = document.createElement('li');
        


        
        //Form - Name elements
            //label element
            const labelName = document.createElement('label');
            labelName.setAttribute('for', 'name');
            labelName.textContent = 'Name *';
            //input element
            const inputName = document.createElement('input');
            inputName.type = 'text';
            inputName.id = 'name';
            inputName.name = 'user_name';
            inputName.required = true;
            inputName.placeholder = 'Required';

        
        //Form - Email elements
            //label element
            const labelEmail = document.createElement('label');
            labelEmail.setAttribute('for', 'mail');
            labelEmail.textContent = 'Email *';
            //input element
            const inputEmail = document.createElement('input');
            inputEmail.type = 'email';
            inputEmail.id = 'mail';
            inputEmail.name = 'user_email';
            inputEmail.required = true;
            inputEmail.placeholder = 'Required';
        
        //Form - Phone number elements
            //label element
            const labelPhone = document.createElement('label');
            labelPhone.setAttribute('for', 'phone');
            labelPhone.textContent = 'Phone Number';
            //input element
            const inputPhone = document.createElement('input');
            inputPhone.type = 'tel';
            inputPhone.id = 'phone';
            inputPhone.name = 'user_phone';
            inputPhone.placeholder = 'Optional';

        //Form - Category elements
            //label element
            const labelCategory = document.createElement('label');
            labelCategory.setAttribute('for', 'category');
            labelCategory.textContent = 'What are you getting in touch about? *'
            //dropbox element
            const selectCategory = document.createElement('select');
            selectCategory.id = 'category';
            selectCategory.name = 'category';
            const createDropDown = () => {
                const contactCategory = ['General Inquiry', 'Press Inquiry', 'Suggestions'];    
                contactCategory.forEach(categoryText => {
                    const category = document.createElement('option');
                    category.value = categoryText.toLowerCase().replace(' ', '');
                    category.textContent = categoryText;
                    selectCategory.appendChild(category);
                });
            };
        
        //Form - Message elements
            //label element
            const labelMsg = document.createElement('label');
            labelMsg.setAttribute('for', 'msg');
            labelMsg.textContent = 'Your Message *';
            //textarea element
            const txtAreaMsg = document.createElement('textarea');
            txtAreaMsg.cols = '30';
            txtAreaMsg.rows = '10';
            txtAreaMsg.id = 'msg';
            txtAreaMsg.required = true;
            txtAreaMsg.placeholder = 'Required';
        
        //Form - button
        const submitBtn = document.createElement('button');


    //Add class/id
        contactMainCont.classList.add('description');
        contactHeader.classList.add('contact-header');
        contactPara.classList.add('contact-para');
        contactFormCont.classList.add('form-cont');
        
        nameLi.classList.add('form-li');
        emailLi.classList.add('form-li');
        phoneLi.classList.add('form-li');
        categoryLi.classList.add('form-li');
        msgLi.classList.add('form-li');
        btnLi.classList.add('form-li');
        submitBtn.classList.add('buttons');

        
    //Add styling and attributes to elements
        //#content element
        content.style.display = 'flex';
        content.style.flexDirection = 'column';

        //Contact main container
        contactMainCont.style.display = 'flex';
        contactMainCont.style.flexDirection = 'column';
        contactMainCont.style.alignItems = 'center';
        
        //Contact header
        contactHeader.style.textAlign = 'center';
        contactHeader.style.margin = '0';
        
        //Contact p element
        contactPara.style.marginTop = '20px';
        contactPara.style.marginBottom = '0px';
        contactPara.style.width = '300px';
        contactPara.style.textAlign = 'center';

        //Contact form
        formUl.style.listStyleType = 'none';
        formUl.style.padding = '0px';
        formUl.style.margin = '20px 40px'

    
        


    
    //Append Elements
        content.appendChild(contactMainCont);
        
        contactMainCont.appendChild(contactHeader);
        contactMainCont.appendChild(contactPara);
        contactMainCont.appendChild(contactFormCont);

        contactFormCont.appendChild(contactForm);
        
        contactForm.appendChild(formUl);


        //Form - name section
        formUl.appendChild(nameLi);
        nameLi.appendChild(labelName);
        nameLi.appendChild(inputName);
        
        //Form - Email section
        formUl.appendChild(emailLi);
        emailLi.appendChild(labelEmail);
        emailLi.appendChild(inputEmail);

        //Form - Phone section
        formUl.appendChild(phoneLi);
        phoneLi.appendChild(labelPhone);
        phoneLi.appendChild(inputPhone);
        
        //Form - Category sectoin
        formUl.appendChild(categoryLi);
        categoryLi.appendChild(labelCategory);
        categoryLi.appendChild(selectCategory);
        createDropDown();

        //Form - Message section
        formUl.appendChild(msgLi);
        msgLi.appendChild(labelMsg);
        msgLi.appendChild(txtAreaMsg);

        //Form - Button
        formUl.appendChild(btnLi);
        btnLi.appendChild(submitBtn);

    //Add Text
    contactHeader.textContent = 'Contact Us';
    contactPara.textContent = 'We would love to hear from you. Send us a message and we will get back to you.';
    submitBtn.textContent = 'Submit';

    const submitBtnAction = () => {
        if (getcontactForm().checkValidity()) {
        getContactMainCont().textContent = 'Thank you for reaching out to us! We will get back to you within 2-3 business days.'
        } else {

        }
        
                                                                                
    }

    //Submit button
    submitBtn.onclick = submitBtnAction;

}