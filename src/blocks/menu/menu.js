import $ from 'jquery';

$('.menu').on('click', '.menu__link', function (e) {
    e.preventDefault();

    const anchor = $($(this).attr('href'));
    const top = anchor.offset().top - $('.navbar').height() + 1;

    $('body,html').animate({ scrollTop: top }, 1000);
    $('.navbar__menu.is-open').removeClass('is-open');
});

$(window).scroll(function () {
    $('.menu__link').each(function(index, link) {
        const menuLink = $(link);
        const section = $(menuLink.attr('href'));
        const top  = section.offset().top - $('.navbar').height() - 10;
        const bottom = top + section.height();
        const scroll = $(window).scrollTop();

        if (scroll > top && scroll < bottom) {
            $('.menu__item_active').removeClass('menu__item_active');
            menuLink.closest('.menu__item').addClass('menu__item_active');
        }
    });
});
