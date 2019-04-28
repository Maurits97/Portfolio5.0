var date = new Date();
var navigation = new Vue({
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
			<div class='title__nav'>nav</div>
		</div>
	`
})

var navigation = new Vue({
	el: '.header',
	data: {
		number: '97',
	},
	template: `
		<div class='header'>
			<p class='header__number'>
				{{ number }}
			</p>
		</div>
	`
})

var navigation = new Vue({
	el: '.footer',
	data: {
		name: 'Maurits Brouwer',
		year: '2019',
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

// var navigation = new Vue({
// 	el: '.nav',
// 	data: {
// 		name: 'Maurits Brouwer',
// 	},
// 	template: `
// 		<div class='nav'>
// 			<a href='index.html' class='nav__name'>
// 				{{ name }}
// 			</a>
// 			<p class='nav__job'>Front end developer</p>
// 			<p class='nav__choose'>Intro</p>
// 		</div>
// 	`
// })

// var main = new Vue({
// 	el: '.main',
// 	data: {
// 		image: {
// 			src: 'img/Portfolio_Website_Maurits_Brouwer.jpg',
// 		},
// 		branding: {
// 			number: '1997',
// 		},
// 		aboutme: {
// 			header_one: 'Interesse in',
// 			header_two: 'Studie',
// 			paragraph_one: 'Front-end Development & Visual Design',
// 			paragraph_two: 'Communication & Multimedia Design',
// 		},
// 		links: [
// 			{title: 'Meer over mij', dest: '/'},
// 			{title: 'Mijn werk', dest: '/'},
// 			{title: 'Neem contact op', dest: '/'}
// 		]
// 	},
// 	template: `
// 		<div class='main'>
// 			<img :src='image.src' class='main__image' />

// 			<div class='branding'>
// 				<p class='branding__background'>
// 					{{ branding.number }}
// 				</p>

// 				<p class='branding__number'>
// 					{{ branding.number }}
// 				</p>
// 			</div>

// 			<div class='aboutme'>
// 				<p class='aboutme__header'>{{ aboutme.header_one }}</p>
// 				<p class='aboutme__text'>{{ aboutme.paragraph_one }}</p>

// 				<p class='aboutme__header aboutme--margin'>{{ aboutme.header_two }}</p>
// 				<p class='aboutme__text'>{{ aboutme.paragraph_two }}</p>
// 			</div>

// 			<div class="links">
// 				<ul>
// 					<li v-for= 'i in links'><a :href='i.dest'>{{ i.title }}</a></li>
// 				</ul>
// 			</div>
// 		</div>
// 	`
// })