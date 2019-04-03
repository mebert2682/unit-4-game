
  
  var wins = 0; 
  var losses = 0;
  var randomNumber = Math.round(Math.random() * 100) + 1;
  var crystalOne = Math.round(Math.random() * 25) + 1;
  var crystalTwo= Math.round(Math.random() * 25) + 1;
  var crystalThree = Math.round(Math.random() * 25) + 1;
  var crystalFour = Math.round(Math.random() * 25) + 1;

  console.log(randomNumber, wins, losses, crystalOne, crystalTwo, crystalThree, crystalFour);

  

  $("#random-number").html(randomNumber);
  $(".wins").html(wins);
  $(".losses").html(losses);
  $("#crystal-1").html(crystalOne);
  $("#crystal-2").html(crystalTwo);
  $("#crystal-3").html(crystalThree);
  $("#crystal-4").html(crystalFour);

  console.log(randomNumber, wins, losses, crystalOne, crystalTwo, crystalThree, crystalFour);



















