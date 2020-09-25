//All data in webapp

const personalData = {
    firstname: 'Maurits',
    surname: 'Brouwer',
    number: '97',
    intro: 'Hi, ik ben Maurits Brouwer, een enthousiaste front end developer met een passie voor web design. Ik maak coole digitale producten en zorg dat de gebruiker altijd de juiste experience heeft.',
    study: 'Ik ben afgestudeerd bij Communication & Multimedia Design aan de Haagse Hogeschool.',
    image: {
        portret: 'img/Portfolio_Website_Maurits_Brouwer.jpg',
        signature: 'img/Maurits_Brouwer_Signature_Web.png',
    },
}

const headlineData = {
    one: {
        number: 'Nr. 1',
        text: 'Hello, world!'
    },
    two: {
        number: 'Nr. 2',
        text: 'Dit heb ik gemaakt.',
    },
    three: {
        number: 'Nr. 3',
        text: 'Zo kan jij mij bereiken.',
    }
}

const workData = {
    itemOne: {
        image: 'img/brigittestarkportfolio/Maurits_Brouwer_Item_BrigitteStarkPortfolio2.png',
        pagelink: '/artportfolio',
        weblink: 'https://brigittestark.nl',
        github: 'https://github.com/Maurits97/Brigitte-Portfolio',
        header: 'Art portfolio',
        text: 'Het art portfolio is in opdracht van Brigitte Stark gemaakt. Bij deze opdracht was ik verantwoordelijk voor zowel het design als de development. De website is op een efficiente manier in elkaar gezet dankzij het Vue.js Framework. Met behulp van vue.js bleef mijn code "DRY" en kost het nauwelijks tijd om een nieuw kunstwerk aan de website toe te voegen.'
    },
    itemTwo: {
        image: 'img/denkeffekt/Maurits_Brouwer_Item_Denkeffekt2.jpg',
        pagelink: '/denkeffekt',
        weblink: 'https://denkeffekt.nl',
        github: 'https://github.com/Maurits97/Denkeffekt',
        header: 'Denkeffekt Remedial Teaching',
        text: 'Denkeffekt is een praktijk voor bijles en coaching. Voor denkeffekt was ik verantwoordelijk voor zowel het design als de development. De website is zonder front-end frameworks gemaakt. '
    }
}

const subworkData = {
    itemOne: {
        image: 'img/Maurits_Brouwer_Item_Afstudeeropdracht.png',
        pagelink: '',
        header: 'Online deliberation platform, graduation project',
    },
    itemTwo: {
        image: 'img/Maurits_Brouwer_Item_Themawijk.png',
        pagelink: '',
        header: 'De Themawijk',
    },
    itemThree: {
        image: 'img/Maurits_Brouwer_Item_Portfolio_Website1.png',
         pagelink: '',
         header: 'Portfolio Website 1.0',
    },
    itemFour: {
        image: 'img/Maurits_Brouwer_Item_HCI.jpeg',
        pagelink: '',
        header: 'HCI Technologies',
    },
}

const contactData = {
    header: 'Zo kan je mij contacteren.',
    credentials: {
        email: 'MauritsBrouwer@outlook.com' ,
        other: {
            title: 'Of neem een kijkje op mijn…',
            linkedin: 'Linkedin',
            instagram: 'Instagram',
            twitter: 'Twitter',
        },
    },
}

const projectInfo = {
    artportfolio: {
        header: 'Art portfolio',
        weblink: 'https://brigittestark.nl',
        github: 'https://github.com/Maurits97/Brigitte-Portfolio',
        text: {
            one: 'Het art portfolio is in opdracht van Brigitte Stark gemaakt. Bij deze opdracht was ik verantwoordelijk voor zowel het design als de development. De website is op een efficiente manier in elkaar gezet dankzij het Vue.js Framework. Met behulp van vue.js bleef mijn code "DRY" en kost het nauwelijks tijd om een nieuw kunstwerk aan de website toe te voegen.',
            two: 'Testing'
        },
        image: {
            one: 'img/brigittestarkportfolio/Maurits_Brouwer_Item_BrigitteStarkPortfolio1.png',
            two: 'img/brigittestarkportfolio/Maurits_Brouwer_Item_BrigitteStarkPortfolio2.png',
            three: 'img/brigittestarkportfolio/Maurits_Brouwer_Item_BrigitteStarkPortfolio3.jpg'
        }
    },
    denkeffekt: {
        header: 'Denkeffekt remedial teaching',
        weblink: 'https://denkeffekt.nl',
        github: 'https://github.com/Maurits97/Denkeffekt',
        text: {
            one: 'Lelz',
            two: 'testing test'
        },
        image: {
            one: 'img/denkeffekt/Maurits_Brouwer_Item_Denkeffekt1.jpg',
            two: 'img/denkeffekt/Maurits_Brouwer_Item_Denkeffekt2.png'
        }
    },
}