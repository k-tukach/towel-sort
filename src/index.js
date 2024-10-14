
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((acc, currentRow, index) => {
      if (index % 2 === 0) {
          acc.push(...currentRow);
      } else {
          acc.push(...currentRow.reverse());
      }
      return acc;
  }, []);
}
