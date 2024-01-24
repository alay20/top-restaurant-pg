export const createMenu = () => {
    const content = document.querySelector('#content');
    
    //Style for #content in menu section
    content.style.width = '1000px';
    content.style.display = 'grid';
    content.style.boxSizing = 'border-box';
    content.style.justifyItems = 'center';
    content.style.gridTemplateColumns = '1fr 1fr';
    content.style.gridTemplateAreas = `
        'smallPlates drinks'
        'sushi desserts'
    `;



    //Create elements
        //Small Plates
        const smallPlatesCont = document.createElement('div');
        const smallPlatesHeader = document.createElement('h2');
        
        const edamameCont = document.createElement('div');
        const edamameHeader = document.createElement('h4');
        const edamame = document.createElement('p');
        const edamamePrice = document.createElement('p');

        const saladCont = document.createElement('div');
        const saladHeader = document.createElement('h4');
        const salad = document.createElement('p');
        const saladPrice = document.createElement('p');

        const eggplantCont = document.createElement('div');
        const eggplantHeader = document.createElement('h4');
        const eggplant = document.createElement('p');
        const eggplantPrice = document.createElement('p');
        
        const yakiCont = document.createElement('div');
        const yakiHeader = document.createElement('h4');
        const yaki = document.createElement('p');
        const yakiPrice = document.createElement('p');

        const karaageCont = document.createElement('div');
        const karaageHeader = document.createElement('h4');
        const karaage = document.createElement('p');
        const karaagePrice = document.createElement('p');

        const okonoCont = document.createElement('div');
        const okonoHeader = document.createElement('h4');
        const okono = document.createElement('p');
        const okonoPrice = document.createElement('p');

        const gyozaCont = document.createElement('div');
        const gyozaHeader = document.createElement('h4');
        const gyoza = document.createElement('p');
        const gyozaPrice = document.createElement('p');
        
        const tofuCont = document.createElement('div');
        const tofuHeader = document.createElement('h4');
        const tofu = document.createElement('p');
        const tofuPrice = document.createElement('p');
        
        const smallPlatesImage = new Image();

        //Sushi and Sashimi
        const sushiCont = document.createElement('div');
        const sushiHeader = document.createElement('h2');
        
        const sushiPlatterCont = document.createElement('div');
        const sushiPlatterHeader = document.createElement('h4');
        const sushiPlatter = document.createElement('p');
        const sushiPlatterPrice = document.createElement('p');

        const sashimiCont = document.createElement('div');
        const sashimiHeader = document.createElement('h4');
        const sashimi = document.createElement('p');
        const sashimiPrice = document.createElement('p');

        const aburiCont = document.createElement('div');
        const aburiHeader = document.createElement('h4');
        const aburi = document.createElement('p');
        const aburiPrice = document.createElement('p');
        
        const sushiImage = new Image();

        //Desserts
        const dessertsCont = document.createElement('div');
        const dessertsHeader = document.createElement('h2');

        const dorayakiCont = document.createElement('div');
        const dorayakiHeader = document.createElement('h4');
        const dorayaki = document.createElement('p');
        const dorayakiPrice = document.createElement('p');
        
        const cheesecakeCont = document.createElement('div');
        const cheesecakeHeader = document.createElement('h4');
        const cheesecake = document.createElement('p');
        const cheesecakePrice = document.createElement('p');

        const icecreamCont = document.createElement('div');
        const icecreamHeader = document.createElement('h4');
        const icecream = document.createElement('p');
        const icecreamPrice = document.createElement('p');
    
        const dessertsImage = new Image();

        //Drinks
        const drinksCont = document.createElement('div');
        const drinksHeader = document.createElement('h2');
        
        const aDryCont = document.createElement('div');
        const aDryHeader = document.createElement('h4');
        const aDry = document.createElement('p');
        const aDryPrice = document.createElement('p');

        const aBlackCont = document.createElement('div');
        const aBlackHeader = document.createElement('h4');
        const aBlack = document.createElement('p');
        const aBlackPrice = document.createElement('p');

        const draftCont = document.createElement('div');
        const draftHeader = document.createElement('h4');
        const draft = document.createElement('p');
        const draftPrice = document.createElement('p');

        const sakeCont = document.createElement('div');
        const sakeHeader = document.createElement('h4');
        const sake = document.createElement('p');
        const sakePrice = document.createElement('p');
        
        const umeshuCont = document.createElement('div');
        const umeshuHeader = document.createElement('h4');
        const umeshu = document.createElement('p');
        const umeshuPrice = document.createElement('p');
        
        const chuhiCont = document.createElement('div');
        const chuhiHeader = document.createElement('h4');
        const chuhi = document.createElement('p');
        const chuhiPrice = document.createElement('p');
        
        const popCont = document.createElement('div');
        const popHeader = document.createElement('h4');
        const pop = document.createElement('p');
        const popPrice = document.createElement('p');

        const teaCont = document.createElement('div');
        const teaHeader = document.createElement('h4');
        const tea = document.createElement('p');
        const teaPrice = document.createElement('p');

        const drinksImage = new Image();

    //Add classes and id
        //Small Plates
        smallPlatesCont.classList.add('menu-container');
        smallPlatesCont.classList.add('small-Plates')
        smallPlatesHeader.classList.add('menu-header');
        
        edamameCont.classList.add('item-container');
        edamameHeader.classList.add('item-header');
        edamame.classList.add('item-description');
        edamamePrice.classList.add('item-price');

        saladCont.classList.add('item-container');
        saladHeader.classList.add('item-header');
        salad.classList.add('item-description');
        saladPrice.classList.add('item-price');

        eggplantCont.classList.add('item-container');
        eggplantHeader.classList.add('item-header');
        eggplant.classList.add('item-description');
        eggplantPrice.classList.add('item-price');
        
        yakiCont.classList.add('item-container');
        yakiHeader.classList.add('item-header');
        yaki.classList.add('item-description');
        yakiPrice.classList.add('item-price');

        karaageCont.classList.add('item-container');
        karaageHeader.classList.add('item-header');
        karaage.classList.add('item-description');
        karaagePrice.classList.add('item-price');
        
        okonoCont.classList.add('item-container');
        okonoHeader.classList.add('item-header');
        okono.classList.add('item-description');
        okonoPrice.classList.add('item-price');

        gyozaCont.classList.add('item-container');
        gyozaHeader.classList.add('item-header');
        gyoza.classList.add('item-description');
        gyozaPrice.classList.add('item-price');
        
        tofuCont.classList.add('item-container');
        tofuHeader.classList.add('item-header');
        tofu.classList.add('item-description');
        tofuPrice.classList.add('item-price');
        
        //Sushi and Sashimi
        sushiCont.classList.add('menu-container');
        sushiCont.classList.add('sushi');
        sushiHeader.classList.add('menu-header');
        
        sushiPlatterCont.classList.add('item-container');
        sushiPlatterHeader.classList.add('item-header');
        sushiPlatter.classList.add('item-description');
        sushiPlatterPrice.classList.add('item-price');

        sashimiCont.classList.add('item-container');
        sashimiHeader.classList.add('item-header');
        sashimi.classList.add('item-description');
        sashimiPrice.classList.add('item-price');
        
        aburiCont.classList.add('item-container');
        aburiHeader.classList.add('item-header');
        aburi.classList.add('item-description');
        aburiPrice.classList.add('item-price');
        
        //Desserts
        dessertsCont.classList.add('menu-container');
        dessertsCont.classList.add('desserts');
        dessertsHeader.classList.add('menu-header');
        
        dorayakiCont.classList.add('item-container');
        dorayakiHeader.classList.add('item-header');
        dorayaki.classList.add('item-description');
        dorayakiPrice.classList.add('item-price');

        cheesecakeCont.classList.add('item-container');
        cheesecakeHeader.classList.add('item-header');
        cheesecake.classList.add('item-description');
        cheesecakePrice.classList.add('item-price');

        icecreamCont.classList.add('item-container');
        icecreamHeader.classList.add('item-header');
        icecream.classList.add('item-description');
        icecreamPrice.classList.add('item-price');

        //Drinks
        drinksCont.classList.add('menu-container');
        drinksCont.classList.add('drinks');
        drinksHeader.classList.add('menu-header');

        aDryCont.classList.add('item-container');
        aDryHeader.classList.add('item-header');
        aDry.classList.add('item-description');
        aDryPrice.classList.add('item-price');

        aBlackCont.classList.add('item-container');
        aBlackHeader.classList.add('item-header');
        aBlack.classList.add('item-description');
        aBlackPrice.classList.add('item-price');

        draftCont.classList.add('item-container');
        draftHeader.classList.add('item-header');
        draft.classList.add('item-description');
        draftPrice.classList.add('item-price');

        sakeCont.classList.add('item-container');
        sakeHeader.classList.add('item-header');
        sake.classList.add('item-description');
        sakePrice.classList.add('item-price');

        umeshuCont.classList.add('item-container');
        umeshuHeader.classList.add('item-header');
        umeshu.classList.add('item-description');
        umeshuPrice.classList.add('item-price');

        chuhiCont.classList.add('item-container');
        chuhiHeader.classList.add('item-header');
        chuhi.classList.add('item-description');
        chuhiPrice.classList.add('item-price');

        popCont.classList.add('item-container');
        popHeader.classList.add('item-header');
        pop.classList.add('item-description');
        popPrice.classList.add('item-price');

        teaCont.classList.add('item-container');
        teaHeader.classList.add('item-header');
        tea.classList.add('item-description');
        teaPrice.classList.add('item-price');

    //Append containers of each menu item group to content container
    content.appendChild(drinksCont);
    content.insertBefore(dessertsCont, drinksCont);
    content.insertBefore(sushiCont, dessertsCont);
    content.insertBefore(smallPlatesCont, sushiCont);

    //Append elements into each menu item group container
    //Small plates
        //Tofu
        smallPlatesCont.appendChild(tofuCont);
        tofuCont.appendChild(tofuPrice);
        tofuCont.insertBefore(tofu, tofuPrice);
        tofuCont.insertBefore(tofuHeader, tofu);
        //Gyoza
        smallPlatesCont.insertBefore(gyozaCont, tofuCont);
        gyozaCont.appendChild(gyozaPrice);
        gyozaCont.insertBefore(gyoza, gyozaPrice);
        gyozaCont.insertBefore(gyozaHeader, gyoza);
        //Okonomiyaki
        smallPlatesCont.insertBefore(okonoCont, gyozaCont);
        okonoCont.appendChild(okonoPrice);
        okonoCont.insertBefore(okono, okonoPrice);
        okonoCont.insertBefore(okonoHeader, okono);
        //Karaage
        smallPlatesCont.insertBefore(karaageCont, okonoCont);
        karaageCont.appendChild(karaagePrice);
        karaageCont.insertBefore(karaage, karaagePrice);
        karaageCont.insertBefore(karaageHeader, karaage);
        //Yakitori
        smallPlatesCont.insertBefore(yakiCont, karaageCont);
        yakiCont.appendChild(yakiPrice);
        yakiCont.insertBefore(yaki, yakiPrice);
        yakiCont.insertBefore(yakiHeader, yaki);
        //Eggplant
        smallPlatesCont.insertBefore(eggplantCont, yakiCont);        
        eggplantCont.appendChild(eggplantPrice);
        eggplantCont.insertBefore(eggplant, eggplantPrice);
        eggplantCont.insertBefore(eggplantHeader, eggplant);
        //Salad
        smallPlatesCont.insertBefore(saladCont, eggplantCont);        
        saladCont.appendChild(saladPrice);
        saladCont.insertBefore(salad, saladPrice);
        saladCont.insertBefore(saladHeader, salad);
        //Edamame
        smallPlatesCont.insertBefore(edamameCont, saladCont);
        edamameCont.appendChild(edamamePrice);
        edamameCont.insertBefore(edamame, edamamePrice);
        edamameCont.insertBefore(edamameHeader, edamame);
    
    smallPlatesCont.insertBefore(smallPlatesHeader, edamameCont);
    
    
    //Sushi and Sashimi
        //Aburi
        sushiCont.appendChild(aburiCont);
        aburiCont.appendChild(aburiPrice);
        aburiCont.insertBefore(aburi, aburiPrice);
        aburiCont.insertBefore(aburiHeader, aburi);
        //Sashimi
        sushiCont.insertBefore(sashimiCont, aburiCont);
        sashimiCont.appendChild(sashimiPrice);
        sashimiCont.insertBefore(sashimi, sashimiPrice);
        sashimiCont.insertBefore(sashimiHeader, sashimi);
        //Sushi Platter
        sushiCont.insertBefore(sushiPlatterCont, sashimiCont);
        sushiPlatterCont.appendChild(sushiPlatterPrice);
        sushiPlatterCont.insertBefore(sushiPlatter, sushiPlatterPrice);
        sushiPlatterCont.insertBefore(sushiPlatterHeader, sushiPlatter);
    
    sushiCont.insertBefore(sushiHeader, sushiPlatterCont);
        
    //Desserts
        //Matcha Ice Cream
        dessertsCont.appendChild(icecreamCont);
        icecreamCont.appendChild(icecreamPrice);
        icecreamCont.insertBefore(icecream, icecreamPrice);
        icecreamCont.insertBefore(icecreamHeader, icecream);
        //Matcha Cheesecake
        dessertsCont.insertBefore(cheesecakeCont, icecreamCont);
        cheesecakeCont.appendChild(cheesecakePrice);
        cheesecakeCont.insertBefore(cheesecake, cheesecakePrice);
        cheesecakeCont.insertBefore(cheesecakeHeader, cheesecake);
        //Dorayaki
        dessertsCont.insertBefore(dorayakiCont, cheesecakeCont);
        dorayakiCont.appendChild(dorayakiPrice);
        dorayakiCont.insertBefore(dorayaki, dorayakiPrice);
        dorayakiCont.insertBefore(dorayakiHeader, dorayaki);
    
    dessertsCont.insertBefore(dessertsHeader, dorayakiCont);
        
    //Drinks
        //Green Tea
        drinksCont.appendChild(teaCont);
        teaCont.appendChild(teaPrice);
        teaCont.insertBefore(tea, teaPrice);
        teaCont.insertBefore(teaHeader, tea);
        //Pop
        drinksCont.insertBefore(popCont, teaCont);
        popCont.appendChild(popPrice);
        popCont.insertBefore(pop, popPrice);
        popCont.insertBefore(popHeader, pop);
        //Chu-Hi
        drinksCont.insertBefore(chuhiCont, popCont);
        chuhiCont.appendChild(chuhiPrice);
        chuhiCont.insertBefore(chuhi, chuhiPrice);
        chuhiCont.insertBefore(chuhiHeader, chuhi);
        //Umeshu
        drinksCont.insertBefore(umeshuCont, chuhiCont);
        umeshuCont.appendChild(umeshuPrice);
        umeshuCont.insertBefore(umeshu, umeshuPrice);
        umeshuCont.insertBefore(umeshuHeader, umeshu);
        //Sake
        drinksCont.insertBefore(sakeCont, umeshuCont);
        sakeCont.appendChild(sakePrice);
        sakeCont.insertBefore(sake, sakePrice);
        sakeCont.insertBefore(sakeHeader, sake);
        //Sapporo Draft
        drinksCont.insertBefore(draftCont, sakeCont);
        draftCont.appendChild(draftPrice);
        draftCont.insertBefore(draft, draftPrice);
        draftCont.insertBefore(draftHeader, draft);
        //Asahi Black
        drinksCont.insertBefore(aBlackCont, draftCont);
        aBlackCont.appendChild(aBlackPrice);
        aBlackCont.insertBefore(aBlack, aBlackPrice);
        aBlackCont.insertBefore(aBlackHeader, aBlack);
        //Asahi Dry
        drinksCont.insertBefore(aDryCont, aBlackCont);
        aDryCont.appendChild(aDryPrice);
        aDryCont.insertBefore(aDry, aDryPrice);
        aDryCont.insertBefore(aDryHeader, aDry);
    
    drinksCont.insertBefore(drinksHeader, aDryCont);

    //Add menu item group header text
    //Small Plates
    smallPlatesHeader.textContent = 'Small Plates';    
    //Sushi and Sashimi
    sushiHeader.textContent = 'Sushi and Sashimi';
    //Desserts
    dessertsHeader.textContent = 'Desserts';
    //Drinks
    drinksHeader.textContent = 'Drinks';

    //Add menu items text
        //Small plates
            //Edamame
            edamameHeader.textContent = 'Edamame';
            edamame.textContent = 'boiled soy bean + sea salt';
            edamamePrice.textContent = '5.50';
            //Salad
            saladHeader.textContent = 'Kale Salad';
            salad.textContent = 'blanched kale + black sesame sauce';
            saladPrice.textContent = '6.50';
            //Eggplant
            eggplantHeader.textContent = 'Nasu Nibitashi';
            eggplant.textContent = 'eggplant + dashi broth + ginger';
            eggplantPrice.textContent = '6.50';
            //Yakitori
            yakiHeader.textContent = 'Yakitori';
            yaki.textContent = 'chicken + variety of sauces';
            yakiPrice.textContent = '8.50';
            //Karaage
            karaageHeader.textContent = 'Karaage';
            karaage.textContent = 'boneless fried chicken + garlic mayo'
            karaagePrice.textContent = '9.50';
            //Okonomiyaki
            okonoHeader.textContent = 'Okonomiyaki';
            okono.textContent = 'okonomi sauce + japanese mayo + seaweed + bonito flakes'
            okonoPrice.textContent = '10.90';
            //Gyoza
            gyozaHeader.textContent = 'Gyoza';
            gyoza.textContent = 'pork + vegetable + sweet-chili mayo';
            gyozaPrice.textContent = '5.50';
            //Tofu
            tofuHeader.textContent = 'Tofu';
            tofu.textContent = 'fried tofu + dashi broth';
            tofuPrice.textContent = '6.90';

        //Sushi and Sashimi
            //Sushi Platter
            sushiPlatterHeader.textContent = 'Sushi Selection';
            sushiPlatter.textContent = `chef's selection nigiri + maki rolls`
            sushiPlatterPrice.textContent = '14.90';
            //Sashimi
            sashimiHeader.textContent = 'Sashimi Selection';
            sashimi.textContent = `chef's selection fresh seafood`;
            sashimiPrice.textContent = '25.90';
            //Aburi
            aburiHeader.textContent = 'Aburi Oshi'
            aburi.textContent = 'seared assorted sashimi + pressed sushi rice';
            aburiPrice.textContent = '19.90';
        
        //Desserts
            //Dorayaki
            dorayakiHeader.textContent = 'Dorayaki'
            dorayaki.textContent = 'sweet pancakes + red bean paste';
            dorayakiPrice.textContent = '3.90';
            //Mathca Cheesecake
            cheesecakeHeader.textContent = 'Matcha Cheesecake'
            cheesecake.textContent = 'rare cheesecake + matcha';
            cheesecakePrice.textContent = '7.90';
            //Matcha Ice cream
            icecreamHeader.textContent = 'Matcha Ice Cream'
            icecream.textContent = 'soft serve + matcha + shiratama';
            icecreamPrice.textContent = '5.50';

        //Drinks
            //Asahi Dry
            aDryHeader.textContent = 'Asahi Super Dry'
            aDry.textContent = '';
            aDryPrice.textContent = '13/620ml';
            //Asahi Black
            aBlackHeader.textContent = 'Asahi Black'
            aBlack.textContent = '';
            aBlackPrice.textContent = '11.50/334ml';
            //Sapporo Draft
            draftHeader.textContent = 'Sapporo Draft'
            draft.textContent = 'pint or pitcher';
            draftPrice.textContent = '7/473ml, 25/1800ml';
            //Sake
            sakeHeader.textContent = 'Hakushika Kasen Chokara Junmai'
            sake.textContent = 'sake';
            sakePrice.textContent = '8/90ml, 22/300ml';
            //Umeshu
            umeshuHeader.textContent = 'Takara Umeshu'
            umeshu.textContent = '60 ml + rocks';
            umeshuPrice.textContent = '7';
            //Chuhi
            chuhiHeader.textContent = 'Nama Lemon Sour'
            chuhi.textContent = 'takara sugar cane shochu (1.5 oz) + full lemon';
            chuhiPrice.textContent = '10';
            //Pop
            popHeader.textContent = 'Pops'
            pop.textContent = 'regular or diet + club soda/coke/ginger ale/sprite';
            popPrice.textContent = '3';
            //Tea
            teaHeader.textContent = 'Matcha Green Tea'
            tea.textContent = 'hot or cold';
            teaPrice.textContent = '5';
}