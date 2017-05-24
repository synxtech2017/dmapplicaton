$(document).ready(function(){
	$("#carousel-a").carousel({interval: 3000});
// Activate Carousel
$("#carousel-a").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#carousel-a").carousel(1);
});
$(".item1").click(function(){
    $("#carousel-a").carousel(1);
});
$(".item2").click(function(){
    $("#carousel-a").carousel(1);
});
$(".item3").click(function(){
    $("#carousel-a").carousel(1);
});
/*// Enable Carousel Controls
$(".left").click(function(){
    $("#carousel-a").carousel("prev");
});
$(".right").click(function(){
    $("#carousel-a").carousel("next");
});*/

});

$(document).ready(function(){
	$("#carousel-b").carousel({interval: 3000});
// Activate Carousel
$("#carousel-b").carousel();

// Enable Carousel Indicators
/*$(".item").click(function(){
    $("#carousel-b").carousel(1);
});*/

// Enable Carousel Controls
$(".left-b").click(function(){
    $("#carousel-b").carousel("prev");
});
$(".right-b").click(function(){
    $("#carousel-b").carousel("next");
});

});

$(document).ready(function(){
	$("#carousel-c").carousel({interval: 4000});
// Activate Carousel
$("#carousel-c").carousel();

// Enable Carousel Indicators
/*$(".item").click(function(){
    $("#carousel-c").carousel(1);
});*/

// Enable Carousel Controls
$(".left-c").click(function(){
    $("#carousel-c").carousel("prev");
});
$(".right-c").click(function(){
    $("#carousel-c").carousel("next");
});

});

$(document).ready(function(){
	$('#myModal').modal('show');
});


$(document).ready(function(){
	$("#carousel-d").carousel({interval: 5000});
// Activate Carousel
$("#carousel-d").carousel();

/*// Enable Carousel Indicators
$(".item").click(function(){
    $("#carousel-d").carousel(1);
});
*/
// Enable Carousel Controls
$(".left-d").click(function(){
    $("#carousel-d").carousel("prev");
});
$(".right-d").click(function(){
    $("#carousel-d").carousel("next");
});

});


/*stories*/
$(document).ready(function(){
    
$('#right-arrow').click(function(){
    var currentSlide = $('.sld.active');
    var nextSlide = currentSlide.next();
    
    currentSlide.removeClass('active');
    nextSlide.addClass('active');
    
    if(nextSlide.length == 0){
        $('.sld').first().addClass('active');
    }
});

$('#left-arrow').click(function(){
    var currentSlide = $('.sld.active');
    var prevSlide = currentSlide.prev();
    
    currentSlide.removeClass('active');
    prevSlide.addClass('active');
    
    if(prevSlide.length == 0){
        $('.sld').last().addClass('active');
    }
});
});