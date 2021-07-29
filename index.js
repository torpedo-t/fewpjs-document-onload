// Your code goes here
let query = document.getElementById("text");

function changeText() {
    query.innerHTML = "This is really cool!"
}

document.addEventListener("DOMContentLoaded", function() {
    changeText()
  });