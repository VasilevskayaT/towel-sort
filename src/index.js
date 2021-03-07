module.exports = function towelSort(matrix) {
  return !matrix || matrix.length==0 ? [] : matrix.map((item, index, arr) => index%2 ? item.reverse() : item)
    .join(',').split(',').map(item => +item);
}
