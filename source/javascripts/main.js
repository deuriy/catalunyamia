$( document ).ready(function() {

	// Drawer navigation
	$('.drawer').drawer();

	function numberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

	// Open and close search form
  var submitIcon = $('.search-form__icon');
  var textBox = $('.search-form__text');
  var searchBlock = $('.header__search-block');
  var searchForm = $('.search-form');
  var isOpen = false;

  searchBlock.click(function() {
  	$(this).toggleClass('header__search-block--open');
  	$('.search-block__overlay').toggle();
  });

  submitIcon.click(function() {
    if(isOpen == false) {
      searchForm.addClass('search-form--open');
      textBox.focus();
      isOpen = true;
    } else {
      searchForm.removeClass('search-form--open');
      textBox.focusout();
      isOpen = false;
    }
  });

	submitIcon.mouseup(function() {
    return false;
  });

  searchForm.mouseup(function() {
    return false;
  });

  $(document).mouseup(function() {
    if(isOpen == true) {
      submitIcon.css('display', 'inline-flex');
      submitIcon.click();
    }
  });

  function buttonUp() {
    var inputVal = textBox.val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0) {
      submitIcon.css('display', 'none');
    } else {
      textBox.val('');
      submitIcon.css('display', 'block');
    }
  }

	// Property search
	$('.single-select').multipleSelect({
		width: '100%',
		single: true
	});

	$('.multiple-select').multipleSelect({
		width: '100%',
		selectAll: false,
		allSelected: 'Все выбраны',
		countSelected: '# из % выбрано'
	});

	$('.multiple-column-select').multipleSelect({
		width: '100%',
		selectAll: false,
		multiple: true,
		multipleWidth: '',

		styler: function(value){
			var optgroupName = $('.multiple-column-select option[value="' + value + '"]').parent().data('name');
			if (optgroupName == 'regions') {
				return 'width: 165px;';
			} else if (optgroupName == 'seaside') {
				return 'width: 193px;';
			} else if (optgroupName == 'cities') {
				return 'width: 130px;';
			}
		}
	});

	$('.multiple-column-select .ms-drop ul li.group').each(function(index, el) {
		$(this).nextUntil('li.group').addBack().wrapAll('<li class="checkbox-group"><ul></ul></li>');
	});

	// Range sliders
	$( "#slider-range-square" ).slider({
    range: true,
    min: 30,
    max: 4500,
    values: [ 30, 4500 ],
    slide: function( event, ui ) {
      $( "#square" ).val( ui.values[ 0 ] + "       -     " + ui.values[ 1 ] );
      $(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(ui.values[0] + ' м<sup>2</sup>');
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(ui.values[1] + ' м<sup>2</sup>');
    },
    change: function( event, ui ) {
      $(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(ui.values[0] + ' м<sup>2</sup>');
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(ui.values[1] + ' м<sup>2</sup>');
    }
  });

  $( "#slider-range-price" ).slider({
    range: true,
    min: 50000,
    max: 8000000,
    values: [ 50000, 8000000 ],
    slide: function( event, ui ) {
      $( "#price" ).val( numberWithSpaces(ui.values[ 0 ]) + "       -      " + numberWithSpaces(ui.values[ 1 ]) );
      $(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(numberWithSpaces(ui.values[0]) + ' €');
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(numberWithSpaces(ui.values[1]) + ' €');
    },
    change: function (event, ui) {
    	$(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(numberWithSpaces(ui.values[0]) + ' €');
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(numberWithSpaces(ui.values[1]) + ' €');
    }
  });

  $( ".range-number--from .range-number__reset" ).click(function(event) {
  	$(this).parents('.range-block').find('.range-block__slider').slider("values", 0, $(this).parents('.range-block').find(".range-block__slider").slider("option", "min"));
  });

  $( ".range-number--to .range-number__reset" ).click(function(event) {
  	$(this).parents('.range-block').find('.range-block__slider').slider("values", 1, $(this).parents('.range-block').find(".range-block__slider").slider("option", "max"));
  });

	$( "#slider-range-storeys_number" ).slider({
    range: true,
    min: 1,
    max: 16,
    values: [ 1, 16 ],
    slide: function( event, ui ) {
      $( "#storeys_number" ).val( "От " + ui.values[ 0 ] + "           -           До " + ui.values[ 1 ] );
      $(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(ui.values[0]);
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(ui.values[1]);
    },
    change: function( event, ui ) {
      $(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(ui.values[0]);
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(ui.values[1]);
    }
  });

	$( "#slider-range-floor" ).slider({
    range: true,
    min: 1,
    max: 16,
    values: [ 1, 16 ],
    slide: function( event, ui ) {
      $( "#floor" ).val( "От " + ui.values[ 0 ] + "           -           До " + ui.values[ 1 ] );
      $(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(ui.values[0]);
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(ui.values[1]);
    },
    change: function( event, ui ) {
      $(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(ui.values[0]);
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(ui.values[1]);
    }
  });

	$( "#slider-range-distance_to_sea" ).slider({
    range: true,
    min: 30,
    max: 1000,
    values: [ 30, 1000 ],
    slide: function( event, ui ) {
      $( "#distance_to_sea" ).val( "От " + ui.values[ 0 ] + "           -           До " + ui.values[ 1 ] );
      $(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(ui.values[0]);
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(ui.values[1]);
    },
    change: function( event, ui ) {
      $(this).siblings('.range-block__numbers').find('.range-number--from .range-number__text').html(ui.values[0]);
      $(this).siblings('.range-block__numbers').find('.range-number--to .range-number__text').html(ui.values[1]);
    }
  });

  $('.property-search__btn--details, .property-search__details-link').on('click', function(event) {
  	event.preventDefault();
  	$(this).closest('.section-search').toggleClass('section-search--expanded').find('.details-form').slideToggle(200);
  });

  var wid = $(window).width();

  $('.form-item--range .form-label, .form-item--range .range-text').on('click', function(event) {
  	if (wid >= 768) {
  		$(this).siblings('.range-block').toggle();
  	}
  });

	$(document).mouseup(function (e) { // отслеживаем событие клика по веб-документу
		if (wid >= 768) {
			var block = $(".range-block"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
	    if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
	      && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
	      block.hide(); // если условия выполняются - скрываем наш элемент
	    }
		}
	});

	// Search by offer number
	$('.search-by-number__toggle-link').on('click', function(event) {
		$(this).closest('.search-by-number').toggleClass('search-by-number--expanded');
		event.preventDefault();
	});

	// jQuery Tabs
	$('.tabs__list').each(function() {
	  $(this).find('.tabs__item').each(function(i) {
	    $(this).click(function() {
	      var $parents = $(this).parents('.tabs');
	      $parents.find('.tabs__item').removeClass('active');
	      $(this).addClass('active');
	      $parents.find('.tabs__content').hide();
	      $parents.find('.tabs__content:eq(' + i + ')').show();
	    });
	  });
	});

	function tabsCarouselInit () {
		if (wid >= 1024) {
		  $(".tabs-list--offers, .tabs-list--product").trigger('destroy.owl.carousel').removeClass('owl-carousel');
		} else {
			$(".tabs-list--offers, .tabs-list--product").addClass('owl-carousel owl-carousel--offers').owlCarousel({
				dots: false,
				nav: true,
				navText: [
					'<img src="/assets/images/icons/arrow_prev2.png">',
					'<img src="/assets/images/icons/arrow_next2.png">'
				],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 2
					}
				}
			});
		}
	}

	tabsCarouselInit();

	// Work scheme
	$('.work-scheme__show-all').click(function(event) {
		event.preventDefault();
		$(this).parents('.work-scheme').find('.work-scheme__steps').toggleClass('work-scheme__steps--expanded');
		if ($(this).text() == 'Смотреть всю схему') {
			$(this).addClass('btn-orange--arrow-down-inverse').text('Свернуть схему');
		} else {
			$(this).removeClass('btn-orange--arrow-down-inverse').text('Смотреть всю схему');
		}
	});

	// Property listings
	$('.property-listings__show-all').click(function(event) {
		event.preventDefault();
		$(this).parents('.property-listings').find('.property-listings__links-blocks').toggleClass('property-listings__links-blocks--expanded');
		if ($(this).text() == 'Смотреть все подборки') {
			$(this).addClass('btn-orange--arrow-down-inverse').text('Свернуть подборки');
		} else {
			$(this).removeClass('btn-orange--arrow-down-inverse').text('Смотреть все подборки');
		}
	});

	// Useful articles
	$('.useful-articles__show-all').click(function(event) {
		event.preventDefault();
		$(this).parents('.useful-articles').find('.useful-articles__links-blocks').toggleClass('useful-articles__links-blocks--expanded');
		if ($(this).text() == 'Все статьи') {
			$(this).addClass('btn-orange--arrow-down-inverse').text('Свернуть статьи');
		} else {
			$(this).removeClass('btn-orange--arrow-down-inverse').text('Все статьи');
		}
	});

	$(window).resize(function(){
		wid = $(window).width();

		if (wid < 768 && $('.property-search__range-block').css('display') == 'none') {
			$('.property-search__range-block').removeAttr('display');
		}
		tabsCarouselInit();

		if (wid >= 576) {
			// Work scheme
			$('.work-scheme__show-all').removeClass('btn-orange--arrow-down-inverse').text('Смотреть всю схему');
			$('.work-scheme__steps').removeClass('work-scheme__steps--expanded');

			// Property listings
			$('.property-listings__show-all').removeClass('btn-orange--arrow-down-inverse').text('Смотреть все подборки');
			$('.property-listings__links-blocks').removeClass('property-listings__links-blocks--expanded');

			// Useful articles
			$('.useful-articles__show-all').removeClass('btn-orange--arrow-down-inverse').text('Все статьи');
			$('.useful-articles__links-blocks').removeClass('useful-articles__links-blocks--expanded');
		}
	});

	// Top offers slider
	var topOffersSlider = new Swiper ('.swiper-container--top-offers', {
	  loop: true,
	  slidesPerView: 3,
	  allowTouchMove: false,
	  spaceBetween: 16,

	  navigation: {
	    nextEl: '.swiper-arrow--top-offers-next',
	    prevEl: '.swiper-arrow--top-offers-prev'
	  },

	  breakpoints: {
	  	767: {
	  		slidesPerView: 1
	  	},
	  	991: {
	  		slidesPerView: 2
	  	}
	  }
	});

	// Offer photos slider
	var offerPhotosSlider = new Swiper ('.swiper-container--offer-photos', {
	  loop: true,
	  allowTouchMove: false,

	  navigation: {
	    nextEl: '.swiper-container--offer-photos > .swiper-arrow--next',
	    prevEl: '.swiper-container--offer-photos > .swiper-arrow--prev'
	  }
	});

	$('.tabs-list--offers .tabs__item').click(function(event) {
		var activeTabIndex = $(this).index();
		var $activeTab = $('.tabs-list--offers').siblings('.tabs__container').find('.tabs__content').eq(activeTabIndex);
		if ($activeTab.find('.swiper-container--top-offers').length > 0 && $activeTab.find('.swiper-container--top-offers > .swiper-wrapper > .swiper-slide-active').length === 0) {
			topOffersSlider[activeTabIndex].update();
			$(offerPhotosSlider).each(function(index, el) {
				el.update();
			});
		}
	});

	// News slider
	var newsSlider = new Swiper ('.swiper-container--news', {
	  loop: true,
	  slidesPerView: 2,
	  spaceBetween: 23,

	  navigation: {
	    nextEl: '.swiper-arrow--news-next',
	    prevEl: '.swiper-arrow--news-prev'
	  },

	  breakpoints: {
	  	767: {
	  		slidesPerView: 1
	  	},

	  	1199: {
	  		spaceBetween: 13
	  	}
	  }
	});

	// Callback form
	$('.open-popup-link').fancybox({
		// Options will go here
		touch: false,
		baseTpl:
	    '<div class="fancybox-container" role="dialog" tabindex="-1">' +
	    '<div class="fancybox-bg fancybox-bg--popup"></div>' +
	    '<div class="fancybox-inner">' +
	    '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
	    '<div class="fancybox-toolbar">{{buttons}}</div>' +
	    '<div class="fancybox-navigation">{{arrows}}</div>' +
	    '<div class="fancybox-stage"></div>' +
	    '<div class="fancybox-caption"></div>' +
	    "</div>" +
	    "</div>",

	  btnTpl: {
	    // This small close button will be appended to your html/inline/ajax content by default,
	    // if "smallBtn" option is not set to false
	    smallBtn:
	      '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small fancybox-close-small--popup" title="{{CLOSE}}">' +
	      '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
	      "</button>"
	  },
	});

	// Open a mobile submenu
	$('.mobile-mainmenu__toggle').on('click', function(event) {
		var $parentItem = $(this).parents('.mobile-mainmenu__item');

		$parentItem.toggleClass('mobile-mainmenu__item--expanded').siblings().removeClass('mobile-mainmenu__item--expanded').find('.mobile-mainmenu__submenu-wrapper').slideUp();
		$parentItem.find('.mobile-mainmenu__submenu-wrapper').slideToggle();
	});

	// Sorting form
	$('.sorting-form__select').multipleSelect({
		width: '170px',
		single: true
	});

	if ($('.product-images__gallery').length > 0 && $('.product-images__thumbs').length > 0) {
		var galleryTop = new Swiper('.product-images__gallery', {
	    spaceBetween: 10,
	 		loop: true,
			loopedSlides: 4
	  });

	  var galleryThumbs = new Swiper('.product-images__thumbs', {
	    spaceBetween: 10,
	    centeredSlides: true,
	    slidesPerView: 'auto',
	    touchRatio: 0.2,
	    slideToClickedSlide: true,
			loop: true,
			loopedSlides: 4,
	    navigation: {
	      nextEl: '.product-images__next',
	      prevEl: '.product-images__prev',
	    }
	  });

	  galleryTop.controller.control = galleryThumbs;
	  galleryThumbs.controller.control = galleryTop;
	}

  // Fancybox
  $('.product-images__gallery-slide').fancybox({
  	buttons: [
	    "close"
	  ],
	  loop: true
  });

  // Mortgage calc
  $('.mortgage-calc__form-select').multipleSelect({
		width: '100%',
		single: true
	});

	// Similar offers
	var similarOffers = new Swiper ('.offer-list--similar-offers .swiper-container', {
	  loop: true,
	  allowTouchMove: false,

	  navigation: {
	    nextEl: '.offer-list--similar-offers .swiper-button-next',
	    prevEl: '.offer-list--similar-offers .swiper-button-prev',
	  }
	});

	// Display types
	$('.display-types__link').click(function(event) {
		$(this).parent().siblings('.display-types__item').removeClass('display-types__item--active');
		$(this).parent().addClass('display-types__item--active');
		event.preventDefault();
	});

	// Add to favourites
	$('.offer-block__info--like').click(function(event) {
		$(this).toggleClass('offer-block__info--like-active');
		event.preventDefault();
	});

});