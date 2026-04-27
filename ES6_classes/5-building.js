export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // setter (no obligatorio pero suele ir implícito)
  set sqft(value) {
    this._sqft = value;
  }

  // método obligatorio a implementar en clases hijas
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
