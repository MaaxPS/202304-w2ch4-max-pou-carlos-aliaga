import CodersArray from "./CodersArray";

describe("Given an object CodersArray", () => {
  describe("When it recieves 5", () => {
    test("Then it returns 1", () => {
      const inputNumber = 5;
      const expectedRestul = 1;

      const result = new CodersArray().push(inputNumber);

      expect(result).toBe(expectedRestul);
    });
  });
});
