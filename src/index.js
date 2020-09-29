
exports.min = function min (array) {
  return array && array.length>0 ? array.reduce((min, item) => Math.min(min, item), Infinity) : 0;
}

exports.max = function max (array) {
  return array && array.length>0 ? array.reduce((max, item) => Math.max(max, item), 0) : 0;
}

exports.avg = function avg (array) {
  if(!array || array.length===0) return 0;
  sum = array.reduce((sum, item) => sum + item, 0);
  return sum/array.length;
}
