// Get the modal
var modal = document.getElementById('modal_1');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal__close")[0];

// When the user clicks the button, open the modal 
function modal_action(title, text, image) {
    var content_title = document.getElementById("modal__title");
    var content_text = document.getElementById("modal__text");
    var content_image = document.getElementById("modal__image");

    content_title.innerHTML = title;
    content_text.innerHTML = text;
    content_image.src = image;

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//animation scroll navigation
$(window).scroll(function () {
	var wd = $(window).width()
    var sc = $(window).scrollTop()
		if (sc > 60 && wd >= 769) {
            $(".nav").addClass("nav_scroll")
            $(".nav__logo").css("display","none")
            $(".nav__logo_s").css("display","block")
            $(".nav").css("padding","10px 10%")
		} 
		else {
            if (wd >= 769) {
                $(".nav").removeClass("nav_scroll")
                $(".nav__logo_s").css("display","none")
                $(".nav__logo").css("display","block")
                $(".nav").css("padding","20px 10%")
            }
		}
	
});

$(document).ready(function(){
	$('.nav__toggle').click(function(){
		$(this).toggleClass('open');
	});
});

$(function() {
    $nav = $('.nav__list');
    $logo = $('.nav__logo');
    $logo_s = $(".nav__logo_s");

    $('.nav__toggle').click(function() {
        $nav.slideToggle();
    });

    $(window).resize(function() {
        if ( $(window).width() >= 769 ) {
            $nav.show();
        } else {
            if($(window).width() < 769) {
                $nav.hide();
            }
        }
    });

});
