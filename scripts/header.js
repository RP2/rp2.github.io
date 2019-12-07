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