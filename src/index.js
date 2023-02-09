
function changeArrayOrder(arr) {
  let returnArray =[];
  for(let i = 0; i < arr.length; i++) {
      returnArray[i] = arr[arr.length - 1 - i];
  }
  return returnArray;
}

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let order = true; // true - direct order, false - indirect order
  let retMatrix =[];
  for(let i = 0; i < matrix.length; i++) {
      if (!order) { // if inderect order - start to sort inner array
          retMatrix[i] = changeArrayOrder(matrix[i]);
          order = true;
      } else {
          
          retMatrix[i] = matrix[i];
          order = false;
      }
  }
  let returnMatrix = [];
      for(let i = 0; i < retMatrix.length; i++) {
          for(let j =0; j < retMatrix[i].length; j++){
          returnMatrix.push(retMatrix[i][j]);
          }
      }
  return returnMatrix;
}
