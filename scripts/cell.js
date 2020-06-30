//cell constructor class/function
function Cell(i, j) {
  //i and j are coordinates
  this.i = i;
  this.j = j;
  //walls array, boolean to show/hide walls 
  //            TOP   RIGHT BOTT  LEFT
  this.walls = [true, true, true, true]
  this.visitsed = false;


  this.highlight = function () {
    let x = this.i * w;
    let y = this.j * w;
    noStroke();
    fill(0, 200, 0);
    rect(x, y, w, w);
  }

  this.checkNeighbors = function () {
    let neighbors = [];

    let right = grid[index(i + 1, j)];
    let top = grid[index(i, j - 1)];
    let bottom = grid[index(i, j + 1)];
    let left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length))
      return neighbors[r];
    } else {
      return undefined;
    }
  }


  this.show = function () {
    let x = this.i * w;
    let y = this.j * w;
    stroke(0, 0, 0);
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }
    //color visited cells
    if (this.visited) {
      noStroke();
      fill(241, 250, 238);
      rect(x, y, w, w, );
    }
  }
}