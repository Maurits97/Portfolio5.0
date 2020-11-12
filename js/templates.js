//All templates 

const homepage = {
    props: ['personalData', 'headlineData', 'workData', 'subworkData', 'contactData'],
	template: `
	<div class="homepage">
		<div class='header'>
			<p class='header__number' data-aos="fade-up">{{personalData.number}}</p>
		</div>

		<i class="arrow material-icons">keyboard_arrow_down</i>

		<div class='headline aside--right' data-aos="fade-up">
			<p class='headline__number'>{{ headlineData.one.number }}</p>
			<p class='headline__subtext'>{{ headlineData.one.text }}</p>
		</div>

		<div class='aboutme'>
			<img :src='personalData.image.portret' class='aboutme__portret' />
			<p class="aboutme__firstname">{{ personalData.firstname }} </p>
			<p class="aboutme__surname">{{ personalData.surname }} </p>
			<div class='aboutme__intro'>
				<p class="aboutme__intro__introduce"> {{ personalData.intro }}</p>
				<p class="aboutme__intro__study"> {{ personalData.study }}</p>
				<img :src='personalData.image.signature' class='aboutme__intro__signature' data-aos="fade-up"/>
			</div>
		</div>

		<div class='headline aside--left' data-aos="fade-up">
			<p class='headline__number'>{{ headlineData.two.number }}</p>
			<p class='headline__subtext'>{{ headlineData.two.text }}</p>
		</div>

		<div class='work'>
			<div class="work__item" v-for="item in workData">
				<router-link :to= 'item.pagelink'><img :src='item.image' class="work__item__image" /></router-link>
				<h3 class='work__item__header'> {{item.header}} </h3>
				<div class='work__item__link'>
					<router-link :to= 'item.pagelink'><i class="arrow__circle material-icons-outlined ">arrow_drop_down_circle</i>Lees meer..</router-link>
					<a :href='item.weblink' target='blank' ><i class="arrow__circle material-icons-outlined">arrow_drop_down_circle</i>Bekijk website..</a>
					<a :href='item.github' target='blank' v-if="item.github != ''" ><i class="arrow__circle material-icons-outlined">arrow_drop_down_circle</i>Github</a>
				</div>
				<div class="work__item__info">
					<p class='work__item__text'> {{ item.text }}</p>
				</div>
				<div class='work__item__underline'></div>
			</div>
		</div>

		<div class='subwork'>
			<h3 class="subwork__header">Overige projecten (coming soon)</h3>
			<div class="subwork--pushleft">
				<div class="subwork__item" v-for="item in subworkData"><a :href='item.pagelink'>
					<div class="subwork__item__image" v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
					
					<h4 class="subwork__item__header">{{item.header}}</h4></a>
				</div>
			</div>
		</div>

		<div class='headline aside--right' data-aos="fade-up">
			<p class='headline__number'>{{ headlineData.three.number }}</p>
			<p class='headline__subtext'>{{ headlineData.three.text }}</p>
		</div>

		<div class='contact'>
			<h1 class='contact__header'>{{ contactData.header }}</h1>
			<p class='contact__credentials'>{{ contactData.credentials.email }}</p>

			<div class='contact__other'>
				<h3 class='contact__other__title'> {{ contactData.credentials.other.title }} </h3>
				<a href='https://www.linkedin.com/in/mauritsbrouwer/' target='_blank'><p class='contact__other__linkedin'> {{ contactData.credentials.other.linkedin }} </a>
				<a href='https://www.instagram.com/mundakka97/' target='_blank'><p class='contact__other__instagram'> {{ contactData.credentials.other.instagram }} </a>
				<a href='https://twitter.com/maui12354' target='_blank'><p class='contact__other__twitter'> {{ contactData.credentials.other.twitter }} </a>
			</p>
			</div>
		</div>
	</div>
    `
}

const project = {
	props: ['projectInfo'],
	template: `
	<div class="project work">
		<p class='project__number'>97</p>

		<p class="project__terug"><a href='/'>Terug</a></p>

		<div class="work__item">
			<h3 class='work__item__header'> {{projectInfo[$route.params.project].header}} </h3>
			<div class='work__item__link'>
				<a :href='projectInfo[$route.params.project].weblink' target='blank' ><i class="arrow__circle material-icons-outlined">arrow_drop_down_circle</i>Bekijk website..</a>
				<a :href='projectInfo[$route.params.project].github' target='blank' v-if="projectInfo[$route.params.project].github != ''"><i class="arrow__circle material-icons-outlined">arrow_drop_down_circle</i>Github</a>
			</div>
			<div class="work__item__info">
				<p class='work__item__text project--morewidth' v-for="text in projectInfo[$route.params.project].text" > {{text}}</p>
			</div>
			<div class='work__item__underline project--nomarginbottom'></div>

			<div class="project__images">
				<img class="project__image" v-for="image in projectInfo[$route.params.project].image"  :src="image" />
			</div>
		</div>
    </div>
	`
}