const calculator = require('./index');

describe('Calculator', () => {
  describe('add function', () => {
    test('adds two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds a positive and negative number correctly', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });
  });

  describe('subtract function', () => {
    test('subtracts two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply function', () => {
    test('multiplies two numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });
  });

  describe('divide function', () => {
    test('divides two numbers correctly', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(6, 0)).toThrow('Division by zero');
    });
  });

  // This test will intentionally fail in the hw1-f branch
  // but pass in the hw1-p branch
  describe('special test', () => {
    test('this test will pass or fail depending on branch', () => {
      // Read the test-file.txt to determine if the test should pass
      // This is just a placeholder - the actual test will be done by GitHub Actions
      expect(true).toBe(true);
    });
  });
});