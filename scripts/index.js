// title animation
words = ["Dummy", "Dev", "Filmer", "Human", "Creator", "Designer"]
$(document).ready(function () {
    let i = 0;
    setInterval(function () {
        if (i >= words.length - 1) {
            i = 0
        }
        $("#title h1").fadeOut(function () {
            $(this).text(words[i])
        }).fadeIn();
        i++;
    }, 5000)
})

// colored text
$(".red, .blue, .green, .gold, .pink").hover(function () {
    $(this).css("color", "#B6BBBF");
})

//after getting to work, change colors
$(window).scroll(function () {
    if ($(window).scrollTop() > $("work").offset().top) {
        $(".red, .blue, .green, .gold, .pink").css("color", "#B6BBBF");
    }
    if ($(window).scrollTop() > $("#about").offset().top) {
        $("#sideNav").fadeIn().css("display", "flex");
    } else {
        $("#sideNav").fadeOut();
    }
});

// hero img hover
$(".piece .hero").mouseenter(function () {
    if ($(this).parent().parent().find(".hidden").css("opacity") == 0) {
        $(this).find("img").stop().fadeTo(.5, .75);
    };
    $(".piece .hero").mouseleave(function () {
        $(this).find("img").stop().fadeTo(.5, 1);
    })
});

//design, show images
$(".piece .hero").click(function () {
    if ($(this).parent().parent().find(".hidden").css("opacity") != 0) {
        $(this).parent().parent().find(".hidden").fadeTo(250, 0).animate({
            "height": 0
        });
    } else {
        $(this).find("img").stop().fadeTo(.5, 1);
        $(this).parent().parent().find(".hidden").fadeTo(250, 1).css("height", "auto");
        $('html, body').animate({
            scrollTop: $(this).parent().find(".description").offset().top
        }, 500)
    }
});

// expand smaller image
$(".hidden img").click(function () {
    $('html, body').animate({
        scrollTop: $(this).parent().parent().parent().find(".hero").offset().top - 100
    }, 250)
    let temp = $(this).parent().parent().parent().find(".hero img").attr("src")
    $(this).parent().parent().parent().find(".hero img").attr("src", this.src);
    $(this).attr("src", temp)
});

//scroll
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

//toggle night mode
$("#toggle").click(function () {
    $("body").css("background-color", "black");
    $(".tellMeMore").css("background-color", "white");
    $(".tellMeMore").css("color", "black");
    $("body").css("color", "white");
    $("a").css("color", "white");
    $("#toggle").fadeOut();
});

// open link diologue
$(".project").click(function () {
    if (this.id == "shred") {
        $("#warning-link").attr("href", "https://www.shredsf.com/")
    } else if (this.id == "primo") {
        $("#warning-link").attr("href", "https://www.primoangeli.com/")
    } else if (this.id == "mulder") {
        $("#warning-link").attr("href", "http://www.mulderdesign.com/")
    }
    $("modal").fadeIn().css("display", "flex")
});

// close function
$(".no, .yes").click(function () {
    $("modal").fadeOut()
})