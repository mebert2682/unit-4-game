
  
  var wins = 0; 
  var losses = 0;
  var randomNumber = Math.round(Math.random() * 100) + 25;
  var actualScore = 0;
  


  console.log(randomNumber, wins, losses, actualScore);

  
  $("#random-number").html(randomNumber);
  $(".wins").text("Wins: " + wins);
  $(".losses").text("Losses: " + losses);
  $("#actual-score").text(actualScore);
  


  console.log(randomNumber, wins, losses, actualScore);

  $("#random-number").text(randomNumber);


  $("document").ready(function() {
  
  $("#crystal-1").on("click", function() {

    actualScore += 10;
    $("#actual-score").html(actualScore);

    if (actualScore === randomNumber) {
      wins++;
      $(".wins").html("Wins: " + wins);
      randomNumber = Math.round(Math.random() * 100) + 25;
      $("#random-number").text(randomNumber);
      alert("You Win!!!");
      actualScore = 0;
      $("#actual-score").html(actualScore);

    }

    if (actualScore > randomNumber) {
      alert("You Lose!!!")
      losses++;
      $(".losses").html("Lose: " + losses);
      randomNumber = Math.round(Math.random() * 100) + 25;
      $("#random-number").text(randomNumber);
      actualScore = 0;
      $("#actual-score").html(actualScore);
      
    }

    
    console.log(actualScore);

  });
 
  
  $("#crystal-2").on("click", function() {

    actualScore += 5;
    $("#actual-score").html(actualScore);

    if (actualScore === randomNumber) {
      alert("You Win!!!");
      wins++;
      $(".wins").html("Wins: " + wins);
      randomNumber = Math.round(Math.random() * 100) + 25;
      $("#random-number").text(randomNumber);
      actualScore = 0;

      $("#actual-score").html(actualScore);
    }

    if (actualScore > randomNumber) {
      alert("You Lose!!!")
      losses++;
      $(".losses").html("Lose: " + losses);
      randomNumber = Math.round(Math.random() * 100) + 25;
      $("#random-number").text(randomNumber);
      actualScore = 0;
      $("#actual-score").html(actualScore);
      
    }
      
    console.log(actualScore);

  });

  $("#crystal-3").on("click", function() {

    actualScore += 3;
    $("#actual-score").html(actualScore);

    if (actualScore === randomNumber) {
      alert("You Win!!!");
      wins++;
      $(".wins").html("Wins: " + wins);
      randomNumber = Math.round(Math.random() * 100) + 25;
      $("#random-number").text(randomNumber);
      actualScore = 0;

      $("#actual-score").html(actualScore);
    }

    if (actualScore > randomNumber) {
      alert("You Lose!!!")
      losses++;
      $(".losses").html("Lose: " + losses);
      randomNumber = Math.round(Math.random() * 100) + 25;
      $("#random-number").text(randomNumber);
      actualScore = 0;

      $("#actual-score").html(actualScore);
      
    }
      
    
    console.log(actualScore);

  });

  $("#crystal-4").on("click", function() {

    actualScore += 1;
    $("#actual-score").html(actualScore);
    
    if (actualScore === randomNumber) {
        alert("You Win!!!");
        wins++;
        $(".wins").html("Wins: " + wins);
        randomNumber = Math.round(Math.random() * 100) + 25;
        $("#random-number").text(randomNumber);
        actualScore = 0;
        $("#actual-score").html(actualScore);
      }
  
      if (actualScore > randomNumber) {
        alert("You Lose!!!")
        losses++;
        $(".losses").html("Lose: " + losses);
        randomNumber = Math.round(Math.random() * 100) + 25;
        $("#random-number").text(randomNumber);
        actualScore = 0;
        $("#actual-score").html(actualScore);
        
      }
      
  });
  

});
















