var slideIndex = 1;
showSlides(slideIndex);
window.setInterval(function(){
  showSlides(slideIndex);
}, 5000);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var slideshow_text = document.getElementsByClassName("slideshow-text");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slideshow_text[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slideshow_text[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
    slideIndex ++;
}

$("#hamburger-icon").click(function(){
    if ($('#navbar-items-buttons-minimized').css('display') === "none")
    {
        $('#navbar-items-buttons-minimized').show();
        $('#navbar').height('100%');
    }
    else
    {
        $('#navbar-items-buttons-minimized').hide();
        $('#navbar').height(92);
    }
})

function resize(){
    let latime_pagina = $(window).width();
    if ( latime_pagina > 1200 ){
        $("#slideshow-container").width(1110);
        $("#slideshow-container").height(525);
        $(".slideshow-images").width(525);
        $(".slideshow-images").css({"float": "left"});
        $(".slideshow-images").css({"margin-left": "0"});
        $(".slideshow-images").css({"margin-right": "0"});
        $(".slideshow-text").width(555);        
        $(".slideshow-text").css({"float": "left"});
    }
    else if ( latime_pagina > 950 && latime_pagina <= 1200 ){
        $("#slideshow-container").width(910);
        $("#slideshow-container").height(525);
        $(".slideshow-images").width(425);
        $(".slideshow-images").css({"float": "left"});
        $(".slideshow-images").css({"margin-left": "0"});
        $(".slideshow-images").css({"margin-right": "0"});
        $(".slideshow-text").width(455);
        $(".slideshow-text").css({"float": "left"});
    }
    else if ( latime_pagina <= 950 ){
        $("#slideshow-container").width("100%");
        $("#slideshow-container").height(900);
        $(".anunt-evenimente").width("100%");
        $(".anunt-evenimente").height(850);
        $(".slideshow-images").css({"float": "none"});
        $(".slideshow-images").width("80%");
        $(".slideshow-images").height(525);
        $(".slideshow-images").css({"margin-left": "10%"});
        $(".slideshow-images").css({"margin-right": "10%"});
        $(".anunt-evenimente-imagine").css({"float": "top"});
        $(".anunt-evenimente-imagine").width("80%");
        $(".anunt-evenimente-imagine").height(400);
        $(".anunt-evenimente-imagine").css({"margin-left": "10%"});
        $(".anunt-evenimente-imagine").css({"margin-right": "10%"});
        $(".slideshow-text").height(300);
        $(".slideshow-text").css({"float": "none"});
        $(".slideshow-text").css({"margin": "30px auto 0"});
        $(".anunt-evenimente-petreceri").height(400);
        $(".anunt-evenimente-petreceri").css({"float": "none"});
        $(".anunt-evenimente-petreceri").css({"margin": "30px auto 0"});
    }
}

$(window).resize(function(){
    resize();
});

resize();