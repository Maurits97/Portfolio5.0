//All templates 

const homepage = {
    props: ['personalData', 'headlineData', 'workData', 'subworkData', 'contactData'],
	template: `
	<div class="homepage">
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
			<a :href='item.pagelink'><img :src='item.image' class="work__item__image" /></a>
			<h3 class='work__item__header'> {{item.header}} </h3>
			<div class='work__item__link'>
				<a :href='item.pagelink'><i class="arrow__circle material-icons-outlined ">arrow_drop_down_circle</i>Lees meer..</a>
				<a :href='item.weblink' target='blank' ><i class="arrow__circle material-icons-outlined">arrow_drop_down_circle</i>Bekijk website..</a>
				<a :href='item.github' target='blank' ><i class="arrow__circle material-icons-outlined">arrow_drop_down_circle</i>Github</a>
			</div>
			<p class='work__item__text'> {{ item.text }}</p>
			<div class='work__item__underline'></div>
		</div>
	</div>

	<div class='subwork'>
		<h3 class="subwork__header">Overige projecten</h3>
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
    `
}