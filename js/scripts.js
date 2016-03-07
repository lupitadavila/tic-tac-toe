// ----------------------------
// jQuery Tic Tac Toe Game
// by Lupita Davila
// www.lupitadavila.com
// ----------------------------

	var player = 0; // Player 1 = 0, Player 2 = 1

$('.box').click(function(){
	box = $(this); 
	var state = isMarked(box); //
	
	if(state == 0){
		player = changeBox(box, player); // Changing player
	}else{
	
		// alerting user to choose a box
		window.alert("Please select another box.");
	}
	
	
}
);

// Reset the game
$('#reset').click(function(){
	resetGame();
}
);

function resetGame(){
	$('td').removeClass('x circle');
}
// Check if the box is marked
function isMarked(box){
	if( box.hasClass('x') || box.hasClass('circle') ){
		return 1;
	}else{
		return 0;
	}
}
// Mark box and change player
function changeBox(box, player){
	var nextPlayer;
	
	if(player == 0){
		box.addClass('x');
		nextPlayer= 1;
	} else{
		box.addClass('circle');
		nextPlayer = 0;
	}
	
	if(isWinner(player)){
			window.alert("Player " + (player+1)+ " wins!");
			resetGame();
			player = 0;
	}
	
	return nextPlayer;
}

// Check if player won
function isWinner(player){
	var pattern;
	
	if (player == 0){
		pattern = "x";
		
	}else{
		pattern = "circle";
	}
	
	if( $('#box1').hasClass(pattern) && $('#box2').hasClass(pattern) && $('#box3').hasClass(pattern)){
		return true;
	}else if( $('#box4').hasClass(pattern) && $('#box5').hasClass(pattern) && $('#box6').hasClass(pattern)){
		return true;
	}else if($('#box7').hasClass(pattern) && $('#box8').hasClass(pattern) && $('#box9').hasClass(pattern)){
		return true;
	}else if($('#box1').hasClass(pattern) && $('#box4').hasClass(pattern) && $('#box7').hasClass(pattern)){
		return true;
	}else if($('#box2').hasClass(pattern) && $('#box5').hasClass(pattern) && $('#box8').hasClass(pattern)){
		return true;
	}else if($('#box3').hasClass(pattern) && $('#box6').hasClass(pattern) && $('#box9').hasClass(pattern)){
		return true;
	}else if($('#box1').hasClass(pattern) && $('#box5').hasClass(pattern) && $('#box9').hasClass(pattern)){
		return true;
	}else if($('#box3').hasClass(pattern) && $('#box5').hasClass(pattern) && $('#box7').hasClass(pattern)){
		return true;
	}else{
		return false;
	}
	
	
	
}
