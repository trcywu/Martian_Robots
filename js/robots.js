// Constant
const DIRECTION = ['e', 'n', 'w', 's'];

//Fires on click 'Process Robots'
function playAgain() {
    const instructionString = document.getElementById('instruction').value;
    const command = processInstructionString(instructionString);
    traverseCommands(command);
}

//Processes the string input and returns as a 2-D array
function processInstructionString(instructionString) {
    return instructionString.split(/\n/)
        .filter(function(x) {
            return x !== "";
        })
        .map(function(x) {
            return x.split('');
        });
}

//Index 0 is used to create the grid, then Robot starting point at Command[i]
//and intructions at Command[i+1] are processed
function traverseCommands(command) {
    const grid = drawGrid(command[0][0], command[0][1]);
    const history = [];
    let i = 1;
    while (i < command.length) {
        let location = setStartingPoint(command[i][0], command[i][1],
          command[i][2]);
        location = updatePosition(grid, location, command[i + 1], history);
        printResult(location);
        i = i + 2;
    }
}

//Setting the boundaries of the grid
function drawGrid(xValue, yValue) {
    return {
        x: xValue,
        y: yValue
    };
}
//Using the index of direction array to set the first direction
function setStartingPoint(x, y, d) {
    const startPoint = {};
    startPoint.x = x;
    startPoint.y = y;
    const directionStart = d;
    startPoint.directionPointer =
    DIRECTION.indexOf(directionStart.toLowerCase());
    startPoint.isLost = false;
    return startPoint;
}


// Updates the position of the robot as we loop through every input of
// the instruction. Allowing robots to move 'off' the grid and then reversing
// last move to recorde the coordinate and orientation before moving 'off'
function updatePosition(grid, location, instruction, history) {
    for (i = 0; i < instruction.length; i++) {
        if (location.isLost === false) {
            if (instruction[i] === 'R') {
                location.directionPointer--;
                if (location.directionPointer < 0) {
                    location.directionPointer = 3;
                }
            } else if (instruction[i] === 'L') {
                location.directionPointer++;
                if (location.directionPointer > 3) {
                    location.directionPointer = 0;
                }
            } else if (instruction[i] === 'F') {
                if (location.directionPointer === 0) { // E move x + 1
                    location.x++;
                } else if (location.directionPointer === 2) { // W move x - 1
                    location.x--;
                } else if (location.directionPointer === 1) { // N move y + 1
                    location.y++;
                } else if (location.directionPointer === 3) { // S move y - 1
                    location.y--;
                }
                if (location.x > grid.x || location.x < 0 ||
                  location.y > grid.y || location.y < 0) {
                    //reverse last move, to reset position before LOST
                    if (location.directionPointer === 0) { // E move x - 1
                        location.x--;
                    } else if (location.directionPointer === 2) { // W move x + 1
                        location.x++;
                    } else if (location.directionPointer === 1) { // N move y - 1
                        location.y--;
                    } else if (location.directionPointer === 3) { // S move y + 1
                        location.y++;
                    }
                    if (history.indexOf(location.x.toString()
                    .concat(location.y, location.directionPointer)) === -1) {
                        location.isLost = true;
                        history.push(location.x.toString()
                        .concat(location.y, location.directionPointer));
                    }
                }
            }
        }
    }
    return location;
}

// Prints the final coordinate and direction of robot
function printResult(location) {
    const div = document.createElement("div");
    const final = document.createTextNode(finishingPointToString(location));
    div.appendChild(final);
    document.getElementById("finalPosition").appendChild(div);
}

// Updates final coordinates and converts to string
function finishingPointToString(location) {
    const finalCoordinate = [];
    finalCoordinate[0] = location.x;
    finalCoordinate[1] = location.y;
    finalCoordinate[2] = DIRECTION[location.directionPointer].toUpperCase();
    if (location.isLost) {
        finalCoordinate[3] = 'LOST';
    }
    return finalCoordinate.join(' ');
}

//Setting the appended div to empty string so that it can take fresh outputs
function removeOutput() {
    document.getElementById("finalPosition").innerHTML = '';
}
