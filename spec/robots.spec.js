var robots = require('../js/app.js');

// describe('JavaScript addition operator', function () {
//     it('adds two numbers together', function () {
//         expect(1 + 2).toEqual(3);
//     });
// });
var yGrid;
var xGrid;

describe('size of grid bounded by 50 and 50', function() {

  it("is less than 10", function () {
      expect(xGrid).toBeLessThan(50);
  });
  it("is less than 10", function () {
      expect(yGrid).toBeLessThan(50);
  });
});
