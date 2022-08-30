import Numbers from "./numbers";

describe("numbers", function () {
  let numbers: Numbers;
  beforeEach(() => {
    numbers = new Numbers();
  });
  // describe("binary operations", function () {
  //   it("you should be able to find the value of a given bit", function () {
  //     expect(numbers.valueAtBit(128, 8)).toBe(1);
  //     expect(numbers.valueAtBit(128, 1)).toBe(0);
  //     expect(numbers.valueAtBit(65, 1)).toBe(1);
  //     expect(numbers.valueAtBit(42, 6)).toBe(1);
  //   });
  //   it("you should be able to return the base10 representation of a binary string", function () {
  //     expect(numbers.base10("11000000")).toBe(192);
  //   });

  //   it("you should be able to convert an eight-bit number to a binary string", function () {
  //     expect(numbers.convertToBinary(128)).toBe("10000000");
  //     expect(numbers.convertToBinary(65)).toBe("01000001");
  //   });
  // });

  // describe("decimals", function () {
  //   it("you should be able to multiply with precision", function () {
  //     expect(numbers.multiply(3, 0.1)).toBe(0.3);
  //     expect(numbers.multiply(3, 0.2)).toBe(0.6);
  //     expect(numbers.multiply(3, 0.0001)).toBe(0.0003);
  //   });
  // });
});
