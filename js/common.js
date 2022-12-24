$("body").on("click", ".btn-scroll-top", function (e) {
	e.preventDefault();
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
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
	$('.search-hidden input').focus();
});

$('.form-search input').on('keyup change', function () {
	if (this.value.length > 0) {
		$('.result-search-modal').fadeIn();
	} else {
		$('.result-search-modal').fadeOut();
	}
});

$('.search-hidden-close').on('click', function (e) {
	e.preventDefault();
	$('.search-hidden').fadeOut();
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

$('.datepicker1').datepicker({
	changeYear: true
});

$('.datepicker2').datepicker({
	changeYear: true,
	dateFormat: 'MM yy',
});

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
		content = $(this).parent().find('.list-requisites .list-requisites-item'),
		content2 = $(this).parent().find('.requisites-wrapper');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Скрыть реквизиты');

		content.slideDown();
		content2.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.html('Показать реквизиты');

		content.slideUp();
		content2.slideUp();
	}
});
// show list

// show map
$('.toggle-maps').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parent().find('.map-address');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Скрыть карту');

		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.html('Показать карту');

		content.slideUp();
	}
});
// show map

// show gallery
$('.toggle-gallery').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parent().find('.gallery-collapse');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Скрыть фото');

		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.html('Показать фото');

		content.slideUp();
	}
});
// show gallery


$('.information-slider').slick({
	slidesToShow: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

//auto counter total//
var homeSlider = $('.information-slider');

$('.counter-slide__default').text("/ " + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
	$(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});


$('.btn-step-next').on('click', function (e) {
	e.preventDefault();
	$('.section-loader').fadeIn();
	$('.information-slider').slick('setPosition');
});



$('.copy-link').click(function (e) {
	e.preventDefault();
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(this).parent('h1').find('span').text()).select();
	document.execCommand("copy");
	$temp.remove();
});

$('.tab_selector').on('change', function (e) {
	$('.nav-tabs li a').eq($(this).val()).tab('show');
});

// показать карточку товара по клику в зависимости от значениея data-tab
$(document).ready(function () {
	$(".radio-tab").click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.js-tab-content[data-tab="' + id + '"]');

		$('.js-tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});
});

$('.autopayment-settings-toggle').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active').parents().find('.block-hidden').fadeToggle();
});

$('.btn-delete').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.row-delete').fadeOut();
});

$('.checkbox-add').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$('.js-tab-content-pu').fadeToggle();
});