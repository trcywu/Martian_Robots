// Constant
var DIRECTION = ['e', 'n', 'w', 's'];

//button press
function playAgain() {
    var command = getInput();
    console.log(command);
    traverseCommands(command);
}

function getInput() {
    var instruction = document.getElementById('instruction').value;
    var individualCommandStrings = instruction.split(/\n/);
    console.log(individualCommandStrings);
    var filteredInput = individualCommandStrings.filter(function(x) {
        return x !== "";
    });
    console.log(filteredInput);
    var twoArray = filteredInput.map(function(x) {
        return x.split('');
    });
    console.log(twoArray);
    return twoArray;
}


function traverseCommands(command, grid) {
    var grid = drawGrid(command[0][0], command[0][1]);
    console.log(grid);

    var history = [];

    var i = 1;
    while (i < command.length) {

        //Command[i] set as robot start point
        var location = setStartingPoint(command[i][0], command[i][1], command[i][2]);
        //Command[i + 1] as movements for robots - remember and mark death


        location = updatePosition(grid, location, command[i + 1], history);
        //return outcome of movements
        console.log(location);
        printResult(location);

        i = i + 2;

    }

}

//Fetch x and y from first element
function drawGrid(xValue, yValue) {
    return {
        x: xValue,
        y: yValue
    };
}

function setStartingPoint(x, y, d) {
    var startPoint = {};
    startPoint.x = x;
    startPoint.y = y;
    var directionStart = d;
    startPoint.directionPointer = DIRECTION.indexOf(directionStart.toLowerCase());
    startPoint.isLost = false;
    //using the index of direction array to set the first direction
    return startPoint;
}



//then run update position but with instruction that is robotArray[i+1]
//how to set instruction as robotArray[i+1], always taking the array after the starting point?

// Updates the position of the robot as we loop through every input of
// the instruction
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
                // if (location.x === grid.x && history.xLost.indexOf(location.x)=== -1) {
                //       history.xLost.push(location.x);
                //       location.isLost = true;
                // }  else if(history.yLost.indexOf(location.y)=== -1 && location.y === grid.y){
                //         history.yLost.push(location.y);
                //         location.isLost = true;
                //     }
                if (location.x > grid.x || location.x < 0 || location.y > grid.y || location.y < 0) {
                    //reverse last move, to reset position before death
                    if (location.directionPointer === 0) { // E move x - 1
                        location.x--;
                    } else if (location.directionPointer === 2) { // W move x + 1
                        location.x++;
                    } else if (location.directionPointer === 1) { // N move y - 1
                        location.y--;
                    } else if (location.directionPointer === 3) { // S move y + 1
                        location.y++;
                    }

                    if (history.indexOf(location.x.toString().concat(location.y, location.directionPointer)) === -1) {
                        location.isLost = true;

                        history.push(location.x.toString().concat(location.y, location.directionPointer));
                    }
                    console.log(history);
                }
            }
        }
        // console.log(location);
    }
    return location;
}

// Prints the final coordinate and direction of robot
function printResult(location) {
    var div = document.createElement("div");
    var final = document.createTextNode(finishingPointToString(location));
    div.appendChild(final);
    document.getElementById("finalPosition").appendChild(div);
}

// Updates final coordinates and converts to string
function finishingPointToString(location) {
    var finalCoordinate = [];
    finalCoordinate[0] = location.x;
    finalCoordinate[1] = location.y;
    finalCoordinate[2] = DIRECTION[location.directionPointer].toUpperCase();
    if (location.isLost) {
        finalCoordinate[3] = 'LOST';
    }
    return finalCoordinate.join(' ');
}
