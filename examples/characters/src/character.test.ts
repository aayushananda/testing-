import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const myHero = new Character('monty', 'python', 'musician');
    expect(myHero.firstName).toBe('monty');
    expect(myHero.lastName).toBe('python');
    expect(myHero.role).toBe('musician');
  });

  it('should allow you to increase the level', () => {
    let newHero = new Character('thor', 'odinson', 'god');
    newHero.levelUp();
    expect(newHero.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    let newHero = new Character('Aayush', 'Anand', 'developer');
    const initialDate = newHero.lastModified;
    newHero.levelUp();
    expect(newHero.lastModified).not.toBe(initialDate);
  });
});
