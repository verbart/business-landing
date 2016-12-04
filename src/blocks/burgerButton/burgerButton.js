import $ from 'jquery';

let clickDelayTimer = null;
let burger = null;
let target = null;

$('.burgerButton').on('click', function toggle() {
    burger = $(this);
    target = $(burger.data('target'));

    burger.toggleClass('burgerButton_active');
    target.toggleClass('is-open');
});
