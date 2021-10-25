import {sum, minus} from './math.js';
import Pythagorean from './algebra.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
    expect(minus(3,2)).toBe(1);
});

test('adds 2^2 + 3^2 to equal 13', () => {
    expect(Pythagorean(2, 3)).toBe(13);
});