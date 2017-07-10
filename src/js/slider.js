$(document).ready(function () {
    $('#slider-main').bxSlider(
        {
            preloadImages: true,
            mode: 'fade',
            auto: true,
            pause: 5000,
            pager: false,
            nextSelector: '#slider-next',
            prevSelector: '#slider-prev',
            nextText: 'Right',
            prevText: 'Left'
        }
    );
});
