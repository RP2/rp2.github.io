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
//expand filter
function filter() {
    $("#close").toggleClass("rotate");
    $("#list").fadeToggle();
};

//reset filter
function resetFilter() {
    $("#list #dev, #list #design, #list #video").fadeTo("fast", 1, "swing");
    $("#workList .dev, #workList .design, #workList .video").fadeTo("fast", 1, "swing")
    filter()
}

//call filter and reset filter function
$("#filter").click(function () {
    if ($("#filter #close").hasClass("rotate")) {
        resetFilter()
    } else {
        filter()
    }
});
//close filters when hovering list
$("#workList").mouseenter(function () {
    if ($("#filter #close").hasClass("rotate")) {
        filter()
    }
});
//scroll hides filter if expanded
$(".container").scroll(function () {
    if ($("#filter #close").hasClass("rotate")) {
        resetFilter()
    }
});
//toggle filter opacity
$("#dev, #design, #video").click(function () {
    $("#dev, #design, #video").fadeTo("slow", .5, "swing")
    $(".dev, .design, .video").fadeTo("slow", .5, "swing")
    if (this.id == "dev") {
        $("#dev").fadeTo("slow", 1, "swing")
        $(".dev").fadeTo("slow", 1, "swing")
    } else if (this.id == "design") {
        $("#design").fadeTo("slow", 1, "swing")
        $(".design").fadeTo("slow", 1, "swing")
    } else if (this.id == "video") {

        $("#video").fadeTo("slow", 1, "swing")
        $(".video").fadeTo("slow", 1, "swing")
    }
});
//show preview
$("#workList li a").on("mouseenter mouseleave", function () {
    switch (this.id) {
        case "brutal":
            $("#brutal-img").fadeToggle(75, "swing")
            break;
        case "music":
            $("#music-img").fadeToggle(75, "swing")
            break;
        case "primo":
            $("#primo-img").fadeToggle(75, "swing")
            break;
        case "shred":
            $("#shred-img").fadeToggle(75, "swing")
            break;
        case "mulder":
            $("#mulder-img").fadeToggle(75, "swing")
            break;
        case "egweb":
            $("#egweb-img").fadeToggle(75, "swing")
            break;
        case "anime":
            $("#anime-img").fadeToggle(75, "swing")
            break;
        case "rdesign":
            $("#rdesign-img").fadeToggle(75, "swing")
            break;
        case "rogue":
            $("#rogue-img").fadeToggle(75, "swing")
            break;
        case "resn":
            $("#resn-img").fadeToggle(75, "swing")
            break;
        case "98":
            $("#98-img").fadeToggle(75, "swing")
            break;
        case "memory":
            $("#memory-img").fadeToggle(75, "swing")
            break;
        case "catalyst":
            $("#catalyst-img").fadeToggle(75, "swing")
            break;
    }
});

// //show bigger image
// $("content img").click(function () {
//     $("modal").fadeIn().css("display", "flex")
//     $("modal img").attr("src", $(this).attr("src"))
// })

// // close function
// $(".close").click(function () {
//     $("modal").fadeOut()
// })

//hover key words image follows mouse
$(".highlighted").on("mouseenter mouseleave", function () {
    $(".key-image").fadeToggle(75, "swing")
    $(document).mousemove(function (e) {
        $(".key-image").css({
            left: e.pageX,
            top: e.pageY,
        });
    });
});