module.exports = function towelSort (matrix) {
  let arr = [];
  if (!matrix) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      arr.push(matrix[i]);
    }
    else {
      let elem = matrix[i].sort(function(a, b) { return b - a; });
      arr.push(elem);
    }
  }
  return(arr.flat());
}
