// JavaScript to change the background color of the body when the button is clicked
document.getElementById("colorButton").addEventListener("click", function() {
    // Array of colors to choose from
    const colors = ["#FF6347", "#4CAF50", "#FF9800", "#3F51B5", "#9C27B0", "#2196F3"];
    
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
