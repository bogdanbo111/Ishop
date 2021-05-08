
$(document).ready(function(){
    //Slider
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-prev">' +
            '<img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-next">' +
            '<img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    //Tabs
    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab-active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
        $($(this).closest('.tabs-wrapper').find('.tabs-content')).removeClass('tabs-content--active');
        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition');
    });

    //Products
    $('.product-item__favorite').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('product-item__favorite--active');
    });
    $('.product-item__basket').on('click', function (e) {
        e.preventDefault();
        //$(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btn-prev">' +
            '<img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btn-next">' +
            '<img src="images/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    dots: true
                }
            },
            {
                breakpoint: 870,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 590,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    //Aside Filter Form Styler
    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    //Aside Mobile filter
    $('.aside__btn').on('click', function () {
        $(this).next().slideToggle('200');
    });

    //RangeSlider
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 50000,
        hide_from_to: true
    });

    //Catalog-aside
    $('.filter-btn__send, .product__more-link').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('filter-btn__send--active');
    });

    $('.catalog__filter-button').on('click', function () {
        $('.catalog__filter-button').removeClass('catalog__filter-button--active');
        $(this).addClass('catalog__filter-button--active');
    });

    $('.catalog__filter-btnline').on('click', function () {
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });
    $('.catalog__filter-btngrid').on('click', function () {
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    //Star Rating
    $("#rateYo").rateYo({
        ratedFill: "#1C62CD",
        spacing: "7px",
        normalFill: "#c4c4c4"
    });

    //Hamburger
    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });

    //Footer Mobile
    $('.footer__topdrop').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('footer__topdrop--active');
    });


    $('.card__list-more').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('card__list-more--active');
        $(this).closest('.card__list').find('.card__list-item_slideOut').slideToggle();
    });

});


