$(document).ready(function () {

	
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var Random = Math.floor(Math.random() * 120) + 19;
	var redNumber = Math.floor(Math.random() * 12);
	var blueNumber = Math.floor(Math.random() * 12);
	var greenNumber = Math.floor(Math.random() * 12);
	var purpleNumber = Math.floor(Math.random() * 12);


		function shuffleValues() {
		 redNumber = Math.floor(Math.random() * 12);
		 blueNumber = Math.floor(Math.random() * 12);
		 greenNumber = Math.floor(Math.random() * 12);
		 purpleNumber = Math.floor(Math.random() * 12);

		}


		function newGame(){
		if(totalScore === Random){
			wins++;
			$('#correctGuess').text(wins);
			Random = Math.floor(Math.random() * 120) + 19;
			$("#targetNumb").text(Random);
			totalScore = 0;
			$("#totalScore").text(totalScore);
			shuffleValues();
		} else if(totalScore > Random){
			losses++;
			$("#incorrectGuess").text(losses);
			Random = Math.floor(Math.random() * 120) + 19;
			$("#targetNumb").text(Random);
			totalScore = 0;
			$("#totalScore").text(totalScore);
			shuffleValues();

		}}

		$("#targetNumb").text(Random);

	
	
		$('#redButton').on('click', function(){
			totalScore += redNumber;
			$("#totalScore").text(totalScore);
			newGame();
		});

		$('#blueButton').on('click', function(){
			totalScore += blueNumber;
			$("#totalScore").text(totalScore);
			newGame();
		});

		$('#greenButton').on('click', function(){
			totalScore += greenNumber;
			$("#totalScore").text(totalScore);
			newGame();
		});

		$('#purpleButton').on('click', function(){
			totalScore += purpleNumber;
			$("#totalScore").text(totalScore);
			newGame();
		});
		

	
	
	});

			