$(document).ready(function(){
 
	var Random = Math.floor(Math.random()* 120) + 19;

	$("#targetNumb").text(Random);

	console.log(targetNumb);
	
	
	var redNumber = Math.floor(Math.random()*12);
	var blueNumber = Math.floor(Math.random()*12);
	var greenNumber = Math.floor(Math.random()*12);
	var purpleNumber = Math.floor(Math.random()*12);


	$("#redButton").attr('value', redNumber);
	$("#blueButton").attr('value', blueNumber);
	$("#greenButton").attr('value', greenNumber);
	$("#purpleButton").attr('value', purpleNumber);

	var totalScore = 0;
	var wins = 0;
	var losses = 0;

	$("#wins").text(wins);
	$("#losses").text(losses);
	

	function reset(){
	var Random = Math.floor(Math.random()* 120) + 19;

	$("#targetNumb").text(Random);

	console.log(targetNumb);
	
	
	var redNumber = Math.floor(Math.random()*12);
	var blueNumber = Math.floor(Math.random()*12);
	var greenNumber = Math.floor(Math.random()*12);
	var purpleNumber = Math.floor(Math.random()*12);


	$("#redButton").attr('value', redNumber);
	$("#blueButton").attr('value', blueNumber);
	$("#greenButton").attr('value', greenNumber);
	$("#purpleButton").attr('value', purpleNumber);

	var totalScore = 0;

	$("#wins").text(wins);
	$("#losses").text(losses);
	}


	function winner(){
		
	}
	

	$('.crystal-button').click(function(){

		console.log($(this).attr('value'));

	});

});