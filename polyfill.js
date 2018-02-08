(function() {
  Array.prototype.range = function(start, end, step) {
    if (arguments.length === 1) {
      end = start;
      start = 0;
      step = 1;
    }

    if (arguments.length === 2) {
      step = 1;
    }

    return Array.apply(null, { length: ((end - (start + 1)) / step) + 1 }).map(function(val, index) {
      return Number.call(Number, step * index + start);
    });
  }
}());