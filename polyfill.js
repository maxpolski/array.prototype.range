(function() {
  Array.prototype.range = function(start, end) {
    if (arguments.length === 1) {
      end = start;
      start = 0;
    }
    return Array.apply(null, { length: end - start }).map(function(val, index) {
      return Number.call(Number, index + start);
    });
  }
}());