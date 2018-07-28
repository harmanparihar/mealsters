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






    // ---------------------------
    // FIXING THE ANIMATION BUTTON
    // ---------------------------


    // $(".main-nav-bottom li").on("click", function() {
    //     console.log("HEREEEEEEEEEEEEEEE")
    //
    //     $(this).removeClass("nav-bottom");
    //     $(this).addClass("nav-bottom-b");
    //
    //
    //
    // })

});
