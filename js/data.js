//All data in webapp

const personalData = {
  firstname: "Maurits",
  surname: "Brouwer",
  number: "97",
  intro:
    "Hi, ik ben Maurits Brouwer, een enthousiaste front end developer met een passie voor web design. Ik maak coole digitale producten en zorg dat de gebruiker altijd de juiste experience heeft.",
  study:
    "Ik ben afgestudeerd bij Communication & Multimedia Design aan de Haagse Hogeschool.",
  image: {
    portret: "img/Portfolio_Website_Maurits_Brouwer.jpg",
    signature: "img/Maurits_Brouwer_Signature_Web.png",
  },
};

const headlineData = {
  one: {
    number: "Nr. 1",
    text: "Hello, world!",
  },
  two: {
    number: "Nr. 2",
    text: "Dit heb ik gemaakt.",
  },
  three: {
    number: "Nr. 3",
    text: "Zo kan jij mij bereiken.",
  },
};

const workData = {
  itemOne: {
    image: "img/cryptowebsite/Maurits_Brouwer_Item_Crypto1.png",
    pagelink: "/cryptowebsite",
    weblink: "https://crypto.mauritsbrouwer.nl",
    github: "https://github.com/Maurits97/react-crypto",
    header: "Crypto Website",
    text: "Het crypto project is ontstaan uit een persoonlijke interesse in crypto currency en behoefte aan het verbreden van mijn codeer skills. De uitdaging was om aan de hand van React.js en Redux een crypto website te maken die data weergeeft vanuit een API."
  },
  itemTwo: {
    image:
      "img/brigittestarkportfolio/Maurits_Brouwer_Item_BrigitteStarkPortfolio2.png",
    pagelink: "/artportfolio",
    weblink: "https://brigittestark.nl",
    github: "https://github.com/Maurits97/Brigitte-Portfolio",
    header: "Art portfolio",
    text:
      'Het art portfolio is in opdracht van Brigitte Stark gemaakt. Bij deze opdracht was ik verantwoordelijk voor zowel het design als de development. De website is op een efficiënte manier in elkaar gezet dankzij het Vue.js Framework. Met behulp van vue.js bleef mijn code "DRY" en kost het nauwelijks tijd om een nieuw kunstwerk aan de website toe te voegen. Daarnaast zorgt vue.js er ook voor dat er geen laadtijd is bij het aanklikken van een nieuwe pagina.',
  },
  itemThree: {
    image: "img/denkeffekt/Maurits_Brouwer_Item_Denkeffekt1.png",
    pagelink: "/denkeffekt",
    weblink: "https://denkeffekt.nl",
    github: "",
    header: "Denkeffekt Remedial Teaching",
    text:
      "Denkeffekt is een praktijk voor bijles en coaching. Voor denkeffekt was ik verantwoordelijk voor zowel het design als de development. De website is zonder front-end frameworks gemaakt.",
  },
};

const subworkData = {
  itemOne: {
    image: "img/Maurits_Brouwer_Item_Afstudeeropdracht.png",
    pagelink: "",
    header: "Online deliberation platform, graduation project",
  },
  itemTwo: {
    image: "img/Maurits_Brouwer_Item_Themawijk.png",
    pagelink: "",
    header: "De Themawijk",
  },
  itemThree: {
    image: "img/Maurits_Brouwer_Item_Portfolio_Website1.png",
    pagelink: "",
    header: "Portfolio Website 1.0",
  },
  itemFour: {
    image: "img/Maurits_Brouwer_Item_HCI.jpeg",
    pagelink: "",
    header: "HCI Technologies",
  },
};

const contactData = {
  header: "Zo kan je mij contacteren.",
  credentials: {
    email: "MauritsBrouwer@outlook.com",
    other: {
      title: "Of neem een kijkje op mijn…",
      linkedin: "Linkedin",
      instagram: "Instagram",
      twitter: "Twitter",
    },
  },
};

const projectInfo = {
  cryptowebsite: {
    header: "Crypto Website",
    weblink: "https://crypto.mauritsbrouwer.nl",
    github: "https://github.com/Maurits97/react-crypto",
    text: {
      one: 'Het crypto project is ontstaan uit een persoonlijke interesse in crypto currency en behoefte aan het verbreden van mijn codeer skills. De uitdaging was om aan de hand van React.js en Redux een crypto website te maken die data weergeeft vanuit een API.',
      two: 'Ik begon met het ontwerpen van de website. Hiervoor moest ik eerst weten wat er allemaal op de website moest/kon komen. Dit was afhankelijk van de data die ik kreeg uit mijn API. Ik weet nog weinig van backend omgevingen af, dus zocht ik naar een open api zodat ik geen persoonlijk api-key had die ik moest verbergen. Ik kwam uit op de API CoinGecko. Voor het design heb ik veel inspiratie gehaald uit websites zoals CoinMarketCap.com.',
      three: 'Om te kunnen starten met React, moest ik weten hoe je een project opstart. Dankzij een cursus via Udemy.com, die ik voorheen al doorlopen heb, werden mij de basisprincipes van React.js pas echt duidelijk. Verder was ik tijdens een ander project achter het principe: State Manangement gekomen. Hier wilde ik meer van te weten komen en vond uiteindelijk Redux. Redux is een state management tool waarbij je variabelen of data "globaal" kan opslaan. Mede dankzij verschillende tutorials via youtube begon ik de basis van Redux ook te snappen.',
      four: 'Tijdens het project liep ik regelmatig tegen obstakels aan waardoor ik vastliep. Hiervoor raadpleegde ik vrienden, bezocht ik stack overflow, andere websites en bekeek youtube filmpjes. Op deze manier was het altijd een kwestie van tijd voordat het probleem was opgelost.',
      five: 'Tijdens dit project probeerde ik om niet te snel tevreden met alles te zijn. Als er iets net niet lekker liep of goed was uitgelijnd, simpelweg niet accepteren, maar aanpassen. Door kritisch te blijven heb ik het beste uit mijzelf gehaald en enorm veel geleerd.'
    },
    image: {
      one: 'img/cryptowebsite/Maurits_Brouwer_Item_Crypto1.png',
      two: 'img/cryptowebsite/Maurits_Brouwer_Item_Crypto2.png',
      three: 'img/cryptowebsite/Maurits_Brouwer_Item_Crypto3.png',
      four: 'img/cryptowebsite/Maurits_Brouwer_Item_Crypto4.png',
    } 
    
  },
  artportfolio: {
    header: "Art portfolio",
    weblink: "https://brigittestark.nl",
    github: "https://github.com/Maurits97/Brigitte-Portfolio",
    text: {
      one:
        'Het art portfolio is in opdracht van Brigitte Stark gemaakt. Bij deze opdracht was ik verantwoordelijk voor zowel het design als de development. De website is op een efficiënte manier in elkaar gezet dankzij het Vue.js Framework. Met behulp van vue.js bleef mijn code "DRY" en kost het nauwelijks tijd om een nieuw kunstwerk aan de website toe te voegen. Daarnaast is de website een Single Page Application (SPA) wat er voor zorgt dat er geen laadtijd is bij het aanklikken van een "nieuwe pagina". ',
      two:
        "Het belangrijkste onderdeel bij het ontwerpen van de website was om het simpel te houden. De focus moest liggen op de kunstwerken. Door de website strak en zwart/wit te houden valt je oog altijd als eerst op de kunstwerken. Om meer rust op de website te creëren is er ook gekozen om de woorden en regelhoogte wat te vergroten. Hierdoor oogt het wat rustiger op de website.",
      three:
        "Tijdens dit project heb ik leren werken met vue.js. Voorheen wist ik weinig hiervan af, maar met behulp van stackoverflow en handige Youtube tutorials is het mij gelukt om een efficiënte en mooi project neer te zetten. Ook werd er gebruikt gemaakt van scss.",
    },
    image: {
      one:
        "img/brigittestarkportfolio/Maurits_Brouwer_Item_BrigitteStarkPortfolio1.png",
      two:
        "img/brigittestarkportfolio/Maurits_Brouwer_Item_BrigitteStarkPortfolio2.png",
      three:
        "img/brigittestarkportfolio/Maurits_Brouwer_Item_BrigitteStarkPortfolio3.jpg",
    },
  },
  denkeffekt: {
    header: "Denkeffekt remedial teaching",
    weblink: "https://denkeffekt.nl",
    github: "",
    text: {
      one:
        "Denkeffekt is een praktijk voor bijles en coaching. Voor denkeffekt was ik verantwoordelijk voor zowel het design als de development. De website is zonder front-end frameworks gemaakt.",
      two:
        "Denkeffekt had al een logo met unieke kleuren. Deze kleuren, oranje en grijs, zijn daarom ook gekozen als huisstijl van de website. Om de website wat frisser te maken, is samen met de opdrachtgever gekozen om een lichte blauw aan de huisstijl toe te voegen. De website bestaat uit een aantal paginas met informatie over de praktijk. Elke pagina is voorzien van een referentie van oud leerlingen.",
      three:
        "Het programmeerwerk is relatief basic, standaard HTML en CSS en beetje javascript. Wel is er gebruik gemaakt van de Google maps API om het adres te tonen onder het kopje contact.",
    },
    image: {
      one: "img/denkeffekt/Maurits_Brouwer_Item_Denkeffekt1.png",
      two: "img/denkeffekt/Maurits_Brouwer_Item_Denkeffekt2.png",
    },
  },
};
