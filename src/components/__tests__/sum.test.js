import { Sum } from "../sum";

test("Sum function should calculate the sum of the numbers", () => {
  const result = Sum(5, 4);

  // Assertion
  expect(result).toBe(9);
});
