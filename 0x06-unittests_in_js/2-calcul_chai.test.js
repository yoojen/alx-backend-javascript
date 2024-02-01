const assert = require('assert');
const calculateNumber = require('./1-calcul');
const { expect } = require('chai');

describe('Test suit for task 2', () => {
  it('check for summation', () => {
    expect(calculateNumber('SUM', 3.5, 5.4)).to.equal(9);
  });
  it('checks for subtraction', () => {
    expect(calculateNumber('SUBTRACT', 5.6, 4.7)).to.equal(1);
  });
  it('checks for division', () => {
    expect(calculateNumber('DIVIDE', 5.7, 2.3)).to.equal(3);
  });
  it('checks for division error', () => {
    expect(calculateNumber('DIVIDE', 4.0, 0.3)).to.equal('Error');
  });
});
