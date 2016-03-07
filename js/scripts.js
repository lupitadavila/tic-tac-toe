
var	player = 0; // Player 1 = 0, Player 2 = 1

$('.box').click(function(){
	box = $(this); 
	var state = isMarked(box); //
	
	if(state == 0){
		changeBox(box, player);
	}else{
	
		// alert
		window.alert("Please select another box.");
	}
}
);

function isMarked(box){
	if( box.hasClass('x') || box.hasClass('circle') ){
		return 1;
	}else{
		return 0;
	}
}

function changeBox(box, player){
	
	if(player == 0){
		box.addClass('x');
		player = 1;
	} else{
		box.addClass('circle');
		player = 0;
	}
}
