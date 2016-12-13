import $ from 'jquery';

let active = null;

$('.accordion__header').click(function () {
    if (!$(this).is(active)) {
        $('.accordion__header_active').removeClass('accordion__header_active');
        $(this).addClass('accordion__header_active');
        active = $(this);
    }
});
