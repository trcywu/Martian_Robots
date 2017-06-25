describe('processInstructionString', function() {
  it('converts input string', function() {
    instructionString = '53\n11E\nRFRFRFRF\n\n32N\nFRRFLLFFRRFLL\n\n03W\nLLFFFLFLFL';
    var processedInstruction = processInstructionString(instructionString);
    var expectedOutcome = [ [ '5', '3' ], [ '1', '1', 'E' ],
    [ 'R', 'F', 'R', 'F', 'R', 'F', 'R', 'F' ], [ '3', '2', 'N' ],
    [ 'F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L' ],
    [ '0', '3', 'W' ], [ 'L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L' ] ];
    expect(processedInstruction).toEqual(expectedOutcome);
});
});

describe('updatePosition', function() {
  it("handles the first sample input", function () {
    var grid = {
      x: 5,
      y: 3
    };
    var location = {
      x: 1,
      y: 1,
      directionPointer: 0,
      isLost: false
    };
    var instructions = "RFRFRFRF";

    var finalLoc = updatePosition(grid, location, instructions, history);
    var expectedLoc = {
      x: 1,
      y: 1,
      directionPointer: 0,
      isLost: false
    };
    expect(finalLoc).toEqual(expectedLoc);
  });
});

describe('finishingPoint', function() {
  it('converts final location output to string', function() {
    var location = {
      x: 1,
      y: 1,
      directionPointer: 0,
      isLost: false
    };
    var expectedString = '1 1 E';
    var outputString = finishingPointToString(location);
    expect(outputString).toEqual(expectedString);
  });
});

describe('updatePosition', function() {
  it("handles the second input with a LOST example", function () {
    var history = [];
    var grid = {
      x: 5,
      y: 3
    };
    var location = {
      x: 3,
      y: 2,
      directionPointer: 1,
      isLost: false
    };
    var instructions = "FRRFLLFFRRFLL";

    var finalLoc = updatePosition(grid, location, instructions, history);
    var expectedLoc = {
      x: 3,
      y: 3,
      directionPointer: 1,
      isLost: true
    };
    expect(finalLoc).toEqual(expectedLoc);
  });
});

describe('finishingPoint', function() {
  it('converts final location output to string with LOST example', function() {
    var location = {
      x: 3,
      y: 3,
      directionPointer: 1,
      isLost: true
    };
    var expectedString = '3 3 N LOST';
    var outputString = finishingPointToString(location);
    expect(outputString).toEqual(expectedString);
  });
});
