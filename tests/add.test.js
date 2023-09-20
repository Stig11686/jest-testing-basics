const add = require("../scripts/add");

test("add two numbers together properly", () => {
  expect(add(2, 1)).toBe(3);
});
