
var slides = $('.featured-text'); 

$('.left-arrow').click(function(){
	// Finish previous animations
	// Load other slides in background
    slideRight(slides);
});

$('.right-arrow').click(function(){
    slideLeft(slides);
});


function slideLeft(slides){
	$(slides[0]).animate({left: '-100%'});
	$(slides[1]).animate({right: '0px'});

	var bgColor = 'rgba(' + $(slides[1]).attr('data-bgcolor') + ',0.55)'; 
	var bgImage = 'url("images/' + $(slides[1]).attr('data-bgimage') + '")'; 
	
	$('.overlay').css({
  		transition : 'background-color 1s ease-in-out',
  		"background-color": bgColor
	});

	$('.featured').css({
  		"background-image": bgImage
	});

	slides.push(slides.shift());

	$(slides[1]).css({right: '-100%', left: 'auto'}); // Put next in line offscreen to right
	$(slides).last().css({left: '-100%', right: 'auto'}); // Put last in line offscreen to left

}

function slideRight(slides){
	$(slides[0]).animate({right: '-100%'});
	$(slides).last().animate({left: '0px'});

	var bgColor = 'rgba(' + $(slides).last().attr('data-bgcolor') + ',0.75)'; 
	var bgImage = 'url("images/' + $(slides).last().attr('data-bgimage') + '")'; 
	
	$('.overlay').css({
  		transition : 'background-color 1s ease-in-out',
  		"background-color": bgColor
	});

	$('.featured').css({
  		"background-image": bgImage
	});
	
	slides.unshift(slides.pop());

	$(slides[1]).css({right: '-100%', left: 'auto'}); // Put next in line offscreen to right
	$(slides).last().css({left: '-100%', right: 'auto'}); // Put last in line offscreen to left
}

(function( $ ) {
    $.fn.pop = function() {
        var top = this.get(-1);
        this.splice(this.length-1,1);
        return top;
    };

    $.fn.shift = function() {
        var bottom = this.get(0);
        this.splice(0,1);
        return bottom;
    };
    $.fn.unshift = function(popped) {
        this.splice(0, 0, popped);
        return this;
    };
})( jQuery );