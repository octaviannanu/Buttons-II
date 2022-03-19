
function play() {
  var nr_btn = prompt("Please enter a number for buttons");
  let number = parseInt(nr_btn);
  let good_number = Math.floor(Math.random()*(number))+1;
  for (let i = 1; i <= number; ++i) {
    btn = document.createElement("button");
    btn.innerHTML = "Click Me" + i;
    document.getElementById("new_buttons").appendChild(btn);
    btn.onclick = function () {
      if (i == good_number) {
        alert("Yes! This is a good choice");
        document. location.reload();
      } else {
        alert("Oh, no! This is a bad choice. Please try another button");
      }
    }
  }
}