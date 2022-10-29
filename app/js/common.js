$("body").on("click", ".btn-scroll-top", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

$('.form-search-header').on('click', function () {
    $('.search-hidden').fadeIn();
});

$('.form-search input').on('keyup change', function () {
    if (this.value.length > 0) {
        $('.result-search-modal').fadeIn();
    } else {
        $('.result-search-modal').fadeOut();
    }
});

$('.menu-mobile > li > a').on('click', function (e) {
    e.preventDefault();
    $(this).parents('li').find('.submenu-mobile').fadeIn();
});

$('.submenu-mobile .link-prev').on('click', function (e) {
    e.preventDefault();
    $('.submenu-mobile').fadeOut();
});

$('.js-example-basic-single').select2({
    width: "100%"
});


$.datepicker.setDefaults(
    {
        closeText: 'Закрыть',
        prevText: '',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });

$('.datepicker1').datepicker();

$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});


// show list
$('.toggle-requisites').on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parent().find('.list-requisites');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.html('Скрыть реквизиты');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('Показать реквизиты');

        content.slideUp();
    }
});
// show list


$('.information-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

//auto counter total//
let homeSlider = $('.information-slider');

$('.counter-slide__default').text("/ " + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});


$('.btn-step-next').on('click', function (e) {
    e.preventDefault();
    $('.section-loader').fadeIn();
    $('.information-slider').slick('setPosition');
});

// timer

var timer = setInterval(timerFunction, 1000),
    time = 59,
    procent = 100 / time,
    per = 0;
const timerBlock = document.querySelector(".timer");

function timerFunction() {
    per += procent;
    //Hour
    hour = Math.floor(time / 3600);
    hour = hour < 10 ? "0" + hour : hour;
    //Minutes
    minute = Math.floor((time - hour * 3600) / 60);
    minute = minute < 10 ? "0" + minute : minute;
    minute = minute > 59 ? "00" : minute;
    //Seconds
    second = time % 60;
    second = second < 10 ? +second : second;

    timerBlock.innerHTML = second + ' ' + 'сек';
    time--;
    // timerBlock.style.cssText =
    //     "background: conic-gradient(hsla(180, 100%, 50%, 1) " + per +
    //     "%, transparent 0 " + (100 - per) + "%)";

    if (time === -1) clearInterval(timer);
}

