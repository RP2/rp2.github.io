// title animation
words = ["Dummy", "Dev", "Editor", "Human", "Creator", "Designer"]
$(document).ready(function() {
    let i = 0;
    setInterval (function() {
        if (i >= words.length - 1){
            i = 0
        }
        $("#title h1").fadeOut(function() {
            $(this).text(words[i])
          }).fadeIn();
        i++;
    }, 5000)
})

// close function
$(".close").click(function(){
    $("modal").fadeOut()
})

// colored text

$(".red, .blue, .green, .gold, .pink").hover(function(){
    if ($(this).hasClass("gold")){
        $(this).css("color", "gold");
    } else if ($(this).hasClass("red")){
        $(this).css("color", "red");
    } else if ($(this).hasClass("blue")){
        $(this).css("color", "blue");
    } else if ($(this).hasClass("green")){
        $(this).css("color", "green");
    } else if ($(this).hasClass("pink")){
        $(this).css("color", "pink");
    }
})

//after getting to work, change colors

$(window).scroll(function() {
    if ( $(window).scrollTop() > $("work").offset().top){
        $(".gold").css("color", "gold");
        $(".red").css("color", "red");
        $(".blue").css("color", "blue");
        $(".green").css("color", "green");
        $(".pink").css("color", "pink");
    }
});

// hero img hover

$(".piece .hero").mouseenter(function(){
    if ($(this).parent().find(".hidden").css("opacity") == 0){
        $(this).find("img").stop().fadeTo(.5, .75);
    };
    $(".piece .hero").mouseleave(function(){
        $(this).find("img").stop().fadeTo(.5, 1);
    })
});

//design, show images

$(".piece .hero").click(function(){
    if ($(this).parent().find(".hidden").css("opacity") != 0){
        $(this).parent().find(".hidden").fadeTo(250,0).animate({"height":0});
    } else {
        $(this).find("img").stop().fadeTo(.5, 1);
        $(this).parent().find(".hidden").fadeTo(250,1).css("height", "auto");
        $('html, body').animate({scrollTop: $(this).parent().find(".description").offset().top}, 500)
    }
});

// expand smaller image

$(".hidden img").click(function(){
    $('html, body').animate({scrollTop: $(this).parent().parent().parent().find(".hero").offset().top - 100}, 250)
    let temp = $(this).parent().parent().parent().find(".hero img").attr("src")
    $(this).parent().parent().parent().find(".hero img").attr("src", this.src);
    $(this).attr("src", temp)
});