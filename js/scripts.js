var countToNumber = function(number){
  if (number < 0){
    return "Please use a positive integer"
  }
  else{
    for (i=1; i <= number; i++){
      console.log(i)
    }
  }
}
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    console.log("Button Clicked");
    var inputNumber = $("input").val();
    console.log(inputNumber);
    console.log(countToNumber(inputNumber));
  });
});