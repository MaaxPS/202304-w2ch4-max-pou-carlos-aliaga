import CodersArray from "./CodersArray";

describe("Given an object CodersArray", () => {
  describe("When it recieves (1,7,9)", () => {
    test("Then it should return 3", () => {
      const inputNumbers = new CodersArray(1, 7, 9);
      const expectedlength = 3;

      const resultLength = inputNumbers.length;

      expect(resultLength).toBe(expectedlength);
    });
  });

  describe("When it recieves 5", () => {
    test("Then it returns 1", () => {
      const inputNumber = 5;
      const expectedRestul = 1;

      const result = new CodersArray().push(inputNumber);

      expect(result).toBe(expectedRestul);
    });
  });
});
