/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let array = []
    for (let i = 0; i < nums.length; i++) {
        let thisNum = nums[i]
        
        for (let j = 0; j < array.length; j++) {
            console.log(thisNum, array[j], target)
            if (thisNum + array[j] === target) {
                return [i, nums.indexOf(array[j])]
            }
        }
        array.push(thisNum)
        console.log(array)
    }
    
};