var countToNumber = function(number){
  outputArray.length = 0;
  if (number < 0){
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
var writeDiv = function(){
  $(".results").prepend('<div id=result'+numberOfResults+' class = "single-result col-md-2"><ul></ul></div>');
};
var writeHeader = function(){
  $("#result"+numberOfResults).prepend("<h3>Result: "+numberOfResults+"</h3>");
};
var writeToResult = function(outputNumber){
  $("#result"+numberOfResults).append("<li>"+outputNumber+"</li>");
};
var writeToPage = function(array){
  writeDiv();
  writeHeader();
  console.log(outputArray)
  for (i=0; i<outputArray.length; i++){
    writeToResult(outputArray[i]);
  };
};
//Global Output Array
var outputArray = [];
var numberOfResults = 0;
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log("Button Clicked");
    var inputNumber = $("input").val();
    console.log(inputNumber);
    var outputArray = countToNumber(inputNumber);
    writeToPage(outputArray);
  });
});