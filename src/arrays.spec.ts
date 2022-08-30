import Arrays from "./arrays";

const arrays = new Arrays<number>();

describe("Arrays", function () {
  let a: number[];

  beforeEach(function () {
    a = [1, 2, 3, 4];
  });

  test("you should be able to determine the location of an item in an array", function () {
    expect(arrays.indexOf(a, 3)).toBe(2);
    expect(arrays.indexOf(a, 5)).toBe(-1);
  });

  test("you should be able to add the values of an array", function () {
    expect(arrays.sum(a)).toBe(10);
  });

  test("you should be able to remove a value from an array", function () {
    a.push(2); // Make sure the value appears more than one time
    const result = arrays.remove(a, 2);
    expect(result.join(" ")).toBe("1 3 4");
  });

  test("you should be able to remove a value from an array, returning the original array", function () {
    a.splice(1, 0, 2);
    a.push(2);
    a.push(2);

    const result = arrays.removeWithoutCopy(a, 2);

    expect(result.join(" ")).toBe("1 3 4");
  });

  test("you should be able to add an item to the end of an array", function () {
    const result = arrays.append(a, 10);
    expect(result[result.length - 1]).toBe(10);
  });

  test("you should be able to remove the last item of an array", function () {
    const result = arrays.truncate(a);
    expect(result.join(" ")).toBe("1 2 3");
  });

  test("you should be able to add an item to the beginning of an array", function () {
    const result = arrays.prepend(a, 10);
    expect(result[0]).toBe(10);
  });

  test("you should be able to remove the first item of an array", function () {
    const result = arrays.curtail(a);
    expect(result.join(" ")).toBe("2 3 4");
  });

  test("you should be able to join together two arrays", function () {
    const c = ["a", "b", "c", 1];
    const result = arrays.concat(a, c);
    expect(result.join(" ")).toBe("1 2 3 4 a b c 1");
  });

  test("you should be able to add an item anywhere in an array", function () {
    const result = arrays.insert(a, "z", 2);
    expect(result.join(" ")).toBe("1 2 z 3 4");
  });

  test("you should be able to count the occurences of an item in an array", function () {
    const result = arrays.count([1, 2, 4, 4, 3, 4, 3], 4);

    expect(result).toBe(3);
  });

  test("you should be able to find duplicates in an array", function () {
    const result = arrays.duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);
    expect(result.sort().join(" ")).toBe("1 3 4");
  });

  test("you should be able to square each number in an array", function () {
    const result = arrays.square(a);

    expect(result.join(" ")).toBe("1 4 9 16");
  });

  //   test("you should be able to find all occurrences of an item in an array", function () {
  //     const result = arrays.findAllOccurrences("abcdefabc".split(""), "a");

  //     expect(result.sort().join(" ")).toBe("0 6");
  //   });
});
