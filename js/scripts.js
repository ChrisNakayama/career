$(document).ready(function() {
  $("form.formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var dobInput = new Date($("#born").val());
    var cancerInput = $("input:radio[name=cancer]:checked").val();
    var energyColorInput = $("#color").val();
    var crimeInput = $("#crime").val();

    var score = 0;

 

    $(".name").text(nameInput);
    var crimeInputValue = parseInt(crimeInput);
    var millenial = dobInput.getFullYear();
    var r = nameInput.includes("r");

    console.log("Name: " + nameInput); 
    console.log("Year born: " + millenial); 
    console.log("Energy color: " + energyColorInput); 
    console.log("Crime score: " + crimeInputValue); 
    console.log("Score: " + score); 


    //$(".formOne").hide();
    //$(".intro").hide();

    if (r === true) {
      score += 20;
    } else {
      score += 5;
    };

    if (millenial >= 1980) {
      score += 15;
    } else {
      score += 10;
    };

    if (cancerInput === "yes") {
      score += 5;
    } else {
      score += 25;
    };

    if (energyColorInput.includes("000000") === true) {
      score += 50;
    } else {
      score += 10;
    };

    if (crimeInputValue <= 3) {
      score += 15;
    } else {
      score += 30;
    };

    if (score <= 90) {
      $("#python").show();
    } else if (score >= 100){
      $("#kotlin").show();
    } else {
      $("#php").show();
    };

    $(".main").hide();


    event.preventDefault();
  });
});