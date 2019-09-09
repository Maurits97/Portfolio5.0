var title = new Vue({
	el: '.title',
	data: {
		name: 'Maurits Brouwer',
	},
	template: `
		<div class='title'>
			<p href='index.html' class='title__name'>
				{{ name }}
			</p>
			<p class='title__job'>Front end developer</p>
		</div>
	`
})

var header = new Vue({
	el: '.header',
	data: {
		number: '97',
	},
	template: `
		<div class='header'>
			<p class='header__number' data-aos="fade-up">
				{{ number }}
			</p>
		</div>
	`
})

var headline__one = new Vue({
	el: '.headline.vue--one',
	data: {
		number: 'Nr. 1',
		subtext: 'Hello, world!'
	},
	template: `
		<div class='headline aside--right' data-aos="fade-up">
			<p class='headline__number'>{{ number }}</p>
			<p class='headline__subtext'>{{ subtext }}</p>
		</div>
	`
})

var headline__two = new Vue({
	el: '.headline.vue--two',
	data: {
		number: 'Nr. 2',
		subtext: 'Dit heb ik gemaakt.'
	},
	template: `
		<div class='headline aside--left' data-aos="fade-up">
			<p class='headline__number'>{{ number }}</p>
			<p class='headline__subtext'>{{ subtext }}</p>
		</div>
	`
})

var headline__three = new Vue({
	el: '.headline.vue--three',
	data: {
		number: 'Nr. 3',
		subtext: 'Zo kan jij mij bereiken.'
	},
	template: `
		<div class='headline aside--right' data-aos="fade-up">
			<p class='headline__number'>{{ number }}</p>
			<p class='headline__subtext'>{{ subtext }}</p>
		</div>
	`
})

var aboutme = new Vue({
	el: '.aboutme',
	data: {
		firstname: 'Maurits',
		surname: 'Brouwer',
		intro: 'Hi, ik ben Maurits Brouwer, een enthousiaste front end developer met een passie voor web design. Ik maak coole digitale producten en zorg dat de gebruiker altijd de juiste experience heeft.',
		study: 'Op dit moment zit ik in mijn 4de jaar van de studie Communication & Multimedia Design aan de Haagse Hogeschool.',
		image: {
			portret: 'img/Portfolio_Website_Maurits_Brouwer.jpg',
			signature: 'img/Maurits_Brouwer_Signature_Web.png',
		},
	},
	template: `
		<div class='aboutme'>
			<img :src='image.portret' class='aboutme__portret' />
			<p class="aboutme__firstname">{{ firstname }} </p>
			<p class="aboutme__surname">{{ surname }} </p>
			<div class='aboutme__intro'>
				<p class="aboutme__intro__introduce"> {{ intro }}</p>
				<p class="aboutme__intro__study"> {{ study }}</p>
				<img :src='image.signature' class='aboutme__intro__signature' data-aos="fade-up"/>
			</div
		</div>
	`
})

var work = new Vue({
	el: '.work',
	data: {
		item_1: {
			image: 'img/Maurits_Brouwer_Item_Portfolio_Website1.png',
			link: 'https://oud.mauritsbrouwer.nl',
			header: 'Portfolio Website 1.0',
			text: 'Mijn allereerste programmeer project was mijn eerste portfolio website. Deze heb ik gemaakt voor een projectvak tijdens mijn eerste jaar van mijn studie. Hoewel er veel techniek ontbrak was ik er erg trots op. Zo is de website niet responsive en vind ik hem inhoudelijk niet erg sterk. Wel was ik trots op het gebruik van het parallax effect. Kortom: een leuke ervaring om op terug te kijken.',
		},

		item_2: {
			image: 'img/Maurits_Brouwer_Item_HCI.jpeg',
			link: 'https://hci.mauritsbrouwer.nl',
			header: 'HCI Technologies',
			text: 'Mijn 2de jaar eindigde met het vak: HCI Technologies. Het leukste bij dit vak waren de Lab Weeks. Je kon hiervoor een thema kiezen en aan de hand daarvan kwam je in een groep terecht. Ik had gekozen voor het thema AR & VR. Samen met mijn groep hadden wij een VR rscape room gemaakt. In deze virtuele wereld zat je vast in een kamer en moest je doormiddel van puzzels de deur openen. Deze puzzels waren echter onmogelijk om alleen oplossen. Gelukkig was er een tweede speler die doormiddel van Augmented Reality hints kon vinden. De catch hierin was, dat de speler in de virtuele wereld niet terug kon praten. Wat ons product uniek maakte was dat AR en VR met elkaar gecombineerd werd. Ons concept was eigenlijk voortgekomen uit een spelletje genaamd “Keep Talking and Nobody Explodes”. Dit is een bom spelletje waar één iemand een bom heeft, en de andere persoon de “manual”. Hierin staat hoe je de bom onschadelijk kan maken. Het idee om elkaar te helpen terwijl je niet in dezelfde kamer bent vonden wij een goed begin om verder mee te gaan.',
		},

		item_3: {
			image: 'img/Maurits_Brouwer_Item_Dept.jpg',
			link: 'https://maurits97.github.io/DeptOpdracht/assets/index.html',
			header: 'Fictieve opdracht: Dept Agency',
			text: 'Tijdens het zoeken van een stageplek, heb ik het ook bij Dept Agency geprobeerd. Ook hierbij kreeg ik een fictieve opdracht zodat zij inzicht konden krijgen wat mijn huidige skills waren. Van deze opdracht heb ik erg veel van geleerd. Ik maakte hierbij kennis met technieken zoals Gulp en Sass.',
		},
	},
	template: `
		<div class='work'>
			<div class="work__item">
				<a :href='item_1.link' target='blank'><img :src='item_1.image' class="work__item__image" /></a>
				<h3 class='work__item__header'> {{ item_1.header}} </h3>
				<div class='work__item__link'>
					<a :href='item_1.link' target='blank' ><i class="arrow__circle material-icons-outlined">arrow_drop_down_circle</i>Ga naar..</a>
				</div>
				<p class='work__item__text'> {{ item_1.text }}</p>
				<div class='work__item__underline'></div>
			</div>

			<div class="work__item">
				<a :href='item_2.link' target='blank'><img :src='item_2.image' class="work__item__image" /></a>
				<h3 class='work__item__header'> {{ item_2.header}} </h3>
				<div class='work__item__link'>
					<a :href='item_2.link' target='blank'><i class="arrow__circle material-icons-outlined">arrow_drop_down_circle</i>Ga naar..</a>
				</div>
				<p class='work__item__text'> {{ item_2.text }}</p>
				<div class='work__item__underline'></div>
			</div>

			<div class="work__item">
				<a :href='item_3.link' target='blank'><img :src='item_3.image' class="work__item__image" /></a>
				<h3 class='work__item__header'> {{ item_3.header}} </h3>
				<div class='work__item__link'>
					<a :href='item_3.link' target='blank' ><i class="arrow__circle material-icons-outlined">arrow_drop_down_circle</i>Ga naar..</a>
				</div>
				<p class='work__item__text'> {{ item_3.text }}</p>
				<div class='work__item__underline'></div>
			</div>

		</div>
	`
})

var footer = new Vue({
	el: '.contact',
	data: {
		header: 'Zo kan je mij contacteren.',
		credentials: {
			email: 'MauritsBrouwer@outlook.com' ,
			phone: '+ 06 57276646',
			other: {
				title: 'Of neem een kijkje op mijn…',
				linkedin: 'Linkedin',
				instagram: 'Instagram',
				twitter: 'Twitter',
			},
		},
	},
	template: `
		<div class='contact'>
			<h1 class='contact__header'>
				{{ header }}
			</h1>
			<p class='contact__credentials'>
				{{ credentials.email }}
			</p>
			<p class='contact__credentials'>
				{{ credentials.phone }}
			</p>

			<div class='contact__other'>
				<h3 class='contact__other__title'> {{ credentials.other.title }} </h3>
				<a href='https://www.linkedin.com/in/mauritsbrouwer/' target='_blank'><p class='contact__other__linkedin'> {{ credentials.other.linkedin }} </a>
				<a href='https://www.instagram.com/mundakka97/' target='_blank'><p class='contact__other__instagram'> {{ credentials.other.instagram }} </a>
				<a href='https://twitter.com/maui12354' target='_blank'><p class='contact__other__twitter'> {{ credentials.other.twitter }} </a>
			</p>
		</div>
	`
})

var footer = new Vue({
	el: '.footer',
	data: {
		name: 'Maurits Brouwer',
		year: year,
	},
	template: `
		<div class='footer'>
			<p class='footer__name'>
				{{ name }}
			</p>
			<p class='footer__year'>
				{{ year }}
			</p>
		</div>
	`
})
