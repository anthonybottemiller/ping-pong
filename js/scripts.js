//Backend Function
var countToNumber = function(number){
  outputArray.length = 0;
  if (number <= 0){
    outputArray.push("Please use a positive integer");
  }
  else {
    for (var numberCount=1; numberCount <= number; numberCount++){
      if (numberCount % 15 === 0) {
        outputArray.push("Ping-Pong");
      }
      else if (numberCount % 3 === 0){
        outputArray.push("Ping");
      }
      else if (numberCount % 5 === 0){
        outputArray.push("Pong");
      }
      else {
        outputArray.push(numberCount);
      };
    };
  };
  numberOfResults += 1;
};
//Front end Functions
var writeResultDiv = function(){
  $(".results").prepend('<div id=result'+numberOfResults+' class = "single-result col-md-2"><ul></ul></div>');
};
var writeHeader = function(){
  $("#result"+numberOfResults).prepend("<h3>Result: "+numberOfResults+"</h3>");
};
var writeToResult = function(outputNumber){
  $("#result"+numberOfResults).append("<li>"+outputNumber+"</li>");
};
var writeToPage = function(array){
  writeResultDiv();
  writeHeader();
  for (i=0; i<outputArray.length; i++){
    writeToResult(outputArray[i]);
  };
};
//Global Variables
var outputArray = [];
var numberOfResults = 0;
//When Document is ready
$(document).ready(function(){
//When go button clicked
  $("form").submit(function(event){
    event.preventDefault();
    var inputNumber = $("input").val();
    var outputArray = countToNumber(inputNumber);
    writeToPage(outputArray);
  });
});