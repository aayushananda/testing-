import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
  it('should add two +ve number', () => {
    expect(add(2, 2)).toBe(4);
  });
  it('should add two -ve numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  });
  it('should parse strings into numbers', () => {
    expect(add(1, '1')).toBe(2);
  });
  it('should detect invalid input', () => {
    expect(() => add(2, 'potato')).toThrow(
      'The second argument is not a number',
    );
  });
  it('should detect invalid input', () => {
    expect(() => add('potato', 2)).toThrow('not a number');
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });
  it('should accept and subtract all of the numbers', () => {
    expect(subtract([10, 5], 2)).toBe(3);
  });
  it('should default undefined values to 0', () => {
    expect(subtract(3)).toBe(3);
    expect(subtract(undefined, 3)).toBe(-3);
  });
  it('should default to zero if either argument is null', () => {
    expect(subtract(null, 3)).toBe(-3);
    expect(subtract(3, null)).toBe(3);
  });
});

describe.todo('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 4)).toBe(8);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(9, 3)).toBe(3);
  });
  it('should handle infinite division', () => {
    expect(divide(3, 0)).toBe('infinite');
  });
});
