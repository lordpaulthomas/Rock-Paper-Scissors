let player_one_choice;
let player_two_choice;
let playerOneWins = 0;
let playerTwoWins = 0;
$("#root").addClass("container text-center")
$scores = $('<div>');
$scores.attr("id", "scores")
$playerOneScore = $('<h4>');
$playerTwoScore = $('<h4>');
$playerOneScore.attr("id", "player-one-score");
$playerTwoScore.attr("id", "player-two-score");
$playerOneScore.text(`Player One wins: ${playerOneWins}`);
$playerTwoScore.text(`Player Two wins: ${playerTwoWins}`);
$('#root').append($scores.append($playerOneScore, $playerTwoScore));
// Start Screen
$startScreen = $('<div>');
$startScreen.attr('id', 'start-screen');
$('#root').append($startScreen);
// Title
$title = $('<h1>');
$title.attr('id', 'title');
$title.text('Rock Paper Scissors');
// Instructions
$instructions = $('<div>');
$instructions.html(
  '<h5>This is a two player game.</h5><h5>Press the start button to begin.</h5><h5>Players then take turns choosing what to throw</h5>'
);
$instructions.attr('id', 'instructions');
$('#start-screen').append($title, $instructions);
$startButton = $('<button>');
$startButton.attr('id', 'start-button');
$startButton.attr('class', 'btn btn-primary');
$startButton.text('Click her to start');

// Player 1 Screen
// Main Div
$playerOneScreen = $('<div>');
// Player 1 Player one Title
$playerOneScreenTitle = $('<h1>');
$playerOneScreenTitle.attr('id', 'player-one-screen-title');
$playerOneScreenTitle.text('Player One Choose:');
$playerOneScreen.append($playerOneScreenTitle);

// Player 1 Rock Button
$playerOneRockButton = $('<button>');
$playerOneRockButton.text('ROCK');
$playerOneRockButton.attr('id', 'rock');
$playerOneRockButton.attr('value', 'rock');
$playerOneRockButton.addClass('btn btn-info');

// Player 1 Scissor Button
$playerOneScissorButton = $('<button>');
$playerOneScissorButton.attr('id', 'scissors');
$playerOneScissorButton.attr('value', 'scissors');
$playerOneScissorButton.text('SCISSORS');
$playerOneScissorButton.addClass('btn btn-success');
// Player 1 Paper Button
$playerOnePaperButton = $('<button>');
$playerOnePaperButton.text('PAPER');
$playerOnePaperButton.attr('id', 'paper');
$playerOnePaperButton.attr('value', 'paper');
$playerOnePaperButton.addClass('btn btn-warning');
// Append to Main Div
$playerOneScreen.append(
  $playerOneRockButton,
  $playerOneScissorButton,
  $playerOnePaperButton
);
$('#root').append($playerOneScreen);
$playerOneScreen.hide();

// Player Two Screen
// Main Div
$playerTwoScreen = $('<div>');
// Player Two Title
$playerTwoScreenTitle = $('<h1>');
$playerTwoScreenTitle.attr('id', 'player-one-screen-title');
$playerTwoScreenTitle.text('Player One Choose:');
$playerTwoScreen.append($playerTwoScreenTitle);

// Player Two Rock Button
$playerTwoRockButton = $('<button>');
$playerTwoRockButton.text('ROCK');
$playerTwoRockButton.attr('id', 'rock');
$playerTwoRockButton.attr('value', 'rock');
$playerTwoRockButton.addClass('btn btn-info');

// Player Two Scissor Button
$playerTwoScissorButton = $('<button>');
$playerTwoScissorButton.attr('id', 'scissors');
$playerTwoScissorButton.attr('value', 'scissors');
$playerTwoScissorButton.text('SCISSORS');
$playerTwoScissorButton.addClass('btn btn-success');
// Player Two Paper Button
$playerTwoPaperButton = $('<button>');
$playerTwoPaperButton.text('PAPER');
$playerTwoPaperButton.attr('id', 'paper');
$playerTwoPaperButton.attr('value', 'paper');
$playerTwoPaperButton.addClass('btn btn-warning');
// Append to Main Div
$playerTwoScreen.append(
  $playerTwoRockButton,
  $playerTwoScissorButton,
  $playerTwoPaperButton
);
$('#root').append($playerTwoScreen);
$playerTwoScreen.hide();

// Waiting Screen
$waitingScreen = $('<div>');
$waitingTitle = $('<h1>');
$waitingTitle.text('Player 2 Click Button to Take Turn');
$waitingButton = $('<button>');
$waitingButton.addClass('btn btn-secondary');
$waitingButton.attr('id', 'waiting-button');
$waitingButton.text('Click here');
$waitingScreen.append($waitingTitle, $waitingButton);
$('#root').append($waitingScreen);
$waitingScreen.hide();

$waitingButton.on('click', () => {
  $playerTwoScreen.show();
  $waitingScreen.hide();
});

// Results Screen
$resultsScreen = $('<div>');
$resultsTitle = $('<h1>');
$resultsTitle.text('And The Winner Is...');
$resultsTitle.attr('id', 'results-title');
$results = $('<h4>');
$playAgain = $('<button>');
$playAgain.text('Play again?');
$playAgain.addClass('btn btn-success');
$('#root').append($resultsScreen.append($resultsTitle, $results, $playAgain));
$resultsScreen.hide();

// Player One Button Actions
$playerOneRockButton.on('click', () => {
  player_one_choice = $playerOneRockButton.val();
  localStorage.clear();
  localStorage.setItem("choice", player_one_choice)
  $playerOneScreen.hide();
  $waitingScreen.show();
});
$playerOneScissorButton.on('click', () => {
  player_one_choice = $playerOneScissorButton.val();
  localStorage.clear();
  localStorage.setItem("choice", player_one_choice)
  $playerOneScreen.hide();
  $waitingScreen.show();
});
$playerOnePaperButton.on('click', () => {
  player_one_choice = $playerOnePaperButton.val();
  localStorage.clear();
  localStorage.setItem("choice", player_one_choice);
  $playerOneScreen.hide();
  $waitingScreen.show();
});
// Player Two Button Actions
$playerTwoRockButton.on('click', () => {
  player_one_choice = localStorage.getItem("choice");
  player_two_choice = $playerTwoRockButton.val();
  $playerTwoScreen.hide();
  $resultsScreen.show();
  if (player_one_choice === player_two_choice) {
    $results.html(
      `<h1>It's a tie!</h1><h3>Player One threw: ${player_one_choice}</h3><h3>Player Two threw: ${player_two_choice}</h3>`
    );
  } else if (player_one_choice === 'paper') {
    playerOneWins++;
    $playerOneScore.text(`Player One wins: ${playerOneWins}`);
    $results.html(
      `<h1>Player One Wins!</h1> <h3> Player One threw: ${player_one_choice}</h3><h3>Player Two threw: ${player_two_choice}</h3>`
    );
  } else {
    playerTwoWins++;
    $playerTwoScore.text(`Player Two wins: ${playerTwoWins}`);
    $results.html(
      `<h1>Player Two Wins!</h1> <h3> Player One threw: ${player_one_choice}</h3><h3>Player Two threw: ${player_two_choice} </h3>`
    );
  }
});
$playerTwoScissorButton.on('click', () => {
  player_one_choice = localStorage.getItem("choice");
  player_two_choice = $playerTwoScissorButton.val();
  $playerTwoScreen.hide();
  $resultsScreen.show();
  if (player_one_choice === player_two_choice) {
    $results.html(
      `<h1>It's a tie!</h1>  <h3>Player One threw: ${player_one_choice}</h3><h3>Player Two threw: ${player_two_choice}</h3>`
    );
  } else if (player_one_choice === 'paper') {
    playerTwoWins++;
    $playerTwoScore.text(`Player Two wins: ${playerTwoWins}`);
    $results.html(
      `<h1>Player Two Wins!</h1><h3>Player One threw: ${player_one_choice}</h3><h3>Player Two threw: ${player_two_choice}</h3>`
    );
  } else {
    playerOneWins++;
    $playerOneScore.text(`Player One wins: ${playerOneWins}`);
    $results.html(
      `<h1>Player One Wins!</h1><h3>Player One threw: ${player_one_choice}</h3><h3>Player Two threw: ${player_two_choice}</h3>`
    );
  }
});
$playerTwoPaperButton.on('click', () => {
  player_one_choice = localStorage.getItem("choice");
  player_two_choice = $playerTwoPaperButton.val();
  $playerTwoScreen.hide();
  $resultsScreen.show();
  if (player_one_choice === player_two_choice) {
    $results.html(
      `<h1>It's a tie!</h1>  <h3>Player One threw: ${player_one_choice}</h3><h3>Player Two threw: ${player_two_choice}</h3>`
    );
  } else if (player_one_choice === 'rock') {
    playerTwoWins++;
    $playerTwoScore.text(`Player Two wins: ${playerTwoWins}`);
    $results.html(
      `<h1>Player Two Wins! <h3>Player One threw: ${player_one_choice}</h3><h3>Player Two threw: ${player_two_choice}</h3>`
    );
  } else {
    playerOneWins++;
    $playerOneScore.text(`Player One wins! ${playerOneWins}`);
    $results.html(
      `<h1>Player One Wins!  <h3>Player One threw: ${player_one_choice}</h3><h3>Player Two threw: ${player_two_choice}</h3>`
    );
  }
});
// Play again Actions
$playAgain.on('click', () => {
  $resultsScreen.hide();
  $startScreen.show();
});
$('#start-screen').append($title, $instructions, $startButton);

$('#start-button').on('click', () => {
  $('#start-screen').hide();
  $playerOneScreen.show();
});
