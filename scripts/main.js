let cols, rows
//row size constant

let starter = false;

let w = 60;
let fRate = 50;
//grids empty array
let current;
let grid = [];
let stack = [];

$(document).ready(function () {
  console.log($('speed').val());


  $("#main-btn").click(function () {
    if (starter == false) {
      clear();
      starter = !starter
      $('#main-btn').html('reset')
    } else if (starter == true) {
      starter = !starter;
      grid = []
      stack = []
      current;
      clear();
      reset()
      $('#main-btn').html('generate')
    }
  })

});



//setup function creates canvas, defines assigns ros and cols amounts.
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  reset();
}


function reset() {

  cols = floor(width / w);
  rows = floor(height / w);

  frameRate(fRate);
  //create cell rows times columns and push to array , 100 cells


  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}



//draws 100 cells onto the canvas
function draw() {
  background(50);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }


  current.visited = true;
  current.highlight();

  if (starter) {
    // STEP 1
    let next = current.checkNeighbors();
    if (next) {
      next.visited = true;

      //STEP 2
      stack.push(current);


      // STEP 3

      removeWalls(current, next);


      // STEP 4
      current = next;
    } else if (stack.length > 0) {
      current = stack.pop();
    }
  }


}


function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}



function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}