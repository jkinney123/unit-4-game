$(document).ready(function () {

	var Random;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var redNumber;
	var blueNumber;
	var greenNumber;
	var purpleNumber;

	function newValues(){
		var Random = Math.floor(Math.random() * 120) + 19;
		var redNumber = Math.floor(Math.random() * 12);
		var blueNumber = Math.floor(Math.random() * 12);
		var greenNumber = Math.floor(Math.random() * 12);
		var purpleNumber = Math.floor(Math.random() * 12);

		console.log(newValues());

	}

	function newGame(){
		newValues();
		totalScore = 0;
		$("#targetNumb").text(Random);
		$("#totalScore").text(totalScore);
		$("#redButton").attr('.crystalButton', redNumber);
		$("#blueButton").attr('.crystalButton', blueNumber);
		$("#greenButton").attr('.crystalButton', greenNumber);
		$("#purpleButton").attr('.crystalButton', purpleNumber);
		$("#wins").text(wins);
		$("#losses").text(losses);

		console.log(newGame());
	}
	
	function winner() {
		wins++;
		$("#wins").text(wins);
		reset();

		console.log(winner());
	}

	function loser() {
		losses++;
		$("#losses").text(losses);
		reset();

		console.log(loser());
	}

	function reset() {
		newGame();
	}

	$(".crystalButton").click(function () {
		if (totalScore >= Random) {
			return;
		}

		var crystalValue = $(this).attr(".crystalButton");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === Random) {
			winner();
		} else if (totalScore > Random) {
			loser();
		}

		console.log(crystalValue);
	
	});
});

			