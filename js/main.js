//Main js folder

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: homepage,
            name: 'homepage',
            props: {personalData, headlineData, workData, subworkData, contactData}
        },
        {
            path: '/:project',
            component: project, 
            name: 'project',
            props: {projectInfo}
        }
    ],
    //when clicked on router link, page will load on top.
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

var app = new Vue({
    router,
    el: '#app',
    data: {
    },
}).$mount('#app') 


//Animate On Scroll Library
AOS.init();

//Get year
var d = new Date();
var year = d.getFullYear();

const footerY = document.getElementById('footer__year');
footerY.innerHTML = year;

//Auto reload on back button
jQuery( document ).ready(function( $ ) {
	//Use this inside your document ready jQuery 
	$(window).on('popstate', function() {
	   location.reload(true);
	});
 });