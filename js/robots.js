//take grid size inputs [x,y]
//take input of robot starting position [x,y,d]
//push into empty array
//initiate counter based on position
//take instructions, loop through and add counter
//boolean value to determine LOST first time, start false, change to true for thereafter
//push final position into finalArray


//Global Variables

var DIRECTION = ['e', 'n', 'w', 's'];

function play() {
    var grid = drawGrid();
    var location = setStartingPoint();
    var instruction = document.getElementById('instruction').value.toLowerCase();
    location = updatePosition(grid, location, instruction);
    printResult(location);
}

//takes inputs from page and save to variables
function drawGrid() {
  return {
    x: parseInt(document.getElementById('xGrid').value),
    y: parseInt(document.getElementById('yGrid').value)
  };
}

//setting starting point variables
function setStartingPoint() {
    var startPoint = {};
    startPoint.x = parseInt(document.getElementById('xStart').value);
    startPoint.y = parseInt(document.getElementById('yStart').value);

    var directionStart = document.getElementById('directionStart').value;

    //setting LOST boolean
    startPoint.isLost = false;
    //using the index of direction array to set the first direction
    startPoint.directionPointer = DIRECTION.indexOf(directionStart.toLowerCase());

    return startPoint;
}


//taking the instruction input and looping through. The isLost boolean determines whether we have fallen off the sides of the grid
function updatePosition(grid, location, instruction) {
    for (i = 0; i < instruction.length; i++) {
        if (instruction.charAt(i) === 'r') {
            location.directionPointer--;
            if (location.directionPointer < 0) {
                location.directionPointer = 3;
            }
            console.log(location.directionPointer);
        } else if (instruction.charAt(i) === 'l') {
            location.directionPointer++;
            if (location.directionPointer > 3) {
                location.directionPointer = 0;
            }
            console.log(location.directionPointer);
        } else if (instruction.charAt(i) === 'f') {
            if (location.directionPointer === 0) {
                if (location.x !== grid.x) {
                    location.x++;
                }
            } else if (location.directionPointer === 2) {
                if (location.x !== grid.x) {
                    location.x--;
                }
            } else if (location.directionPointer === 1) {
                if (location.y !== grid.y) {
                    location.y++;
                }
            } else if (location.directionPointer === 3) {
                if (location.y !== grid.y) {
                    location.y--;
                }
            }
            if (location.x === grid.x || location.y === grid.y) {
                location.isLost = true;
            }
        }
    }
    return location;
}

function finishingPoint(location) {
    var finalCoordinate = [];
    finalCoordinate[0] = location.x;
    finalCoordinate[1] = location.y;
    finalCoordinate[2] = DIRECTION[location.directionPointer].toUpperCase();
    if (location.isLost) {
        finalCoordinate[3] = 'LOST';
    }
    return finalCoordinate.join(' ');
}


function printResult(location) {
    var div = document.createElement("div");
    var final = document.createTextNode(finishingPoint(location));
    div.appendChild(final);
    document.getElementById("finalPosition").appendChild(div);
}
