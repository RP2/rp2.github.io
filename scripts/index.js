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

$(window).scroll(function() {
    if ( $(window).scrollTop() > $("work").offset().top){
        $(".gold").css("color", "gold");
        $(".red").css("color", "red");
        $(".blue").css("color", "blue");
        $(".green").css("color", "green");
        $(".pink").css("color", "pink");
    }
});