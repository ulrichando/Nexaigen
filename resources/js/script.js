$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });


/* scroll on buttons */

$('.js--scroll-to-plans').click(function() {
  $('html , body').animate({scrollTop: $('.js--section-projects').offset().top}, 1000);
});


$('.js--scroll-to-start').click(function() {
  $('html , body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});

/* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


/* siper navigation*/

var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    /* Animations on scroll */

$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
},{
  offset: '50%;'
})
  
$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated pulse');
},{
  offset: '50%;'
})
  

$('.js--nav-icon').click(function(){
  var nav = $('.js--main-nav');
  var icon = $('.   js--nav-icon i');

  nav.slideToggle(200);
  if (icon.hasClass('ion-navicon-round')) {
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round');
  } else {
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
  }


});

// The latitude and longitude of your business / place
var position = [27.1959739, 78.02423269999997];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };

    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);

});

  
  