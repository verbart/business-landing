import $ from 'jquery';

require('slick-carousel');

$('.about__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000
});
