function map(array, callback, thisArg) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  const returnArray = [];
  const length = array.length;

  for (let index = 0; index < length; index++) {
    if (index in array) {
      returnArray.push(callback.call(thisArg, array[index], index, array));
    }
  }
  return returnArray;
}

export { map };

Array.prototype.myMap = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('Cannot read property "map" of null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  const array = this;
  const returnArray = [];
  const length = array.length;

  for (let index = 0; index < length; index++) {
    if (index in array) {
      returnArray.push(callback.call(thisArg, array[index], index, array));
    }
  }
  return returnArray;
};
