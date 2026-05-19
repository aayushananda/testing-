import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
  it('should add two +ve number', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe.todo('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});

describe.todo('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 4)).toBe(8);
  });
});

describe.todo('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(9, 3)).toBe(3);
  });
});
