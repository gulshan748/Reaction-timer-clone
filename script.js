
// This function is to generate a random color everytime when user click on the shape 
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// The start variable here is to  capture the time from the very first moment when user interacted with webpage  
var start = new Date().getTime();
//This function is to show the shape with random size, position, color, shape
    function move() {
        var left = Math.random() * 300;
        var top = Math.random() * 300;
        var wh = (Math.random() * 200) + 100; 
        var radius = Math.floor(Math.random() * 51) + "%";
        var shape = document.getElementById("shape");
        shape.style.left = left + "px";
        shape.style.top = top + "px";
        shape.style.width = wh + "px";
        shape.style.height = wh + "px";
        shape.style.display = "block";
        shape.style.backgroundColor= getRandomColor()
        shape.style.borderRadius= radius
        shape.style.flex= "center";
        start = new Date().getTime();
    }
// This funtion is to capture the time  of user engagement between the very first moment of interaction with the webpage  to  the moment when he clicks on the shape 
   move();
    document.getElementById("shape").onclick = function () {   
        var end = new Date().getTime();
        var timeTaken = (end - start) / 1000;
        alert("Your reaction time is : " + timeTaken + " second") ;
    move();
    }
