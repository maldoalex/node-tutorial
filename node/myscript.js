let counter = 0;

module.exports = {
  incerementCounter() {
    counter = counter + 1;
  },
  getCounter() {
    return counter;
  }
};
