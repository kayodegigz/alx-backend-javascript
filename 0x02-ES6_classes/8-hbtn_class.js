/* eslint-disable no-new-wrappers */
/* eslint-disable require-jsdoc */
export default class HolbertonClass {
    constructor(size = 0, location = '') {
      this._size = size;
      this._location = location;
    }
  
    /* symbol.primitve converts the object to primitive values
    when the class is instantiated and called in the Number() primitve,
    it converts and returns an integer value, Likewise String() will return
    a string value of the object(class)
    */
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return `${this._size}`;
      }
      return `${this._location}`;
    }
  }