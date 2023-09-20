const array = require("../scripts/array");

const exArray = [1, 2, 3];

test("make sure array is a copy", () => {
  expect(array(exArray)).toEqual(exArray);
});
