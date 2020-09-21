//Main js folder

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: homepage,
            name: 'homepage',
            props: {personalData, headlineData, workData, subworkData, contactData}
        }
    ]
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
