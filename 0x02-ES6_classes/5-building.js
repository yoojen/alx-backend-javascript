export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  set sqft(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Expecting a number');
    }
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
