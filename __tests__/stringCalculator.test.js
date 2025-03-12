const add = require('../stringCalculator');

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself if one number is provided', () => {
    expect(add("1")).toBe(1);
});

test('returns sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('handles new lines as delimiters along with commas', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throws an error when negative numbers are passed', () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
});

