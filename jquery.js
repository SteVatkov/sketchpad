var count = 0;
var size = 32;

function createBox() {
	size = prompt('Enter a size');

	var boxSize = $('.wrapper').width()/size;

	for(var i=0; i < size * size; i++){
		$('.wrapper').append('<div class="box"></div>');
	}

	$('.box').css('width', boxSize);
	$('.box').css('height', boxSize);

}

function hoverColor(){

	$('.box').on("mouseenter", function(){
		
		
		$(this).fadeTo(100,0);
		$(this).mouseleave(function(){
			$(this).fadeTo(400,1);
		});

		$(this).on("click",function(){
			$(this).toggleClass("boxSelect");

		});
	});

}


$(document).ready(function(){

	createBox();
	hoverColor();
});