var size = 7;
var board = {};
var score = 0;
var bestScore = 0;

var tileKey = function (col, row) {
  return "tile" + col + "-" + row;
};

var createBoard = function () {
  var $board = $("#board");
  for (var y = 0; y < size; y++) {
    var $row = $("<div></div>").addClass("row");
    $board.append($row);
    for (var x = 0; x < size; x++) {
      var $tile = $("<div></div>").addClass("tile");
      $tile.attr("id", tileKey(x, y));
      $row.append($tile);
    }
  }
};

var refreshBoard = function () {
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      var key = tileKey(x, y);
      var num = board[key];
      var $tile = $("#" + key);
      $tile.text("").removeClass().addClass("tile");
      $tile.text(num).addClass("tile-" + num);
    }
  }

  $("#score").text(score);
  $("#best-score").text(bestScore);
};

var getEmptyTiles = function () {
  var empty = [];
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      var key = tileKey(x, y);
      var num = board[key];
      if (num === undefined) {
        empty.push(key);
      }
    }
  }
  return empty;
};

var addRandomTile = function () {
  var emptyTiles = getEmptyTiles();
  var randomIndex = Math.floor(Math.random() * emptyTiles.length);
  var randomEmptyTile = emptyTiles[randomIndex];

  if (Math.random() > 0.9) {
    board[randomEmptyTile] = 4;
  } else {
    board[randomEmptyTile] = 2;
  }
};

var combineNumbers = function (numbers) {
  var newNumbers = [];

  while (numbers.length > 0) {
    if (numbers[0] === numbers[1]) {
      var sum = numbers[0] + numbers[1];
      updateScore(sum);
      newNumbers.push(sum);
      numbers.shift();
      numbers.shift();
    } else {
      newNumbers.push(numbers[0]);
      numbers.shift();
    }
  }

  while (newNumbers.length < size) {
    newNumbers.push(undefined);
  }

  return newNumbers;
};

var getNumbersInCol = function (col) {
  var numbers = [];
  for (var row = 0; row < size; row++) {
    var key = tileKey(col, row);
    var val = board[key];
    if (val) {
      numbers.push(val);
    }
  }
  return numbers;
};

var getNumbersInRow = function (row) {
  var numbers = [];
  for (var col = 0; col < size; col++) {
    var key = tileKey(col, row);
    var val = board[key];
    if (val) {
      numbers.push(val);
    }
  }
  return numbers;
};

var setNumbersInCol = function (col, newNumbers) {
  for (var row = 0; row < size; row++) {
    var key = tileKey(col, row);
    board[key] = newNumbers[row];
  }
};

var setNumbersInRow = function (row, newNumbers) {
  for (var col = 0; col < size; col++) {
    var key = tileKey(col, row);
    board[key] = newNumbers[col];
  }
};

var combineColUp = function (col) {
  var oldNumbers = getNumbersInCol(col);
  var newNumbers = combineNumbers(oldNumbers);
  setNumbersInCol(col, newNumbers);
};

var combineColDown = function (col) {
  var oldNumbers = getNumbersInCol(col).reverse();
  var newNumbers = combineNumbers(oldNumbers).reverse();
  setNumbersInCol(col, newNumbers);
};

var combineRowLeft = function (row) {
  var oldNumbers = getNumbersInRow(row);
  var newNumbers = combineNumbers(oldNumbers);
  setNumbersInRow(row, newNumbers);
};

var combineRowRight = function (row) {
  var oldNumbers = getNumbersInRow(row).reverse();
  var newNumbers = combineNumbers(oldNumbers).reverse();
  setNumbersInRow(row, newNumbers);
};

var didBoardChange = function (oldBoard) {
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      var key = tileKey(x, y);
      if (board[key] !== oldBoard[key]) {
        return true;
      }
    }
  }
  return false;
};

var updateScore = function (increment) {
  score += increment;

  if (score > bestScore) {
    bestScore = score;
  }
};

var keyPressed = function (direction) {
  var oldBoard = $.extend({}, board);

  for (var n = 0; n < size; n++) {
    if (direction == "left") {
      combineRowLeft(n);
    } else if (direction == "right") {
      combineRowRight(n);
    } else if (direction == "up") {
      combineColUp(n);
    } else if (direction == "down") {
      combineColDown(n);
    }
  }

  if (didBoardChange(oldBoard)) {
    addRandomTile();
    refreshBoard();
    saveData();
    if (checkGameOver()) {
      // show game over message
      $("<div></div>").appendTo("#board")
                      .attr("id", "game-over")
                      .text("Game over!")
                      .hide()
                      .fadeIn();
    }
  }
};

var checkGameOver = function () {
  var empty = getEmptyTiles();
  if (empty.length > 0) {
    return false;
  }

  for (var row = 0; row < size; row++) {
    var numbers = getNumbersInRow(row);
    for (var n = 0; n < numbers.length - 1; n++) {
      // check for equal adjacent values
      if (numbers[n] === numbers[n+1]) {
        return false;
      }
    }
  }

  for (var col = 0; col < size; col++) {
    var numbers = getNumbersInCol(col);
    for (var n = 0; n < numbers.length - 1; n++) {
      // check for equal adjacent values
      if (numbers[n] === numbers[n+1]) {
        return false;
      }
    }
  }

  return true;
};

var startNewGame = function () {
  board = {};
  score = 0;
  addRandomTile();
  addRandomTile();
  refreshBoard();
  saveData();
  $("#game-over").remove();
};

var loadSavedData = function () {
  var savedScore = localStorage.getItem("score");
  if (savedScore) {
    score = parseInt(savedScore, 10);
  }

  var savedBestScore = localStorage.getItem("bestScore");
  if (savedBestScore) {
    bestScore = parseInt(savedBestScore, 10);
  }

  var savedBoard = localStorage.getItem("board");
  if (savedBoard) {
    board = JSON.parse(savedBoard);
    if (checkGameOver()) {
      startNewGame();
    } else {
      refreshBoard();
    }
  } else {
    startNewGame();
  }
};

var saveData = function () {
  localStorage.setItem("board", JSON.stringify(board));
  localStorage.setItem("score", score);
  localStorage.setItem("bestScore", bestScore);
};

createBoard();
loadSavedData();

$("#new-game").click(function () {
  startNewGame();
});

$(document).keydown(function (event) {
  switch (event.which) {
    case 65: // a
    case 37: // left arrow
      keyPressed("left");
      break;
    case 87: // w
    case 38: // up arrow
      keyPressed("up");
      break;
    case 68: // d
    case 39: // right arrow
      keyPressed("right");
      break;
    case 83: // s
    case 40: // down arrow
      keyPressed("down");
      break;
  }
});
