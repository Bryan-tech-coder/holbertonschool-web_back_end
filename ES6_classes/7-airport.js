export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // override default string representation
  toString() {
    return this._code;
  }
}
