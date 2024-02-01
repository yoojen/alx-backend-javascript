const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi used calculateNumber method', () => {
    const spy = sinon.spy(Utils);
    const totalAmount = 100;
    const totalShipping = 20;
    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(
      spy.calculateNumber.calledWith('SUM', totalAmount, totalShipping)
    ).to.be.equal(true);
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});
