$(document).ready(function() {

// Create score-keeping variables
var randomNumber = Math.floor(Math.random() * (85 - 30 + 1)) + 30;
var wins = 0;
var losses = 0;
var totalCollect = 0;
var showTotal = $('#userTotal');

// Set the number the player must match and display the player's total collected
$('#matchNumber').html(randomNumber);

function showGuess() {
	showTotal.html(totalCollect);
}

showGuess();

// Assign random values to crystal images
$('.crystal1').val(Math.floor(Math.random() * (7 - 1 + 1) + 1))
$('.crystal2').val(Math.floor(Math.random() * (10 - 3 + 1) + 3))
$('.crystal3').val(Math.floor(Math.random() * (7 - 1 + 1) + 1))
$('.crystal4').val(Math.floor(Math.random() * (10 - 3 + 1) + 3))

// Create variables to store random crystal values
var crystal1 = $('.crystal1');
var crystal2 = $('.crystal2');
var crystal3 = $('.crystal3');
var crystal4 = $('.crystal4');	

// Display crystal values in the console
console.log('Crystal 1 = ' + crystal1.val());
console.log('Crystal 2 = ' + crystal2.val());
console.log('Crystal 3 = ' + crystal3.val());
console.log('Crystal 4 = ' + crystal4.val());


$('.crystal1').on('click', function() {
	totalCollect += Number(crystal1.val());
	showGuess();
	if (totalCollect === randomNumber) {
		alert('YOU ARE THE ULTIMATE CRYSTAL COLLECTOR! SEE YOU AT THE LOCAL TAVERN!');
	} else if (totalCollect > randomNumber) {
		alert('You have FAILED your mission! SAD!')
	}
})

$('.crystal2').on('click', function() {
	totalCollect += Number(crystal2.val());
	showGuess();
	if (totalCollect === randomNumber) {
		alert('YOU ARE THE ULTIMATE CRYSTAL COLLECTOR! SEE YOU AT THE LOCAL TAVERN!');
	} else if (totalCollect > randomNumber) {
		alert('You have FAILED your mission! SAD!')
	}
})

$('.crystal3').on('click', function() {
	totalCollect += Number(crystal3.val());
	showGuess();
	if (totalCollect === randomNumber) {
		alert('YOU ARE THE ULTIMATE CRYSTAL COLLECTOR! SEE YOU AT THE LOCAL TAVERN!');
	} else if (totalCollect > randomNumber) {
		alert('You have FAILED your mission! SAD!')
	}
})

$('.crystal4').on('click', function() {
	totalCollect += Number(crystal4.val());
	showGuess();
	if (totalCollect === randomNumber) {
		alert('YOU ARE THE ULTIMATE CRYSTAL COLLECTOR! SEE YOU AT THE LOCAL TAVERN!');
	} else if (totalCollect > randomNumber) {
		alert('You have FAILED your mission! SAD!')
	}
})

});