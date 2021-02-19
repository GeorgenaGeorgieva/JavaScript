let SkiResort = require('./02/solution');
let assert = require('chai').assert;

describe('SkiResort', function() {
    describe('Instantiation with one parameter', function() {
        it('Input is string', function() {
            let result = new SkiResort('Izgrev');
            assert.equal(result, 'Izgrev', 'It sould return name');
        });
    })
});