let SkiResort = require('./solution');
let assert = require('chai').assert;

describe('SkiResort', function() {
    describe('Instantiation with one parameter', function() {
        it('Input is string', function() {
            let skiResort = new SkiResort('Izgrev');
            let result = skiResort.name;
            assert.equal(result, 'Izgrev', 'It sould return name');
        });
        it('Test voters', function() {
            let skiResort = new SkiResort('Izgrev');
            let result = skiResort.voters;
            assert.equal(result, 0, 'Voters should be zero by default');
        });
        it('Test hotels', function() {
            let skiResort = new SkiResort('Izgrev');
            let result = skiResort.hotels.length;
            assert.equal(result, 0, 'Hotels should be empty array');
        });
    });
    describe('getter bestHotel', function() {
        it('Test if voters are zero', function() {
            let skiResort = new SkiResort('Izgrev');
            let result = skiResort.bestHotel;
            assert.equal(result, 'No votes yet', 'If voters are zero should return message');
        });
        it('Test if voters are positive number', function() {
            let skiResort = new SkiResort('Some');
            skiResort.build('Avenue', 5);
            skiResort.build('Sun', 3);
            skiResort.book('Avenue', 2);
            skiResort.book('Sun', 3);
            skiResort.leave('Avenue', 2, 3);
            skiResort.leave('Sun', 3, 5);
            let result = skiResort.bestHotel;
            assert.equal(result, `Best hotel is Sun with grade 15. Available beds: 3`, 'should return message with info for best hotel');
        });
        describe('Test Function build()', function() {
            it('Test if the beds are less than 1', function() {
                let skiResort = new SkiResort('Some');
                assert.throw(() => skiResort.build('Avenue', -1), Error, 'Invalid input');
            });
            it('Test if the name is empty string', function() {
                let skiResort = new SkiResort('Some');
                assert.throw(() => skiResort.build('', 2), Error, 'Invalid input');
            });
            it('If name and beds are valid', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Sun', 2);
                let result = skiResort.hotels.length;
                assert.equal(result, 1, 'The hotel is not adding to the array "hotels"');
            });
            it('If name and beds are valid and return message', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Sun', 2);
                let result = skiResort.build('Sun', 2);
                assert.equal(result, 'Successfully built new hotel - Sun', "The hotel wasn't build.");
            });
        });
        describe('Test Function book()', function() {
            it('Test if the beds are less than 1', function() {
                let skiResort = new SkiResort('Some');
                assert.throw(() => skiResort.book('Avenue', -1), Error, 'Invalid input');
            });
            it('Test if the name is empty string', function() {
                let skiResort = new SkiResort('Some');
                assert.throw(() => skiResort.book('', 2), Error, 'Invalid input');
            });
            it('If the name is nonexistent', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Sun', 10);
                assert.throw(() => skiResort.book('Avenue', 2), Error, 'There is no such hotel');
            });
            it('If there is no free space', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Sun', 10);
                assert.throw(() => skiResort.book('Sun', 12), Error, 'There is no free space');
            });
            it('If the name is valid and there are free beds in that hotel', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Sun', 10);
                skiResort.book('Sun', 5);
                let result = skiResort.hotels.find(h => h.name === 'Sun').beds;
                assert.equal(result, 5, 'Left beds should be 5');
            });
            it('If the name is valid and there are free beds in that hotel. Return message', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Sun', 10);
                skiResort.book('Sun', 5);
                let result = skiResort.book('Sun', 5);
                assert.equal(result, 'Successfully booked', 'It should return "Successfully booked"');
            });
            it('If the booking is succesfull should decrease hotel beds.', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Sun', 10);
                skiResort.book('Sun', 5);
                let result = skiResort.hotels.find(h => h.name === 'Sun').beds;
                assert.equal(result, 5, 'It should decrease hotel beds');
            });
        });
        describe('Test function leave()', function() {
            it('If name is empty string', function() {
                let skiResort = new SkiResort('Some');
                assert.throw(() => skiResort.leave('', 5, 5), Error, 'Invalid input')
            });
            it('If the beds are less than 1', function() {
                let skiResort = new SkiResort('Some');
                assert.throw(() => skiResort.leave('Sun', -5, 5), Error, 'Invalid input')
            });
            it('If there is no such hotel', function() {
                let skiResort = new SkiResort('Some');
                assert.throw(() => skiResort.leave('Avenue', 5, 5), Error, 'There is no such hotel');
            });
            it('If the hotel exist', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Avenue', 5);
                skiResort.book('Avenue', 2);
                let result = skiResort.leave('Avenue', 2, 5);
                assert.equal(result, `2 people left Avenue hotel`, 'The message is different');
            });
            it('If the hotel exist - increase hotel pionts', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Avenue', 10);
                skiResort.book('Avenue', 5);
                skiResort.book('Avenue', 5);
                skiResort.leave('Avenue', 5, 2);
                skiResort.leave('Avenue', 5, 5);
                let result = skiResort.hotels.find(h => h.name === 'Avenue').points;
                assert.equal(result, 35, 'It should return 35');
            });
            it('If the hotel exist - increase hotel beds', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Avenue', 10);
                skiResort.book('Avenue', 5);
                skiResort.book('Avenue', 5);
                skiResort.leave('Avenue', 5, 2);
                skiResort.leave('Avenue', 5, 5);
                let result = skiResort.hotels.find(h => h.name === 'Avenue').beds;
                assert.equal(result, 10, 'It should return 10');
            });
            it('If the hotel exist - increase skiResort voters', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Avenue', 10);
                skiResort.book('Avenue', 5);
                skiResort.book('Avenue', 5);
                skiResort.leave('Avenue', 5, 2);
                skiResort.leave('Avenue', 5, 5);
                let result = skiResort.voters;
                assert.equal(result, 10, 'It should return 10');
            });
        });
        describe('Test function averageGrade()', function() {
            it("if there aren't any votes", function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Avenue', 10);
                skiResort.book('Avenue', 3);
                let result = skiResort.averageGrade();
                assert.equal(result, 'No votes yet', 'It should return specific message: "No voters yet"');
            });
            it('If there are votes', function() {
                let skiResort = new SkiResort('Some');
                skiResort.build('Avenue', 5);
                skiResort.build('Sun', 10);
                skiResort.book('Avenue', 5);
                skiResort.book('Sun', 10);
                skiResort.leave('Avenue', 5, 8);
                skiResort.leave('Sun', 10, 10);
                let result = skiResort.averageGrade();
                assert(result, 'Average grade: 9.33', 'It shoul return average grade message')
            });
            it('If there are no hotels', function() {
                let skiResort = new SkiResort('Some');
                let result = skiResort.averageGrade();
                assert(result, 'No votes yet', "It shoul return 'No votes yet'")
            });
        });
    });
});

// Function averageGrade() - receives no parameters - 
// if there aren’t any votes the proper message should be returned. 
// Otherwise, return the average grade of all the hotels in the proper format.