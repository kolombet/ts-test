import Calc from "./calc";

describe("Calc", () => {
  let calc: Calc;
  beforeEach(() => {
    calc = new Calc();
  });

  test("should return 10 for add(6, 4)", () => {
    expect(calc?.add(6, 4)).toBe(10);
  });
  test("should return 9 for add(10, -1)", () => {
    expect(calc?.add(10, -1)).toBe(9);
  });

  test("should be able to multiply", () => {
    expect(calc?.multiply(2, 3)).toBe(6);
  });

  test("should be able to multiply", () => {
    expect(calc?.multiply(-2, 3)).toBe(-6);
  });
});
