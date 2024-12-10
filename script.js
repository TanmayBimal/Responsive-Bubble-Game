// var timer = 60;
// var score = 0;
// var hitrn = 0;

// // Function to increase score
// function increaseScore() {
//   score += 10;
//   document.querySelector("#scoreval").textContent = score;
// }

// // Function to get a new target bubble number
// function getNewHit() {
//   hitrn = Math.floor(Math.random() * 10);
//   document.querySelector("#hitval").textContent = hitrn;
// }

// // Function to dynamically create bubbles
// function makeBubble() {
//   var clutter = "";
//   var bubbleCount = window.innerWidth > 768 ? 133 : 50; // Adjust bubbles based on screen width
//   for (var i = 1; i <= bubbleCount; i++) {
//     var rn = Math.floor(Math.random() * 10);
//     clutter += `<div class="bubble">${rn}</div>`;
//   }
//   document.querySelector("#pbtm").innerHTML = clutter;
// }

// // Function to run the timer
// function runTimer() {
//   var timerint = setInterval(function () {
//     if (timer > 0) {
//       timer--;
//       document.querySelector("#timerval").textContent = timer;
//     } else {
//       clearInterval(timerint); // Stop timer when it reaches 0
//       document.querySelector("#pbtm").innerHTML = `GAME OVER`; // Display "GAME OVER"
//     }
//   }, 1000);
// }

// // Adjust font size dynamically for responsive design
// function adjustFontSize() {
//   var scaleFactor = window.innerWidth / 1920;
//   document.documentElement.style.fontSize = `${
//     Math.max(scaleFactor, 0.5) * 16
//   }px`;
// }
// window.addEventListener("resize", adjustFontSize);
// adjustFontSize(); // Initial call

// // Event listener for bubble clicks
// document.querySelector("#pbtm").addEventListener("click", function (dets) {
//   var clickednum = Number(dets.target.textContent);
//   if (clickednum === hitrn) {
//     increaseScore();
//     makeBubble();
//     getNewHit();
//   }
// });

// // Initialize game
// runTimer();
// makeBubble();
// getNewHit();

var timer = 60;
var score = 0;
var hitrn = 0;

// Function to increase score
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

// Function to get a new target bubble number
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

// Function to dynamically create bubbles
function makeBubble() {
  var clutter = "";
  var bubbleCount = window.innerWidth > 768 ? 145 : 50; // Adjust bubbles based on screen width
  for (var i = 1; i <= bubbleCount; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
  document.querySelector("#pbtm").scrollTop = 0; // Reset scroll position
}

// Function to run the timer
function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint); // Stop timer when it reaches 0
      document.querySelector("#pbtm").innerHTML = `GAME OVER`; // Display "GAME OVER"
    }
  }, 1000);
}

// Adjust font size dynamically for responsive design
function adjustFontSize() {
  var scaleFactor = window.innerWidth / 1920;
  document.documentElement.style.fontSize = `${
    Math.max(scaleFactor, 0.5) * 16
  }px`;
}
window.addEventListener("resize", adjustFontSize);
adjustFontSize(); // Initial call

// Event listener for bubble clicks
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

// Initialize game
runTimer();
makeBubble();
getNewHit();
