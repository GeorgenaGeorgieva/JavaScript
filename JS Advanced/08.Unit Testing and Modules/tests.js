let sumRange = require('./1.Sub Sum');
let assert = require('chai').assert;

describe('Check parameters of sumRange function', () => {
    it('Check if the first element is not an array, return NaN', () => {
        let result = sumRange('text', 0, 2);
        assert.isNaN(result, 'The result should be NaN');
    });
    it('If the start index is less than zero, ', () => {
        let result = sumRange([], 1, 2);
        assert.equal(result, 0, 'its value should be a zero');
    });
    it('If the end index is outside the bounds of the array', () => {
        let result = sumRange([10, 20, 30, 40, 50, 60], 3, 300);
        assert.equal(result, 150, 'assume it points to the last index of the array');
    });
});

let sum = require('./4.Sum of Numbers');

describe('Check sum functionality', () => {
    it('Check if input is array', () => {
        let result = sum([1, 4, 5]);
        assert.equal(result, 10, 'Should be return the sum of array elements.');
    });
    it('Take an array of numbers as argument', () => {
        let result = sum([1, 4, 5]);
        assert.doesNotThrow(sum, 'Input should be array');
    });
});