/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningTotal = 0
    let resultArray = []
    
    for (let i = 0; i < nums.length; i++) {
        runningTotal += nums[i]
        resultArray.push(runningTotal)
    }
    
    return resultArray
    
};