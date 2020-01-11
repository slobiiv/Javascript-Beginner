/* Plan: */
/* Select the elements on the page - canvas, canvas context, shake button */
const canvas = document.querySelector('#etch-a-sketch');

/* Place where we do our drawing is called the context, we need to get it */
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10; // MOVE_AMOUNT - true constant

const { width } = canvas; // Making a variables from the same properties on our canvas
const { height } = canvas; // Making a variables from the same properties on our canvas
/* How could we find a random spot in this Etch-a-Sketch?
   Take the width, Take the height and generate a random number between
   zero and the width and the zero and the height
*/
// Creating random x and y starting points on canvas +
let randomX = Math.floor(Math.random() * width);
let randomY = Math.floor(Math.random() * height);

/* Setup our Canvas for drawing (default setups) */
let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round'; // This just ensures that we get a smooth drawing (default is squared edge)
ctx.lineWidth = '15'; // Making a line 10px thick
ctx.beginPath(); // Start the drawing
ctx.moveTo(randomX, randomY); // Moves the path to the specified point in the canvas, without creating a line
ctx.lineTo(randomX, randomY); // Adds a new point and creates a line to that point from the last specified point in the canvas
ctx.stroke(); // Actually draws the path you have defined

// Write a draw function (using "options" object. sometimes your functions will have six, sevent things to pass into it)
function draw({ key }) {
  // increment the hue by 5 to change colors
  hue += 5;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(randomX, randomY);
  // move our x and y values depending on what the user did
  // switch statemets will allow us to based on these four different outcomes, do the following:
  switch (key) {
    case 'ArrowUp':
      randomY -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      randomY += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      randomX -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      randomX += MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(randomX, randomY);
  ctx.stroke();
}
// Handler for keys
function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
    console.log(event.key);
    console.log('handle the key');
  }
}

// Clear/Shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function () {
      console.log('Done the shake');
      canvas.classList.remove('shake');
    },
    { once: true } // addEventListener will unbind itself. It will call removeEventListener fpr you
  );
}
//  Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
