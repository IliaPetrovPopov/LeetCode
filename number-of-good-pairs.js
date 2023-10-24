/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let counter = 0;
       for (let i = 0; i < nums.length; i++) {
           let copyToCompareTo = nums.slice(i);
           if(copyToCompareTo.length === 0) {
               break;
           }
   
           let firstNum = copyToCompareTo[0];
   
           let numberOfEqualNumbers = copyToCompareTo.slice(1).filter(x => x === firstNum);
           if(numberOfEqualNumbers)
               counter += numberOfEqualNumbers.length;
           }
   
           return counter;
   };