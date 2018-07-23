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
















    $('#gofoodinfo').on('click', function() {




        let userChoice = $(".slick-active>div>div>img").attr("src");
        console.log(userChoice)

        $('head').append(
            `<style>
                .foodinfo-image {
                    background: linear-gradient(to bottom, rgba(0, 0, 0, .7), transparent), url("${userChoice}");
                    background-position: center;
                }
            </style>
        `)

        let userChoiceTitle = $(".slick-active>div>div>h2").text();
        $(".foodinfo > h2").text(userChoiceTitle);



        // console.log("hey you");

        $('.fooditem').addClass('toInfo-2');
        $('#name-main').addClass('toInfo-2');
        setTimeout(function() {
            $('.main-nav-bottom').addClass('toInfo');
            $("#menu").addClass('menu-to-info');
            $("#goback").addClass('goback-to-info');
            $('#goback').css("display", "inline-block");
        }, 100);

        setTimeout(function() {
            $('.main-section').css("display", "none");
            $('#name-main').css("opacity", "0");
        }, 250);

        setTimeout(function() {
            $('.foodinfo').css("display", "block")
            $('.foodinfo').addClass("foodinfo-anim-01")
        }, 250);

        setTimeout(function() {
            $("#infobox1").addClass("foodinfo-anim-02")
            $('#infobox1').css("opacity", "1")
        }, 450);
        setTimeout(function() {
            $("#infobox2").addClass("foodinfo-anim-02")
            $('#infobox2').css("opacity", "1")
        }, 550);
        setTimeout(function() {
            $("#infobox3").addClass("foodinfo-anim-02")
            $('#infobox3').css("opacity", "1")
        }, 650);
    })








});
