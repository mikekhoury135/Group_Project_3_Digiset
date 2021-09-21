if ($(window).width() >= 1200) {

    $(window).on("scroll.homepage-mockup", function () {
        var topDivHeight = $(".hero-content").height();
        var viewPortSize = $(this).height();

        var triggerAt = 500;
        var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.homepage-mockup').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.homepage-mockup");
        }
    });

    $(window).on("scroll.feature-text-fade-1",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var viewPortSize = $(this).height();

        var triggerAt = -200;
        var triggerHeight = (fadeDivHeight + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.feature-text-fade-1').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.feature-text-fade-1");
        }
    });

    $(window).on("scroll.feature-text-fade-2",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var fadeDivHeight2 = $(".feature-text-fade-1").height();
        var viewPortSize = $(this).height();

        var triggerAt = -300;
        var triggerHeight = (fadeDivHeight + fadeDivHeight2 + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.feature-text-fade-2').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.feature-text-fade-2");
        }
    });

    $(window).on("scroll.feature-text-fade-3",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var fadeDivHeight2 = $(".feature-text-fade-1").height();
        var fadeDivHeight3 = $(".feature-text-fade-2").height();
        var viewPortSize = $(this).height();

        var triggerAt = -300;
        var triggerHeight = (fadeDivHeight + fadeDivHeight2 + fadeDivHeight3 + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.feature-text-fade-3').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.feature-text-fade-3");
        }
    });

    $(window).on("scroll.homepage-mockup-2",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var fadeDivHeight2 = $(".feature-text-fade-1").height();
        var fadeDivHeight3 = $(".feature-text-fade-2").height();
        var fadeDivHeight4 = $(".feature-text-fade-3").height();
        var viewPortSize = $(this).height();

        var triggerAt = 0;
        var triggerHeight = (fadeDivHeight + fadeDivHeight2 + fadeDivHeight3 + fadeDivHeight4 + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.homepage-mockup-2').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.homepage-mockup-2");
        }
    });

    $(window).on("scroll.feature-text-fade-4",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var fadeDivHeight2 = $(".feature-text-fade-1").height();
        var fadeDivHeight3 = $(".feature-text-fade-2").height();
        var fadeDivHeight4 = $(".feature-text-fade-3").height();
        var fadeDivHeight5 = $(".homepage-mockup-2").height();
        var viewPortSize = $(this).height();

        var triggerAt = -700;
        var triggerHeight = (fadeDivHeight + fadeDivHeight2 + fadeDivHeight3 + fadeDivHeight4 + fadeDivHeight5 + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.feature-text-fade-4').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.feature-text-fade-4");
        }
    });

    $(window).on("scroll.feature-text-fade-5",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var fadeDivHeight2 = $(".feature-text-fade-1").height();
        var fadeDivHeight3 = $(".feature-text-fade-2").height();
        var fadeDivHeight4 = $(".feature-text-fade-3").height();
        var fadeDivHeight5 = $(".homepage-mockup-2").height();
        var fadeDivHeight6 = $(".feature-text-fade-4").height();
        var viewPortSize = $(this).height();

        var triggerAt = -700;
        var triggerHeight = (fadeDivHeight + fadeDivHeight2 + fadeDivHeight3 + fadeDivHeight4 + fadeDivHeight5 + fadeDivHeight6 + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.feature-text-fade-5').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.feature-text-fade-5");
        }
    });

    $(window).on("scroll.feature-text-fade-6",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var fadeDivHeight2 = $(".feature-text-fade-1").height();
        var fadeDivHeight3 = $(".feature-text-fade-2").height();
        var fadeDivHeight4 = $(".feature-text-fade-3").height();
        var fadeDivHeight5 = $(".homepage-mockup-2").height();
        var fadeDivHeight6 = $(".feature-text-fade-4").height();
        var fadeDivHeight7 = $(".feature-text-fade-5").height();
        var viewPortSize = $(this).height();

        var triggerAt = -700;
        var triggerHeight = (fadeDivHeight + fadeDivHeight2 + fadeDivHeight3 + fadeDivHeight4 + fadeDivHeight5 + fadeDivHeight6 + fadeDivHeight7 + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.feature-text-fade-6').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.feature-text-fade-6");
        }
    });

    $(window).on("scroll.pricing-content",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var fadeDivHeight2 = $(".feature-text-fade-1").height();
        var fadeDivHeight3 = $(".feature-text-fade-2").height();
        var fadeDivHeight4 = $(".feature-text-fade-3").height();
        var fadeDivHeight5 = $(".homepage-mockup-2").height();
        var fadeDivHeight6 = $(".feature-text-fade-4").height();
        var fadeDivHeight7 = $(".feature-text-fade-5").height();
        var fadeDivHeight8 = $(".feature-text-fade-6").height();
        var viewPortSize = $(this).height();

        var triggerAt = -400;
        var triggerHeight = (fadeDivHeight + fadeDivHeight2 + fadeDivHeight3 + fadeDivHeight4 + fadeDivHeight5 + fadeDivHeight6 + fadeDivHeight7 + fadeDivHeight8 + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.pricing-content').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.pricing-content");
        }
    });

    $(window).on("scroll.about-digiset-content",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var fadeDivHeight2 = $(".feature-text-fade-1").height();
        var fadeDivHeight3 = $(".feature-text-fade-2").height();
        var fadeDivHeight4 = $(".feature-text-fade-3").height();
        var fadeDivHeight5 = $(".homepage-mockup-2").height();
        var fadeDivHeight6 = $(".feature-text-fade-4").height();
        var fadeDivHeight7 = $(".feature-text-fade-5").height();
        var fadeDivHeight8 = $(".feature-text-fade-6").height();
        var fadeDivHeight9 = $(".pricing-content").height();
        var viewPortSize = $(this).height();

        var triggerAt = -50;
        var triggerHeight = (fadeDivHeight + fadeDivHeight2 + fadeDivHeight3 + fadeDivHeight4 + fadeDivHeight5 + fadeDivHeight6 + fadeDivHeight7 + fadeDivHeight8 + fadeDivHeight9 + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.about-digiset-content').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.about-digiset-content");
        }
    });

    $(window).on("scroll.about-digiset-content-2",
    function () {
        var topDivHeight = $(".hero-content").height();
        var fadeDivHeight = $(".homepage-mockup").height();
        var fadeDivHeight2 = $(".feature-text-fade-1").height();
        var fadeDivHeight3 = $(".feature-text-fade-2").height();
        var fadeDivHeight4 = $(".feature-text-fade-3").height();
        var fadeDivHeight5 = $(".homepage-mockup-2").height();
        var fadeDivHeight6 = $(".feature-text-fade-4").height();
        var fadeDivHeight7 = $(".feature-text-fade-5").height();
        var fadeDivHeight8 = $(".feature-text-fade-6").height();
        var fadeDivHeight9 = $(".pricing-content").height();
        var fadeDivHeight10 = $(".about-digiset-content").height();
        var viewPortSize = $(this).height();

        var triggerAt = -50;
        var triggerHeight = (fadeDivHeight + fadeDivHeight2 + fadeDivHeight3 + fadeDivHeight4 + fadeDivHeight5 + fadeDivHeight6 + fadeDivHeight7 + fadeDivHeight8 + fadeDivHeight9 + fadeDivHeight10 + topDivHeight - viewPortSize) + triggerAt;

        if ($(window).scrollTop() >= triggerHeight) {
            $('.about-digiset-content-2').css('visibility', 'visible').hide().fadeIn(1000);
            $(this).off("scroll.about-digiset-content-2");
        }
    });

}

function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 4000);

