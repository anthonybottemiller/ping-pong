var countToNumber = function(number){
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
      }
    }
  };
  return outputArray;
};
//Global Output Array
var outputArray = [];

var writeToPage = function(array){

}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log("Button Clicked");
    var inputNumber = $("input").val();
    console.log(inputNumber);
    countToNumber(inputNumber);
    console.log(outputArray);
  });
});