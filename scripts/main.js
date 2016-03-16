
var redEl = document.getElementById("red");
var greenEl = document.getElementById("green");
var blueEl = document.getElementById("blue");
var text_redEl = document.getElementById("text_red");
var text_greenEl = document.getElementById("text_green");
var text_blueEl = document.getElementById("text_blue");



// var button = document.querySelector("input[type=button]");


 redEl.addEventListener('click', function() {
 text_redEl.style.display='block';
 text_greenEl.style.display='none';
 text_blueEl.style.display='none';})

 greenEl.addEventListener('click', function() {
 text_redEl.style.display='none';
 text_greenEl.style.display='block';
 text_blueEl.style.display='none';})

 blueEl.addEventListener('click', function() {
 text_redEl.style.display='none';
 text_greenEl.style.display='none';
 text_blueEl.style.display='block';})
//  button.value = "Loading...";
//  timeoutID = window.setTimeout(changeButton, 4000);
//  function changeButton(){
//  	button.value = "Submit"
//  }
// }
// );