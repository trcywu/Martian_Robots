//take grid size inputs [x,y]
//take input of robot starting position [x,y,d]
//push into empty array
//initiate counter based on position
//take instructions, loop through and add counter
//boolean value to determine LOST first time, start false, change to true for thereafter
//push final position into finalArray


//Global Variables

var xGrid;
var yGrid;
var xPos;
var yPos;
var direction = ['e', 'n', 'w', 's'];
var directionPointer;
var isLost = false;

function play() {
    drawGrid();
    setStartingPoint();
    updatePosition();
    printResult();
}


//takes inputs from page and save to variables
function drawGrid() {
    xGrid = parseInt(document.getElementById('xGrid').value);
    yGrid = parseInt(document.getElementById('yGrid').value);
}

//setting starting point variables
function setStartingPoint() {
    xPos = parseInt(document.getElementById('xStart').value);
    yPos = parseInt(document.getElementById('yStart').value);
    var directionStart = document.getElementById('directionStart').value;

    //setting LOST boolean
    isLost = false;
    //using the index of direction array to set the first direction
    directionPointer = direction.indexOf(directionStart.toLowerCase());
}


//taking the instruction input and looping through. The isLost boolean determines whether we have fallen off the sides of the grid
function updatePosition() {
    var instruction = document.getElementById('instruction').value.toLowerCase();
    for (i = 0; i < instruction.length; i++) {
        if (instruction.charAt(i) === 'r') {
            directionPointer--;
            if (directionPointer < 0) {
                directionPointer = 3;
            }
            console.log(directionPointer);
        } else if (instruction.charAt(i) === 'l') {
            directionPointer++;
            if (directionPointer > 3) {
                directionPointer = 0;
            }
            console.log(directionPointer);
        } else if (instruction.charAt(i) === 'f') {
            if (directionPointer === 0) {
                if (xPos !== xGrid) {
                    xPos++;
                }
            } else if (directionPointer === 2) {
                if (xPos !== xGrid) {
                    xPos--;
                }
            } else if (directionPointer === 1) {
                if (yPos !== yGrid) {
                    yPos++;
                }
            } else if (directionPointer === 3) {
                if (yPos !== yGrid) {
                    yPos--;
                }
            }
            if (xPos === xGrid || yPos === yGrid) {
                isLost = true;
            }
        }
    }
}

function finishingPoint() {
    var finalCoordinate = [];
    finalCoordinate[0] = xPos;
    finalCoordinate[1] = yPos;
    finalCoordinate[2] = direction[directionPointer].toUpperCase();
    if (isLost) {
        finalCoordinate[3] = 'LOST';
    }
    return finalCoordinate.join(' ');
}


function printResult() {
    var div = document.createElement("div");
    var final = document.createTextNode(finishingPoint());
    div.appendChild(final);
    document.getElementById("finalPosition").appendChild(div);
}
