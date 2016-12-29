const isEmpty = obj => typeof obj === 'undefined' || obj == null;
const oneIsEmpty = arr => arr.filter(isEmpty).length > 0;

module.exports = {
  isEmpty,
  oneIsEmpty
};
