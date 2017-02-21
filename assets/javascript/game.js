$(document).ready(function() {

var randomNumber;						// Number the user must match to win
var wins = 0;							// Total wins
var losses = 0;							// Total Losses
var totalCollect = 0;					// Total crystal collected in single game
var showTotal = $('#userTotal');		// Displays totalCollect
var totalWins = $('#totalWins');		// Displays wins
var totalLosses = $('#totalLosses');	// Displays losses

// Display total wins/losses and choose random number user must match
function winLoss() {
	randomNumber = Math.floor(Math.random() * (85 - 30 + 1)) + 30;
	$('#matchNumber').html(randomNumber);
	totalWins.html('Wins: ' + wins);
	totalLosses.html('Losses: ' + losses);
	console.log(randomNumber);
}

winLoss();

// Set the number the player must match and display the player's total collected
function showGuess() {
	showTotal.html(totalCollect);
}

showGuess();

// Assign random values to crystal images
function value() {
	$('.crystal1').val(Math.floor(Math.random() * (7 - 1 + 1) + 1))
	$('.crystal2').val(Math.floor(Math.random() * (10 - 3 + 1) + 3))
	$('.crystal3').val(Math.floor(Math.random() * (7 - 1 + 1) + 1))
	$('.crystal4').val(Math.floor(Math.random() * (10 - 3 + 1) + 3))
}

value();

// Create variables to store random crystal values
var crystal1 = $('.crystal1');
var crystal2 = $('.crystal2');
var crystal3 = $('.crystal3');
var crystal4 = $('.crystal4');	

// Click functions for each crystal
$('.crystal1').on('click', function() {
	// Adds crystal value to totalCollect
	totalCollect += Number(crystal1.val());
	showGuess();
	// Checks to see if user won
	if (totalCollect === randomNumber) {
		alert('YOU ARE THE ULTIMATE CRYSTAL COLLECTOR! SEE YOU AT THE LOCAL TAVERN!');
		wins++;
		totalCollect = 0;
		winLoss();
		showGuess();
		value();
	// Checks to see if user lost
	} else if (totalCollect > randomNumber) {
		alert('You have FAILED your mission! SAD! FAKE CRYSTAL COLLECTOR!');
		losses++;
		totalCollect = 0;
		winLoss();
		showGuess();
		value();
	}
})

$('.crystal2').on('click', function() {
	// Adds crystal value to totalCollect
	totalCollect += Number(crystal2.val());
	showGuess();
	// Checks to see if user won
	if (totalCollect === randomNumber) {
		alert('YOU ARE THE ULTIMATE CRYSTAL COLLECTOR! SEE YOU AT THE LOCAL TAVERN!');
		wins++;
		totalCollect = 0;
		winLoss();
		showGuess();
		value();
	// Checks to see if user lost
	} else if (totalCollect > randomNumber) {
		alert('You have FAILED your mission! SAD! FAKE CRYSTAL COLLECTOR!');
		losses++;
		totalCollect = 0;
		winLoss();
		showGuess();
		value();
	}
})

$('.crystal3').on('click', function() {
	// Adds crystal value to totalCollect
	totalCollect += Number(crystal3.val());
	showGuess();
	// Checks to see if user won
	if (totalCollect === randomNumber) {
		alert('YOU ARE THE ULTIMATE CRYSTAL COLLECTOR! SEE YOU AT THE LOCAL TAVERN!');
		wins++;
		totalCollect = 0;
		winLoss();
		showGuess();
		value();
	// Checks to see if user lost
	} else if (totalCollect > randomNumber) {
		alert('You have FAILED your mission! SAD! FAKE CRYSTAL COLLECTOR!');
		losses++;
		totalCollect = 0;
		winLoss();
		showGuess();
		value();
	}
})

$('.crystal4').on('click', function() {
	// Adds crystal value to totalCollect
	totalCollect += Number(crystal4.val());
	showGuess();
	// Checks to see if user won
	if (totalCollect === randomNumber) {
		alert('YOU ARE THE ULTIMATE CRYSTAL COLLECTOR! SEE YOU AT THE LOCAL TAVERN!');
		wins++;
		totalCollect = 0;
		winLoss();
		showGuess();
		value();
	// Checks to see if user lost
	} else if (totalCollect > randomNumber) {
		alert('You have FAILED your mission! SAD! FAKE CRYSTAL COLLECTOR!');
		losses++;
		totalCollect = 0;
		winLoss();
		showGuess();
		value();
	}
})

});