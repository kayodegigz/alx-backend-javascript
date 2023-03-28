/* eslint-disable require-jsdoc */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /* getter for amount property */
  get amount() {
    return this._amount;
  }

  /* setter to set the val of amount */
  set amount(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Amount must be Number');
    }
    this._amount = val;
  }

  /* getter for currency property */
  get currency() {
    return this._currency;
  }

  /* setter to set currency value to imported Currency class */
  set currency(currency) {
    this._currency = new Currency(currency);
  }

  /* formater to display Amount Currency name and Symbol */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /* Static Function to get current Conversion Price */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
