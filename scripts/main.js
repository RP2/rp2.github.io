//header parallax scroll effect
$(window).scroll(function () {
    var ws = $(window).scrollTop();
    $('#background').css({
        'transform': `translate(0px, ${ws / 2}px)`
    });
    $('#middle').css({
        'transform': `translate(0px, ${ws / 2.5}px)`
    });
    $('#title').css({
        'transform': `translate(0px, ${ws / 4}px)`
    });
    $('#foreground').css({
        'transform': `translate(0px, ${ws / 7}px)`
    });
});

//about hover video background
$("#riley, #bay-area").hover(function(){
	$("#about-video").fadeToggle("slow")
});

// click link with hash scrolls to div with matching id
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
					left: target.offset().left,
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