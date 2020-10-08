
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix === undefined ? [] : matrix.map((row, index) => 
  index % 2 === 0 ? row : row.reverse()).flat();
}
