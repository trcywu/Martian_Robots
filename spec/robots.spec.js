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
    var outputString = finishingPoint(location);
    expect(outputString).toEqual(expectedString);
  });
});
