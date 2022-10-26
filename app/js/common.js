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
    // placeholder: "Поиск региона",
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