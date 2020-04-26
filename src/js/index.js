import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all'
import 'owl.carousel';


import 'owl.carousel/dist/assets/owl.carousel.css';
import '../scss/index.scss';


$('#main-menu > button').click( () => {
    if(document.querySelector('#main-menu [aria-expanded="true"].navbar-toggler') == null){
        console.log('open')
        $('#main-menu').addClass('collapsed');

    } else {
        console.log('close')
        $('#main-menu').removeClass('collapsed');

    }
})

