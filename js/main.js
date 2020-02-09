var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    loopedSlides: 7
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 19,
    centeredSlides: false,
    slidesPerView: 3,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 7,
    breakpoints: {

        576: {
            spaceBetween: 10,
            centeredSlides: false,
            slidesPerView: 7,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            loopedSlides: 7
        },
        410:{
            spaceBetween: 19,
            centeredSlides: false,
            slidesPerView: 4,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            loopedSlides: 7 
        }
    }

});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

var swiper = new Swiper('.swiper-news', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});