document.querySelector('button').addEventListener("click",ThrowDice);

function ThrowDice(){

  //Generate 2 random numbers with values between 1 and 6
  var rand1 = Math.random();
  rand1 = rand1*6;
  rand1 = Math.floor(rand1)+1;

  var rand2 = Math.random();
  rand2 = rand2*6;
  rand2 = Math.floor(rand2)+1;

  //Set image src attribute
  document.getElementById("dice1").setAttribute("src",rand1 + ".png");
  document.getElementById("dice2").setAttribute("src",rand2 + ".png");

  //Decide the winner
  var winner = "";
  var goodLuck ="";
  if (rand1 > rand2){
    winner = "The winner is Player 1 😍🎉";
    goodLuck = "Good luck next time Player 2 👌🏼"
    PlayAudio();
  } else if (rand1 < rand2){
    winner = "The winner is Player 2 😍🎉";
    goodLuck = "Good luck next time Player 1 👌🏼"
    PlayAudio();
  } else {
    winner = "You are equal";
  }

  document.querySelector("h3").textContent= winner;
  document.querySelector("h4").textContent= goodLuck;

}

//Paly applause sound
function PlayAudio(){
  var audio = new Audio('applause.mp3');
  audio.play();
}
