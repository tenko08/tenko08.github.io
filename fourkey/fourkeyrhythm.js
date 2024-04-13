document.addEventListener("DOMContentLoaded", function() {
var canvas = document.getElementById("fourkeyrhythm");

// Function to resize the canvas to match the browser window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
// Call the function initially
resizeCanvas();
// Add event listener for window resize
window.addEventListener("resize", resizeCanvas);

// Get drawing context
var ctx = canvas.getContext("2d");
// Draw a red rectangle
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.strokeRect(canvas.width/2-100, canvas.height-100, 50, 50);
        
// Draw a blue circle
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(100, 50, 25, 0, 2 * Math.PI);
ctx.fill();
});