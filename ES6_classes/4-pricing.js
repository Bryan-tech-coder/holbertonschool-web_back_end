import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // instance method
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
