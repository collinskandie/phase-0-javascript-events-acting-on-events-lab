// index.js

// Select the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger to the left
function moveDodgerLeft() {
  // Get the current position of the dodger
  let leftPosition = parseInt(dodger.style.left.replace("px", ""), 10);

  // Ensure the dodger doesn't move out of the game container
  if (leftPosition > 0) {
    dodger.style.left = `${leftPosition - 1}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  // Get the current position of the dodger
  let leftPosition = parseInt(dodger.style.left.replace("px", ""), 10);

  // Ensure the dodger doesn't move out of the game container
  if (leftPosition < 360) {
    // Assuming game container width is 400px
    dodger.style.left = `${leftPosition + 1}px`;
  }
}

// Event listeners for arrow key presses to move the dodger left and right
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
