(function ($) {
    $(document).ready(function () {

        // hide .navbar first
        //$(".navbar").hide();

        // fade in .navbar
        $(function () {
            //$(window).scroll(function () {
            //    // set distance user needs to scroll before we fadeIn navbar
            //    if ($(this).scrollTop() > 350) {
            //        $('.navbar').fadeIn();
            //    } else {
            //        $('.navbar').fadeOut();
            //    }
            //});


        });

    });
}(jQuery));

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});