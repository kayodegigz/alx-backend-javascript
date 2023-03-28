/* eslint-disable require-jsdoc */
import Building from './5-building';

export default class SkyHighBuilding {
  constructor(sqft = Building, floors = 0) {
    this._sqft = sqft;
    this._floors = floors;
  }

  /* getter for square feet property */
  get sqft() {
    return this._sqft;
  }

  /* getter for floors property */
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
