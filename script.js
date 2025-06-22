// Generate random color for the shape
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Start time when shape is shown
var start = new Date().getTime();

// Function to move and show the shape
function move() {
  var shape = document.getElementById("shape");

  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var wh = Math.floor(Math.random() * (screenWidth * 0.2)) + screenWidth * 0.1; // 10–30% of screen
  var radius = Math.floor(Math.random() * 51) + "%";

  var maxLeft = screenWidth - wh;
  var maxTop = screenHeight - wh;

  // Keep top at least 120px to avoid overlapping heading
  var left = Math.random() * (maxLeft - 40) + 20;
  var top = Math.random() * (maxTop - 120) + 120;

  shape.style.width = wh + "px";
  shape.style.height = wh + "px";
  shape.style.left = left + "px";
  shape.style.top = top + "px";
  shape.style.backgroundColor = getRandomColor();
  shape.style.borderRadius = radius;
  shape.style.display = "block";

  start = new Date().getTime();
}

// Show shape initially
move();

// Measure and alert reaction time
document.getElementById("shape").onclick = function () {
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  alert("Your reaction time is: " + timeTaken.toFixed(2) + " seconds");
  move();
};
