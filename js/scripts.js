var countToNumber = function(number){
  if (number < 0){
    console.log("Please use a positive integer")
  }
  else{
    for (numberCount=1; numberCount <= number; numberCount++){
      if (numberCount % 3 === 0) {
        console.log("Ping")
      }
      else{
        console.log(numberCount)
      }
    }
  }
}
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log("Button Clicked");
    var inputNumber = $("input").val();
    console.log(inputNumber);
    countToNumber(inputNumber);
  });
});