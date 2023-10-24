/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
   return [];
 }
 
 let result = [];
 let resultCol = 0;
 let snakeGoingUp = false;
 
 for (let i = 0; i < rowsCount; i++) {
   result.push(Array.from([]));
 }
 
 for (let i = 0; i < colsCount * rowsCount; i++) {
   if (i % rowsCount === 0 && i > 0 && (colsCount > 1 && rowsCount > 1)) {
     snakeGoingUp === true
       ? ((snakeGoingUp = false), (resultCol = 0))
       : ((snakeGoingUp = true), (resultCol = rowsCount - 1));
   }
 
   if(rowsCount === 1) {
     result[resultCol].push(this[i]);
   } else {
       if (snakeGoingUp) {
         result[resultCol].push(this[i]);
         --resultCol;
       } else {
         result[resultCol].push(this[i]);
         ++resultCol;
       }
 
   }
 }
 return result;
 }
 
 /**
  * const arr = [1,2,3,4];
  * arr.snail(1,4); // [[1,2,3,4]]
  */