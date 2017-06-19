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
    var instructions = "rfrfrfrf";

    var finalLoc = updatePosition(grid, location, instructions);
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
    var instructions = "frrfllffrrfll";

    var finalLoc = updatePosition(grid, location, instructions);
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
