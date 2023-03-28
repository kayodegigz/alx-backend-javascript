/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  /* getter for code property */
  get code() {
    return this._code;
  }

  /* setter for code property */
  set code(key) {
    if (typeof key !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = key;
  }

  /* getter for name property */
  get name() {
    return this._name;
  }

  /* setter for name */
  set name(new_name) {
    if (typeof new_name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = new_name;
  }

  /* method displays the currency symbol and name */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
