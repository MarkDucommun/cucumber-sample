const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber');
const { odd } = require('../../src/index.js');

When('I ask is "{int}" odd', function (num) {
    this.isOdd = odd(num);
});

Then('I should be told {string}', function (stringResult) {
    assert.equal(this.isOdd, convertStringToBoolean(stringResult));
});

function convertStringToBoolean(stringResult) {
    return JSON.parse(stringResult);
}
