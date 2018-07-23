$(function() {

    $('.fooditem').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        mobileFirst: true,
        edgeFriction: 0,
        speed: 200,
        arrows: true,
        appendArrows: $(".main-nav-bottom > ul"),

    });



    $('#foodInfo').on('click', function() {
        // console.log("hey you");
        // setTimeout(function() {
        //     $('.main-nav-bottom').addClass('toInfo');
        // }, 100);

        setTimeout(function() {
            $('.main-section').css("display", "none");
        }, 300);

    })








});
